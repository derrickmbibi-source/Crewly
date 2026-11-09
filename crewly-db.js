/* ═══════════════════════════════════════════════════════════════════
   Crewly Local Database
   One shared module used by the login page and all three portals
   (Employee, Manager, HR Admin).

   Storage : the browser's localStorage / sessionStorage (no server).
   Tables  : crewly_users    -> registered accounts
             crewly_session  -> who is signed in right now
             crewly_nav      -> last page each user visited
   Shared  : crewly_shared_db, crewly_appraisals_v1, crewly_settings_v1,
             crewly_feedback_v1 are still written by the portals; this
             file only migrates the old cHRow-era copies into them.

   Note: this is a browser-local demo database. Passwords are salted and
   hashed, but anyone with access to the browser can read its storage, so
   use a real backend before putting real employee data in it.
═══════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var KEYS = {
    users:   'crewly_users',
    session: 'crewly_session',
    nav:     'crewly_nav',
    seed:    'crewly_seed'
  };

  var LOGIN_PAGE = 'index.html';
  var PORTALS = {
    employee: 'employee-index.html',
    manager:  'manager-index.html',
    hradmin:  'admin-index.html'
  };
  var ROLE_LABEL = { employee: 'Employee', manager: 'Manager', hradmin: 'HR Admin' };

  /* Demo accounts. All three share one email and password; the role tab
     chosen on the login page decides which portal opens. */
  var DEMO_USERS = [
    { id: 'EMP-004', name: 'Jessica Eze',   email: 'crewly@gmail.com',    role: 'employee', title: 'Junior Software Developer', department: 'Engineering', password: 'crewly' },
    { id: 'MGR-001', name: 'Daniel Mensah', email: 'crewly@gmail.com', role: 'manager',  title: 'Engineering Manager',       department: 'Engineering', password: 'crewly'  },
    { id: 'EMP-001', name: 'Adaeze Okafor', email: 'crewly@gmail.com', role: 'hradmin',  title: 'HR Administrator',          department: 'People Ops',  password: 'crewly'    }
  ];

  /* ── storage helpers (all wrapped: storage can be blocked) ───────── */
  function lsGet(k)    { try { return global.localStorage.getItem(k); }   catch (e) { return null; } }
  function lsSet(k, v) { try { global.localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function lsDel(k)    { try { global.localStorage.removeItem(k); }       catch (e) {} }
  function ssGet(k)    { try { return global.sessionStorage.getItem(k); } catch (e) { return null; } }
  function ssSet(k, v) { try { global.sessionStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function ssDel(k)    { try { global.sessionStorage.removeItem(k); }     catch (e) {} }

  function parse(raw, fallback) {
    if (!raw) return fallback;
    try { var v = JSON.parse(raw); return v == null ? fallback : v; }
    catch (e) { return fallback; }
  }

  /* ── one-time migration of old cHRow-era data to the Crewly keys ─── */
  function migrateLegacy() {
    var map = {
      'cHRow_shared_db':      'crewly_shared_db',
      'chrow_appraisals_v1':  'crewly_appraisals_v1',
      'chrow_settings_v1':    'crewly_settings_v1',
      'chrow_feedback_v1':    'crewly_feedback_v1'
    };
    Object.keys(map).forEach(function (oldKey) {
      var raw = lsGet(oldKey);
      if (raw === null) return;
      if (lsGet(map[oldKey]) === null) {
        var fixed = raw
          .replace(/cHRow/g, 'Crewly')
          .replace(/@chrow\.(io|com)/gi, '@crewly.$1');
        lsSet(map[oldKey], fixed);
      }
      lsDel(oldKey);
    });
  }

  /* ── password hashing (salted SHA-256, with a fallback) ──────────── */
  function toHex(buf) {
    return Array.prototype.map.call(new Uint8Array(buf), function (b) {
      return ('0' + b.toString(16)).slice(-2);
    }).join('');
  }

  function fallbackHash(str) {               // cyrb53, used only if Web Crypto is unavailable
    var h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (var i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
  }

  function digest(algo, text) {
    if (algo === 'sha256') {
      if (!(global.crypto && global.crypto.subtle && global.TextEncoder)) {
        return Promise.reject(new Error('no-crypto'));
      }
      return global.crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(toHex);
    }
    return Promise.resolve(fallbackHash(text));
  }

  function makeSalt() {
    if (global.crypto && global.crypto.getRandomValues) {
      var a = new Uint8Array(12);
      global.crypto.getRandomValues(a);
      return toHex(a);
    }
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  function makeHash(password, salt) {
    var text = salt + ':' + password;
    return digest('sha256', text).then(
      function (h) { return 'sha256:' + h; },
      function ()  { return 'fb:' + fallbackHash(text); }
    );
  }

  function checkHash(password, salt, stored) {
    var text = salt + ':' + password;
    var algo = String(stored).indexOf('sha256:') === 0 ? 'sha256' : 'fb';
    return digest(algo, text).then(
      function (h) { return (algo === 'sha256' ? 'sha256:' : 'fb:') + h === stored; },
      function ()  { return false; }
    );
  }

  /* ── users table ─────────────────────────────────────────────────── */
  function getUsers()      { return parse(lsGet(KEYS.users), []); }
  function saveUsers(list) { return lsSet(KEYS.users, JSON.stringify(list)); }
  function normEmail(e)    { return String(e || '').trim().toLowerCase(); }

  function publicUser(u) {
    return {
      id: u.id, name: u.name, email: u.email, role: u.role,
      title: u.title || ROLE_LABEL[u.role] || '', department: u.department || ''
    };
  }

  function buildDemoUser(spec) {
    var salt = makeSalt();
    return makeHash(spec.password, salt).then(function (hash) {
      return {
        id: spec.id, name: spec.name, email: spec.email, role: spec.role,
        title: spec.title, department: spec.department, orgCode: 'CRW-DEMO',
        salt: salt, hash: hash, createdAt: new Date().toISOString()
      };
    });
  }

  migrateLegacy();

  var SEED_VERSION = '2';

  var ready = (function seed() {
    if (lsGet(KEYS.seed) === SEED_VERSION && getUsers().length) return Promise.resolve();
    return Promise.all(DEMO_USERS.map(buildDemoUser)).then(function (demo) {
      var demoIds = DEMO_USERS.map(function (d) { return d.id; });
      var others = getUsers().filter(function (u) { return demoIds.indexOf(u.id) === -1; });
      saveUsers(demo.concat(others));      // refresh demo accounts, keep sign-ups
      lsSet(KEYS.seed, SEED_VERSION);
    });
  })();

  /* ── session ─────────────────────────────────────────────────────── */
  function readSession() {
    return parse(ssGet(KEYS.session), null) || parse(lsGet(KEYS.session), null);
  }

  function clearSession() { ssDel(KEYS.session); lsDel(KEYS.session); }

  function currentUser() {
    var s = readSession();
    if (!s || !s.userId) return null;
    var u = getUsers().filter(function (x) { return x.id === s.userId; })[0];
    if (!u) { clearSession(); return null; }
    return publicUser(u);
  }

  function portalFor(role) { return PORTALS[role] || LOGIN_PAGE; }

  /* ── public actions ──────────────────────────────────────────────── */
  function register(data) {
    return ready.then(function () {
      var email = normEmail(data.email);
      if (!PORTALS[data.role]) return { ok: false, error: 'Please select a valid role.' };
      var users = getUsers();
      var taken = users.some(function (u) { return u.email === email && u.role === data.role; });
      if (taken) {
        return { ok: false, field: 'email', error: 'An account with this email already exists for this role. Try signing in instead.' };
      }
      var salt = makeSalt();
      return makeHash(data.password, salt).then(function (hash) {
        var user = {
          id: 'USR-' + Date.now().toString(36).toUpperCase(),
          name: String(data.name || '').trim(),
          email: email,
          role: data.role,
          title: ROLE_LABEL[data.role],
          department: '',
          orgCode: String(data.orgCode || '').trim(),
          salt: salt, hash: hash,
          createdAt: new Date().toISOString()
        };
        users.push(user);
        if (!saveUsers(users)) {
          return { ok: false, error: 'Could not save your account. Browser storage looks blocked or full.' };
        }
        return { ok: true, user: publicUser(user) };
      });
    });
  }

  function login(email, password, role, remember) {
    return ready.then(function () {
      var addr = normEmail(email);
      var matches = getUsers().filter(function (u) { return u.email === addr; });
      var bad = { ok: false, error: 'Incorrect email or password.' };
      if (!matches.length) return bad;
      var user = (role && matches.filter(function (u) { return u.role === role; })[0]) || matches[0];
      return checkHash(password, user.salt, user.hash).then(function (match) {
        if (!match) return bad;
        if (role && user.role !== role) {
          return {
            ok: false,
            wrongRole: user.role,
            error: 'This account is registered as ' + ROLE_LABEL[user.role] +
                   '. Select the ' + ROLE_LABEL[user.role] + ' tab to sign in.'
          };
        }
        var session = JSON.stringify({ userId: user.id, role: user.role, at: Date.now() });
        clearSession();
        var stored = remember ? lsSet(KEYS.session, session) : ssSet(KEYS.session, session);
        if (!stored) {
          return { ok: false, error: 'Could not start a session. Browser storage looks blocked.' };
        }
        return { ok: true, user: publicUser(user), redirect: portalFor(user.role) };
      });
    });
  }

  function logout() {
    clearSession();
    global.location.replace(LOGIN_PAGE);
  }

  var pageshowBound = false;

  /* Call at the top of every portal page. Sends visitors who are not
     signed in (or who are in the wrong portal) to the right place. */
  function guard(role) {
    var s = readSession();
    var u = currentUser();
    if (!s || !u) { global.location.replace(LOGIN_PAGE); return false; }
    if (u.role !== role) { global.location.replace(portalFor(u.role)); return false; }
    if (!pageshowBound) {
      pageshowBound = true;
      // A page restored from the back/forward cache after sign-out must not stay open
      global.addEventListener('pageshow', function (e) {
        if (e.persisted && !currentUser()) global.location.replace(LOGIN_PAGE);
      });
    }
    return true;
  }

  /* ── page memory: reopen each user on the page they left ─────────── */
  function setLastPage(page) {
    var s = readSession();
    if (!s || !page) return;
    var nav = parse(lsGet(KEYS.nav), {});
    nav[s.userId] = { page: String(page), at: Date.now() };
    lsSet(KEYS.nav, JSON.stringify(nav));
  }

  function getLastPage() {
    var s = readSession();
    if (!s) return null;
    var nav = parse(lsGet(KEYS.nav), {});
    return nav[s.userId] ? nav[s.userId].page : null;
  }

  /* ── portal chrome: signed-in name, initials, role, sign-out ─────── */
  function initials(name) {
    var parts = String(name || '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    var first = parts[0].charAt(0);
    var last  = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
    return (first + last).toUpperCase();
  }

  function applyIdentity() {
    var doc = global.document;
    if (!doc) return;
    var box = doc.querySelector('.sidebar-user');
    if (!box) return;
    var u = currentUser();
    if (!u) return;

    var nameEl = box.querySelector('.user-name');
    var roleEl = box.querySelector('.user-role');
    if (nameEl) nameEl.textContent = u.name;
    if (roleEl) roleEl.textContent = u.title;
    var ini = initials(u.name);
    Array.prototype.forEach.call(doc.querySelectorAll('.sidebar-user .avatar-sm, .topbar-avatar'), function (el) {
      el.textContent = ini;
    });

    if (!box.querySelector('.crewly-logout')) {
      var btn = doc.createElement('button');
      btn.type = 'button';
      btn.className = 'crewly-logout';
      btn.title = 'Sign out';
      btn.setAttribute('aria-label', 'Sign out');
      btn.innerHTML = '<i class="ti ti-logout"></i>';
      btn.style.cssText = 'margin-left:auto;background:none;border:none;cursor:pointer;' +
                          'color:inherit;opacity:.65;font-size:18px;line-height:1;padding:8px;border-radius:8px;';
      btn.onmouseenter = function () { btn.style.opacity = '1'; };
      btn.onmouseleave = function () { btn.style.opacity = '.65'; };
      btn.addEventListener('click', logout);
      box.appendChild(btn);
    }
  }

  if (global.document) {
    global.document.addEventListener('DOMContentLoaded', applyIdentity);
    global.addEventListener('load', applyIdentity);
  }

  /* ── public API ──────────────────────────────────────────────────── */
  global.CrewlyDB = {
    ready: ready,
    register: register,
    login: login,
    logout: logout,
    guard: guard,
    currentUser: currentUser,
    portalFor: portalFor,
    roleLabel: function (r) { return ROLE_LABEL[r] || ''; },
    setLastPage: setLastPage,
    getLastPage: getLastPage,
    applyIdentity: applyIdentity,
    demoAccounts: function () {
      return DEMO_USERS.map(function (d) { return { role: d.role, email: d.email, password: d.password }; });
    }
  };
})(window);

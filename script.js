
/**
 * Crewly Auth Suite — Frontend Logic
 * Modular, well-commented, ready to connect to Firebase Auth or similar.
 */

// ─── State ───────────────────────────────────────────────────────────────────
let activeRole = 'employee';     // Current login role selection
let countdownTimer = null;       // Interval ID for resend countdown

// ─── Role Configuration ───────────────────────────────────────────────────────
const ROLE_CONFIG = {
  employee: {
    badge:    'employee',
    label:    'Standard Access',
    subtitle: 'Sign in to your Crewly workspace.',
  },
  manager: {
    badge:    'manager',
    label:    'Team Lead Access',
    subtitle: 'Access team dashboards and approvals.',
  },
  hradmin: {
    badge:    'hradmin',
    label:    'System Control Access',
    subtitle: 'Full admin access to your organization.',
  },
};

/**
 * setRole — updates active login role tab + badge UI
 * @param {string} role - 'employee' | 'manager' | 'hradmin'
 */
function setRole(role) {
  activeRole = role
  const cfg = ROLE_CONFIG[role];

  // Update tab active state
  document.querySelectorAll('.role-tab').forEach(btn => {
    const isActive = btn.dataset.role === role;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update badge
  const badge = document.getElementById('role-badge');
  badge.className = `role-badge ${cfg.badge}`;
  document.getElementById('role-badge-text').textContent = cfg.label;

  // Update subtitle
  document.getElementById('login-subtitle').textContent = cfg.subtitle;

  // Refresh the demo-account hint for this role
  updateDemoHint();
}

// ─── Screen Navigation ────────────────────────────────────────────────────────
/**
 * showScreen — transitions between login / signup / forgot views
 * @param {string} name - 'login' | 'signup' | 'forgot'
 */
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');

  // Reset forgot-password state when re-visiting
  if (name === 'forgot') {
    document.getElementById('forgot-form').style.display = 'block';
    document.getElementById('forgot-success').classList.remove('show');
    hideFlash('forgot-flash');
  }

  // Scroll top on mobile
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Validation Helpers ───────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidEmail(v) { return EMAIL_RE.test(v.trim()); }

function showError(id, show) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('show', show);
  const inputId = id.replace('err-', '').replace(/-/g, match => match);
  // Mark the sibling input
  const input = document.querySelector(`#${id}`);
  if (input) return; // Already the error el
}

function markInput(id, isError) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('error', isError);
  el.classList.toggle('success', !isError && el.value.length > 0);
}

function setError(inputId, errId, condition) {
  showError(errId, condition);
  markInput(inputId, condition);
  return condition; // returns true if there IS an error
}

// ─── Flash Messages ────────────────────────────────────────────────────────────
function showFlash(id, msg, type = 'error') {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.className = `flash show ${type}-flash`;
}
function hideFlash(id) {
  const el = document.getElementById(id);
  el.classList.remove('show');
}

// ─── Toggle Password Visibility ────────────────────────────────────────────────
/**
 * togglePw — shows/hides password field, swaps eye icon
 * @param {string} inputId
 * @param {HTMLElement} btn
 */
function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  // Swap SVG icon to closed/open eye
  btn.querySelector('svg').innerHTML = isHidden
    ? `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`
    : `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
  btn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
}

// ─── Password Strength ─────────────────────────────────────────────────────────
/**
 * checkStrength — evaluates password and updates strength bar UI
 * @param {string} pw
 */
function checkStrength(pw) {
  const wrap = document.getElementById('pw-strength');
  wrap.classList.toggle('show', pw.length > 0);
  if (!pw.length) return;

  let score = 0;
  if (pw.length >= 8)  score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw) && /[^A-Za-z0-9]/.test(pw)) score++;

  const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e'];
  const labels = ['Too weak', 'Weak', 'Good', 'Strong'];

  for (let i = 1; i <= 4; i++) {
    document.getElementById(`sb${i}`).style.background = i <= score ? colors[score - 1] : '#e2e8f0';
  }
  document.getElementById('strength-label').textContent = labels[score - 1] || 'Too short';
  document.getElementById('strength-label').style.color = score > 0 ? colors[score - 1] : '#94a3b8';
}

// ─── Simulate Loading State ────────────────────────────────────────────────────
function setLoading(btnId, loading) {
  const btn = document.getElementById(btnId);
  btn.classList.toggle('loading', loading);
  btn.disabled = loading;
}

// ─── Demo account hint ─────────────────────────────────────────────────────────
function updateDemoHint() {
  const el = document.getElementById('demo-hint');
  if (!el || !window.CrewlyDB) return;
  const demo = CrewlyDB.demoAccounts().find(a => a.role === activeRole);
  if (!demo) { el.classList.remove('show'); return; }
  el.innerHTML = `Demo ${CrewlyDB.roleLabel(activeRole)} account: <strong>${demo.email}</strong> / <strong>${demo.password}</strong> <button type="button" onclick="fillDemo()">Use it</button>`;
  el.classList.add('show');
}

function fillDemo() {
  const demo = CrewlyDB.demoAccounts().find(a => a.role === activeRole);
  if (!demo) return;
  document.getElementById('login-email').value = demo.email;
  document.getElementById('login-password').value = demo.password;
  markInput('login-email', false);
  markInput('login-password', false);
}

// ─── LOGIN HANDLER ─────────────────────────────────────────────────────────────
async function handleLogin() {
  if (document.getElementById('btn-login').disabled) return;
  hideFlash('login-flash');
  const email    = document.getElementById('login-email').value;
  const pw       = document.getElementById('login-password').value;
  const remember = document.getElementById('remember-me').checked;

  let hasError = false;
  if (setError('login-email',    'err-login-email',    !isValidEmail(email))) hasError = true;
  if (setError('login-password', 'err-login-password', pw.length < 1))        hasError = true;
  if (hasError) return;

  setLoading('btn-login', true);
  let redirecting = false;
  try {
    // Checks the account in the local Crewly database
    const res = await withTimeout(CrewlyDB.login(email, pw, activeRole, remember), 8000);
    if (!res.ok) {
      showFlash('login-flash', res.error, 'error');
      return;
    }
    showFlash('login-flash', `✓ Welcome back, ${res.user.name.split(' ')[0]}! Opening your workspace…`, 'success');
    redirecting = true;
    setTimeout(() => { window.location.replace(res.redirect); }, 700);
    // Safety net: if the portal has not opened after a few seconds, unlock the form
    setTimeout(() => { resetLoginUi(); showFlash('login-flash', 'The portal is taking too long to open. Please tap Sign In again.', 'error'); }, 6000);
  } catch (err) {
    console.error('[Auth] Login failed:', err);
    showFlash('login-flash', 'Something went wrong signing you in. Please try again.', 'error');
  } finally {
    if (!redirecting) setLoading('btn-login', false);
  }
}

// ─── SIGN-UP HANDLER ───────────────────────────────────────────────────────────
async function handleSignup() {
  if (document.getElementById('btn-signup').disabled) return;
  hideFlash('signup-flash');
  const name    = document.getElementById('su-name').value.trim();
  const email   = document.getElementById('su-email').value.trim();
  const role    = document.getElementById('su-role').value;
  const orgCode = document.getElementById('su-orgcode').value.trim();
  const pw      = document.getElementById('su-password').value;
  const confirm = document.getElementById('su-confirm').value;
  const terms   = document.getElementById('su-terms').checked;

  let hasError = false;
  if (setError('su-name',    'err-su-name',    name.length < 2))            hasError = true;
  if (setError('su-email',   'err-su-email',   !isValidEmail(email)))       hasError = true;
  if (setError('su-role',    'err-su-role',    !role))                       hasError = true;
  if (setError('su-orgcode', 'err-su-orgcode', orgCode.length < 3))         hasError = true;
  if (setError('su-password','err-su-password',pw.length < 8))              hasError = true;
  if (setError('su-confirm', 'err-su-confirm', pw !== confirm))             hasError = true;

  // Terms check (manual — no markInput needed)
  const termsErr = document.getElementById('err-su-terms');
  if (!terms) { termsErr.classList.add('show'); hasError = true; }
  else termsErr.classList.remove('show');

  if (hasError) return;

  setLoading('btn-signup', true);
  let redirecting = false;
  try {
    // Saves the account in the local Crewly database, then signs it in
    const reg = await withTimeout(CrewlyDB.register({ name, email, role, orgCode, password: pw }), 8000);
    if (!reg.ok) {
      if (reg.field === 'email') setError('su-email', 'err-su-email', true);
      showFlash('signup-flash', reg.error, 'error');
      return;
    }
    const res = await withTimeout(CrewlyDB.login(email, pw, role, true), 8000);
    if (!res.ok) {
      showFlash('signup-flash', 'Account created. Please sign in to continue.', 'success');
      return;
    }
    showFlash('signup-flash', '✓ Account created! Opening your workspace…', 'success');
    redirecting = true;
    setTimeout(() => { window.location.replace(res.redirect); }, 900);
    setTimeout(() => { resetLoginUi(); showFlash('signup-flash', 'Your account is ready. Please tap Create Account again or sign in.', 'error'); }, 6000);
  } catch (err) {
    console.error('[Auth] Sign-up failed:', err);
    showFlash('signup-flash', 'Something went wrong creating your account. Please try again.', 'error');
  } finally {
    if (!redirecting) setLoading('btn-signup', false);
  }
}

// ─── FORGOT PASSWORD HANDLER ───────────────────────────────────────────────────
function handleForgot() {
  hideFlash('forgot-flash');
  const email = document.getElementById('forgot-email').value.trim();

  if (setError('forgot-email', 'err-forgot-email', !isValidEmail(email))) return;

  setLoading('btn-forgot', true);

  // ── Simulate email dispatch (replace with Firebase sendPasswordResetEmail) ──
  setTimeout(() => {
    setLoading('btn-forgot', false);

    // Hide form, show success state
    document.getElementById('forgot-form').style.display = 'none';
    document.getElementById('sent-email-display').textContent = email;
    document.getElementById('forgot-success').classList.add('show');

    // Start countdown timer
    startCountdown();
  }, 1200);
}

/**
 * startCountdown — 60s resend timer, then reveals resend link
 */
function startCountdown() {
  clearInterval(countdownTimer);
  let secs = 60;
  const numEl   = document.getElementById('countdown-num');
  const textEl  = document.getElementById('countdown-text');
  const linkEl  = document.getElementById('resend-btn');

  numEl.textContent = secs;
  textEl.style.display = 'inline';
  linkEl.classList.remove('show');

  countdownTimer = setInterval(() => {
    secs--;
    numEl.textContent = secs;
    if (secs <= 0) {
      clearInterval(countdownTimer);
      textEl.style.display = 'none';
      linkEl.classList.add('show');
    }
  }, 1000);
}

/**
 * resendLink — re-triggers a simulated email dispatch
 */
function resendLink() {
  const email = document.getElementById('forgot-email').value.trim();
  console.log(`[Auth] Resend password reset → ${email}`);
  document.getElementById('resend-btn').classList.remove('show');
  document.getElementById('countdown-text').style.display = 'inline';
  startCountdown();
}

// ─── Init ──────────────────────────────────────────────────────────────────────
// Prevent actual form submissions if wrapped in a <form>; we handle everything via JS
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const active = document.querySelector('.screen.active');
    if (!active) return;
    if (active.id === 'screen-login')  handleLogin();
    if (active.id === 'screen-signup') handleSignup();
    if (active.id === 'screen-forgot') handleForgot();
  }
});


// ─── Login page start-up ───────────────────────────────────────────────────────
/** Rejects if a promise takes too long, so a button can never spin forever. */
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))
  ]);
}

/** Unlocks every button and clears old messages (used on load and when the page is restored). */
function resetLoginUi() {
  ['btn-login', 'btn-signup', 'btn-forgot'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) { btn.classList.remove('loading'); btn.disabled = false; }
  });
  hideFlash('login-flash');
  hideFlash('signup-flash');
}

/** Fills the demo email + password so you only have to tap Sign In. */
function prefillDemoLogin() {
  if (!window.CrewlyDB) return;
  const demo = CrewlyDB.demoAccounts()[0];
  if (!demo) return;
  const emailEl = document.getElementById('login-email');
  const pwEl    = document.getElementById('login-password');
  if (emailEl && !emailEl.value) emailEl.value = demo.email;
  if (pwEl && !pwEl.value)       pwEl.value    = demo.password;
}

function initLoginPage() {
  resetLoginUi();
  // Already signed in? Go straight to the right portal
  if (window.CrewlyDB) {
    const user = CrewlyDB.currentUser();
    if (user) { window.location.replace(CrewlyDB.portalFor(user.role)); return; }
  }
  prefillDemoLogin();
  updateDemoHint();
}

document.addEventListener('DOMContentLoaded', initLoginPage);

// Back/forward can restore an old copy of this page (stuck on "loading"); refresh it
window.addEventListener('pageshow', (e) => { if (e.persisted) initLoginPage(); });

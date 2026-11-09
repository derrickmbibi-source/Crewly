/* ═══════════════════════════════════════════════
   Crewly — HR Admin Dashboard (Integrated)
   app.js
═══════════════════════════════════════════════ */

const APP_DOMAIN = 'crewly.io';
const APP_CATALOG = ['Email', 'Slack', 'GitHub', 'Jira', 'Figma', 'Notion', 'Payroll Portal', 'VPN'];
const ACCESS_LEVELS = ['Standard', 'Manager', 'Admin', 'Super Admin'];
const DEPARTMENTS_LIST = ['Engineering', 'Product', 'People Ops', 'Finance', 'Marketing', 'Support'];
const SKILL_CATALOG = ['React','Node.js','Python','TypeScript','Go','SQL','AWS','Docker','Kubernetes','Figma','UX Research','Product Strategy','Copywriting','SEO','Data Analysis','Excel','Payroll','Recruiting','Customer Success','Public Speaking'];
const EXPERIENCE_LEVELS = ['Junior','Mid','Senior','Lead'];
const PALETTES = [
  { bg: '#EFF6FF', color: '#1D4ED8' },
  { bg: '#ECFDF5', color: '#065F46' },
  { bg: '#F5F3FF', color: '#5B21B6' },
  { bg: '#FFFBEB', color: '#92400E' },
  { bg: '#FFF1F2', color: '#BE185D' }
];

const data = {
  admin: { name: 'Adaeze Okafor', role: 'HR Administrator', initials: 'AO' },

  employees: [
    { id: 'EMP-001', name: 'Adaeze Okafor',  role: 'HR Director',              dept: 'People Ops',  email: 'a.okafor@crewly.io',   manager: '—',              access: 'Super Admin', apps: ['Email','Slack','Notion','Payroll Portal','VPN'], status: 'active',     lifecycle: 'active',     hireDate: '2022-04-11', bg:'#EFF6FF', color:'#1D4ED8', skills:[{n:'Recruiting',l:'Lead'},{n:'Payroll',l:'Senior'},{n:'Public Speaking',l:'Senior'}], workload:62, leavesYTD:4, engagement:88, performance:4.6 },
    { id: 'EMP-002', name: 'Tunde Bakare',   role: 'Engineering Manager',      dept: 'Engineering', email: 't.bakare@crewly.io',   manager: 'Adaeze Okafor',  access: 'Manager',     apps: ['Email','Slack','GitHub','Jira','VPN'],          status: 'active',     lifecycle: 'active',     hireDate: '2022-09-02', bg:'#ECFDF5', color:'#065F46', skills:[{n:'Node.js',l:'Lead'},{n:'AWS',l:'Senior'},{n:'Kubernetes',l:'Senior'},{n:'Python',l:'Mid'}], workload:91, leavesYTD:1, engagement:54, performance:4.3 },
    { id: 'EMP-003', name: 'Ngozi Umeh',     role: 'Finance Lead',             dept: 'Finance',     email: 'n.umeh@crewly.io',     manager: 'Adaeze Okafor',  access: 'Manager',     apps: ['Email','Slack','Payroll Portal'],               status: 'active',     lifecycle: 'active',     hireDate: '2023-01-15', bg:'#F5F3FF', color:'#5B21B6', skills:[{n:'Excel',l:'Lead'},{n:'Data Analysis',l:'Senior'},{n:'Payroll',l:'Senior'}], workload:70, leavesYTD:3, engagement:79, performance:4.4 },
    { id: 'EMP-004', name: 'Jessica Eze',    role: 'Junior Software Developer',dept: 'Engineering', email: 'j.eze@crewly.io',      manager: 'Tunde Bakare',   access: 'Standard',    apps: ['Email','Slack','GitHub','Jira'],                status: 'on-leave',   lifecycle: 'active',     hireDate: '2024-06-03', bg:'#FFF1F2', color:'#BE185D', skills:[{n:'React',l:'Junior'},{n:'TypeScript',l:'Junior'},{n:'Node.js',l:'Junior'}], workload:48, leavesYTD:9, engagement:42, performance:3.6 },
    { id: 'EMP-005', name: 'Samuel Adeyemi', role: 'Product Designer',         dept: 'Product',     email: 's.adeyemi@crewly.io',  manager: 'Adaeze Okafor',  access: 'Standard',    apps: ['Email','Slack','Figma','Notion'],               status: 'active',     lifecycle: 'active',     hireDate: '2023-08-21', bg:'#FFFBEB', color:'#92400E', skills:[{n:'Figma',l:'Senior'},{n:'UX Research',l:'Senior'},{n:'Product Strategy',l:'Mid'}], workload:74, leavesYTD:2, engagement:82, performance:4.5 },
    { id: 'EMP-006', name: 'Funke Ojo',      role: 'Marketing Manager',        dept: 'Marketing',   email: 'f.ojo@crewly.io',      manager: 'Adaeze Okafor',  access: 'Manager',     apps: ['Email','Slack','Notion'],                       status: 'active',     lifecycle: 'active',     hireDate: '2023-03-10', bg:'#EFF6FF', color:'#1D4ED8', skills:[{n:'Copywriting',l:'Senior'},{n:'SEO',l:'Senior'},{n:'Public Speaking',l:'Mid'}], workload:85, leavesYTD:2, engagement:65, performance:4.1 },
    { id: 'EMP-007', name: 'Chika Eze',      role: 'Customer Success Lead',    dept: 'Support',     email: 'c.eze@crewly.io',      manager: 'Adaeze Okafor',  access: 'Manager',     apps: ['Email','Slack','Notion'],                       status: 'active',     lifecycle: 'active',     hireDate: '2023-05-22', bg:'#ECFDF5', color:'#065F46', skills:[{n:'Customer Success',l:'Lead'},{n:'Public Speaking',l:'Senior'}], workload:68, leavesYTD:3, engagement:84, performance:4.5 },
    { id: 'EMP-008', name: 'Idris Mohammed', role: 'DevOps Engineer',          dept: 'Engineering', email: 'i.mohammed@crewly.io', manager: 'Tunde Bakare',   access: 'Standard',    apps: ['Email','Slack','GitHub','VPN'],                 status: 'probation',  lifecycle: 'active',     hireDate: '2026-03-14', bg:'#F5F3FF', color:'#5B21B6', skills:[{n:'Docker',l:'Senior'},{n:'Kubernetes',l:'Mid'},{n:'AWS',l:'Mid'},{n:'Go',l:'Mid'}], workload:93, leavesYTD:7, engagement:38, performance:3.4 },
    { id: 'EMP-009', name: 'Aisha Bello',    role: 'Talent Partner',           dept: 'People Ops',  email: 'a.bello@crewly.io',    manager: 'Adaeze Okafor',  access: 'Standard',    apps: ['Email','Slack','Notion'],                       status: 'active',     lifecycle: 'onboarding', hireDate: '2026-06-10', bg:'#ECFDF5', color:'#065F46', skills:[{n:'Recruiting',l:'Mid'},{n:'Public Speaking',l:'Junior'}], workload:40, leavesYTD:0, engagement:90, performance:4.0 },
    { id: 'EMP-010', name: 'Kola Ade',       role: 'QA Engineer',              dept: 'Engineering', email: 'k.ade@crewly.io',      manager: 'Tunde Bakare',   access: 'Standard',    apps: ['Email','Slack','Jira'],                         status: 'active',     lifecycle: 'onboarding', hireDate: '2026-06-15', bg:'#FFFBEB', color:'#92400E', skills:[{n:'Python',l:'Mid'},{n:'SQL',l:'Mid'}], workload:35, leavesYTD:0, engagement:86, performance:4.0 },
    { id: 'EMP-011', name: 'Bisi Lawal',     role: 'Account Executive',        dept: 'Marketing',   email: 'b.lawal@crewly.io',    manager: 'Funke Ojo',      access: 'Standard',    apps: [],                                               status: 'inactive',   lifecycle: 'offboarded', hireDate: '2023-02-01', bg:'#FFF1F2', color:'#BE185D', skills:[{n:'Copywriting',l:'Junior'}], workload:0, leavesYTD:0, engagement:0, performance:2.8 }
  ],

  departments: [
    { name: 'Engineering', lead: 'Tunde Bakare',   count: 42, open: 3, accent: '#2563EB' },
    { name: 'Product',     lead: 'Samuel Adeyemi', count: 12, open: 1, accent: '#7C3AED' },
    { name: 'People Ops',  lead: 'Adaeze Okafor',  count: 8,  open: 0, accent: '#10B981' },
    { name: 'Finance',     lead: 'Ngozi Umeh',     count: 9,  open: 1, accent: '#F59E0B' },
    { name: 'Marketing',   lead: 'Funke Ojo',      count: 14, open: 2, accent: '#EF4444' },
    { name: 'Support',     lead: 'Chika Eze',      count: 18, open: 0, accent: '#0EA5E9' }
  ],

  leaveQueue: [
    { id: 1, name: 'Jessica Eze',    type: 'Annual Leave', days: 5, from: '2026-06-22', to: '2026-06-26', status: 'pending' },
    { id: 2, name: 'Idris Mohammed', type: 'Sick Leave',   days: 2, from: '2026-06-18', to: '2026-06-19', status: 'pending' },
    { id: 3, name: 'Funke Ojo',      type: 'Casual Leave', days: 1, from: '2026-06-20', to: '2026-06-20', status: 'pending' },
    { id: 4, name: 'Samuel Adeyemi', type: 'Annual Leave', days: 3, from: '2026-07-01', to: '2026-07-03', status: 'pending' }
  ],

  workflows: [
    { name: 'Auto-onboarding',          desc: 'Provision accounts, send welcome kit & schedule intro meetings on hire.', runs: 128, status: 'active' },
    { name: 'Leave approval routing',   desc: 'Route leave requests to direct manager, escalate after 24h.',             runs: 412, status: 'active' },
    { name: 'Probation review reminder',desc: 'Notify managers 7 days before probation end-date.',                       runs: 36,  status: 'active' },
    { name: 'Payroll variance alert',   desc: 'Flag any net pay change > 8% versus prior month.',                        runs: 6,   status: 'paused' },
    { name: 'Offboarding checklist',    desc: 'Revoke access, collect assets, exit interview, final settlement.',        runs: 14,  status: 'active' }
  ],

  roles: [
    { title: 'Senior Backend Engineer', dept: 'Engineering', applicants: 42, stage: 'Interview', urgency: 'high' },
    { title: 'Product Designer II',     dept: 'Product',     applicants: 28, stage: 'Screening', urgency: 'med' },
    { title: 'HR Business Partner',     dept: 'People Ops',  applicants: 17, stage: 'Sourcing',  urgency: 'med' },
    { title: 'Finance Analyst',         dept: 'Finance',     applicants: 9,  stage: 'Offer',     urgency: 'low' }
  ],

  gigs: [
    { id:'GIG-001', title:'Internal Design System v2', dept:'Product',     owner:'Samuel Adeyemi', assignees:['EMP-005','EMP-004'], status:'in-progress', progress:65, due:'2026-07-15', skills:['Figma','React'] },
    { id:'GIG-002', title:'Q3 Recruitment Campaign',   dept:'People Ops',  owner:'Aisha Bello',    assignees:['EMP-009','EMP-006'], status:'in-progress', progress:30, due:'2026-08-01', skills:['Recruiting','Copywriting'] },
    { id:'GIG-003', title:'Cloud Cost Audit',          dept:'Engineering', owner:'Tunde Bakare',   assignees:['EMP-002','EMP-008'], status:'review',      progress:88, due:'2026-06-30', skills:['AWS','Data Analysis'] },
    { id:'GIG-004', title:'Customer Health Dashboard', dept:'Support',     owner:'Chika Eze',      assignees:['EMP-007','EMP-003'], status:'planning',    progress:12, due:'2026-09-10', skills:['SQL','Customer Success'] },
    { id:'GIG-005', title:'Payroll Compliance Refresh',dept:'Finance',     owner:'Ngozi Umeh',     assignees:['EMP-003'],           status:'completed',   progress:100,due:'2026-06-10', skills:['Payroll','Excel'] }
  ],

  feedback: [
    { from:'Tunde Bakare',   about:'Jessica Eze',    rating:3, note:'Strong potential but missed two sprint commitments last cycle.', date:'2026-06-10' },
    { from:'Adaeze Okafor',  about:'Tunde Bakare',   rating:4, note:'Excellent technical leadership; needs to delegate more.',        date:'2026-06-12' },
    { from:'Funke Ojo',      about:'Samuel Adeyemi', rating:5, note:'Outstanding campaign assets, exceeded expectations.',            date:'2026-06-14' },
    { from:'Adaeze Okafor',  about:'Idris Mohammed', rating:3, note:'Working long hours, output quality dipping recently.',           date:'2026-06-15' },
    { from:'Tunde Bakare',   about:'Kola Ade',       rating:4, note:'Smooth ramp-up, picked up the QA stack quickly.',                date:'2026-06-16' }
  ],

  notifications: [
    { id:1, icon:'ti-user-plus',     color:'#10B981', text:'New hire: Aisha Bello joined People Ops',   time:'2h ago',  unread:true,  type:'hire' },
    { id:2, icon:'ti-alert-triangle',color:'#EF4444', text:'Burnout risk: Idris Mohammed flagged High', time:'4h ago',  unread:true,  type:'burnout' },
    { id:3, icon:'ti-calendar-plus', color:'#2563EB', text:'New leave request from Jessica Eze',        time:'5h ago',  unread:true,  type:'leave' },
    { id:4, icon:'ti-checks',        color:'#7C3AED', text:'Gig "Payroll Compliance Refresh" completed',time:'1d ago',  unread:false, type:'task' },
    { id:5, icon:'ti-user-off',      color:'#EF4444', text:'Employee exit: Bisi Lawal offboarded',      time:'2d ago',  unread:false, type:'exit' }
  ]
};

const PAGE_TITLES = {
  dashboard:   { title: 'Dashboard',            crumb: 'Real-time workforce overview' },
  employees:   { title: 'Employees',            crumb: 'Centralized employee directory & access control' },
  departments: { title: 'Departments',          crumb: 'Org structure & team leads' },
  skills:      { title: 'Skills Database',      crumb: 'Internal talent visibility across the company' },
  gigs:        { title: 'Internal Gigs',        crumb: 'Monitor internal projects & task progress' },
  wellbeing:   { title: 'Workforce Health',     crumb: 'AI-powered burnout detection & intervention' },
  feedback:    { title: 'Feedback & Performance', crumb: 'Company-wide performance oversight' },
  assistant:   { title: 'AI HR Assistant',      crumb: 'Conversational workforce insights' },
  onboarding:  { title: 'Onboarding & Offboarding', crumb: 'Automated employee lifecycle management' },
  leave:       { title: 'Leave Approvals',      crumb: 'Review pending leave requests' },
  payroll:     { title: 'Payroll',              crumb: 'Run and approve monthly payroll' },
  workflows:   { title: 'Automation Workflows', crumb: 'Automate repetitive HR tasks' },
  recruitment: { title: 'Recruitment',          crumb: 'Open roles & candidate pipeline' },
  reports:     { title: 'Reports & Analytics',  crumb: 'Workforce insights' },
  appraisals:  { title: 'Appraisals',            crumb: 'Review, evaluate and finalize performance appraisals' },
  settings:    { title: 'Settings',             crumb: 'Organization & system preferences' }
};

// ── HELPERS ──
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const initials = name => name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();

function nextEmpId() {
  const max = data.employees.reduce((m, e) => Math.max(m, +e.id.split('-')[1]), 0);
  return 'EMP-' + String(max + 1).padStart(3, '0');
}
function generateEmail(name) {
  const [first, ...rest] = name.trim().toLowerCase().split(/\s+/);
  const last = rest.length ? rest[rest.length - 1] : '';
  const local = last ? `${first[0]}.${last}` : first;
  let candidate = `${local}@${APP_DOMAIN}`;
  let i = 1;
  while (data.employees.some(e => e.email === candidate)) candidate = `${local}${i++}@${APP_DOMAIN}`;
  return candidate;
}
function defaultAppsFor(dept, access) {
  const base = ['Email', 'Slack'];
  if (dept === 'Engineering') base.push('GitHub', 'Jira', 'VPN');
  if (dept === 'Product')     base.push('Figma', 'Notion');
  if (dept === 'Finance')     base.push('Payroll Portal');
  if (dept === 'Marketing' || dept === 'People Ops' || dept === 'Support') base.push('Notion');
  if (['Admin','Super Admin','Manager'].includes(access) && !base.includes('VPN')) base.push('VPN');
  return Array.from(new Set(base));
}
function pickPalette(name) { let h = 0; for (const c of name) h = (h + c.charCodeAt(0)) % PALETTES.length; return PALETTES[h]; }

function pill(status) {
  const map = {
    active:['var(--success-bg)','var(--success-text)','Active'],
    'on-leave':['var(--warning-bg)','var(--warning-text)','On Leave'],
    probation:['var(--purple-bg)','var(--purple-text)','Probation'],
    inactive:['var(--bg-hover)','var(--text-secondary)','Inactive'],
    pending:['var(--warning-bg)','var(--warning-text)','Pending'],
    approved:['var(--success-bg)','var(--success-text)','Approved'],
    rejected:['var(--danger-bg)','var(--danger-text)','Rejected'],
    paused:['var(--bg-hover)','var(--text-secondary)','Paused'],
    high:['var(--danger-bg)','var(--danger-text)','High'],
    med:['var(--warning-bg)','var(--warning-text)','Medium'],
    low:['var(--success-bg)','var(--success-text)','Low'],
    onboarding:['var(--accent-bg)','var(--accent-text)','Onboarding'],
    offboarded:['var(--danger-bg)','var(--danger-text)','Offboarded'],
    'in-progress':['var(--accent-bg)','var(--accent-text)','In Progress'],
    review:['var(--purple-bg)','var(--purple-text)','In Review'],
    planning:['var(--bg-hover)','var(--text-secondary)','Planning'],
    completed:['var(--success-bg)','var(--success-text)','Completed']
  };
  const [bg,fg,label] = map[status] || ['var(--bg-hover)','var(--text-secondary)',status];
  return `<span class="admin-pill" style="background:${bg};color:${fg}">${label}</span>`;
}

function avatar(name, bg, color, size = 32) {
  return `<div class="admin-avatar" style="width:${size}px;height:${size}px;background:${bg};color:${color};font-size:${size <= 32 ? 12 : 14}px">${initials(name)}</div>`;
}
function statCard({ icon, iconBg, iconColor, label, value, sub, subColor }) {
  return `<div class="admin-stat">
    <div class="admin-stat-icon" style="background:${iconBg}"><i class="ti ${icon}" style="color:${iconColor}"></i></div>
    <div class="admin-stat-label">${label}</div>
    <div class="admin-stat-value">${value}</div>
    <div class="admin-stat-sub" style="color:${subColor}">${sub}</div>
  </div>`;
}
function toast(msg) {
  let t = $('#admin-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'admin-toast';
    t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#0F172A;color:#fff;padding:12px 18px;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.25);font-size:13px;font-weight:500;z-index:2000;opacity:0;transition:opacity .2s';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(window._toastT);
  window._toastT = setTimeout(() => { t.style.opacity = '0'; }, 2600);
}

// ── BURNOUT SCORING (AI heuristic) ──
function burnoutScore(e) {
  if (e.lifecycle === 'offboarded') return { score:0, level:'low', reasons:[] };
  const reasons = [];
  let score = 0;
  if (e.workload >= 85) { score += 40; reasons.push(`Workload ${e.workload}%`); }
  else if (e.workload >= 70) { score += 20; reasons.push(`High workload ${e.workload}%`); }
  if (e.leavesYTD >= 7) { score += 25; reasons.push(`${e.leavesYTD} leave days YTD`); }
  else if (e.leavesYTD >= 5) { score += 12; reasons.push(`Frequent leave (${e.leavesYTD})`); }
  if (e.engagement <= 45) { score += 30; reasons.push(`Low engagement ${e.engagement}%`); }
  else if (e.engagement <= 60) { score += 15; reasons.push(`Engagement dipping ${e.engagement}%`); }
  if (e.performance < 3.7) { score += 10; reasons.push(`Performance ${e.performance}/5`); }
  const level = score >= 60 ? 'high' : score >= 35 ? 'med' : 'low';
  return { score: Math.min(100,score), level, reasons };
}

// ═══════════ DASHBOARD ═══════════
function renderDashboard() {
  const pending = data.leaveQueue.filter(l => l.status === 'pending').length;
  const onboarding = data.employees.filter(e => e.lifecycle === 'onboarding').length;
  const burnoutHigh = data.employees.filter(e => burnoutScore(e).level === 'high').length;
  return `
    <section>
      <div class="welcome-banner">
        <div class="welcome-text">
          <div class="welcome-greeting">Welcome back, ${data.admin.name.split(' ')[0]} 👋</div>
          <div class="welcome-sub">Here's a real-time pulse of your workforce today.</div>
        </div>
        <div class="welcome-date">
          <div class="date-day">Wed</div>
          <div class="date-label">17 June 2026</div>
        </div>
      </div>

      <div class="admin-grid-4">
        ${statCard({ icon:'ti-users',         iconBg:'#EFF6FF', iconColor:'#2563EB', label:'Total Employees', value:String(data.employees.filter(e=>e.lifecycle!=='offboarded').length), sub:'+12 this quarter', subColor:'var(--success-text)' })}
        ${statCard({ icon:'ti-user-check',    iconBg:'#ECFDF5', iconColor:'#10B981', label:'Present Today',   value:'218', sub:'88.3% attendance', subColor:'var(--success-text)' })}
        ${statCard({ icon:'ti-heart-rate-monitor', iconBg:'#FEF2F2', iconColor:'#EF4444', label:'Burnout: High', value:String(burnoutHigh), sub:'Needs HR intervention', subColor:'var(--danger-text)' })}
        ${statCard({ icon:'ti-calendar-event',iconBg:'#FFFBEB', iconColor:'#B45309', label:'On Leave',        value:'14',  sub:`${pending} pending approvals`, subColor:'var(--warning-text)' })}
      </div>

      <div class="admin-grid-2-1" style="margin-top:20px">
        <div class="admin-card">
          <div class="admin-card-title">Headcount by department</div>
          ${data.departments.map(d => {
            const pct = Math.round((d.count / 50) * 100);
            return `<div style="margin-bottom:14px">
              <div class="admin-bar-row">
                <span style="font-size:13px;font-weight:500">${d.name}</span>
                <span style="font-size:12px;color:var(--text-tertiary)">${d.count} people · ${d.open} open</span>
              </div>
              <div class="admin-bar"><div style="width:${pct}%;background:${d.accent}"></div></div>
            </div>`;
          }).join('')}
        </div>

        <div class="admin-card">
          <div class="admin-card-title">Live activity</div>
          <div id="live-activity">${renderLiveActivity()}</div>
        </div>
      </div>

      <div class="admin-card" style="margin-top:20px">
        <div class="admin-card-title">Quick actions</div>
        <div class="admin-grid-4">
          ${[
            { icon:'ti-user-plus',      color:'#2563EB', bg:'#EFF6FF', label:'Add Employee',    page:'employees' },
            { icon:'ti-bulb',           color:'#7C3AED', bg:'#F5F3FF', label:'Find Talent',     page:'skills' },
            { icon:'ti-heart-rate-monitor', color:'#EF4444', bg:'#FEF2F2', label:'Burnout Risks', page:'wellbeing' },
            { icon:'ti-message-chatbot',color:'#10B981', bg:'#ECFDF5', label:'Ask AI Assistant',page:'assistant' }
          ].map(q => `
            <div class="admin-quick" data-go="${q.page}">
              <div class="admin-quick-icon" style="background:${q.bg}"><i class="ti ${q.icon}" style="color:${q.color}"></i></div>
              <span>${q.label}</span>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderLiveActivity() {
  return (window._liveFeed || [
    { icon: 'ti-user-shield',    color: '#7C3AED', text: 'Onboarding completed — Aisha Bello',     time: '8m ago' },
    { icon: 'ti-login-2',        color: '#10B981', text: 'Tunde Bakare clocked in',                time: '12m ago' },
    { icon: 'ti-calendar-plus',  color: '#2563EB', text: 'New leave request — Jessica Eze',        time: '22m ago' },
    { icon: 'ti-user-off',       color: '#EF4444', text: 'Access revoked — Bisi Lawal',            time: '1h ago' },
    { icon: 'ti-bolt',           color: '#F59E0B', text: 'Workflow ran: Probation reminder',       time: '3h ago' }
  ]).map(a => `
    <div class="admin-activity">
      <div class="admin-activity-icon" style="background:${a.color}1A"><i class="ti ${a.icon}" style="color:${a.color}"></i></div>
      <div style="flex:1">
        <div style="font-size:13px">${a.text}</div>
        <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px">${a.time}</div>
      </div>
    </div>`).join('');
}

// ═══════════ EMPLOYEES ═══════════
function renderEmployees() {
  const q = (window._empSearch || '').toLowerCase();
  const rows = data.employees
    .filter(e => (e.name + e.role + e.dept + e.email + e.manager + e.access).toLowerCase().includes(q))
    .map(e => `
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            ${avatar(e.name, e.bg, e.color)}
            <div>
              <div style="font-weight:600">${e.name}</div>
              <div style="font-size:12px;color:var(--text-tertiary)">${e.role}</div>
            </div>
          </div>
        </td>
        <td>${e.id}</td>
        <td>${e.dept}</td>
        <td>${e.manager}</td>
        <td><span class="admin-pill" style="background:var(--accent-bg);color:var(--accent-text)">${e.access}</span></td>
        <td>${pill(e.lifecycle === 'offboarded' ? 'offboarded' : (e.lifecycle === 'onboarding' ? 'onboarding' : e.status))}</td>
        <td style="position:relative">
          <button class="admin-icon-btn" data-emp-menu="${e.id}"><i class="ti ti-dots-vertical"></i></button>
        </td>
      </tr>`).join('');

  return `
    <section>
      <div class="admin-toolbar">
        <div class="admin-search">
          <i class="ti ti-search"></i>
          <input id="emp-search" type="text" placeholder="Search by name, role, dept, manager, access..." value="${window._empSearch || ''}">
        </div>
        <div class="admin-actions">
          <button class="admin-btn ghost"><i class="ti ti-filter"></i> Filter</button>
          <button class="admin-btn ghost"><i class="ti ti-download"></i> Export</button>
          <button class="admin-btn primary" data-action="add-employee"><i class="ti ti-user-plus"></i> Add Employee</button>
        </div>
      </div>
      <div class="admin-card admin-card-flush">
        <table class="admin-table">
          <thead><tr><th>Employee</th><th>ID</th><th>Department</th><th>Manager</th><th>Access Level</th><th>Status</th><th></th></tr></thead>
          <tbody>${rows || `<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--text-tertiary)">No employees match your search.</td></tr>`}</tbody>
        </table>
      </div>
    </section>`;
}

// ═══════════ DEPARTMENTS ═══════════
function renderDepartments() {
  return `<section><div class="admin-grid-cards">
    ${data.departments.map(d => `
      <div class="admin-card">
        <div class="admin-dept-stripe" style="background:${d.accent}"></div>
        <div style="font-size:16px;font-weight:700">${d.name}</div>
        <div style="font-size:12px;color:var(--text-tertiary);margin-top:2px">Led by ${d.lead}</div>
        <div class="admin-dept-stats">
          <div><div class="admin-dept-num">${d.count}</div><div class="admin-dept-label">HEADCOUNT</div></div>
          <div><div class="admin-dept-num" style="${d.open > 0 ? 'color:var(--accent)' : ''}">${d.open}</div><div class="admin-dept-label">OPEN ROLES</div></div>
        </div>
      </div>`).join('')}
  </div></section>`;
}

// ═══════════ SKILLS DATABASE ═══════════
function renderSkills() {
  const skillF = window._skillFilter || '';
  const deptF  = window._skillDept   || '';
  const lvlF   = window._skillLevel  || '';
  const qF     = (window._skillQ||'').toLowerCase();

  const matches = data.employees.filter(e => e.lifecycle !== 'offboarded').filter(e => {
    if (deptF && e.dept !== deptF) return false;
    if (qF && !(e.name+e.role).toLowerCase().includes(qF)) return false;
    if (skillF || lvlF) {
      return e.skills.some(s => (!skillF || s.n===skillF) && (!lvlF || s.l===lvlF));
    }
    return true;
  });

  const rows = matches.map(e => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:10px">${avatar(e.name, e.bg, e.color)}
          <div><div style="font-weight:600">${e.name}</div><div style="font-size:12px;color:var(--text-tertiary)">${e.role}</div></div>
        </div>
      </td>
      <td>${e.dept}</td>
      <td>${e.skills.map(s => `<span class="skill-chip">${s.n} <span class="lvl">· ${s.l}</span></span>`).join('') || '<span style="color:var(--text-tertiary);font-size:12px">No skills logged</span>'}</td>
    </tr>`).join('');

  // Top skills supply
  const counter = {};
  data.employees.forEach(e => e.lifecycle!=='offboarded' && e.skills.forEach(s => counter[s.n] = (counter[s.n]||0)+1));
  const top = Object.entries(counter).sort((a,b)=>b[1]-a[1]).slice(0,6);

  return `<section>
    <div class="admin-grid-4">
      ${statCard({ icon:'ti-bulb', iconBg:'#F5F3FF', iconColor:'#7C3AED', label:'Tracked skills', value:String(Object.keys(counter).length), sub:'Across the company', subColor:'var(--accent-text)' })}
      ${statCard({ icon:'ti-users', iconBg:'#EFF6FF', iconColor:'#2563EB', label:'Employees logged', value:String(data.employees.filter(e=>e.lifecycle!=='offboarded'&&e.skills.length).length), sub:'Skills profile complete', subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-star', iconBg:'#FFFBEB', iconColor:'#B45309', label:'Top skill', value:top[0]?top[0][0]:'—', sub:top[0]?`${top[0][1]} people`:'', subColor:'var(--warning-text)' })}
      ${statCard({ icon:'ti-search', iconBg:'#ECFDF5', iconColor:'#10B981', label:'Matches', value:String(matches.length), sub:'For current filters', subColor:'var(--success-text)' })}
    </div>

    <div class="admin-card" style="margin-top:20px">
      <div class="admin-card-title">Find internal talent before outsourcing</div>
      <div class="skill-filter-bar">
        <input id="skill-q" placeholder="Search name or role..." value="${window._skillQ||''}">
        <select id="skill-filter"><option value="">All skills</option>${SKILL_CATALOG.map(s=>`<option ${s===skillF?'selected':''}>${s}</option>`).join('')}</select>
        <select id="skill-dept"><option value="">All departments</option>${DEPARTMENTS_LIST.map(d=>`<option ${d===deptF?'selected':''}>${d}</option>`).join('')}</select>
        <select id="skill-level"><option value="">All levels</option>${EXPERIENCE_LEVELS.map(l=>`<option ${l===lvlF?'selected':''}>${l}</option>`).join('')}</select>
        <button class="admin-btn ghost" id="skill-reset"><i class="ti ti-refresh"></i> Reset</button>
      </div>
      <table class="admin-table">
        <thead><tr><th>Employee</th><th>Department</th><th>Skills</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="3" style="text-align:center;padding:24px;color:var(--text-tertiary)">No employees match these filters.</td></tr>`}</tbody>
      </table>
    </div>

    <div class="admin-card" style="margin-top:20px">
      <div class="admin-card-title">Top skills supply</div>
      ${top.map(([n,c]) => `
        <div style="margin-bottom:12px">
          <div class="admin-bar-row"><span style="font-size:13px;font-weight:500">${n}</span><span style="font-size:12px;color:var(--text-tertiary)">${c} people</span></div>
          <div class="admin-bar"><div style="width:${(c/Math.max(...Object.values(counter)))*100}%;background:#7C3AED"></div></div>
        </div>`).join('')}
    </div>
  </section>`;
}

// ═══════════ GIGS ═══════════
function renderGigs() {
  const byStatus = s => data.gigs.filter(g=>g.status===s).length;
  return `<section>
    <div class="admin-grid-4">
      ${statCard({ icon:'ti-clipboard-list', iconBg:'#EFF6FF', iconColor:'#2563EB', label:'Active gigs', value:String(byStatus('in-progress')+byStatus('review')+byStatus('planning')), sub:'In motion right now', subColor:'var(--accent-text)' })}
      ${statCard({ icon:'ti-loader', iconBg:'#F5F3FF', iconColor:'#7C3AED', label:'In review',  value:String(byStatus('review')), sub:'Awaiting sign-off', subColor:'var(--purple-text)' })}
      ${statCard({ icon:'ti-checks', iconBg:'#ECFDF5', iconColor:'#10B981', label:'Completed',  value:String(byStatus('completed')), sub:'This quarter', subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-users',  iconBg:'#FFFBEB', iconColor:'#B45309', label:'Contributors', value:String(new Set(data.gigs.flatMap(g=>g.assignees)).size), sub:'Across all gigs', subColor:'var(--warning-text)' })}
    </div>

    <div class="admin-toolbar" style="margin-top:20px">
      <div style="font-size:13px;color:var(--text-secondary)">Track every internal project, who's on it, and where it stands.</div>
      <button class="admin-btn primary" data-action="add-gig"><i class="ti ti-plus"></i> Create internal task</button>
    </div>

    <div class="admin-grid-cards">
      ${data.gigs.map(g => {
        const people = g.assignees.map(id => {
          const e = data.employees.find(x=>x.id===id);
          return e ? `<div class="admin-avatar" title="${e.name}" style="width:28px;height:28px;background:${e.bg};color:${e.color};font-size:11px">${initials(e.name)}</div>` : '';
        }).join('');
        return `<div class="gig-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
            <div>
              <div style="font-weight:700;font-size:14px">${g.title}</div>
              <div style="font-size:12px;color:var(--text-tertiary);margin-top:2px">${g.dept} · Owner: ${g.owner}</div>
            </div>
            ${pill(g.status)}
          </div>
          <div>${g.skills.map(s=>`<span class="skill-chip">${s}</span>`).join('')}</div>
          <div class="gig-progress"><div style="width:${g.progress}%"></div></div>
          <div class="gig-meta">
            <span>${g.progress}% complete</span>
            <span>Due ${g.due}</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div class="gig-assignees">${people}</div>
            <div style="display:flex;gap:4px">
              <button class="admin-btn ghost" data-gig-progress="${g.id}" data-delta="10"><i class="ti ti-plus"></i> 10%</button>
              <button class="admin-btn ghost" data-gig-complete="${g.id}"><i class="ti ti-check"></i></button>
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>
  </section>`;
}

// ═══════════ WELLBEING / BURNOUT ═══════════
function renderWellbeing() {
  const scored = data.employees
    .filter(e => e.lifecycle !== 'offboarded')
    .map(e => ({ e, ...burnoutScore(e) }))
    .sort((a,b)=>b.score-a.score);

  const counts = { high:0, med:0, low:0 };
  scored.forEach(s => counts[s.level]++);

  const rows = scored.map(s => {
    const color = s.level==='high' ? '#EF4444' : s.level==='med' ? '#F59E0B' : '#10B981';
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:10px">${avatar(s.e.name, s.e.bg, s.e.color)}
        <div><div style="font-weight:600">${s.e.name}</div><div style="font-size:12px;color:var(--text-tertiary)">${s.e.role} · ${s.e.dept}</div></div></div></td>
      <td><div style="display:flex;align-items:center;gap:8px;min-width:160px"><div class="risk-bar"><div style="width:${s.score}%;background:${color}"></div></div><span style="font-size:12px;color:var(--text-tertiary);width:30px">${s.score}</span></div></td>
      <td>${pill(s.level)}</td>
      <td style="font-size:12px;color:var(--text-secondary)">${s.reasons.join(' · ') || 'No concerning signals'}</td>
      <td><button class="admin-btn ghost" data-intervene="${s.e.id}"><i class="ti ti-message-circle"></i> Schedule 1:1</button></td>
    </tr>`;
  }).join('');

  return `<section>
    <div class="admin-grid-4">
      ${statCard({ icon:'ti-alert-triangle', iconBg:'#FEF2F2', iconColor:'#EF4444', label:'High risk', value:String(counts.high), sub:'Immediate intervention', subColor:'var(--danger-text)' })}
      ${statCard({ icon:'ti-alert-circle',   iconBg:'#FFFBEB', iconColor:'#F59E0B', label:'Medium risk', value:String(counts.med), sub:'Monitor closely', subColor:'var(--warning-text)' })}
      ${statCard({ icon:'ti-heart',          iconBg:'#ECFDF5', iconColor:'#10B981', label:'Healthy', value:String(counts.low), sub:'Sustainable workload', subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-brain',          iconBg:'#F5F3FF', iconColor:'#7C3AED', label:'AI signals analyzed', value:'4', sub:'Workload, leave, engagement, perf', subColor:'var(--purple-text)' })}
    </div>

    <div class="admin-card admin-card-flush" style="margin-top:20px">
      <div class="admin-card-title admin-card-title-padded">Burnout risk index — ranked by AI signal</div>
      <table class="admin-table">
        <thead><tr><th>Employee</th><th>Risk Score</th><th>Level</th><th>Signals</th><th>Action</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </section>`;
}

// ═══════════ FEEDBACK & PERFORMANCE ═══════════
function renderFeedback() {
  const active = data.employees.filter(e=>e.lifecycle!=='offboarded');
  const avgPerf = (active.reduce((s,e)=>s+e.performance,0)/active.length).toFixed(2);
  const avgEng  = Math.round(active.reduce((s,e)=>s+e.engagement,0)/active.length);
  const top = [...active].sort((a,b)=>b.performance-a.performance).slice(0,3);
  const struggling = [...active].sort((a,b)=>a.performance-b.performance).slice(0,3);

  return `<section>
    <div class="admin-grid-4">
      ${statCard({ icon:'ti-star',         iconBg:'#FFFBEB', iconColor:'#B45309', label:'Avg. performance', value:avgPerf+'/5', sub:'Company-wide', subColor:'var(--warning-text)' })}
      ${statCard({ icon:'ti-mood-smile',   iconBg:'#ECFDF5', iconColor:'#10B981', label:'Engagement',       value:avgEng+'%',    sub:'Pulse survey', subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-message-2',    iconBg:'#EFF6FF', iconColor:'#2563EB', label:'Feedback items',   value:String(data.feedback.length), sub:'Last 30 days', subColor:'var(--accent-text)' })}
      ${statCard({ icon:'ti-trending-up',  iconBg:'#F5F3FF', iconColor:'#7C3AED', label:'Top performers',   value:String(top.length), sub:'4.5+ rating', subColor:'var(--purple-text)' })}
    </div>

    <div class="admin-grid-2-1" style="margin-top:20px">
      <div class="admin-card">
        <div class="admin-card-title">Recent feedback</div>
        ${data.feedback.map(f => `
          <div class="feedback-item">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <div style="font-size:13px;font-weight:600">${f.from} → ${f.about}</div>
              <div class="feedback-stars">${'★'.repeat(f.rating)}${'☆'.repeat(5-f.rating)}</div>
            </div>
            <div style="font-size:12.5px;color:var(--text-secondary);line-height:1.5">${f.note}</div>
            <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">${f.date}</div>
          </div>`).join('')}
      </div>
      <div>
        <div class="admin-card">
          <div class="admin-card-title">🏆 Top performers</div>
          ${top.map(e => `<div class="admin-activity">
            ${avatar(e.name, e.bg, e.color)}
            <div style="flex:1"><div style="font-size:13px;font-weight:600">${e.name}</div><div style="font-size:11px;color:var(--text-tertiary)">${e.role}</div></div>
            <div style="font-weight:700;color:var(--success-text)">${e.performance}</div>
          </div>`).join('')}
        </div>
        <div class="admin-card" style="margin-top:20px">
          <div class="admin-card-title">⚠️ Needs support</div>
          ${struggling.map(e => `<div class="admin-activity">
            ${avatar(e.name, e.bg, e.color)}
            <div style="flex:1"><div style="font-size:13px;font-weight:600">${e.name}</div><div style="font-size:11px;color:var(--text-tertiary)">${e.role}</div></div>
            <div style="font-weight:700;color:var(--danger-text)">${e.performance}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
}

// ═══════════ AI ASSISTANT ═══════════
function aiAnswer(q) {
  const Q = q.toLowerCase();
  // burnout
  if (/burnout|risk|stress|tired|wellbeing/.test(Q)) {
    const risky = data.employees.filter(e=>e.lifecycle!=='offboarded').map(e=>({e,...burnoutScore(e)})).filter(s=>s.level!=='low').sort((a,b)=>b.score-a.score);
    if (!risky.length) return 'Good news — no employees are showing burnout signals right now.';
    return `${risky.length} employee${risky.length>1?'s':''} flagged at risk:\n\n` + risky.slice(0,5).map(s=>`• ${s.e.name} (${s.e.dept}) — ${s.level.toUpperCase()} (${s.score}). ${s.reasons.join(', ')}.`).join('\n');
  }
  // skill lookup
  const skillMatch = SKILL_CATALOG.find(s => Q.includes(s.toLowerCase()));
  if (skillMatch || /skill|who knows|who has|expert/.test(Q)) {
    const dept = DEPARTMENTS_LIST.find(d => Q.includes(d.toLowerCase()));
    const matches = data.employees.filter(e => e.lifecycle!=='offboarded'
      && (!skillMatch || e.skills.some(s=>s.n===skillMatch))
      && (!dept || e.dept===dept));
    if (!matches.length) return `No one currently matches that skill criteria${skillMatch?` (${skillMatch})`:''}.`;
    return `Found ${matches.length} match${matches.length>1?'es':''}${skillMatch?` for ${skillMatch}`:''}${dept?` in ${dept}`:''}:\n\n` + matches.map(e=>{
      const lvl = skillMatch ? e.skills.find(s=>s.n===skillMatch)?.l : '';
      return `• ${e.name} — ${e.role}${lvl?` (${lvl})`:''}`;
    }).join('\n');
  }
  // declining performance
  if (/declin|struggl|low perform|poor perform|underperform/.test(Q)) {
    const low = data.employees.filter(e=>e.lifecycle!=='offboarded' && e.performance < 3.8).sort((a,b)=>a.performance-b.performance);
    if (!low.length) return 'No employees with declining performance right now.';
    return `${low.length} employees with concerning performance:\n\n` + low.map(e=>`• ${e.name} (${e.dept}) — ${e.performance}/5`).join('\n');
  }
  // top performers
  if (/top|best|highest|star/.test(Q)) {
    const top = [...data.employees].filter(e=>e.lifecycle!=='offboarded').sort((a,b)=>b.performance-a.performance).slice(0,5);
    return `Top performers:\n\n` + top.map(e=>`• ${e.name} (${e.dept}) — ${e.performance}/5`).join('\n');
  }
  // headcount
  if (/headcount|how many|total|count/.test(Q)) {
    const dept = DEPARTMENTS_LIST.find(d => Q.includes(d.toLowerCase()));
    if (dept) {
      const n = data.employees.filter(e=>e.dept===dept && e.lifecycle!=='offboarded').length;
      return `${dept} has ${n} active employee${n!==1?'s':''}.`;
    }
    const total = data.employees.filter(e=>e.lifecycle!=='offboarded').length;
    return `Total active headcount: ${total} employees across ${data.departments.length} departments.`;
  }
  // leave
  if (/leave|vacation|off/.test(Q)) {
    const pending = data.leaveQueue.filter(l=>l.status==='pending');
    return `${pending.length} pending leave request${pending.length!==1?'s':''}:\n\n` + pending.map(r=>`• ${r.name} — ${r.type}, ${r.from} → ${r.to} (${r.days}d)`).join('\n');
  }
  // gigs
  if (/gig|project|task|assigned/.test(Q)) {
    const active = data.gigs.filter(g=>g.status!=='completed');
    return `${active.length} active internal gigs:\n\n` + active.map(g=>`• ${g.title} (${g.dept}) — ${g.progress}% · due ${g.due}`).join('\n');
  }
  // employee lookup
  const named = data.employees.find(e => Q.includes(e.name.toLowerCase()) || Q.includes(e.name.split(' ')[0].toLowerCase()));
  if (named) {
    const b = burnoutScore(named);
    return `${named.name}\n• ${named.role} — ${named.dept}\n• Email: ${named.email}\n• Access: ${named.access}\n• Status: ${named.status}\n• Performance: ${named.performance}/5\n• Engagement: ${named.engagement}%\n• Burnout risk: ${b.level.toUpperCase()} (${b.score})`;
  }
  return `I can help with employee data, skills, burnout risk, performance, leave, and gigs. Try:\n• "Show employees at risk of burnout"\n• "Who has React skills in Engineering?"\n• "List employees with declining performance"\n• "Headcount in Product"`;
}

function renderAssistant() {
  window._aiHistory = window._aiHistory || [
    { role:'bot', text:`Hi ${data.admin.name.split(' ')[0]} — I'm your AI HR assistant. Ask me anything about your workforce.` }
  ];
  const suggestions = [
    'Show employees at risk of burnout',
    'Who has React skills in the engineering team?',
    'List employees with declining performance',
    'Top performers',
    'Headcount in Product'
  ];
  return `<section><div class="ai-shell">
    <div class="ai-msgs" id="ai-msgs">
      ${window._aiHistory.map(m => `<div class="ai-msg ${m.role}">${m.text.replace(/</g,'&lt;')}</div>`).join('')}
    </div>
    <div class="ai-suggest">${suggestions.map(s=>`<button data-ai-sug="${s}">${s}</button>`).join('')}</div>
    <div class="ai-input">
      <input id="ai-input" placeholder="Ask anything — e.g. 'Who knows Python in Finance?'" autocomplete="off">
      <button id="ai-send">Send</button>
    </div>
  </div></section>`;
}

// ═══════════ ONBOARDING ═══════════
function renderOnboarding() {
  const onboarding = data.employees.filter(e => e.lifecycle === 'onboarding');
  const active     = data.employees.filter(e => e.lifecycle === 'active');
  const offboarded = data.employees.filter(e => e.lifecycle === 'offboarded');
  const lifecycleSteps = [
    { n:1, color:'#2563EB', bg:'#EFF6FF', title:'Offer accepted',        sub:'Employee record created in Crewly' },
    { n:2, color:'#7C3AED', bg:'#F5F3FF', title:'Auto-generate email',   sub:`Provision ${APP_DOMAIN} mailbox with calendar & drive` },
    { n:3, color:'#10B981', bg:'#ECFDF5', title:'Assign app access',     sub:'Slack, GitHub, Jira, Figma, Notion based on department' },
    { n:4, color:'#F59E0B', bg:'#FFFBEB', title:'Welcome kit & intros',  sub:'Send onboarding pack and schedule 1:1s' },
    { n:5, color:'#0EA5E9', bg:'#E0F2FE', title:'Mark Active',           sub:'Lifecycle status flips to Active automatically' }
  ];
  const onbRows = onboarding.map(e => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:10px">${avatar(e.name, e.bg, e.color)}
        <div><div style="font-weight:600">${e.name}</div><div style="font-size:12px;color:var(--text-tertiary)">${e.role} · ${e.dept}</div></div></div></td>
      <td>${e.email}</td>
      <td>${e.apps.map(a => `<span class="admin-chip"><i class="ti ti-check" style="color:var(--success-text)"></i>${a}</span>`).join('') || '<span style="font-size:12px;color:var(--text-tertiary)">Not assigned</span>'}</td>
      <td>${e.hireDate}</td>
      <td><div style="display:flex;gap:6px">
        <button class="admin-btn success" data-onboard-complete="${e.id}"><i class="ti ti-check"></i> Complete</button>
        <button class="admin-btn danger"  data-offboard="${e.id}"><i class="ti ti-user-off"></i> Cancel</button>
      </div></td>
    </tr>`).join('');
  const offRows = offboarded.map(e => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:10px">${avatar(e.name, e.bg, e.color)}
        <div><div style="font-weight:600">${e.name}</div><div style="font-size:12px;color:var(--text-tertiary)">${e.role} · ${e.dept}</div></div></div></td>
      <td style="text-decoration:line-through;color:var(--text-tertiary)">${e.email}</td>
      <td><span class="admin-chip" style="background:var(--danger-bg);color:var(--danger-text)"><i class="ti ti-lock"></i> Access revoked</span></td>
      <td>${pill('offboarded')}</td>
      <td><button class="admin-btn ghost" data-reonboard="${e.id}"><i class="ti ti-rotate"></i> Re-onboard</button></td>
    </tr>`).join('');

  return `<section>
    <div class="admin-grid-4">
      ${statCard({ icon:'ti-user-shield', iconBg:'#F5F3FF', iconColor:'#7C3AED', label:'Onboarding in progress', value:String(onboarding.length), sub:'Accounts being provisioned', subColor:'var(--accent-text)' })}
      ${statCard({ icon:'ti-user-check',  iconBg:'#ECFDF5', iconColor:'#10B981', label:'Active employees',       value:String(active.length),     sub:'Fully onboarded',           subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-user-off',    iconBg:'#FEF2F2', iconColor:'#EF4444', label:'Offboarded',             value:String(offboarded.length), sub:'Access revoked',            subColor:'var(--danger-text)' })}
      ${statCard({ icon:'ti-bolt',        iconBg:'#FFFBEB', iconColor:'#B45309', label:'Automations run',        value:'142',                     sub:'This month',                subColor:'var(--warning-text)' })}
    </div>
    <div class="admin-grid-2-1" style="margin-top:20px">
      <div class="admin-card">
        <div class="admin-card-title" style="display:flex;justify-content:space-between;align-items:center">
          <span>Onboarding pipeline</span>
          <button class="admin-btn primary" data-action="add-employee"><i class="ti ti-user-plus"></i> Start onboarding</button>
        </div>
        ${onboarding.length ? `<table class="admin-table" style="margin-top:6px"><thead><tr><th>Employee</th><th>Company email</th><th>Apps assigned</th><th>Hire date</th><th>Actions</th></tr></thead><tbody>${onbRows}</tbody></table>` : `<div style="padding:24px;text-align:center;color:var(--text-tertiary);font-size:13px">No one is being onboarded right now.</div>`}
      </div>
      <div class="admin-card">
        <div class="admin-card-title">Automated lifecycle</div>
        ${lifecycleSteps.map(s => `<div class="admin-lifecycle-step">
          <div class="admin-lifecycle-num" style="background:${s.bg};color:${s.color}">${s.n}</div>
          <div><div style="font-size:13px;font-weight:600">${s.title}</div><div style="font-size:12px;color:var(--text-tertiary);margin-top:2px">${s.sub}</div></div>
        </div>`).join('')}
      </div>
    </div>
    <div class="admin-card admin-card-flush" style="margin-top:20px">
      <div class="admin-card-title admin-card-title-padded">Offboarded employees</div>
      ${offboarded.length ? `<table class="admin-table"><thead><tr><th>Employee</th><th>Email</th><th>Access</th><th>Status</th><th>Actions</th></tr></thead><tbody>${offRows}</tbody></table>` : `<div style="padding:24px;text-align:center;color:var(--text-tertiary);font-size:13px">No offboarded employees on record.</div>`}
    </div>
  </section>`;
}

// ═══════════ LEAVE ═══════════
function renderLeave() {
  const pending = data.leaveQueue.filter(l => l.status === 'pending').length;
  const rows = data.leaveQueue.map(r => `
    <tr>
      <td>${r.name}</td><td>${r.type}</td><td>${r.from} → ${r.to}</td><td>${r.days}</td><td>${pill(r.status)}</td>
      <td>${r.status === 'pending'
        ? `<div style="display:flex;gap:6px">
            <button class="admin-btn success" data-leave-id="${r.id}" data-leave-action="approved"><i class="ti ti-check"></i> Approve</button>
            <button class="admin-btn danger"  data-leave-id="${r.id}" data-leave-action="rejected"><i class="ti ti-x"></i> Reject</button>
          </div>`
        : `<span style="font-size:12px;color:var(--text-tertiary)">Decision recorded</span>`}</td>
    </tr>`).join('');
  return `<section>
    <div class="admin-grid-4">
      ${statCard({ icon:'ti-clock',    iconBg:'#FFFBEB', iconColor:'#B45309', label:'Pending',             value:String(pending), sub:'Needs your review',  subColor:'var(--warning-text)' })}
      ${statCard({ icon:'ti-check',    iconBg:'#ECFDF5', iconColor:'#10B981', label:'Approved this month', value:'34',            sub:'142 leave days',     subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-x',        iconBg:'#FEF2F2', iconColor:'#EF4444', label:'Rejected this month', value:'3',             sub:'—',                  subColor:'var(--text-tertiary)' })}
      ${statCard({ icon:'ti-calendar', iconBg:'#EFF6FF', iconColor:'#2563EB', label:'Currently on leave',  value:'14',            sub:'6% of workforce',    subColor:'var(--accent-text)' })}
    </div>
    <div class="admin-card admin-card-flush" style="margin-top:20px">
      <div class="admin-card-title admin-card-title-padded">Pending leave requests</div>
      <table class="admin-table">
        <thead><tr><th>Employee</th><th>Type</th><th>Dates</th><th>Days</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </section>`;
}

// ═══════════ PAYROLL ═══════════
function renderPayroll() {
  const rows = data.employees.filter(e=>e.lifecycle!=='offboarded').slice(0, 6).map((e, i) => {
    const gross = 450000 + i * 75000, tax = Math.round(gross * 0.18), net = gross - tax;
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:10px">${avatar(e.name, e.bg, e.color)}<span style="font-weight:600">${e.name}</span></div></td>
      <td>${e.dept}</td><td>₦${gross.toLocaleString()}</td><td>₦${tax.toLocaleString()}</td>
      <td style="font-weight:700">₦${net.toLocaleString()}</td><td>${pill(i === 5 ? 'pending' : 'active')}</td>
    </tr>`;
  }).join('');
  return `<section>
    <div class="admin-grid-4">
      ${statCard({ icon:'ti-cash',           iconBg:'#ECFDF5', iconColor:'#10B981', label:'June payroll total', value:'₦92.4M', sub:'Across 247 employees', subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-receipt',        iconBg:'#EFF6FF', iconColor:'#2563EB', label:'Status',             value:'Draft',  sub:'Run by 25 June',       subColor:'var(--accent-text)' })}
      ${statCard({ icon:'ti-arrow-up-right', iconBg:'#FFFBEB', iconColor:'#B45309', label:'vs May',             value:'+2.4%',  sub:'₦2.1M increase',       subColor:'var(--warning-text)' })}
      ${statCard({ icon:'ti-alert-triangle', iconBg:'#FEF2F2', iconColor:'#EF4444', label:'Variances flagged',  value:'2',      sub:'Needs review',         subColor:'var(--danger-text)' })}
    </div>
    <div class="admin-card admin-card-flush" style="margin-top:20px">
      <div class="admin-card-title admin-card-title-padded" style="display:flex;justify-content:space-between;align-items:center">
        <span>June 2026 payroll</span>
        <button class="admin-btn primary"><i class="ti ti-player-play"></i> Run payroll</button>
      </div>
      <table class="admin-table">
        <thead><tr><th>Employee</th><th>Department</th><th>Gross</th><th>Tax</th><th>Net</th><th>Status</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </section>`;
}

// ═══════════ WORKFLOWS ═══════════
function renderWorkflows() {
  return `<section>
    <div class="admin-toolbar">
      <div style="font-size:13px;color:var(--text-secondary);max-width:600px">Eliminate manual HR work. Automate routing, reminders and integrations across your stack.</div>
      <button class="admin-btn primary"><i class="ti ti-plus"></i> New workflow</button>
    </div>
    <div class="admin-grid-cards">
      ${data.workflows.map(w => `<div class="admin-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
          <div class="admin-wf-icon" style="background:${w.status === 'active' ? '#EFF6FF' : 'var(--bg-hover)'}">
            <i class="ti ti-bolt" style="color:${w.status === 'active' ? '#2563EB' : 'var(--text-tertiary)'}"></i>
          </div>
          ${pill(w.status)}
        </div>
        <div style="font-size:15px;font-weight:700">${w.name}</div>
        <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;line-height:1.5;min-height:36px">${w.desc}</div>
        <div class="admin-wf-foot">
          <span style="font-size:12px;color:var(--text-tertiary)">${w.runs} runs · 30d</span>
          <button class="admin-btn ghost" data-wf-name="${w.name}">
            <i class="ti ${w.status === 'active' ? 'ti-player-pause' : 'ti-player-play'}"></i>
            ${w.status === 'active' ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>`).join('')}
    </div>
  </section>`;
}

// ═══════════ RECRUITMENT ═══════════
function renderRecruitment() {
  const rows = data.roles.map(r => `<tr><td style="font-weight:600">${r.title}</td><td>${r.dept}</td><td>${r.applicants}</td><td>${r.stage}</td><td>${pill(r.urgency)}</td></tr>`).join('');
  return `<section>
    <div class="admin-grid-4">
      ${statCard({ icon:'ti-briefcase', iconBg:'#EFF6FF', iconColor:'#2563EB', label:'Open roles',         value:'7',   sub:'3 high urgency',     subColor:'var(--danger-text)' })}
      ${statCard({ icon:'ti-users',     iconBg:'#ECFDF5', iconColor:'#10B981', label:'Active candidates',  value:'96',  sub:'14 in final round',  subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-clock',     iconBg:'#FFFBEB', iconColor:'#B45309', label:'Avg. time-to-hire',  value:'22d', sub:'-4d vs last qtr',    subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-check',     iconBg:'#F5F3FF', iconColor:'#7C3AED', label:'Offers accepted',    value:'5',   sub:'83% accept rate',    subColor:'var(--accent-text)' })}
    </div>
    <div class="admin-card admin-card-flush" style="margin-top:20px">
      <div class="admin-card-title admin-card-title-padded" style="display:flex;justify-content:space-between;align-items:center">
        <span>Open positions</span><button class="admin-btn primary"><i class="ti ti-plus"></i> Post role</button>
      </div>
      <table class="admin-table"><thead><tr><th>Role</th><th>Department</th><th>Applicants</th><th>Stage</th><th>Urgency</th></tr></thead><tbody>${rows}</tbody></table>
    </div>
  </section>`;
}

// ═══════════ REPORTS ═══════════
function renderReports() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun'];
  const headcount = [212,220,226,233,240,247];
  const attendance = [91,89,92,90,88,88];
  const max = Math.max(...headcount);
  const bar = (arr, color, formatter, scaleMax) => arr.map((v,i) => `<div class="admin-chart-col">
    <div class="admin-chart-val">${formatter(v)}</div>
    <div class="admin-chart-bar" style="height:${(v/scaleMax)*140}px;background:${color}"></div>
    <div class="admin-chart-label">${months[i]}</div></div>`).join('');
  return `<section>
    <div class="admin-grid-2">
      <div class="admin-card"><div class="admin-card-title">Headcount growth (H1 2026)</div><div class="admin-chart">${bar(headcount,'#2563EB',v=>v,max)}</div></div>
      <div class="admin-card"><div class="admin-card-title">Attendance rate (%)</div><div class="admin-chart">${bar(attendance,'#10B981',v=>v+'%',100)}</div></div>
    </div>
    <div class="admin-card" style="margin-top:20px">
      <div class="admin-card-title">Diversity snapshot</div>
      <div class="admin-grid-3">
        ${[{label:'Gender balance',a:'Female 48%',b:'Male 52%',color:'#2563EB',pct:48},
           {label:'Remote workforce',a:'Remote 36%',b:'On-site 64%',color:'#10B981',pct:36},
           {label:'Tenure < 2 yrs',a:'37% of staff',b:'Industry avg 42%',color:'#7C3AED',pct:37}].map(m=>`
          <div><div class="admin-diversity-label">${m.label}</div>
            <div class="admin-diversity-row"><span>${m.a}</span><span style="color:var(--text-tertiary)">${m.b}</span></div>
            <div class="admin-bar"><div style="width:${m.pct}%;background:${m.color}"></div></div></div>`).join('')}
      </div>
    </div>
  </section>`;
}

// ═══════════ SETTINGS ═══════════
function renderSettings() {
  const rows = [
    { label:'Organization name',                      sub:'Crewly — Connected HR Workflow Platform',           edit:true },
    { label:'Company email domain',                   sub:`@${APP_DOMAIN} — used for auto-generated mailboxes`, edit:true },
    { label:'Default working hours',                  sub:'Mon–Fri · 08:30 to 17:30 (WAT)',                    edit:true },
    { label:'Auto-approve sick leave under 1 day',    sub:'Skip manager approval and notify automatically',    toggle:true, on:true },
    { label:'Auto-onboarding workflow',               sub:'Provision email & apps on hire automatically',      toggle:true, on:true },
    { label:'Auto-offboarding workflow',              sub:'Revoke all app access when an employee exits',      toggle:true, on:true },
    { label:'Two-factor authentication',              sub:'Required for all admin accounts',                   toggle:true, on:true },
    { label:'Notify on new hires',                    sub:'Receive a notification when a new employee is added', toggle:true, on:true },
    { label:'Notify on burnout warnings',             sub:'Real-time alert when an employee crosses risk threshold', toggle:true, on:true },
    { label:'Notify on employee exits',               sub:'Alert when an offboarding is initiated',            toggle:true, on:true }
  ];
  return `<section style="max-width:820px">
    <div class="admin-card">
      <div class="admin-card-title">Organization & notification settings</div>
      ${rows.map((r,i) => `<div class="admin-setting-row${i===rows.length-1?' last':''}">
        <div><div style="font-size:13px;font-weight:600">${r.label}</div>
          <div style="font-size:12px;color:var(--text-tertiary);margin-top:2px">${r.sub}</div></div>
        ${r.edit ? `<button class="admin-btn ghost"><i class="ti ti-edit"></i> Edit</button>` : ''}
        ${r.toggle ? `<label class="admin-switch"><input type="checkbox" ${r.on ? 'checked' : ''}><span class="admin-slider"></span></label>` : ''}
      </div>`).join('')}
    </div>
  </section>`;
}

// ═══════════ EMPLOYEE MODAL ═══════════
function openEmployeeModal(empId) {
  const editing = empId ? data.employees.find(e => e.id === empId) : null;
  const e = editing || { name:'', role:'', dept:'Engineering', manager:'Adaeze Okafor', access:'Standard', status:'active', lifecycle:'onboarding' };
  const managerOpts = data.employees
    .filter(x => x.lifecycle !== 'offboarded' && ['Manager','Admin','Super Admin'].includes(x.access))
    .map(x => `<option value="${x.name}" ${x.name===e.manager?'selected':''}>${x.name} — ${x.role}</option>`).join('');

  const html = `<div class="admin-modal-backdrop" id="emp-modal">
    <div class="admin-modal" onclick="event.stopPropagation()">
      <div class="admin-modal-head">
        <div class="admin-modal-title">${editing ? 'Edit employee' : 'Add new employee'}</div>
        <button class="admin-icon-btn" data-close-modal><i class="ti ti-x"></i></button>
      </div>
      <div class="admin-modal-body">
        <div class="admin-field"><label>Full name</label><input id="f-name" value="${e.name}" placeholder="e.g. Chiamaka Eze"></div>
        <div class="admin-field"><label>Job title</label><input id="f-role" value="${e.role}" placeholder="e.g. Software Engineer"></div>
        <div class="admin-field-row">
          <div class="admin-field"><label>Department</label><select id="f-dept">${DEPARTMENTS_LIST.map(d=>`<option ${d===e.dept?'selected':''}>${d}</option>`).join('')}</select></div>
          <div class="admin-field"><label>Access level</label><select id="f-access">${ACCESS_LEVELS.map(a=>`<option ${a===e.access?'selected':''}>${a}</option>`).join('')}</select></div>
        </div>
        <div class="admin-field-row">
          <div class="admin-field"><label>Manager</label><select id="f-manager"><option value="—">— None —</option>${managerOpts}</select></div>
          <div class="admin-field"><label>Employment status</label><select id="f-status">
            <option value="active"    ${e.status==='active'?'selected':''}>Active</option>
            <option value="probation" ${e.status==='probation'?'selected':''}>Probation</option>
            <option value="on-leave"  ${e.status==='on-leave'?'selected':''}>On Leave</option>
            <option value="inactive"  ${e.status==='inactive'?'selected':''}>Inactive</option>
          </select></div>
        </div>
        ${editing ? `<div class="admin-field"><label>Company email</label><input value="${editing.email}" disabled></div>`
          : `<div style="background:var(--accent-bg);border:1px solid var(--border);padding:12px;border-radius:10px;font-size:12px;color:var(--accent-text);display:flex;gap:10px;align-items:flex-start">
              <i class="ti ti-bolt" style="font-size:16px"></i>
              <div><strong>Automated onboarding</strong> — On save, Crewly auto-generates a company email at <code>@${APP_DOMAIN}</code>, assigns default app access, and starts the onboarding workflow.</div>
            </div>`}
      </div>
      <div class="admin-modal-foot">
        <button class="admin-btn ghost" data-close-modal>Cancel</button>
        <button class="admin-btn primary" id="f-save"><i class="ti ti-check"></i> ${editing ? 'Save changes' : 'Create & start onboarding'}</button>
      </div>
    </div>
  </div>`;
  const wrap = document.createElement('div'); wrap.innerHTML = html;
  const node = wrap.firstElementChild; document.body.appendChild(node);
  node.addEventListener('click', ev => { if (ev.target === node) node.remove(); });
  node.querySelectorAll('[data-close-modal]').forEach(b => b.addEventListener('click', () => node.remove()));

  $('#f-save', node).addEventListener('click', () => {
    const name=$('#f-name',node).value.trim(), role=$('#f-role',node).value.trim();
    const dept=$('#f-dept',node).value, access=$('#f-access',node).value;
    const manager=$('#f-manager',node).value, status=$('#f-status',node).value;
    if (!name || !role) { alert('Name and Job title are required.'); return; }
    if (editing) {
      Object.assign(editing, { name, role, dept, access, manager, status });
      pushNotification({ icon:'ti-edit', color:'#2563EB', text:`Updated ${name}`, type:'edit' });
      toast(`Updated ${name}`);
    } else {
      const pal = pickPalette(name);
      const newEmp = {
        id: nextEmpId(), name, role, dept, manager, access,
        email: generateEmail(name),
        apps: defaultAppsFor(dept, access),
        status, lifecycle: 'onboarding',
        hireDate: new Date().toISOString().slice(0,10),
        bg: pal.bg, color: pal.color,
        skills: [], workload: 40, leavesYTD: 0, engagement: 85, performance: 4.0
      };
      data.employees.push(newEmp);
      pushNotification({ icon:'ti-user-plus', color:'#10B981', text:`New hire: ${name} joined ${dept}`, type:'hire' });
      toast(`Created ${name} · ${newEmp.email} · ${newEmp.apps.length} apps assigned`);
    }
    node.remove();
    showPage(window._currentPage);
  });
}

// ═══════════ GIG MODAL ═══════════
function openGigModal() {
  const html = `<div class="admin-modal-backdrop" id="gig-modal">
    <div class="admin-modal" onclick="event.stopPropagation()">
      <div class="admin-modal-head">
        <div class="admin-modal-title">Create internal task / gig</div>
        <button class="admin-icon-btn" data-close-modal><i class="ti ti-x"></i></button>
      </div>
      <div class="admin-modal-body">
        <div class="admin-field"><label>Title</label><input id="g-title" placeholder="e.g. Refactor billing module"></div>
        <div class="admin-field-row">
          <div class="admin-field"><label>Department</label><select id="g-dept">${DEPARTMENTS_LIST.map(d=>`<option>${d}</option>`).join('')}</select></div>
          <div class="admin-field"><label>Due date</label><input id="g-due" type="date" value="${new Date(Date.now()+14*864e5).toISOString().slice(0,10)}"></div>
        </div>
        <div class="admin-field"><label>Assign employees (Ctrl/Cmd-click for multiple)</label>
          <select id="g-assignees" multiple size="6">${data.employees.filter(e=>e.lifecycle!=='offboarded').map(e=>`<option value="${e.id}">${e.name} — ${e.dept}</option>`).join('')}</select>
        </div>
        <div class="admin-field"><label>Required skills (comma separated)</label><input id="g-skills" placeholder="e.g. React, AWS"></div>
      </div>
      <div class="admin-modal-foot">
        <button class="admin-btn ghost" data-close-modal>Cancel</button>
        <button class="admin-btn primary" id="g-save"><i class="ti ti-check"></i> Create gig</button>
      </div>
    </div></div>`;
  const wrap = document.createElement('div'); wrap.innerHTML = html;
  const node = wrap.firstElementChild; document.body.appendChild(node);
  node.addEventListener('click', ev => { if (ev.target === node) node.remove(); });
  node.querySelectorAll('[data-close-modal]').forEach(b => b.addEventListener('click', () => node.remove()));
  $('#g-save', node).addEventListener('click', () => {
    const title = $('#g-title', node).value.trim();
    if (!title) { alert('Title is required'); return; }
    const assignees = Array.from($('#g-assignees', node).selectedOptions).map(o=>o.value);
    const owner = assignees.length ? (data.employees.find(e=>e.id===assignees[0])?.name || '—') : data.admin.name;
    const newGig = {
      id: 'GIG-' + String(data.gigs.length+1).padStart(3,'0'),
      title, dept:$('#g-dept',node).value, owner, assignees,
      status:'planning', progress:0, due:$('#g-due',node).value,
      skills:$('#g-skills',node).value.split(',').map(s=>s.trim()).filter(Boolean)
    };
    data.gigs.push(newGig);
    pushNotification({ icon:'ti-clipboard-plus', color:'#2563EB', text:`New gig created: ${title}`, type:'task' });
    toast(`Created gig "${title}"`);
    node.remove();
    showPage('gigs');
  });
}

// ═══════════ EMPLOYEE MENU ═══════════
function openEmpMenu(empId, anchorBtn) {
  document.querySelectorAll('.admin-menu').forEach(m => m.remove());
  const emp = data.employees.find(e => e.id === empId);
  if (!emp) return;
  const menu = document.createElement('div');
  menu.className = 'admin-menu';
  const isOff = emp.lifecycle === 'offboarded';
  const isOnb = emp.lifecycle === 'onboarding';
  menu.innerHTML = `
    <button data-act="edit"><i class="ti ti-edit"></i> Edit details</button>
    ${isOnb ? `<button data-act="complete"><i class="ti ti-check"></i> Complete onboarding</button>` : ''}
    ${!isOff ? `<button data-act="offboard" class="danger"><i class="ti ti-user-off"></i> Offboard & revoke access</button>`
            : `<button data-act="reonboard"><i class="ti ti-rotate"></i> Re-onboard</button>`}
    <button data-act="remove" class="danger"><i class="ti ti-trash"></i> Remove employee</button>`;
  document.body.appendChild(menu);
  const r = anchorBtn.getBoundingClientRect();
  menu.style.top = (window.scrollY + r.bottom + 6) + 'px';
  menu.style.left = (window.scrollX + r.right - menu.offsetWidth) + 'px';
  const close = () => { menu.remove(); document.removeEventListener('click', outside); };
  const outside = ev => { if (!menu.contains(ev.target) && ev.target !== anchorBtn) close(); };
  setTimeout(() => document.addEventListener('click', outside), 0);
  menu.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    const act = b.dataset.act; close();
    if (act === 'edit') openEmployeeModal(empId);
    if (act === 'complete') { emp.lifecycle = 'active'; toast(`${emp.name} is now Active`); showPage(window._currentPage); }
    if (act === 'offboard') {
      emp.lifecycle = 'offboarded'; emp.status = 'inactive'; emp.apps = [];
      pushNotification({ icon:'ti-user-off', color:'#EF4444', text:`Employee exit: ${emp.name} offboarded`, type:'exit' });
      toast(`Offboarded ${emp.name}`); showPage(window._currentPage);
    }
    if (act === 'reonboard') {
      emp.lifecycle = 'onboarding'; emp.status = 'active';
      emp.apps = defaultAppsFor(emp.dept, emp.access);
      if (!emp.email.includes('@')) emp.email = generateEmail(emp.name);
      toast(`Re-onboarding ${emp.name}`); showPage(window._currentPage);
    }
    if (act === 'remove') {
      if (confirm(`Remove ${emp.name} from Crewly? This cannot be undone.`)) {
        data.employees = data.employees.filter(x => x.id !== empId);
        toast(`Removed ${emp.name}`); showPage(window._currentPage);
      }
    }
  }));
}

// ═══════════ NOTIFICATIONS ═══════════
function pushNotification(n) {
  data.notifications.unshift({ id: Date.now(), unread:true, time:'just now', ...n });
  if (data.notifications.length > 30) data.notifications.length = 30;
  updateNotifBadge();
}
function updateNotifBadge() {
  const dot = $('.notif-dot');
  if (!dot) return;
  const unread = data.notifications.filter(n => n.unread).length;
  dot.style.display = unread ? 'block' : 'none';
}
function toggleNotifPanel() {
  let panel = $('#notif-panel');
  if (panel) { panel.remove(); return; }
  panel = document.createElement('div');
  panel.id = 'notif-panel';
  panel.className = 'notif-panel';
  panel.innerHTML = `
    <div class="notif-head">
      <span>Notifications</span>
      <button class="admin-btn ghost" id="notif-clear" style="padding:4px 10px;font-size:11px">Mark all read</button>
    </div>
    <div class="notif-list">${data.notifications.map(n=>`
      <div class="notif-item ${n.unread?'unread':''}">
        <div class="notif-icon" style="background:${n.color}1A"><i class="ti ${n.icon}" style="color:${n.color}"></i></div>
        <div><div class="notif-text">${n.text}</div><div class="notif-time">${n.time}</div></div>
      </div>`).join('') || '<div style="padding:24px;text-align:center;color:var(--text-tertiary);font-size:12px">No notifications</div>'}</div>`;
  $('.notif-container').appendChild(panel);
  $('#notif-clear', panel).addEventListener('click', () => {
    data.notifications.forEach(n => n.unread = false);
    updateNotifBadge(); panel.remove();
  });
  setTimeout(() => {
    const outside = ev => {
      if (!panel.contains(ev.target) && !$('.notif-btn').contains(ev.target)) {
        panel.remove(); document.removeEventListener('click', outside);
      }
    };
    document.addEventListener('click', outside);
  }, 0);
}

// ═══════════ LIVE UPDATES (simulated real-time) ═══════════
const LIVE_EVENTS = [
  { icon:'ti-login-2',       color:'#10B981', text:'Samuel Adeyemi clocked in' },
  { icon:'ti-calendar-plus', color:'#2563EB', text:'New leave request received' },
  { icon:'ti-message-2',     color:'#7C3AED', text:'New feedback submitted' },
  { icon:'ti-checks',        color:'#10B981', text:'Task progress updated' },
  { icon:'ti-bolt',          color:'#F59E0B', text:'Workflow run: leave routing' }
];
function startLiveUpdates() {
  window._liveFeed = window._liveFeed || [];
  setInterval(() => {
    const ev = LIVE_EVENTS[Math.floor(Math.random()*LIVE_EVENTS.length)];
    window._liveFeed = [{ ...ev, time:'just now' }, ...(window._liveFeed||[])].slice(0,6);
    const node = $('#live-activity');
    if (node) node.innerHTML = renderLiveActivity();
  }, 12000);
}

// ═══════════ ROUTER ═══════════
const RENDERERS = {
  dashboard: renderDashboard, employees: renderEmployees, departments: renderDepartments,
  skills: renderSkills, gigs: renderGigs, wellbeing: renderWellbeing,
  feedback: renderFeedback, appraisals: renderAppraisals,
  onboarding: renderOnboarding, leave: renderLeave, payroll: renderPayroll,
  workflows: renderWorkflows, recruitment: renderRecruitment,
  reports: renderReports, settings: renderSettings
};

function showPage(key) {
  if (!RENDERERS[key]) key = 'dashboard';
  window._currentPage = key;
  const meta = PAGE_TITLES[key];
  $('#page-title').textContent = meta.title;
  $('#page-breadcrumb').textContent = meta.crumb;
  $('#content').innerHTML = RENDERERS[key]();
  $$('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page === key));
  attachPageEvents(key);
}

function attachPageEvents(key) {
  $$('[data-go]').forEach(el => el.addEventListener('click', () => showPage(el.dataset.go)));
  $$('[data-action="add-employee"]').forEach(b => b.addEventListener('click', () => openEmployeeModal()));
  $$('[data-action="add-gig"]').forEach(b => b.addEventListener('click', () => openGigModal()));

  if (key === 'employees') {
    const inp = $('#emp-search');
    if (inp) inp.addEventListener('input', e => {
      window._empSearch = e.target.value;
      const scroll = window.scrollY;
      $('#content').innerHTML = renderEmployees(); attachPageEvents('employees');
      window.scrollTo(0, scroll); $('#emp-search').focus();
      const v = $('#emp-search').value; $('#emp-search').setSelectionRange(v.length, v.length);
    });
    $$('[data-emp-menu]').forEach(btn => btn.addEventListener('click', ev => { ev.stopPropagation(); openEmpMenu(btn.dataset.empMenu, btn); }));
  }

  if (key === 'skills') {
    const rerender = () => { $('#content').innerHTML = renderSkills(); attachPageEvents('skills'); };
    const bindFilter = (id, key) => { const el=$(id); if(el) el.addEventListener('change', e=>{ window[key]=e.target.value; rerender(); }); };
    bindFilter('#skill-filter','_skillFilter'); bindFilter('#skill-dept','_skillDept'); bindFilter('#skill-level','_skillLevel');
    const q = $('#skill-q'); if (q) q.addEventListener('input', e => { window._skillQ = e.target.value; rerender(); $('#skill-q').focus(); const v=$('#skill-q').value; $('#skill-q').setSelectionRange(v.length,v.length); });
    const r = $('#skill-reset'); if (r) r.addEventListener('click', () => { window._skillFilter=window._skillDept=window._skillLevel=window._skillQ=''; rerender(); });
  }

  if (key === 'gigs') {
    $$('[data-gig-progress]').forEach(b => b.addEventListener('click', () => {
      const g = data.gigs.find(x=>x.id===b.dataset.gigProgress);
      if (g) { g.progress = Math.min(100, g.progress + (+b.dataset.delta||10)); if (g.progress>=100) g.status='completed'; else if (g.progress>=80) g.status='review'; else g.status='in-progress'; toast(`${g.title} — ${g.progress}%`); showPage('gigs'); }
    }));
    $$('[data-gig-complete]').forEach(b => b.addEventListener('click', () => {
      const g = data.gigs.find(x=>x.id===b.dataset.gigComplete);
      if (g) { g.progress=100; g.status='completed'; pushNotification({icon:'ti-checks',color:'#10B981',text:`Gig completed: ${g.title}`,type:'task'}); toast(`Completed ${g.title}`); showPage('gigs'); }
    }));
  }

  if (key === 'wellbeing') {
    $$('[data-intervene]').forEach(b => b.addEventListener('click', () => {
      const e = data.employees.find(x=>x.id===b.dataset.intervene);
      if (e) { pushNotification({icon:'ti-message-circle',color:'#7C3AED',text:`1:1 scheduled with ${e.name}`,type:'wellbeing'}); toast(`1:1 scheduled with ${e.name}`); }
    }));
  }

  if (key === 'onboarding') {
    $$('[data-onboard-complete]').forEach(b => b.addEventListener('click', () => {
      const emp = data.employees.find(e => e.id === b.dataset.onboardComplete);
      if (emp) { emp.lifecycle='active'; toast(`${emp.name} onboarding complete`); }
      showPage('onboarding');
    }));
    $$('[data-offboard]').forEach(b => b.addEventListener('click', () => {
      const emp = data.employees.find(e => e.id === b.dataset.offboard);
      if (emp) { emp.lifecycle='offboarded'; emp.status='inactive'; emp.apps=[]; toast(`Offboarded ${emp.name}`); }
      showPage('onboarding');
    }));
    $$('[data-reonboard]').forEach(b => b.addEventListener('click', () => {
      const emp = data.employees.find(e => e.id === b.dataset.reonboard);
      if (emp) { emp.lifecycle='onboarding'; emp.status='active'; emp.apps=defaultAppsFor(emp.dept, emp.access); toast(`Re-onboarding ${emp.name}`); }
      showPage('onboarding');
    }));
  }

  if (key === 'leave') {
    $$('[data-leave-id]').forEach(btn => btn.addEventListener('click', () => {
      const id = +btn.dataset.leaveId, action = btn.dataset.leaveAction;
      const row = data.leaveQueue.find(l => l.id === id);
      if (row) row.status = action;
      showPage('leave');
    }));
  }

  if (key === 'workflows') {
    $$('[data-wf-name]').forEach(btn => btn.addEventListener('click', () => {
      const wf = data.workflows.find(w => w.name === btn.dataset.wfName);
      if (wf) wf.status = wf.status === 'active' ? 'paused' : 'active';
      showPage('workflows');
    }));
  }

  if (key === 'appraisals') {
    const inp = $('#appr-search');
    if (inp) inp.addEventListener('input', e => {
      window._apprSearch = e.target.value;
      const scroll = window.scrollY;
      $('#content').innerHTML = renderAppraisals(); attachPageEvents('appraisals');
      window.scrollTo(0, scroll); $('#appr-search').focus();
      const v = $('#appr-search').value; $('#appr-search').setSelectionRange(v.length, v.length);
    });
    $$('[data-appr-filter]').forEach(b => b.addEventListener('click', () => {
      window._apprFilter = b.dataset.apprFilter;
      $('#content').innerHTML = renderAppraisals(); attachPageEvents('appraisals');
    }));
    $$('[data-appr-open]').forEach(b => b.addEventListener('click', () => openAppraisalModal(b.dataset.apprOpen)));
  }
}

// ═══════════ APPRAISALS (HR REVIEW WORKFLOW) ═══════════
// Statuses: pending_manager → pending_hr (Under Review HR) → completed (Approved/Sent to employee)
//           sent_back (HR sent back to employee for revision)
const APPR_STORAGE_KEY = 'crewly_appraisals_v1';

function loadAppraisalsFromStorage() {
  try {
    const raw = localStorage.getItem(APPR_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch (e) {}
  return null;
}
function persistAppraisals() {
  try { localStorage.setItem(APPR_STORAGE_KEY, JSON.stringify(data.appraisals)); } catch (e) {}
}

function seedAppraisals() {
  const competencyTemplate = (selfMix, mgrMix) => ([
    { key:'comm',  label:'Communication',    selfScore:selfMix[0], managerScore:mgrMix[0] },
    { key:'team',  label:'Teamwork',         selfScore:selfMix[1], managerScore:mgrMix[1] },
    { key:'prod',  label:'Productivity',     selfScore:selfMix[2], managerScore:mgrMix[2] },
    { key:'init',  label:'Initiative',       selfScore:selfMix[3], managerScore:mgrMix[3] },
    { key:'qual',  label:'Quality of Work',  selfScore:selfMix[4], managerScore:mgrMix[4] }
  ]);

  const demo = [
    {
      id: 'APR-001', empId: 'EMP-004', empName: 'Jessica Eze', empRole: 'Junior Software Developer', dept: 'Engineering',
      cycle: 'H1 2026', managerName: 'Tunde Bakare', submittedDate: '2026-06-15', managerReviewDate: '2026-06-17',
      status: 'pending_hr',
      competencies: competencyTemplate([4,5,4,4,5],[4,4,4,5,4]),
      achievements: 'Shipped 12 features this cycle, led the migration of the auth module and mentored 2 interns.',
      goals: 'Lead a customer-facing release end-to-end; complete AWS Solutions Architect certification.',
      managerComment: 'Consistently strong delivery and a great team player. Recommending promotion to Mid-level.',
      managerScore: 4.4,
      hrComment: '', hrScore: null, finalRating: null, hrReviewDate: null, sentBackReason: ''
    },
    {
      id: 'APR-002', empId: 'EMP-002', empName: 'Tunde Bakare', empRole: 'Engineering Manager', dept: 'Engineering',
      cycle: 'H1 2026', managerName: 'Adaeze Okafor', submittedDate: '2026-06-12', managerReviewDate: '2026-06-14',
      status: 'pending_hr',
      competencies: competencyTemplate([4,4,4,4,4],[4,4,4,4,4]),
      achievements: 'Grew the engineering team by 30%, delivered Q2 roadmap on time, reduced incident rate by 40%.',
      goals: 'Establish platform team; implement on-call rotation; raise team engagement above 70%.',
      managerComment: 'Excellent leadership. Workload is high — recommend headcount addition.',
      managerScore: 4.3,
      hrComment: '', hrScore: null, finalRating: null, hrReviewDate: null, sentBackReason: ''
    },
    {
      id: 'APR-003', empId: 'EMP-008', empName: 'Idris Mohammed', empRole: 'DevOps Engineer', dept: 'Engineering',
      cycle: 'H1 2026', managerName: 'Tunde Bakare', submittedDate: '2026-06-14', managerReviewDate: '2026-06-16',
      status: 'pending_hr',
      competencies: competencyTemplate([4,3,3,4,3],[3,3,3,4,3]),
      achievements: 'Stabilised the CI pipeline, migrated 6 services to Kubernetes, on-call coverage 24/7 for 2 months.',
      goals: 'Reduce deploy time by 40%; complete CKA certification; improve work-life balance.',
      managerComment: 'High output but signs of burnout. Recommend coaching and workload rebalancing.',
      managerScore: 3.4,
      hrComment: '', hrScore: null, finalRating: null, hrReviewDate: null, sentBackReason: ''
    },
    {
      id: 'APR-004', empId: 'EMP-005', empName: 'Samuel Adeyemi', empRole: 'Product Designer', dept: 'Product',
      cycle: 'H1 2026', managerName: 'Adaeze Okafor', submittedDate: '2026-06-13', managerReviewDate: '2026-06-16',
      status: 'pending_hr',
      competencies: competencyTemplate([5,5,4,5,5],[5,4,4,5,5]),
      achievements: 'Delivered the design system v2, ran 14 user research sessions, mentored 1 junior designer.',
      goals: 'Lead end-to-end design for the new mobile app; speak at a design conference.',
      managerComment: 'Top performer. Strong candidate for senior promotion next cycle.',
      managerScore: 4.6,
      hrComment: '', hrScore: null, finalRating: null, hrReviewDate: null, sentBackReason: ''
    },
    {
      id: 'APR-005', empId: 'EMP-006', empName: 'Funke Ojo', empRole: 'Marketing Manager', dept: 'Marketing',
      cycle: 'H1 2026', managerName: 'Adaeze Okafor', submittedDate: '2026-06-11', managerReviewDate: '2026-06-15',
      status: 'pending_hr',
      competencies: competencyTemplate([4,4,5,4,4],[4,4,4,4,4]),
      achievements: 'Q2 brand campaign exceeded MQL target by 22%; rebuilt website copy; launched referral program.',
      goals: 'Hire a senior content lead; grow organic traffic by 30%; ship the partner co-marketing program.',
      managerComment: 'Strong commercial impact. Could delegate execution more to free up strategic time.',
      managerScore: 4.1,
      hrComment: '', hrScore: null, finalRating: null, hrReviewDate: null, sentBackReason: ''
    },
    {
      id: 'APR-006', empId: 'EMP-007', empName: 'Chika Eze', empRole: 'Customer Success Lead', dept: 'Support',
      cycle: 'H1 2026', managerName: 'Adaeze Okafor', submittedDate: '2026-06-09', managerReviewDate: '2026-06-13',
      status: 'pending_hr',
      competencies: competencyTemplate([5,5,4,4,5],[5,5,4,4,5]),
      achievements: 'CSAT lifted from 86% to 93%; launched the new onboarding playbook; rescued 4 at-risk accounts.',
      goals: 'Roll out tiered support; introduce QBRs for top 20 accounts; certify the team on the new product line.',
      managerComment: 'Exceptional customer empathy and team leadership. Ready for a Director track conversation.',
      managerScore: 4.6,
      hrComment: '', hrScore: null, finalRating: null, hrReviewDate: null, sentBackReason: ''
    },
    {
      id: 'APR-007', empId: 'EMP-010', empName: 'Kola Ade', empRole: 'QA Engineer', dept: 'Engineering',
      cycle: 'H1 2026', managerName: 'Tunde Bakare', submittedDate: '2026-06-16', managerReviewDate: '2026-06-18',
      status: 'pending_hr',
      competencies: competencyTemplate([4,4,4,3,4],[4,4,4,3,4]),
      achievements: 'Built the new regression suite; reduced production escapes by 35%; onboarded smoothly.',
      goals: 'Own the release sign-off process; introduce performance testing; mentor next QA hire.',
      managerComment: 'Solid start to tenure. Ready to take on more ownership next cycle.',
      managerScore: 3.8,
      hrComment: '', hrScore: null, finalRating: null, hrReviewDate: null, sentBackReason: ''
    },
    {
      id: 'APR-008', empId: 'EMP-003', empName: 'Ngozi Umeh', empRole: 'Finance Lead', dept: 'Finance',
      cycle: 'H1 2026', managerName: 'Adaeze Okafor', submittedDate: '2026-06-10', managerReviewDate: null,
      status: 'pending_manager',
      competencies: competencyTemplate([4,5,4,4,5],[null,null,null,null,null]),
      achievements: 'Closed Q1 books 3 days early; rolled out new expense system.',
      goals: 'Automate monthly reporting; reduce close cycle to 5 days.',
      managerComment: '', managerScore: null,
      hrComment: '', hrScore: null, finalRating: null, hrReviewDate: null, sentBackReason: ''
    },
    {
      id: 'APR-009', empId: 'EMP-001', empName: 'Adaeze Okafor', empRole: 'HR Director', dept: 'People Ops',
      cycle: 'H2 2025', managerName: 'CEO', submittedDate: '2025-12-10', managerReviewDate: '2025-12-15',
      status: 'completed',
      competencies: competencyTemplate([5,5,5,5,5],[5,5,4,5,5]),
      achievements: 'Launched new performance framework; reduced time-to-hire by 22%.',
      goals: 'Roll out manager training program; introduce skills marketplace.',
      managerComment: 'Outstanding leadership across People Ops.',
      managerScore: 4.7,
      hrComment: 'Calibrated across leadership tier. Final rating confirmed.',
      hrScore: 4.7, finalRating: 4.7, hrReviewDate: '2025-12-20', sentBackReason: '',
      sentToEmployeeDate: '2025-12-20'
    }
  ];

  // Merge demo entries with anything already stored (e.g. submissions from the Employee portal).
  // Stored records take precedence so HR action history is never overwritten.
  const stored = loadAppraisalsFromStorage() || [];
  const byId = new Map();
  demo.forEach(d => byId.set(d.id, d));
  stored.forEach(s => byId.set(s.id, s));
  data.appraisals = Array.from(byId.values());
  persistAppraisals();
}

function apprStatusPill(s) {
  const map = {
    pending_manager: ['var(--warning-bg)','var(--warning-text)','Pending Manager'],
    pending_hr:      ['var(--accent-bg)','var(--accent-text)','Under Review (HR)'],
    completed:       ['var(--success-bg)','var(--success-text)','Approved · Sent to Employee'],
    sent_back:       ['var(--danger-bg)','var(--danger-text)','Sent Back to Employee']
  };
  const [bg,fg,label] = map[s] || ['var(--bg-hover)','var(--text-secondary)',s];
  return `<span class="admin-pill" style="background:${bg};color:${fg}">${label}</span>`;
}

function renderAppraisals() {
  if (!data.appraisals) seedAppraisals();
  const list = data.appraisals;
  const q = (window._apprSearch || '').toLowerCase();
  const filter = window._apprFilter || 'all';

  const filtered = list.filter(a => {
    if (filter !== 'all' && a.status !== filter) return false;
    if (q && !(`${a.empName} ${a.empRole} ${a.dept} ${a.cycle}`.toLowerCase().includes(q))) return false;
    return true;
  });

  const counts = {
    all: list.length,
    pending_hr: list.filter(a=>a.status==='pending_hr').length,
    pending_manager: list.filter(a=>a.status==='pending_manager').length,
    completed: list.filter(a=>a.status==='completed').length,
    sent_back: list.filter(a=>a.status==='sent_back').length
  };

  const tab = (key, label) => `<button class="admin-pill" data-appr-filter="${key}" style="cursor:pointer;border:1px solid var(--border);background:${filter===key?'var(--accent-bg)':'var(--bg-white)'};color:${filter===key?'var(--accent-text)':'var(--text-secondary)'};font-weight:600">${label} <span style="opacity:.7">${counts[key]||0}</span></button>`;

  return `<section>
    <div class="admin-grid-4">
      ${statCard({ icon:'ti-clipboard-list', iconBg:'#EFF6FF', iconColor:'#2563EB', label:'Total appraisals', value:String(counts.all), sub:'All cycles', subColor:'var(--accent-text)' })}
      ${statCard({ icon:'ti-eye',            iconBg:'#FFFBEB', iconColor:'#B45309', label:'Awaiting HR review', value:String(counts.pending_hr), sub:'Action required', subColor:'var(--warning-text)' })}
      ${statCard({ icon:'ti-check',          iconBg:'#ECFDF5', iconColor:'#10B981', label:'Approved & sent', value:String(counts.completed), sub:'Delivered to employees', subColor:'var(--success-text)' })}
      ${statCard({ icon:'ti-arrow-back-up',  iconBg:'#FEF2F2', iconColor:'#EF4444', label:'Sent back', value:String(counts.sent_back), sub:'Awaiting revision', subColor:'var(--danger-text)' })}
    </div>

    <div class="admin-card" style="margin-top:20px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px">
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${tab('all','All')}
          ${tab('pending_hr','Under Review (HR)')}
          ${tab('pending_manager','Pending Manager')}
          ${tab('completed','Approved')}
          ${tab('sent_back','Sent Back')}
        </div>
        <input id="appr-search" placeholder="Search employee, role, dept…" value="${(window._apprSearch||'').replace(/"/g,'&quot;')}" style="padding:8px 12px;border:1px solid var(--border);border-radius:8px;font-size:13px;min-width:240px"/>
      </div>

      ${filtered.length === 0 ? `<div style="padding:32px;text-align:center;color:var(--text-tertiary)">No appraisals match the current filter.</div>` : `
      <div style="overflow-x:auto">
      <table class="admin-table" style="width:100%;border-collapse:collapse">
        <thead>
          <tr style="text-align:left;font-size:12px;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.04em">
            <th style="padding:10px 8px">Employee</th>
            <th style="padding:10px 8px">Cycle</th>
            <th style="padding:10px 8px">Manager</th>
            <th style="padding:10px 8px">Submitted</th>
            <th style="padding:10px 8px">Manager Score</th>
            <th style="padding:10px 8px">Status</th>
            <th style="padding:10px 8px;text-align:right">Action</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(a => {
            const emp = data.employees.find(e=>e.id===a.empId) || {bg:'#EFF6FF',color:'#1D4ED8'};
            return `<tr style="border-top:1px solid var(--border)">
              <td style="padding:12px 8px"><div style="display:flex;gap:10px;align-items:center">${avatar(a.empName, emp.bg, emp.color)}<div><div style="font-weight:600;font-size:13px">${a.empName}</div><div style="font-size:11px;color:var(--text-tertiary)">${a.empRole} · ${a.dept}</div></div></div></td>
              <td style="padding:12px 8px;font-size:13px">${a.cycle}</td>
              <td style="padding:12px 8px;font-size:13px">${a.managerName}</td>
              <td style="padding:12px 8px;font-size:13px">${a.submittedDate || '—'}</td>
              <td style="padding:12px 8px;font-weight:700">${a.managerScore != null ? a.managerScore.toFixed(1)+'/5' : '<span style="color:var(--text-tertiary);font-weight:400">—</span>'}</td>
              <td style="padding:12px 8px">${apprStatusPill(a.status)}</td>
              <td style="padding:12px 8px;text-align:right"><button class="btn" data-appr-open="${a.id}" style="padding:6px 12px;border:1px solid var(--border);border-radius:8px;background:var(--bg-white);cursor:pointer;font-size:12.5px;font-weight:600">${a.status==='pending_hr'?'Review':'Open'}</button></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
      </div>`}
    </div>
  </section>`;
}

function openAppraisalModal(id) {
  const a = data.appraisals.find(x => x.id === id);
  if (!a) return;

  const editable = a.status === 'pending_hr';
  const compRows = a.competencies.map(c => `
    <tr>
      <td style="padding:8px 6px;font-size:13px">${c.label}</td>
      <td style="padding:8px 6px;text-align:center">${c.selfScore || '—'}/5</td>
      <td style="padding:8px 6px;text-align:center">${c.managerScore != null ? c.managerScore+'/5' : '—'}</td>
    </tr>`).join('');

  const avgManager = a.managerScore != null ? a.managerScore : (a.competencies.reduce((s,c)=>s+(c.managerScore||0),0) / a.competencies.length || 0);
  const suggested = Math.round(avgManager * 10) / 10;

  const overlay = document.createElement('div');
  overlay.id = 'appr-modal';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,36,.45);display:flex;align-items:center;justify-content:center;z-index:1500;padding:24px';
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:14px;width:min(820px,100%);max-height:90vh;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.25)">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;padding:20px 24px;border-bottom:1px solid var(--border)">
        <div>
          <div style="font-size:18px;font-weight:700">${a.empName} — ${a.cycle}</div>
          <div style="font-size:12.5px;color:var(--text-tertiary);margin-top:4px">${a.empRole} · ${a.dept} · Submitted ${a.submittedDate || '—'} · Manager ${a.managerName}</div>
          <div style="margin-top:8px">${apprStatusPill(a.status)}</div>
        </div>
        <button id="appr-modal-close" style="background:none;border:none;cursor:pointer;font-size:22px;color:var(--text-tertiary)">&times;</button>
      </div>

      <div style="padding:20px 24px;display:flex;flex-direction:column;gap:18px">
        <div>
          <div style="font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:var(--text-tertiary);margin-bottom:8px;font-weight:600">Competency Scores</div>
          <table style="width:100%;border-collapse:collapse;border:1px solid var(--border);border-radius:8px;overflow:hidden">
            <thead style="background:var(--bg-surface)"><tr>
              <th style="padding:10px 6px;text-align:left;font-size:11.5px;color:var(--text-tertiary);text-transform:uppercase">Competency</th>
              <th style="padding:10px 6px;font-size:11.5px;color:var(--text-tertiary);text-transform:uppercase">Self</th>
              <th style="padding:10px 6px;font-size:11.5px;color:var(--text-tertiary);text-transform:uppercase">Manager</th>
            </tr></thead>
            <tbody>${compRows}</tbody>
          </table>
        </div>

        <div>
          <div style="font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:var(--text-tertiary);margin-bottom:6px;font-weight:600">Achievements</div>
          <div style="background:var(--bg-surface);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:13px;line-height:1.55">${a.achievements || '<span style="color:var(--text-tertiary)">—</span>'}</div>
        </div>
        <div>
          <div style="font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:var(--text-tertiary);margin-bottom:6px;font-weight:600">Goals for Next Cycle</div>
          <div style="background:var(--bg-surface);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:13px;line-height:1.55">${a.goals || '<span style="color:var(--text-tertiary)">—</span>'}</div>
        </div>

        <div style="background:var(--bg-surface);border:1px solid var(--border);border-radius:8px;padding:14px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <div style="font-weight:600;font-size:13px"><i class="ti ti-user-check"></i> Manager Review — ${a.managerName}</div>
            <div style="font-weight:700">${a.managerScore != null ? a.managerScore.toFixed(1)+'/5' : 'Pending'}</div>
          </div>
          <div style="font-size:12.5px;color:var(--text-secondary);line-height:1.55">${a.managerComment || '<span style="color:var(--text-tertiary)">No manager comment yet.</span>'}</div>
          ${a.managerReviewDate ? `<div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Reviewed ${a.managerReviewDate}</div>` : ''}
        </div>

        <div style="background:#F0F7FF;border:1px solid #BFDBFE;border-radius:8px;padding:14px">
          <div style="font-weight:600;font-size:13px;margin-bottom:10px"><i class="ti ti-building"></i> HR Evaluation</div>
          ${editable ? `
            <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end;margin-bottom:10px">
              <div style="flex:1;min-width:160px">
                <label style="font-size:11.5px;color:var(--text-tertiary);text-transform:uppercase;font-weight:600;display:block;margin-bottom:4px">Final Rating</label>
                <input id="hr-score" type="number" min="1" max="5" step="0.1" value="${suggested}" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:8px;font-size:14px;font-weight:600"/>
              </div>
              <div style="font-size:11px;color:var(--text-tertiary);padding-bottom:10px">Suggested from manager avg: ${suggested}/5</div>
            </div>
            <label style="font-size:11.5px;color:var(--text-tertiary);text-transform:uppercase;font-weight:600;display:block;margin-bottom:4px">HR Comments / Feedback</label>
            <textarea id="hr-comment" rows="3" placeholder="Calibration notes, recommended actions, recognition…" style="width:100%;padding:10px;border:1px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;resize:vertical">${a.hrComment || ''}</textarea>
            <label style="font-size:11.5px;color:var(--text-tertiary);text-transform:uppercase;font-weight:600;display:block;margin:10px 0 4px">Revision reason (only if sending back)</label>
            <textarea id="hr-reason" rows="2" placeholder="Explain what the employee needs to revise…" style="width:100%;padding:10px;border:1px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;resize:vertical">${a.sentBackReason || ''}</textarea>
          ` : `
            <div style="font-size:13px"><strong>Score:</strong> ${a.hrScore != null ? a.hrScore.toFixed(1)+'/5' : '—'}</div>
            <div style="font-size:12.5px;color:var(--text-secondary);line-height:1.55;margin-top:6px">${a.hrComment || '<span style="color:var(--text-tertiary)">No HR comment recorded.</span>'}</div>
            ${a.sentBackReason ? `<div style="margin-top:8px;font-size:12.5px;color:var(--danger-text)"><strong>Sent back:</strong> ${a.sentBackReason}</div>` : ''}
            ${a.hrReviewDate ? `<div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Reviewed ${a.hrReviewDate}</div>` : ''}
            ${a.finalRating != null ? `<div style="margin-top:10px;font-size:14px"><strong>Final Rating:</strong> <span style="color:var(--accent-text);font-weight:700">${a.finalRating.toFixed(1)}/5</span></div>` : ''}
          `}
        </div>
      </div>

      <div style="display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--border);background:var(--bg-surface);border-radius:0 0 14px 14px;flex-wrap:wrap">
        <button id="appr-cancel" style="padding:9px 16px;border:1px solid var(--border);border-radius:8px;background:#fff;cursor:pointer;font-weight:600;font-size:13px">Close</button>
        ${editable ? `
          <button id="appr-sendback" style="padding:9px 16px;border:1px solid var(--danger);border-radius:8px;background:#fff;color:var(--danger-text);cursor:pointer;font-weight:600;font-size:13px"><i class="ti ti-arrow-back-up"></i> Send Back to Employee</button>
          <button id="appr-approve" style="padding:9px 18px;border:none;border-radius:8px;background:var(--accent);color:#fff;cursor:pointer;font-weight:600;font-size:13px"><i class="ti ti-check"></i> Approve & Send to Employee</button>
        ` : a.status === 'pending_manager' ? `
          <div style="font-size:12px;color:var(--text-tertiary);align-self:center">Awaiting manager submission — HR action unlocks at "Under Review" stage.</div>
        ` : ''}
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  $('#appr-modal-close').addEventListener('click', close);
  $('#appr-cancel').addEventListener('click', close);

  if (editable) {
    $('#appr-approve').addEventListener('click', () => {
      const score = parseFloat($('#hr-score').value);
      const comment = $('#hr-comment').value.trim();
      if (!(score >= 1 && score <= 5)) { toast('Enter a valid rating between 1 and 5'); return; }
      if (!comment) { toast('Add an HR comment before approving'); return; }
      a.hrScore = score;
      a.hrComment = comment;
      a.finalRating = score;
      a.status = 'completed';
      a.hrReviewDate = new Date().toISOString().split('T')[0];
      a.sentBackReason = '';
      a.sentToEmployeeDate = a.hrReviewDate;
      persistAppraisals();
      pushNotification({ icon:'ti-check', color:'#10B981', text:`Appraisal finalised for ${a.empName} (${a.finalRating}/5) — sent to employee`, type:'performance' });
      toast(`Approved · sent to ${a.empName}`);
      close();
      showPage('appraisals');
    });
    $('#appr-sendback').addEventListener('click', () => {
      const reason = $('#hr-reason').value.trim();
      const comment = $('#hr-comment').value.trim();
      if (!reason) { toast('Add a revision reason before sending back'); return; }
      a.sentBackReason = reason;
      a.hrComment = comment;
      a.status = 'sent_back';
      a.hrReviewDate = new Date().toISOString().split('T')[0];
      persistAppraisals();
      pushNotification({ icon:'ti-arrow-back-up', color:'#EF4444', text:`Appraisal sent back to ${a.empName} for revision`, type:'performance' });
      toast(`Sent back to ${a.empName}`);
      close();
      showPage('appraisals');
    });
  }
}

// Listen for changes from the Employee portal (cross-tab sync)
window.addEventListener('storage', (e) => {
  if (e.key === APPR_STORAGE_KEY && e.newValue) {
    try {
      data.appraisals = JSON.parse(e.newValue);
      if (window._currentPage === 'appraisals') showPage('appraisals');
    } catch (err) {}
  }
});

// ═══════════ FLOATING AI CHAT WIDGET ═══════════
function initChatWidget() {
  const fab    = document.getElementById('chat-fab');
  const panel  = document.getElementById('chat-panel');
  const close  = document.getElementById('chat-close');
  const form   = document.getElementById('chat-form');
  const input  = document.getElementById('chat-input');
  const msgs   = document.getElementById('chat-messages');
  const chips  = document.getElementById('chat-chips');
  if (!fab || !panel) return;

  const SUGGESTIONS = [
    'Show employees at risk of burnout',
    'Who has React skills in Engineering?',
    'List employees with declining performance',
    'Top performers',
    'Headcount in Product'
  ];

  window._chatHistory = window._chatHistory || [
    { role:'bot', text:`Hi ${data.admin.name.split(' ')[0]} — I'm your AI HR assistant. Ask me anything about your workforce.`, time: nowTime() }
  ];

  function nowTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  }

  function renderChips() {
    chips.innerHTML = SUGGESTIONS.map(s => `<button type="button" class="chat-chip" data-sug="${s.replace(/"/g,'&quot;')}">${s}</button>`).join('');
    chips.querySelectorAll('[data-sug]').forEach(b =>
      b.addEventListener('click', () => sendMessage(b.dataset.sug))
    );
  }

  function renderMessages() {
    msgs.innerHTML = window._chatHistory.map(m => `
      <div class="chat-bubble-wrap ${m.role}">
        <div class="chat-bubble ${m.role}">${window.CrewlyAI ? CrewlyAI.formatHTML(m.text) : m.text.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>
        <div class="chat-timestamp">${m.time||''}</div>
      </div>`).join('');
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'chat-typing';
    t.id = 'chat-typing';
    t.innerHTML = '<span class="chat-typing-dot"></span><span class="chat-typing-dot"></span><span class="chat-typing-dot"></span>';
    msgs.appendChild(t);
    msgs.scrollTop = msgs.scrollHeight;
  }
  function hideTyping() { document.getElementById('chat-typing')?.remove(); }

  function sendMessage(text) {
    if (!text || !text.trim()) return;
    window._chatHistory.push({ role:'user', text, time: nowTime() });
    renderMessages();
    showTyping();
    // Ask Gemini (the built-in answers are used if it is unavailable)
    const builtIn = () => (typeof aiAnswer === 'function') ? aiAnswer(text) : 'OK';
    const answer = window.CrewlyAI
      ? CrewlyAI.reply({
          role: 'hradmin',
          userName: data.admin.name,
          query: text,
          history: window._chatHistory.slice(0, -1),
          context: buildAIContext,
          fallback: builtIn
        })
      : Promise.resolve(builtIn());

    answer.then(reply => {
      hideTyping();
      window._chatHistory.push({ role:'bot', text: reply, time: nowTime() });
      renderMessages();
    });
  }

  function openPanel() {
    panel.classList.add('open');
    fab.classList.add('open');
    panel.setAttribute('aria-hidden','false');
    setTimeout(() => input.focus(), 200);
  }
  function closePanel() {
    panel.classList.remove('open');
    fab.classList.remove('open');
    panel.setAttribute('aria-hidden','true');
  }

  fab.addEventListener('click', () => panel.classList.contains('open') ? closePanel() : openPanel());
  close.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('open')) closePanel(); });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const v = input.value;
    input.value = '';
    sendMessage(v);
  });

  renderChips();
  renderMessages();
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  seedAppraisals();
  $$('.nav-item').forEach(el => el.addEventListener('click', () => showPage(el.dataset.page)));
  $('.notif-btn')?.addEventListener('click', ev => { ev.stopPropagation(); toggleNotifPanel(); });
  updateNotifBadge();
  startLiveUpdates();
  showPage((window.CrewlyDB && RENDERERS[CrewlyDB.getLastPage()]) ? CrewlyDB.getLastPage() : 'dashboard');
  initChatWidget();
});

/* ═══════════════════════════════════════════════════════════════════
   HEALTH & BENEFITS — Medication Coverage (Admin)
   Shares localStorage key `crewly_shared_db` with the Employee Portal.
   Admin owns: plans, providers, enrollments, claims, hospitals.
   Employee Portal reads `employees[i].benefits.medication` which we
   mirror on every enrollment change so both apps stay in sync.
═══════════════════════════════════════════════════════════════════ */
(function () {
  const SHARED_KEY = 'crewly_shared_db';

  function loadShared() {
    try { return JSON.parse(localStorage.getItem(SHARED_KEY) || '{}') || {}; }
    catch { return {}; }
  }
  function saveShared(db) {
    try { localStorage.setItem(SHARED_KEY, JSON.stringify(db)); } catch {}
  }

  function seedBenefits() {
    const db = loadShared();
    let changed = false;

    if (!db.benefitProviders) {
      db.benefitProviders = [
        { id: 'PRV-001', name: 'AXA Mansard Health',  contact: 'support@axamansard.com', phone: '+234 700 292 6273', status: 'active' },
        { id: 'PRV-002', name: 'Hygeia HMO',          contact: 'care@hygeiahmo.com',     phone: '+234 700 449 4342', status: 'active' },
        { id: 'PRV-003', name: 'Avon Healthcare',     contact: 'info@avonhealthcare.com',phone: '+234 700 286 6243', status: 'active' }
      ];
      changed = true;
    }

    if (!db.benefitPlans) {
      db.benefitPlans = [
        {
          id: 'PLN-001',
          name: 'Premium Health Plus — Medication Rider',
          provider: 'AXA Mansard Health',
          providerId: 'PRV-001',
          coverageStart: '2026-01-01',
          coverageEnd:   '2026-12-31',
          employeeContribution: 8500,
          employerContribution: 17000,
          annualLimit: 500000,
          perVisitLimit: 25000,
          coPay: 10,
          medications: [
            'Antibiotics (full class)',
            'Antihypertensives',
            'Antidiabetics (incl. Insulin)',
            'Analgesics & NSAIDs',
            'Antimalarials',
            'Chronic disease maintenance drugs',
            'Prescription vitamins & supplements'
          ],
          status: 'active'
        },
        {
          id: 'PLN-002',
          name: 'Essential Care — Medication Basic',
          provider: 'Hygeia HMO',
          providerId: 'PRV-002',
          coverageStart: '2026-01-01',
          coverageEnd:   '2026-12-31',
          employeeContribution: 4500,
          employerContribution: 9000,
          annualLimit: 250000,
          perVisitLimit: 12000,
          coPay: 20,
          medications: ['Antibiotics', 'Analgesics', 'Antimalarials', 'Common chronic drugs'],
          status: 'active'
        }
      ];
      changed = true;
    }

    if (!db.benefitHospitals) {
      db.benefitHospitals = [
        { id: 'HSP-001', name: 'Reddington Hospital',     location: 'Victoria Island, Lagos', type: 'hospital' },
        { id: 'HSP-002', name: 'HealthPlus Pharmacy',     location: 'Lekki Phase 1, Lagos',   type: 'pharmacy' },
        { id: 'HSP-003', name: 'MedPlus Pharmacy',        location: 'Victoria Island, Lagos', type: 'pharmacy' },
        { id: 'HSP-004', name: 'Lagoon Hospital',         location: 'Ikoyi, Lagos',           type: 'hospital' },
        { id: 'HSP-005', name: 'Alpha Pharmacy',          location: 'Ikeja, Lagos',           type: 'pharmacy' }
      ];
      changed = true;
    }

    if (!db.benefitEnrollments) {
      db.benefitEnrollments = [];
      changed = true;
    }

    // Mirror the admin-app's local employees into shared db so the
    // benefits module can reference them by id. We never overwrite an
    // existing entry — the Employee Portal is the source of truth for
    // employee profile data once it boots.
    if (!Array.isArray(db.employees)) db.employees = [];
    data.employees.forEach(e => {
      if (!db.employees.find(x => x.id === e.id)) {
        db.employees.push({
          id: e.id, name: e.name, email: e.email,
          title: e.role, department: e.dept,
          bg: e.bg, color: e.color
        });
        changed = true;
      }
    });

    // Auto-enroll the demo employee EMP-004 if the employee portal seed
    // already created their benefits.medication record but no admin
    // enrollment exists yet.
    const emp004 = db.employees.find(x => x.id === 'EMP-004');
    if (emp004 && emp004.benefits && emp004.benefits.medication &&
        !db.benefitEnrollments.find(en => en.empId === 'EMP-004')) {
      db.benefitEnrollments.push({
        id: 'ENR-' + Date.now(),
        empId: 'EMP-004',
        planId: 'PLN-001',
        policyNumber: emp004.benefits.medication.policyNumber || 'AXA-MED-2026-04412',
        status: 'active',
        enrolledDate: '2026-01-01'
      });
      changed = true;
    }

    if (changed) saveShared(db);
    return db;
  }

  // ── Sync helper: push plan + enrollment state back onto the employee
  //    record that the Employee Portal reads.
  function syncEnrollmentToEmployee(enrollmentId) {
    const db = loadShared();
    const en = db.benefitEnrollments.find(x => x.id === enrollmentId);
    if (!en) return;
    const plan = db.benefitPlans.find(p => p.id === en.planId);
    const emp  = (db.employees || []).find(e => e.id === en.empId);
    if (!emp || !plan) return;
    emp.benefits = emp.benefits || {};
    const existingClaims = (emp.benefits.medication && emp.benefits.medication.claims) || [];
    if (en.status === 'terminated') {
      delete emp.benefits.medication;
    } else {
      emp.benefits.medication = {
        enrolled: en.status === 'active',
        provider: plan.provider,
        planName: plan.name,
        policyNumber: en.policyNumber,
        coverageStart: plan.coverageStart,
        coverageEnd: plan.coverageEnd,
        employeeContribution: plan.employeeContribution,
        employerContribution: plan.employerContribution,
        annualLimit: plan.annualLimit,
        perVisitLimit: plan.perVisitLimit,
        coPay: plan.coPay,
        medications: plan.medications,
        claims: existingClaims
      };
    }
    saveShared(db);
  }

  // ── When a plan changes, re-sync every active enrollment on it.
  function resyncPlan(planId) {
    const db = loadShared();
    db.benefitEnrollments
      .filter(en => en.planId === planId)
      .forEach(en => syncEnrollmentToEmployee(en.id));
  }

  // ── Currency helper
  const naira = n => '₦' + (Number(n) || 0).toLocaleString();

  // ═══════════ MODAL HELPER ═══════════
  function openBxModal(title, bodyHtml, onSubmit, opts = {}) {
    const w = opts.width || 520;
    closeBxModal();
    const wrap = document.createElement('div');
    wrap.id = 'bx-modal';
    wrap.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,36,.55);display:flex;align-items:center;justify-content:center;z-index:3000;padding:20px;';
    wrap.innerHTML = `
      <div style="background:#fff;border-radius:14px;width:100%;max-width:${w}px;max-height:90vh;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.25);">
        <div style="padding:18px 22px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:16px;font-weight:700;color:var(--text-primary);">${title}</div>
          <button id="bx-close" style="background:none;border:none;cursor:pointer;color:var(--text-tertiary);font-size:20px;line-height:1;"><i class="ti ti-x"></i></button>
        </div>
        <form id="bx-form" style="padding:20px 22px;display:flex;flex-direction:column;gap:14px;">
          ${bodyHtml}
          <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:6px;border-top:1px solid var(--border);padding-top:14px;">
            <button type="button" id="bx-cancel" class="admin-btn ghost">Cancel</button>
            <button type="submit" class="admin-btn primary">${opts.submitLabel || 'Save'}</button>
          </div>
        </form>
      </div>`;
    document.body.appendChild(wrap);
    wrap.querySelector('#bx-close').onclick = closeBxModal;
    wrap.querySelector('#bx-cancel').onclick = closeBxModal;
    wrap.addEventListener('click', e => { if (e.target === wrap) closeBxModal(); });
    wrap.querySelector('#bx-form').onsubmit = ev => {
      ev.preventDefault();
      const fd = new FormData(ev.target);
      const obj = {};
      fd.forEach((v, k) => { obj[k] = v; });
      if (onSubmit(obj, ev.target) !== false) closeBxModal();
    };
  }
  function closeBxModal() {
    const m = document.getElementById('bx-modal');
    if (m) m.remove();
  }
  const field = (label, input) =>
    `<label style="display:flex;flex-direction:column;gap:6px;font-size:12px;font-weight:600;color:var(--text-secondary);">${label}${input}</label>`;
  const inp = (name, value = '', extra = '') =>
    `<input name="${name}" value="${value == null ? '' : String(value).replace(/"/g,'&quot;')}" ${extra} style="padding:10px 12px;border:1px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;">`;
  const sel = (name, options, value = '') =>
    `<select name="${name}" style="padding:10px 12px;border:1px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;background:#fff;">
       ${options.map(o => {
         const v = typeof o === 'object' ? o.value : o;
         const t = typeof o === 'object' ? o.label : o;
         return `<option value="${v}" ${v === value ? 'selected' : ''}>${t}</option>`;
       }).join('')}
     </select>`;
  const txta = (name, value = '') =>
    `<textarea name="${name}" rows="3" style="padding:10px 12px;border:1px solid var(--border);border-radius:8px;font-size:13px;font-family:inherit;resize:vertical;">${value || ''}</textarea>`;

  // ═══════════ RENDER ═══════════
  let _bxTab = 'plans';

  function renderBenefits() {
    const db = seedBenefits();
    const plans       = db.benefitPlans || [];
    const providers   = db.benefitProviders || [];
    const enrollments = db.benefitEnrollments || [];
    const hospitals   = db.benefitHospitals || [];
    const employees   = db.employees || [];

    // Build claims aggregate from every employee record
    const claims = [];
    employees.forEach(emp => {
      const meds = emp.benefits && emp.benefits.medication;
      if (meds && Array.isArray(meds.claims)) {
        meds.claims.forEach((c, i) => claims.push({
          ...c,
          empId: emp.id,
          empName: emp.name,
          claimKey: emp.id + ':' + i
        }));
      }
    });

    const activeEnrollments = enrollments.filter(e => e.status === 'active').length;
    const totalEmpMonthly = enrollments
      .filter(e => e.status === 'active')
      .reduce((s, en) => {
        const p = plans.find(pp => pp.id === en.planId);
        return s + (p ? p.employeeContribution : 0);
      }, 0);
    const totalErMonthly = enrollments
      .filter(e => e.status === 'active')
      .reduce((s, en) => {
        const p = plans.find(pp => pp.id === en.planId);
        return s + (p ? p.employerContribution : 0);
      }, 0);
    const claimsApproved = claims.filter(c => c.status === 'approved').length;
    const claimsPending  = claims.filter(c => c.status === 'pending').length;

    const tabBtn = (k, label, icon) =>
      `<button class="admin-btn ${_bxTab === k ? 'primary' : 'ghost'}" onclick="BX.setTab('${k}')"><i class="ti ${icon}"></i> ${label}</button>`;

    return `<section>
      <div class="admin-grid-4">
        ${statCard({ icon:'ti-shield-check',  iconBg:'#ECFDF5', iconColor:'#10B981', label:'Active enrollments', value:String(activeEnrollments), sub:`${plans.length} medication plans`, subColor:'var(--success-text)' })}
        ${statCard({ icon:'ti-building-bank', iconBg:'#F5F3FF', iconColor:'#7C3AED', label:'Employer cost (mo.)', value:naira(totalErMonthly), sub:'Auto-applied to payroll', subColor:'var(--purple-text)' })}
        ${statCard({ icon:'ti-wallet',        iconBg:'#FFFBEB', iconColor:'#B45309', label:'Employee deduct. (mo.)', value:naira(totalEmpMonthly), sub:'Across all enrolled staff', subColor:'var(--warning-text)' })}
        ${statCard({ icon:'ti-clipboard-list',iconBg:'#EFF6FF', iconColor:'#2563EB', label:'Claims', value:`${claimsApproved}/${claims.length}`, sub:`${claimsPending} pending review`, subColor:'var(--accent-text)' })}
      </div>

      <div class="admin-toolbar" style="margin-top:20px;flex-wrap:wrap;gap:8px;">
        ${tabBtn('plans',       'Medication Plans', 'ti-pill')}
        ${tabBtn('providers',   'Providers',        'ti-building')}
        ${tabBtn('enrollments', 'Enrollments',      'ti-users')}
        ${tabBtn('claims',      'Claims',           'ti-receipt')}
        ${tabBtn('hospitals',   'Hospitals & Pharmacies', 'ti-stethoscope')}
        ${tabBtn('payroll',     'Payroll Integration',    'ti-cash')}
      </div>

      <div style="margin-top:16px;">${renderBenefitsTab(_bxTab, db, claims)}</div>
    </section>`;
  }

  function renderBenefitsTab(tab, db, claims) {
    if (tab === 'plans')       return renderPlansTab(db);
    if (tab === 'providers')   return renderProvidersTab(db);
    if (tab === 'enrollments') return renderEnrollmentsTab(db);
    if (tab === 'claims')      return renderClaimsTab(db, claims);
    if (tab === 'hospitals')   return renderHospitalsTab(db);
    if (tab === 'payroll')     return renderPayrollIntegrationTab(db);
    return '';
  }

  function renderPlansTab(db) {
    const rows = (db.benefitPlans || []).map(p => {
      const enrolled = (db.benefitEnrollments || []).filter(en => en.planId === p.id && en.status === 'active').length;
      return `<tr>
        <td><div style="font-weight:600;">${p.name}</div><div style="font-size:11px;color:var(--text-tertiary);">${p.id}</div></td>
        <td>${p.provider}</td>
        <td>${p.coverageStart} → ${p.coverageEnd}</td>
        <td>${naira(p.employeeContribution)}</td>
        <td>${naira(p.employerContribution)}</td>
        <td>${naira(p.annualLimit)}</td>
        <td>${enrolled}</td>
        <td>${pill(p.status)}</td>
        <td style="text-align:right;white-space:nowrap;">
          <button class="admin-btn ghost" onclick="BX.editPlan('${p.id}')"><i class="ti ti-edit"></i></button>
          <button class="admin-btn ghost" onclick="BX.deletePlan('${p.id}')"><i class="ti ti-trash"></i></button>
        </td>
      </tr>`;
    }).join('');
    return `<div class="admin-card admin-card-flush">
      <div class="admin-card-title admin-card-title-padded" style="display:flex;justify-content:space-between;align-items:center;">
        <span>Medication coverage plans</span>
        <button class="admin-btn primary" onclick="BX.editPlan()"><i class="ti ti-plus"></i> New plan</button>
      </div>
      <table class="admin-table">
        <thead><tr><th>Plan</th><th>Provider</th><th>Coverage period</th><th>Emp. (mo.)</th><th>Employer (mo.)</th><th>Annual limit</th><th>Enrolled</th><th>Status</th><th></th></tr></thead>
        <tbody>${rows || `<tr><td colspan="9" style="text-align:center;padding:32px;color:var(--text-tertiary);">No plans yet</td></tr>`}</tbody>
      </table>
    </div>`;
  }

  function renderProvidersTab(db) {
    const rows = (db.benefitProviders || []).map(p => `<tr>
      <td style="font-weight:600;">${p.name}</td>
      <td>${p.contact || '—'}</td>
      <td>${p.phone || '—'}</td>
      <td>${pill(p.status || 'active')}</td>
      <td style="text-align:right;white-space:nowrap;">
        <button class="admin-btn ghost" onclick="BX.editProvider('${p.id}')"><i class="ti ti-edit"></i></button>
        <button class="admin-btn ghost" onclick="BX.deleteProvider('${p.id}')"><i class="ti ti-trash"></i></button>
      </td>
    </tr>`).join('');
    return `<div class="admin-card admin-card-flush">
      <div class="admin-card-title admin-card-title-padded" style="display:flex;justify-content:space-between;align-items:center;">
        <span>Insurance providers</span>
        <button class="admin-btn primary" onclick="BX.editProvider()"><i class="ti ti-plus"></i> New provider</button>
      </div>
      <table class="admin-table">
        <thead><tr><th>Provider</th><th>Contact</th><th>Phone</th><th>Status</th><th></th></tr></thead>
        <tbody>${rows || `<tr><td colspan="5" style="text-align:center;padding:32px;color:var(--text-tertiary);">No providers</td></tr>`}</tbody>
      </table>
    </div>`;
  }

  function renderEnrollmentsTab(db) {
    const rows = (db.benefitEnrollments || []).map(en => {
      const emp  = (db.employees || []).find(e => e.id === en.empId);
      const plan = (db.benefitPlans || []).find(p => p.id === en.planId);
      return `<tr>
        <td><div style="font-weight:600;">${emp ? emp.name : en.empId}</div><div style="font-size:11px;color:var(--text-tertiary);">${en.empId}</div></td>
        <td>${plan ? plan.name : '—'}</td>
        <td>${en.policyNumber || '—'}</td>
        <td>${en.enrolledDate || '—'}</td>
        <td>${pill(en.status === 'suspended' ? 'paused' : en.status === 'terminated' ? 'inactive' : 'active')}</td>
        <td style="text-align:right;white-space:nowrap;">
          ${en.status !== 'active'     ? `<button class="admin-btn ghost" onclick="BX.setEnrollStatus('${en.id}','active')" title="Activate"><i class="ti ti-player-play"></i></button>` : ''}
          ${en.status === 'active'     ? `<button class="admin-btn ghost" onclick="BX.setEnrollStatus('${en.id}','suspended')" title="Suspend"><i class="ti ti-player-pause"></i></button>` : ''}
          ${en.status !== 'terminated' ? `<button class="admin-btn ghost" onclick="BX.setEnrollStatus('${en.id}','terminated')" title="Terminate"><i class="ti ti-x"></i></button>` : ''}
          <button class="admin-btn ghost" onclick="BX.deleteEnrollment('${en.id}')" title="Remove"><i class="ti ti-trash"></i></button>
        </td>
      </tr>`;
    }).join('');
    return `<div class="admin-card admin-card-flush">
      <div class="admin-card-title admin-card-title-padded" style="display:flex;justify-content:space-between;align-items:center;">
        <span>Employee enrollments</span>
        <button class="admin-btn primary" onclick="BX.newEnrollment()"><i class="ti ti-user-plus"></i> Enroll employee</button>
      </div>
      <table class="admin-table">
        <thead><tr><th>Employee</th><th>Plan</th><th>Policy #</th><th>Enrolled</th><th>Status</th><th></th></tr></thead>
        <tbody>${rows || `<tr><td colspan="6" style="text-align:center;padding:32px;color:var(--text-tertiary);">No enrollments yet</td></tr>`}</tbody>
      </table>
    </div>`;
  }

  function renderClaimsTab(db, claims) {
    const rows = claims
      .slice()
      .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
      .map(c => `<tr>
        <td>${c.date || '—'}</td>
        <td style="font-weight:600;">${c.empName}</td>
        <td>${c.pharmacy || '—'}</td>
        <td>${c.medication || '—'}</td>
        <td style="text-align:right;">${naira(c.amount)}</td>
        <td>${pill(c.status || 'pending')}</td>
        <td style="text-align:right;white-space:nowrap;">
          ${c.status !== 'approved' ? `<button class="admin-btn ghost" onclick="BX.setClaimStatus('${c.claimKey}','approved')" title="Approve"><i class="ti ti-check"></i></button>` : ''}
          ${c.status !== 'rejected' ? `<button class="admin-btn ghost" onclick="BX.setClaimStatus('${c.claimKey}','rejected')" title="Reject"><i class="ti ti-x"></i></button>` : ''}
          <button class="admin-btn ghost" onclick="BX.deleteClaim('${c.claimKey}')" title="Delete"><i class="ti ti-trash"></i></button>
        </td>
      </tr>`).join('');
    return `<div class="admin-card admin-card-flush">
      <div class="admin-card-title admin-card-title-padded" style="display:flex;justify-content:space-between;align-items:center;">
        <span>Prescription claims</span>
        <button class="admin-btn primary" onclick="BX.newClaim()"><i class="ti ti-plus"></i> Add claim</button>
      </div>
      <table class="admin-table">
        <thead><tr><th>Date</th><th>Employee</th><th>Pharmacy</th><th>Medication</th><th style="text-align:right;">Amount</th><th>Status</th><th></th></tr></thead>
        <tbody>${rows || `<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--text-tertiary);">No claims recorded</td></tr>`}</tbody>
      </table>
    </div>`;
  }

  function renderHospitalsTab(db) {
    const rows = (db.benefitHospitals || []).map(h => `<tr>
      <td style="font-weight:600;">${h.name}</td>
      <td>${h.location || '—'}</td>
      <td>${(h.type || 'hospital').replace(/^./, c => c.toUpperCase())}</td>
      <td style="text-align:right;white-space:nowrap;">
        <button class="admin-btn ghost" onclick="BX.editHospital('${h.id}')"><i class="ti ti-edit"></i></button>
        <button class="admin-btn ghost" onclick="BX.deleteHospital('${h.id}')"><i class="ti ti-trash"></i></button>
      </td>
    </tr>`).join('');
    return `<div class="admin-card admin-card-flush">
      <div class="admin-card-title admin-card-title-padded" style="display:flex;justify-content:space-between;align-items:center;">
        <span>Participating hospitals & pharmacies</span>
        <button class="admin-btn primary" onclick="BX.editHospital()"><i class="ti ti-plus"></i> Add facility</button>
      </div>
      <table class="admin-table">
        <thead><tr><th>Name</th><th>Location</th><th>Type</th><th></th></tr></thead>
        <tbody>${rows || `<tr><td colspan="4" style="text-align:center;padding:32px;color:var(--text-tertiary);">No facilities yet</td></tr>`}</tbody>
      </table>
    </div>`;
  }

  function renderPayrollIntegrationTab(db) {
    const enrollments = (db.benefitEnrollments || []).filter(e => e.status === 'active');
    const rows = enrollments.map(en => {
      const emp  = (db.employees || []).find(e => e.id === en.empId) || { name: en.empId };
      const plan = (db.benefitPlans || []).find(p => p.id === en.planId);
      const empAmt = plan ? plan.employeeContribution : 0;
      const erAmt  = plan ? plan.employerContribution : 0;
      return `<tr>
        <td><div style="display:flex;align-items:center;gap:10px">${avatar(emp.name, emp.bg || '#EFF6FF', emp.color || '#1D4ED8')}<span style="font-weight:600">${emp.name}</span></div></td>
        <td>${plan ? plan.name : '—'}</td>
        <td style="color:#DC2626;font-weight:600;">-${naira(empAmt)}</td>
        <td>${naira(erAmt)}</td>
        <td>${naira(empAmt + erAmt)}</td>
      </tr>`;
    }).join('');
    const totEmp = enrollments.reduce((s, en) => {
      const p = (db.benefitPlans || []).find(pp => pp.id === en.planId);
      return s + (p ? p.employeeContribution : 0);
    }, 0);
    const totEr = enrollments.reduce((s, en) => {
      const p = (db.benefitPlans || []).find(pp => pp.id === en.planId);
      return s + (p ? p.employerContribution : 0);
    }, 0);

    return `<div class="admin-card" style="margin-bottom:16px;">
        <div class="admin-card-title">Payroll deduction summary — current month</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:10px;">
          <div><div style="font-size:12px;color:var(--text-tertiary);">Total employee deductions</div><div style="font-size:20px;font-weight:700;color:#DC2626;margin-top:4px;">-${naira(totEmp)}</div></div>
          <div><div style="font-size:12px;color:var(--text-tertiary);">Total employer contribution</div><div style="font-size:20px;font-weight:700;color:#10B981;margin-top:4px;">${naira(totEr)}</div></div>
          <div><div style="font-size:12px;color:var(--text-tertiary);">Combined monthly cost</div><div style="font-size:20px;font-weight:700;margin-top:4px;">${naira(totEmp + totEr)}</div></div>
        </div>
        <div style="margin-top:12px;padding:10px 12px;background:var(--accent-bg);color:var(--accent-text);border-radius:8px;font-size:12px;">
          <i class="ti ti-info-circle"></i> Medication contributions are automatically applied to each employee's payroll run.
        </div>
      </div>
      <div class="admin-card admin-card-flush">
        <div class="admin-card-title admin-card-title-padded">Per-employee payroll lines</div>
        <table class="admin-table">
          <thead><tr><th>Employee</th><th>Plan</th><th>Employee deduction</th><th>Employer contribution</th><th>Total</th></tr></thead>
          <tbody>${rows || `<tr><td colspan="5" style="text-align:center;padding:32px;color:var(--text-tertiary);">No active enrollments</td></tr>`}</tbody>
        </table>
      </div>`;
  }

  // ═══════════ ACTIONS ═══════════
  const BX = {};
  window.BX = BX;

  BX.setTab = function (t) {
    _bxTab = t;
    if (window._currentPage === 'benefits') showPage('benefits');
  };

  // ── Plan CRUD ──
  BX.editPlan = function (id) {
    const db = loadShared();
    const providers = db.benefitProviders || [];
    const p = id ? (db.benefitPlans || []).find(x => x.id === id) : null;
    const provOpts = providers.map(pr => ({ value: pr.name, label: pr.name }));
    const body = `
      ${field('Plan name', inp('name', p ? p.name : '', 'required'))}
      ${field('Provider', sel('provider', provOpts.length ? provOpts : [{value:'',label:'— no providers —'}], p ? p.provider : ''))}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        ${field('Coverage start', inp('coverageStart', p ? p.coverageStart : '', 'type="date" required'))}
        ${field('Coverage end',   inp('coverageEnd',   p ? p.coverageEnd   : '', 'type="date" required'))}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        ${field('Employee monthly contribution (₦)', inp('employeeContribution', p ? p.employeeContribution : '', 'type="number" min="0" required'))}
        ${field('Employer monthly contribution (₦)', inp('employerContribution', p ? p.employerContribution : '', 'type="number" min="0" required'))}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
        ${field('Annual limit (₦)',   inp('annualLimit',   p ? p.annualLimit   : '', 'type="number" min="0"'))}
        ${field('Per-visit limit (₦)', inp('perVisitLimit', p ? p.perVisitLimit : '', 'type="number" min="0"'))}
        ${field('Co-pay (%)',         inp('coPay',         p ? p.coPay         : '', 'type="number" min="0" max="100"'))}
      </div>
      ${field('Covered medications (one per line)', txta('medications', p ? (p.medications || []).join('\n') : ''))}
      ${field('Status', sel('status', ['active','paused','inactive'], p ? p.status : 'active'))}
    `;
    openBxModal(p ? 'Edit medication plan' : 'New medication plan', body, (obj) => {
      const db = loadShared();
      db.benefitPlans = db.benefitPlans || [];
      const prov = (db.benefitProviders || []).find(x => x.name === obj.provider);
      const payload = {
        id: p ? p.id : 'PLN-' + Date.now(),
        name: obj.name.trim(),
        provider: obj.provider,
        providerId: prov ? prov.id : null,
        coverageStart: obj.coverageStart,
        coverageEnd: obj.coverageEnd,
        employeeContribution: +obj.employeeContribution || 0,
        employerContribution: +obj.employerContribution || 0,
        annualLimit: +obj.annualLimit || 0,
        perVisitLimit: +obj.perVisitLimit || 0,
        coPay: +obj.coPay || 0,
        medications: (obj.medications || '').split('\n').map(s => s.trim()).filter(Boolean),
        status: obj.status
      };
      if (p) {
        db.benefitPlans = db.benefitPlans.map(x => x.id === p.id ? payload : x);
      } else {
        db.benefitPlans.push(payload);
      }
      saveShared(db);
      resyncPlan(payload.id);
      toast(p ? 'Plan updated' : 'Plan created');
      showPage('benefits');
    }, { width: 620 });
  };

  BX.deletePlan = function (id) {
    if (!confirm('Delete this plan? Active enrollments on it will be terminated.')) return;
    const db = loadShared();
    (db.benefitEnrollments || []).filter(e => e.planId === id).forEach(en => {
      en.status = 'terminated';
      syncEnrollmentToEmployee(en.id);
    });
    db.benefitPlans = (db.benefitPlans || []).filter(x => x.id !== id);
    saveShared(db);
    toast('Plan deleted');
    showPage('benefits');
  };

  // ── Provider CRUD ──
  BX.editProvider = function (id) {
    const db = loadShared();
    const p = id ? (db.benefitProviders || []).find(x => x.id === id) : null;
    const body = `
      ${field('Provider name', inp('name', p ? p.name : '', 'required'))}
      ${field('Contact email', inp('contact', p ? p.contact : '', 'type="email"'))}
      ${field('Phone',          inp('phone',   p ? p.phone   : ''))}
      ${field('Status', sel('status', ['active','inactive'], p ? p.status : 'active'))}
    `;
    openBxModal(p ? 'Edit provider' : 'New insurance provider', body, (obj) => {
      const db = loadShared();
      db.benefitProviders = db.benefitProviders || [];
      const payload = {
        id: p ? p.id : 'PRV-' + Date.now(),
        name: obj.name.trim(),
        contact: obj.contact || '',
        phone: obj.phone || '',
        status: obj.status
      };
      if (p) db.benefitProviders = db.benefitProviders.map(x => x.id === p.id ? payload : x);
      else   db.benefitProviders.push(payload);
      saveShared(db);
      toast(p ? 'Provider updated' : 'Provider added');
      showPage('benefits');
    });
  };

  BX.deleteProvider = function (id) {
    const db = loadShared();
    const inUse = (db.benefitPlans || []).some(p => p.providerId === id);
    if (inUse && !confirm('This provider is used by one or more plans. Delete anyway?')) return;
    db.benefitProviders = (db.benefitProviders || []).filter(x => x.id !== id);
    saveShared(db);
    toast('Provider removed');
    showPage('benefits');
  };

  // ── Enrollment ──
  BX.newEnrollment = function () {
    const db = loadShared();
    const empOpts = (db.employees || []).map(e => ({ value: e.id, label: `${e.name} (${e.id})` }));
    const planOpts = (db.benefitPlans || []).filter(p => p.status === 'active').map(p => ({ value: p.id, label: p.name }));
    const body = `
      ${field('Employee', sel('empId', empOpts.length ? empOpts : [{value:'',label:'— no employees —'}], ''))}
      ${field('Plan',     sel('planId', planOpts.length ? planOpts : [{value:'',label:'— no active plans —'}], ''))}
      ${field('Policy number', inp('policyNumber', '', 'placeholder="auto-generated if blank"'))}
      ${field('Enrollment date', inp('enrolledDate', new Date().toISOString().slice(0,10), 'type="date" required'))}
      ${field('Initial status', sel('status', ['active','suspended'], 'active'))}
    `;
    openBxModal('Enroll employee in medication plan', body, (obj) => {
      if (!obj.empId || !obj.planId) { toast('Pick an employee and a plan'); return false; }
      const db = loadShared();
      db.benefitEnrollments = db.benefitEnrollments || [];
      const exists = db.benefitEnrollments.find(en => en.empId === obj.empId && en.planId === obj.planId && en.status !== 'terminated');
      if (exists) { toast('Employee already enrolled in this plan'); return false; }
      const en = {
        id: 'ENR-' + Date.now(),
        empId: obj.empId,
        planId: obj.planId,
        policyNumber: obj.policyNumber || ('POL-' + Math.random().toString(36).slice(2,8).toUpperCase()),
        enrolledDate: obj.enrolledDate,
        status: obj.status
      };
      db.benefitEnrollments.push(en);
      saveShared(db);
      syncEnrollmentToEmployee(en.id);
      toast('Employee enrolled');
      showPage('benefits');
    });
  };

  BX.setEnrollStatus = function (id, status) {
    const db = loadShared();
    const en = (db.benefitEnrollments || []).find(x => x.id === id);
    if (!en) return;
    en.status = status;
    saveShared(db);
    syncEnrollmentToEmployee(id);
    toast('Enrollment ' + status);
    showPage('benefits');
  };

  BX.deleteEnrollment = function (id) {
    if (!confirm('Remove this enrollment entirely?')) return;
    const db = loadShared();
    const en = (db.benefitEnrollments || []).find(x => x.id === id);
    if (en) {
      en.status = 'terminated';
      syncEnrollmentToEmployee(id);
    }
    db.benefitEnrollments = (db.benefitEnrollments || []).filter(x => x.id !== id);
    saveShared(db);
    toast('Enrollment removed');
    showPage('benefits');
  };

  // ── Claims ──
  BX.newClaim = function () {
    const db = loadShared();
    const enrolledEmps = (db.benefitEnrollments || [])
      .filter(en => en.status === 'active')
      .map(en => (db.employees || []).find(e => e.id === en.empId))
      .filter(Boolean);
    const empOpts = enrolledEmps.map(e => ({ value: e.id, label: `${e.name} (${e.id})` }));
    const pharmacies = (db.benefitHospitals || []).filter(h => h.type === 'pharmacy').map(h => h.name);
    const body = `
      ${field('Employee', sel('empId', empOpts.length ? empOpts : [{value:'',label:'— no active enrollments —'}], ''))}
      ${field('Date', inp('date', new Date().toISOString().slice(0,10), 'type="date" required'))}
      ${field('Pharmacy', sel('pharmacy', (pharmacies.length ? pharmacies : ['—']).map(p => ({value:p,label:p})), ''))}
      ${field('Medication', inp('medication', '', 'required'))}
      ${field('Amount (₦)', inp('amount', '', 'type="number" min="0" required'))}
      ${field('Status', sel('status', ['pending','approved','rejected'], 'pending'))}
    `;
    openBxModal('Add prescription claim', body, (obj) => {
      if (!obj.empId) { toast('Pick an employee'); return false; }
      const db = loadShared();
      const emp = (db.employees || []).find(e => e.id === obj.empId);
      if (!emp || !emp.benefits || !emp.benefits.medication) { toast('Employee has no active plan'); return false; }
      emp.benefits.medication.claims = emp.benefits.medication.claims || [];
      emp.benefits.medication.claims.unshift({
        date: obj.date,
        pharmacy: obj.pharmacy,
        medication: obj.medication,
        amount: +obj.amount || 0,
        status: obj.status
      });
      saveShared(db);
      toast('Claim added');
      showPage('benefits');
    });
  };

  BX.setClaimStatus = function (key, status) {
    const [empId, idxStr] = key.split(':');
    const db = loadShared();
    const emp = (db.employees || []).find(e => e.id === empId);
    if (!emp || !emp.benefits || !emp.benefits.medication) return;
    const c = emp.benefits.medication.claims[+idxStr];
    if (!c) return;
    c.status = status;
    saveShared(db);
    toast('Claim ' + status);
    showPage('benefits');
  };

  BX.deleteClaim = function (key) {
    if (!confirm('Delete this claim?')) return;
    const [empId, idxStr] = key.split(':');
    const db = loadShared();
    const emp = (db.employees || []).find(e => e.id === empId);
    if (!emp || !emp.benefits || !emp.benefits.medication) return;
    emp.benefits.medication.claims.splice(+idxStr, 1);
    saveShared(db);
    toast('Claim deleted');
    showPage('benefits');
  };

  // ── Hospitals ──
  BX.editHospital = function (id) {
    const db = loadShared();
    const h = id ? (db.benefitHospitals || []).find(x => x.id === id) : null;
    const body = `
      ${field('Facility name', inp('name', h ? h.name : '', 'required'))}
      ${field('Location',      inp('location', h ? h.location : ''))}
      ${field('Type', sel('type', ['hospital','pharmacy','clinic'], h ? h.type : 'hospital'))}
    `;
    openBxModal(h ? 'Edit facility' : 'Add participating facility', body, (obj) => {
      const db = loadShared();
      db.benefitHospitals = db.benefitHospitals || [];
      const payload = {
        id: h ? h.id : 'HSP-' + Date.now(),
        name: obj.name.trim(),
        location: obj.location || '',
        type: obj.type
      };
      if (h) db.benefitHospitals = db.benefitHospitals.map(x => x.id === h.id ? payload : x);
      else   db.benefitHospitals.push(payload);
      saveShared(db);
      toast(h ? 'Facility updated' : 'Facility added');
      showPage('benefits');
    });
  };

  BX.deleteHospital = function (id) {
    const db = loadShared();
    db.benefitHospitals = (db.benefitHospitals || []).filter(x => x.id !== id);
    saveShared(db);
    toast('Facility removed');
    showPage('benefits');
  };

  // ═══════════ ROUTER REGISTRATION ═══════════
  PAGE_TITLES.benefits = {
    title: 'Health & Benefits',
    crumb: 'Medication coverage, providers, claims & payroll integration'
  };
  RENDERERS.benefits = renderBenefits;

  // Pre-seed on script load so the employee portal sees data even if
  // an admin never opens the page.
  try { seedBenefits(); } catch (e) {}
})();

/* ── Crewly local DB: remember the last page each user visited ── */
(function () {
  if (!window.CrewlyDB || typeof showPage !== 'function') return;
  const originalShowPage = showPage;
  showPage = function (page) {
    const result = originalShowPage.apply(this, arguments);
    CrewlyDB.setLastPage(page);
    CrewlyDB.applyIdentity();
    return result;
  };
})();

/* ── Crewly AI: the data summary Gemini answers from (whole workforce) ── */
function buildAIContext() {
  const C = (v, n) => (window.CrewlyAI ? CrewlyAI.compact(v, n) : JSON.stringify(v).slice(0, n));
  const safe = (fn, fallback) => { try { return fn(); } catch (err) { return fallback; } };
  const lines = [];
  lines.push('ADMIN: ' + C(data.admin, 200));
  lines.push('CURRENT PAGE: ' + (window._currentPage || 'dashboard'));
  lines.push('EMPLOYEES (people listed in the directory): ' + C(data.employees.map(e => ({ id: e.id, name: e.name, role: e.role, dept: e.dept, email: e.email, manager: e.manager, status: e.status, lifecycle: e.lifecycle, hireDate: e.hireDate, skills: e.skills })), 5000));
  lines.push('DEPARTMENTS (count = full department headcount, which can be larger than the people listed above): ' + C(data.departments, 1400));
  lines.push('BURNOUT RISK (heuristic, only medium/high): ' + C(safe(() => data.employees.filter(e => e.lifecycle !== 'offboarded').map(e => { const b = burnoutScore(e); return { name: e.name, dept: e.dept, level: b.level, score: b.score }; }).filter(x => x.level !== 'low'), []), 1500));
  lines.push('LEAVE QUEUE: ' + C(data.leaveQueue, 1200));
  lines.push('OPEN ROLES / RECRUITMENT: ' + C(data.roles, 1200));
  lines.push('INTERNAL GIGS: ' + C(data.gigs, 1500));
  lines.push('FEEDBACK: ' + C(data.feedback, 1500));
  lines.push('AUTOMATION WORKFLOWS: ' + C((data.workflows || []).map(w => ({ name: w.name, status: w.status, runs: w.runs })), 800));
  lines.push('APPRAISALS: ' + C(data.appraisals, 2500));
  return lines.join('\n');
}

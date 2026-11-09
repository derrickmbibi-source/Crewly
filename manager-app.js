/* ═══════════════════════════════════════════════
   Crewly — Manager Portal
   manager.js
═══════════════════════════════════════════════ */

const fmtNGN = n => '₦' + Math.round(n).toLocaleString();

// ── SHARED DATABASE ──
const defaultSharedDb = {
  manager: { name: 'Daniel Mensah', title: 'Engineering Manager', avatar: 'DM' },
  
  employees: [
    {
      id: 'EMP-004',
      name: 'Jessica Eze',
      title: 'Junior Software Developer',
      department: 'Engineering',
      email: 'j.eze@company.com',
      phone: '+234 804 567 8901',
      manager: 'Daniel Mensah',
      startDate: '15 Jan 2021',
      employmentType: 'Full-time',
      location: 'Lagos HQ — Floor 3',
      emergencyContact: 'Kemi Ahirima · +234 809 000 0004',
      avatar: 'JE',
      bg: '#FFF1F2',
      color: '#BE185D',
      avatarBg: '#FFF1F2',
      avatarColor: '#BE185D',
      status: 'active',
      salary: 420000,
      joined: '2021-01-15',
      leave: {
        annual: { total: 21, used: 9, remaining: 12 },
        sick: { total: 10, used: 1, remaining: 9 },
        casual: { total: 5, used: 0, remaining: 5 },
        unpaid: { total: 0, used: 0, remaining: 0 }
      },
      attendance: [
        { date: '2026-06-12', clockIn: '08:30', clockOut: '17:45', hours: 9.25, status: 'present', lateBy: 0 },
        { date: '2026-06-11', clockIn: '08:15', clockOut: '17:30', hours: 9.25, status: 'present', lateBy: 0 },
        { date: '2026-06-10', clockIn: '08:45', clockOut: '17:15', hours: 8.5, status: 'present', lateBy: 15 },
        { date: '2026-06-09', clockIn: '08:00', clockOut: '17:00', hours: 9, status: 'present', lateBy: 0 }
      ],
      currentClockIn: null,
      performance: {
        overallRating: 4.5,
        reviews: 2,
        goalsCompleted: '8/10',
        trend: '+5%',
        metrics: [
          { name: 'Communication', score: 85 },
          { name: 'Teamwork', score: 90 },
          { name: 'Productivity', score: 78 },
          { name: 'Initiative', score: 88 },
          { name: 'Reliability', score: 92 }
        ],
        reviewsList: [
          { date: 'Mar 2026', reviewer: 'Daniel Mensah', rating: 4.5, comment: 'Excellent performance and leadership' },
          { date: 'Sep 2025', reviewer: 'Daniel Mensah', rating: 4.2, comment: 'Good progress on team projects' }
        ]
      },
      appraisal: {
        cycle: 'H1 2026',
        status: 'not_started',
        competencies: [
          { key: 'communication', label: 'Communication', selfScore: 0 },
          { key: 'teamwork', label: 'Teamwork & Collaboration', selfScore: 0 },
          { key: 'productivity', label: 'Productivity', selfScore: 0 },
          { key: 'initiative', label: 'Initiative', selfScore: 0 },
          { key: 'reliability', label: 'Reliability', selfScore: 0 }
        ],
        achievements: '',
        goals: '',
        submittedDate: null,
        manager: { name: 'Daniel Mensah', score: null, comment: '', date: null },
        hr: { name: 'Amara Nwosu', score: null, comment: '', date: null },
        finalRating: null,
        sentBackReason: '',
        history: [
          { cycle: 'H2 2025', selfAvg: 4.1, managerScore: 4.3, finalRating: 4.2, status: 'completed', completedDate: '2025-12-15' },
          { cycle: 'H1 2025', selfAvg: 3.9, managerScore: 4.0, finalRating: 4.0, status: 'completed', completedDate: '2025-06-20' }
        ]
      },
      documents: [
        { id: 1, name: 'Employment Contract', date: 'Issued Jan 2021', type: 'contract', size: '2.4 MB', uploadedDate: '2021-01-15' },
        { id: 2, name: 'NIN Verification', date: 'Verified Jan 2021', type: 'id', size: '1.8 MB', uploadedDate: '2021-01-10' },
        { id: 3, name: 'Latest Appraisal Report', date: 'Mar 2025', type: 'certificate', size: '3.2 MB', uploadedDate: '2025-03-20' },
        { id: 4, name: 'Offer Letter', date: 'Issued Jan 2021', type: 'contract', size: '1.1 MB', uploadedDate: '2021-01-05' },
        { id: 5, name: 'Tax Certificate', date: 'Jan 2026', type: 'certificate', size: '0.9 MB', uploadedDate: '2026-01-15' }
      ],
      uploadedFiles: [],
      searchHistory: [],
      notifications: [
        { id: 1, message: 'Your leave request has been approved', date: '2 hours ago', read: false, type: 'leave', actionUrl: '#leave' },
        { id: 2, message: 'New training course available: Leadership Essentials', date: '1 day ago', read: false, type: 'training', actionUrl: '#training' },
        { id: 3, message: 'Performance review scheduled for Jun 30', date: '3 days ago', read: true, type: 'performance', actionUrl: '#performance' }
      ]
    },
    {
      id: 'EMP-007',
      name: 'Tunde Bakare',
      title: 'Senior Backend Engineer',
      department: 'Engineering',
      email: 't.bakare@company.com',
      phone: '+234 803 111 2222',
      manager: 'Daniel Mensah',
      startDate: '02 Apr 2019',
      avatar: 'TB',
      bg: '#EFF6FF',
      color: '#1D4ED8',
      avatarBg: '#EFF6FF',
      avatarColor: '#1D4ED8',
      status: 'active',
      salary: 780000,
      joined: '2019-04-02',
      leave: {
        annual: { total: 21, used: 5, remaining: 16 },
        sick: { total: 10, used: 2, remaining: 8 },
        casual: { total: 5, used: 1, remaining: 4 }
      },
      performance: { overallRating: 4.8, reviews: 3, goalsCompleted: '10/10', trend: '+2%' },
      appraisal: { cycle: 'H1 2026', status: 'not_started' }
    },
    {
      id: 'EMP-011',
      name: 'Amaka Okafor',
      title: 'Frontend Engineer',
      department: 'Engineering',
      email: 'a.okafor@company.com',
      phone: '+234 802 333 4444',
      manager: 'Daniel Mensah',
      startDate: '19 Aug 2022',
      avatar: 'AO',
      bg: '#ECFDF5',
      color: '#065F46',
      avatarBg: '#ECFDF5',
      avatarColor: '#065F46',
      status: 'active',
      salary: 560000,
      joined: '2022-08-19',
      leave: {
        annual: { total: 21, used: 10, remaining: 11 },
        sick: { total: 10, used: 0, remaining: 10 },
        casual: { total: 5, used: 2, remaining: 3 }
      },
      performance: { overallRating: 4.1, reviews: 2, goalsCompleted: '7/10', trend: '+1%' },
      appraisal: { cycle: 'H1 2026', status: 'pending_manager' }
    },
    {
      id: 'EMP-015',
      name: 'Ibrahim Yusuf',
      title: 'DevOps Engineer',
      department: 'Engineering',
      email: 'i.yusuf@company.com',
      phone: '+234 805 555 6666',
      manager: 'Daniel Mensah',
      startDate: '03 Nov 2020',
      avatar: 'IY',
      bg: '#FFFBEB',
      color: '#92400E',
      avatarBg: '#FFFBEB',
      avatarColor: '#92400E',
      status: 'active',
      salary: 680000,
      joined: '2020-11-03',
      leave: {
        annual: { total: 21, used: 4, remaining: 17 },
        sick: { total: 10, used: 1, remaining: 9 },
        casual: { total: 5, used: 0, remaining: 5 }
      },
      performance: { overallRating: 4.6, reviews: 4, goalsCompleted: '9/10', trend: '+4%' },
      appraisal: { cycle: 'H1 2026', status: 'not_started' }
    },
    {
      id: 'EMP-022',
      name: 'Chioma Nwankwo',
      title: 'QA Engineer',
      department: 'Engineering',
      email: 'c.nwankwo@company.com',
      phone: '+234 806 777 8888',
      manager: 'Daniel Mensah',
      startDate: '14 Feb 2022',
      avatar: 'CN',
      bg: '#F5F3FF',
      color: '#5B21B6',
      avatarBg: '#F5F3FF',
      avatarColor: '#5B21B6',
      status: 'leave',
      salary: 490000,
      joined: '2022-02-14',
      leave: {
        annual: { total: 21, used: 12, remaining: 9 },
        sick: { total: 10, used: 3, remaining: 7 },
        casual: { total: 5, used: 1, remaining: 4 }
      },
      performance: { overallRating: 3.9, reviews: 2, goalsCompleted: '6/10', trend: '-1%' },
      appraisal: { cycle: 'H1 2026', status: 'not_started' }
    },
    {
      id: 'EMP-029',
      name: 'Femi Adebayo',
      title: 'Mobile Developer',
      department: 'Engineering',
      email: 'f.adebayo@company.com',
      phone: '+234 807 999 0000',
      manager: 'Daniel Mensah',
      startDate: '01 Jun 2023',
      avatar: 'FA',
      bg: '#FEF2F2',
      color: '#991B1B',
      avatarBg: '#FEF2F2',
      avatarColor: '#991B1B',
      status: 'active',
      salary: 540000,
      joined: '2023-06-01',
      leave: {
        annual: { total: 21, used: 3, remaining: 18 },
        sick: { total: 10, used: 1, remaining: 9 },
        casual: { total: 5, used: 0, remaining: 5 }
      },
      performance: { overallRating: 4.3, reviews: 1, goalsCompleted: '8/10', trend: '+3%' },
      appraisal: { cycle: 'H1 2026', status: 'not_started' }
    },
    {
      id: 'EMP-033',
      name: 'Ngozi Eze',
      title: 'UI Designer',
      department: 'Design',
      email: 'n.eze@company.com',
      phone: '+234 808 121 3434',
      manager: 'Daniel Mensah',
      startDate: '22 Sep 2021',
      avatar: 'NE',
      bg: '#EEF1F7',
      color: '#0F1724',
      avatarBg: '#EEF1F7',
      avatarColor: '#0F1724',
      status: 'active',
      salary: 520000,
      joined: '2021-09-22',
      leave: {
        annual: { total: 21, used: 14, remaining: 7 },
        sick: { total: 10, used: 0, remaining: 10 },
        casual: { total: 5, used: 1, remaining: 4 }
      },
      performance: { overallRating: 4.0, reviews: 2, goalsCompleted: '7/10', trend: '0%' },
      appraisal: { cycle: 'H1 2026', status: 'not_started' }
    },
    {
      id: 'EMP-040',
      name: 'Kunle Aremu',
      title: 'Data Analyst',
      department: 'Engineering',
      email: 'k.aremu@company.com',
      phone: '+234 809 545 6767',
      manager: 'Daniel Mensah',
      startDate: '05 Dec 2022',
      avatar: 'KA',
      bg: '#FFF1F2',
      color: '#BE185D',
      avatarBg: '#FFF1F2',
      avatarColor: '#BE185D',
      status: 'active',
      salary: 580000,
      joined: '2022-12-05',
      leave: {
        annual: { total: 21, used: 8, remaining: 13 },
        sick: { total: 10, used: 4, remaining: 6 },
        casual: { total: 5, used: 1, remaining: 4 }
      },
      performance: { overallRating: 2.8, reviews: 1, goalsCompleted: '4/10', trend: '-5%' },
      appraisal: { cycle: 'H1 2026', status: 'pending_manager' }
    },
    {
      id: 'EMP-002',
      name: 'Chioma Okafor',
      title: 'Senior Engineer',
      department: 'Engineering',
      email: 'chioma.okafor@company.com',
      phone: '+234 805 123 4567',
      manager: 'CTO',
      startDate: '12 Jun 2019',
      avatar: 'CO',
      bg: '#F5F3FF',
      color: '#7C3AED',
      avatarBg: '#F5F3FF',
      avatarColor: '#7C3AED',
      status: 'active',
      salary: 820000,
      joined: '2019-06-12',
      leave: { annual: { total: 21, used: 4, remaining: 17 } },
      skills: ['Python', 'React', 'System Architecture', 'API Design', 'AWS']
    },
    {
      id: 'EMP-003',
      name: 'Tunde Adeyemi',
      title: 'Sales Manager',
      department: 'Sales',
      email: 'tunde.adeyemi@company.com',
      phone: '+234 806 234 5678',
      manager: 'VP Sales',
      startDate: '10 Feb 2020',
      avatar: 'TA',
      bg: '#ECFDF5',
      color: '#10B981',
      avatarBg: '#ECFDF5',
      avatarColor: '#10B981',
      status: 'active',
      salary: 750000,
      joined: '2020-02-10',
      leave: { annual: { total: 21, used: 8, remaining: 13 } },
      skills: ['Sales Strategy', 'CRM', 'Negotiation', 'Lead Generation', 'Presentation']
    },
    {
      id: 'EMP-005',
      name: 'Amara Nwosu',
      title: 'HR Manager',
      department: 'HR',
      email: 'amara.nwosu@company.com',
      phone: '+234 807 345 6789',
      manager: 'CEO',
      startDate: '15 Aug 2021',
      avatar: 'AN',
      bg: '#FFFBEB',
      color: '#B45309',
      avatarBg: '#FFFBEB',
      avatarColor: '#B45309',
      status: 'active',
      salary: 620000,
      joined: '2021-08-15',
      leave: { annual: { total: 21, used: 6, remaining: 15 } },
      skills: ['Recruitment', 'Policy Writing', 'Employee Relations', 'Compliance', 'Onboarding']
    },
    {
      id: 'EMP-006',
      name: 'Segun Oladele',
      title: 'Finance Director',
      department: 'Finance',
      email: 'segun.oladele@company.com',
      phone: '+234 808 456 7890',
      manager: 'CEO',
      startDate: '10 Oct 2018',
      avatar: 'SO',
      bg: '#FEF2F2',
      color: '#EF4444',
      avatarBg: '#FEF2F2',
      avatarColor: '#EF4444',
      status: 'active',
      salary: 950000,
      joined: '2018-10-10',
      leave: { annual: { total: 21, used: 2, remaining: 19 } },
      skills: ['Financial Modelling', 'Budgeting', 'Tax Planning', 'Excel', 'Forecasting']
    },
    {
      id: 'EMP-008',
      name: 'Zainab Hassan',
      title: 'Product Designer',
      department: 'Engineering',
      email: 'zainab.hassan@company.com',
      phone: '+234 809 567 8901',
      manager: 'Chioma Okafor',
      startDate: '15 May 2023',
      avatar: 'ZH',
      bg: '#F5F3FF',
      color: '#7C3AED',
      avatarBg: '#F5F3FF',
      avatarColor: '#7C3AED',
      status: 'active',
      salary: 480000,
      joined: '2023-05-15',
      leave: { annual: { total: 21, used: 5, remaining: 16 } },
      skills: ['Figma', 'UI/UX', 'Prototyping', 'User Research', 'Illustration']
    },
    {
      id: 'EMP-009',
      name: 'Emeka Chukwu',
      title: 'Marketing Specialist',
      department: 'Marketing',
      email: 'emeka.chukwu@company.com',
      phone: '+234 810 678 9012',
      manager: 'Jessica Eze',
      startDate: '20 Jan 2022',
      avatar: 'EC',
      bg: '#EFF6FF',
      color: '#2563EB',
      avatarBg: '#EFF6FF',
      avatarColor: '#2563EB',
      status: 'active',
      salary: 450000,
      joined: '2022-01-20',
      leave: { annual: { total: 21, used: 8, remaining: 13 } },
      skills: ['Email Marketing', 'SEO', 'Copywriting', 'A/B Testing', 'Content Writing']
    },
    {
      id: 'EMP-010',
      name: 'Fatima Ibrahim',
      title: 'Sales Executive',
      department: 'Sales',
      email: 'fatima.ibrahim@company.com',
      phone: '+234 811 789 0123',
      manager: 'Tunde Adeyemi',
      startDate: '12 Nov 2022',
      avatar: 'FI',
      bg: '#ECFDF5',
      color: '#10B981',
      avatarBg: '#ECFDF5',
      avatarColor: '#10B981',
      status: 'active',
      salary: 400000,
      joined: '2022-11-12',
      leave: { annual: { total: 21, used: 10, remaining: 11 } },
      skills: ['Account Management', 'Cold Calling', 'Salesforce', 'Pipeline Management', 'Upselling']
    },
    {
      id: 'EMP-012',
      name: 'David Okonkwo',
      title: 'Backend Developer',
      department: 'Engineering',
      email: 'david.okonkwo@company.com',
      phone: '+234 812 890 1234',
      manager: 'Chioma Okafor',
      startDate: '01 Mar 2023',
      avatar: 'DO',
      bg: '#F5F3FF',
      color: '#7C3AED',
      avatarBg: '#F5F3FF',
      avatarColor: '#7C3AED',
      status: 'active',
      salary: 500000,
      joined: '2023-03-01',
      leave: { annual: { total: 21, used: 3, remaining: 18 } },
      skills: ['Node.js', 'PostgreSQL', 'REST APIs', 'Docker', 'Python']
    },
    {
      id: 'EMP-013',
      name: 'Grace Adekunle',
      title: 'Content Writer',
      department: 'Marketing',
      email: 'grace.adekunle@company.com',
      phone: '+234 813 901 2345',
      manager: 'Jessica Eze',
      startDate: '10 Oct 2022',
      avatar: 'GA',
      bg: '#EFF6FF',
      color: '#2563EB',
      avatarBg: '#EFF6FF',
      avatarColor: '#2563EB',
      status: 'active',
      salary: 380000,
      joined: '2022-10-10',
      leave: { annual: { total: 21, used: 9, remaining: 12 } },
      skills: ['Blog Writing', 'SEO', 'Social Media', 'Content Calendar', 'Brand Voice']
    }
  ],
  
  leaveRequests: [
    { id: 1, type: 'Annual Leave', empId: 'EMP-004', startDate: '2026-06-22', endDate: '2026-06-26', days: 5, reason: 'Family vacation', submittedDate: '2026-06-12', submitted: '2026-06-12', status: 'pending' },
    { id: 2, type: 'Sick Leave', empId: 'EMP-011', startDate: '2026-06-17', endDate: '2026-06-17', days: 1, reason: 'Medical appointment', submittedDate: '2026-06-15', submitted: '2026-06-15', status: 'pending' },
    { id: 3, type: 'Casual Leave', empId: 'EMP-029', startDate: '2026-06-19', endDate: '2026-06-19', days: 1, reason: 'Personal matter', submittedDate: '2026-06-14', submitted: '2026-06-14', status: 'pending' },
    { id: 4, type: 'Annual Leave', empId: 'EMP-007', startDate: '2026-07-06', endDate: '2026-07-10', days: 5, reason: 'Pre-planned trip', submittedDate: '2026-06-10', submitted: '2026-06-10', status: 'pending' },
    { id: 5, type: 'Annual Leave', empId: 'EMP-004', startDate: '2026-06-01', endDate: '2026-06-05', days: 5, reason: 'Vacation', status: 'approved', submittedDate: '2026-05-20', submitted: '2026-05-20', approvedBy: 'CEO', approvalDate: '2026-05-21', decided: '2026-05-21' },
    { id: 6, type: 'Sick Leave', empId: 'EMP-004', startDate: '2026-05-20', endDate: '2026-05-20', days: 1, reason: 'Medical appointment', status: 'approved', submittedDate: '2026-05-19', submitted: '2026-05-19', approvedBy: 'Daniel Mensah', approvalDate: '2026-05-19', decided: '2026-05-19' },
    { id: 7, type: 'Casual Leave', empId: 'EMP-004', startDate: '2026-06-15', endDate: '2026-06-16', days: 2, reason: 'Personal matter', status: 'pending', submittedDate: '2026-06-10', submitted: '2026-06-10' }
  ],
  
  otherRequests: [
    { id: 101, type: 'equipment', title: 'Equipment Request', empId: 'EMP-015', detail: 'New laptop (MacBook Pro 16")', description: 'New laptop (MacBook Pro 16")', submitted: '2026-06-13', submittedDate: '2026-06-13', status: 'pending' },
    { id: 102, type: 'wfh', title: 'Remote Work', empId: 'EMP-040', detail: '2 days per week from home', description: '2 days per week from home', submitted: '2026-06-11', submittedDate: '2026-06-11', status: 'pending' },
    { id: 103, type: 'equipment', title: 'Equipment Request', empId: 'EMP-004', detail: 'Requested new monitor and keyboard for home office setup.', description: 'Requested new monitor and keyboard for home office setup.', status: 'pending', submitted: '2026-06-10', submittedDate: '2026-06-10' },
    { id: 104, type: 'training', title: 'Training Course Enrollment', empId: 'EMP-004', detail: 'Advanced Project Management (PMP) certification.', description: 'Advanced Project Management (PMP) certification.', status: 'approved', submitted: '2026-06-05', submittedDate: '2026-06-05', approvalDate: '2026-06-07', approvedBy: 'CEO', decided: '2026-06-07' },
    { id: 105, type: 'wfh', title: 'Work From Home Request', empId: 'EMP-004', detail: 'Request for 2 days WFH per week.', description: 'Request for 2 days WFH per week.', status: 'rejected', submitted: '2026-06-01', submittedDate: '2026-06-01', rejectionReason: 'Role requires on-site presence.' },
    { id: 106, type: 'travel', title: 'Business Travel Approval', empId: 'EMP-004', detail: 'Trip to Abuja for client onboarding (Jun 22–24).', description: 'Trip to Abuja for client onboarding (Jun 22–24).', status: 'pending', submitted: '2026-06-12', submittedDate: '2026-06-12' },
    { id: 107, type: 'expense', title: 'Expense Reimbursement', empId: 'EMP-004', detail: 'Client lunch and Uber receipts — total ₦42,500.', description: 'Client lunch and Uber receipts — total ₦42,500.', status: 'approved', submitted: '2026-05-28', submittedDate: '2026-05-28', approvalDate: '2026-05-30', approvedBy: 'Finance', decided: '2026-05-30' },
    { id: 108, type: 'admin', title: 'ID Card Replacement', empId: 'EMP-004', detail: 'Lost access badge — replacement needed.', description: 'Lost access badge — replacement needed.', status: 'approved', submitted: '2026-05-15', submittedDate: '2026-05-15', approvalDate: '2026-05-16', approvedBy: 'HR', decided: '2026-05-16' },
    { id: 109, type: 'finance', title: 'Salary Advance', empId: 'EMP-004', detail: 'Requested 30% advance against June salary.', description: 'Requested 30% advance against June salary.', status: 'rejected', submitted: '2026-05-10', submittedDate: '2026-05-10', rejectionReason: 'Outside current advance policy window.' },
    { id: 110, type: 'training', title: 'Conference Attendance', empId: 'EMP-004', detail: 'DevFest Lagos 2026 — registration & 1-day leave.', description: 'DevFest Lagos 2026 — registration & 1-day leave.', status: 'pending', submitted: '2026-06-14', submittedDate: '2026-06-14' }
  ],
  
  history: [
    { id: 'h1', type: 'Annual Leave', empId: 'EMP-022', days: 3, decided: '2026-06-09', status: 'approved' },
    { id: 'h2', type: 'Expense Claim', empId: 'EMP-007', detail: '₦42,000 client lunch', decided: '2026-06-05', status: 'approved' },
    { id: 'h3', type: 'Annual Leave', empId: 'EMP-033', days: 7, decided: '2026-06-01', status: 'rejected' }
  ],
  
  courses: [
    { id: 'c1', name: 'Advanced TypeScript', title: 'Advanced TypeScript', level: 'Advanced', hours: 10, instructor: 'Sarah Smith', description: 'Deep dive into advanced TypeScript types and patterns.', image: 'https://images.unsplash.com/photo-1516116211223-5c359a36298a?w=600&h=300&fit=crop' },
    { id: 'c2', name: 'Leadership Foundations', title: 'Leadership Foundations', level: 'Intermediate', hours: 6, instructor: 'Michael Brown', description: 'Core principles of management and team leadership.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop' },
    { id: 'c3', name: 'Cloud Architecture (AWS)', title: 'Cloud Architecture (AWS)', level: 'Advanced', hours: 16, instructor: 'Alex Jones', description: 'Designing secure and scalable cloud infrastructure on AWS.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop' },
    { id: 'c4', name: 'Effective Code Reviews', title: 'Effective Code Reviews', level: 'Intermediate', hours: 4, instructor: 'Emily White', description: 'Best practices for conducting productive code reviews.', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=300&fit=crop' },
    { id: 'c5', name: 'Data Protection & Compliance', title: 'Data Protection & Compliance', level: 'Beginner', hours: 3, instructor: 'Grace Lee', description: 'Compliance rules, GDPR, and safeguarding sensitive company data.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop' },
    { id: 1, title: 'Advanced Excel Skills', name: 'Advanced Excel Skills', level: 'Intermediate', hours: 8, instructor: 'John Smith', description: 'Master pivot tables, advanced formulas, macros and dashboards.', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=300&fit=crop' },
    { id: 2, title: 'Leadership Essentials', name: 'Leadership Essentials', level: 'Advanced', hours: 12, instructor: 'Sarah Johnson', description: 'Build the mindset and skills to lead high-performing teams.', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=300&fit=crop' },
    { id: 5, title: 'Project Management (PMP Prep)', name: 'Project Management (PMP Prep)', level: 'Advanced', hours: 20, instructor: 'David Okafor', description: 'A complete prep course covering PMBOK and agile delivery.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop' },
    { id: 6, title: 'UX Design Fundamentals', name: 'UX Design Fundamentals', level: 'Beginner', hours: 9, instructor: 'Amaka Bello', description: 'Research, wireframing and prototyping for product designers.', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=300&fit=crop' },
    { id: 7, title: 'Cybersecurity Awareness', name: 'Cybersecurity Awareness', level: 'Beginner', hours: 4, instructor: 'Tunde Adebayo', description: 'Phishing, passwords and safe handling of company data.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop' },
    { id: 8, title: 'Public Speaking Mastery', name: 'Public Speaking Mastery', level: 'Intermediate', hours: 6, instructor: 'Linda Park', description: 'Craft and deliver presentations with confidence and clarity.', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=300&fit=crop' },
    { id: 3, title: 'Communication Skills', name: 'Communication Skills', level: 'Beginner', hours: 6, instructor: 'Mike Brown', description: 'Effective written and verbal workplace communication.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop' },
    { id: 9, title: 'Time Management', name: 'Time Management', level: 'Beginner', hours: 3, instructor: 'Grace Lee', description: 'Prioritisation frameworks and deep-work techniques.', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=300&fit=crop' },
    { id: 4, title: 'Data Analysis Basics', name: 'Data Analysis Basics', level: 'Intermediate', hours: 10, instructor: 'Jane Doe', description: 'Foundations of analytics with spreadsheets and SQL.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop' },
    { id: 10, title: 'Intro to Python', name: 'Intro to Python', level: 'Beginner', hours: 14, instructor: 'Chinedu Eze', description: 'Programming fundamentals using Python for automation.', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=300&fit=crop' }
  ],
  
  trainings: [
    { id: 't1', courseId: 'c1', empId: 'EMP-004', due: '2026-07-15', progress: 60, status: 'in-progress' },
    { id: 't2', courseId: 'c4', empId: 'EMP-011', due: '2026-06-30', progress: 100, status: 'completed' },
    { id: 't3', courseId: 'c3', empId: 'EMP-015', due: '2026-08-01', progress: 25, status: 'in-progress' },
    { id: 't4', courseId: 'c2', empId: 'EMP-007', due: '2026-07-20', progress: 80, status: 'in-progress' },
    { id: 't5', courseId: 'c5', empId: 'EMP-040', due: '2026-06-25', progress: 0, status: 'not-started' },
    { id: 't6', courseId: 3, empId: 'EMP-004', due: '2026-06-15', progress: 100, status: 'completed', enrolledDate: '2026-04-15', completedDate: '2026-05-15' },
    { id: 't7', courseId: 9, empId: 'EMP-004', due: '2026-04-10', progress: 100, status: 'completed', enrolledDate: '2026-02-20', completedDate: '2026-03-10' },
    { id: 't8', courseId: 4, empId: 'EMP-004', due: '2026-06-30', progress: 65, status: 'in-progress', enrolledDate: '2026-05-01' },
    { id: 't9', courseId: 10, empId: 'EMP-004', due: '2026-07-15', progress: 30, status: 'in-progress', enrolledDate: '2026-06-01' }
  ],
  
  announcements: [
    { id: 1, title: 'Q3 Planning Kickoff', body: 'Q3 planning sessions begin July 1st. Please submit your team OKRs by June 25.', msg: 'Q3 planning sessions begin July 1st. Please submit your team OKRs by June 25.', type: 'info', priority: 'important', date: '2026-06-12', author: 'Daniel Mensah' },
    { id: 2, title: 'Office Closed June 21', body: 'The Lagos HQ will be closed on June 21 for facility upgrades. Work from home that day.', msg: 'The Lagos HQ will be closed on June 21 for facility upgrades. Work from home that day.', type: 'warning', priority: 'urgent', date: '2026-06-10', author: 'HR Team' },
    { id: 3, title: 'New Health Benefits', body: 'Enhanced health insurance plan rolling out July 1. Details in your inbox.', msg: 'Enhanced health insurance plan rolling out July 1. Details in your inbox.', type: 'info', priority: 'info', date: '2026-06-08', author: 'HR Team' },
    { id: 4, title: 'Q2 Town Hall — June 20, 2026', body: 'All-hands meeting at 2pm in the main boardroom. Virtual link shared via email.', msg: 'All-hands meeting at 2pm in the main boardroom. Virtual link shared via email.', type: 'info', priority: 'info', date: 'Jun 9', author: 'HR Team' },
    { id: 5, title: 'Mid-year bonus processed 🎉', body: 'Performance bonuses have been added to the June payroll. Check your payslip.', msg: 'Performance bonuses have been added to the June payroll. Check your payslip.', type: 'success', priority: 'success', date: 'Jun 8', author: 'Finance Team' },
    { id: 6, title: 'Performance review deadline: Jun 30', body: 'Complete your self-assessment before the deadline to avoid a delayed review.', msg: 'Complete your self-assessment before the deadline to avoid a delayed review.', type: 'warning', priority: 'warning', date: 'Jun 5', author: 'HR Team' }
  ],
  
  teamAttendance: {},
  
  burnoutAlerts: [
    { id: 1, name: 'Grace Adekunle', role: 'Social Media Associate', department: 'Marketing', riskScore: 85, status: 'high', signals: ['3 unplanned sick days in 2 weeks', '18 hrs overtime logged', 'Declining pulse emoji rating'] },
    { id: 2, name: 'Funmi Alao', role: 'Content Writer', department: 'Marketing', riskScore: 56, status: 'watch', signals: ['Overtime logged (+8 hrs)', 'Pending casual leave request'] },
    { id: 3, name: 'Tunde Adeyemi', role: 'Sales Manager', department: 'Sales', riskScore: 48, status: 'watch', signals: ['Leave request rejected recently', 'Late arrival days (+2)'] },
    { id: 4, name: 'Jessica Eze', role: 'Marketing Lead', department: 'Marketing', riskScore: 16, status: 'low', signals: ['Healthy balance', 'High project completion rate'] },
    { id: 5, name: 'Chioma Okafor', role: 'Senior Engineer', department: 'Engineering', riskScore: 11, status: 'low', signals: ['Stable work hours', 'High engagement scores'] }
  ],
  
  pulses: [
    { id: 1, name: 'Funmi Alao', rating: 3, comment: 'Feeling a bit behind on writing deadlines, but working through it.', project: 'Website Revamp', date: '2026-06-12' },
    { id: 2, name: 'Grace Adekunle', rating: 2, comment: 'Very high workload this week preparing for the presentation.', project: 'Q2 Launch Campaign', date: '2026-06-11' },
    { id: 3, name: 'Chioma Okafor', rating: 5, comment: 'Engine sprint completed successfully! Feeling great.', project: 'Q2 Launch Campaign', date: '2026-06-10' }
  ],
  
  liveActivities: [
    { id: 1, type: 'info', message: 'Tunde Adeyemi posted a new sales report.', time: '1 hour ago', icon: 'ti-file-report' },
    { id: 2, type: 'success', message: 'Zainab Hassan completed the Figma prototype for Crewly.', time: '2 hours ago', icon: 'ti-checkbox' },
    { id: 3, type: 'warning', message: 'Burnout risk warning: Grace Adekunle is working late hours.', time: '3 hours ago', icon: 'ti-alert-triangle' }
  ],
  
  shifts: [
    { employeeId: 1, name: 'Jessica Eze', role: 'Marketing Lead', department: 'Marketing', Mon: '09:00 - 17:00', Tue: '09:00 - 17:00', Wed: '09:00 - 17:00', Thu: '09:00 - 17:00', Fri: '09:00 - 17:00', status: { Mon: 'active', Tue: 'active', Wed: 'active', Thu: 'active', Fri: 'active' } },
    { employeeId: 10, name: 'Grace Adekunle', role: 'Content Writer', department: 'Marketing', Mon: '09:00 - 17:00', Tue: '09:00 - 17:00', Wed: '09:00 - 17:00', Thu: '09:00 - 17:00', Fri: '09:00 - 17:00', status: { Mon: 'active', Tue: 'active', Wed: 'active', Thu: 'active', Fri: 'active' } },
    { employeeId: 7, name: 'Emeka Chukwu', role: 'Marketing Specialist', department: 'Marketing', Mon: '09:00 - 17:00', Tue: 'OFF', Wed: '09:00 - 17:00', Thu: 'OFF', Fri: '09:00 - 17:00', status: { Mon: 'active', Tue: 'off', Wed: 'active', Thu: 'off', Fri: 'active' } },
    { employeeId: 2, name: 'Chioma Okafor', role: 'Senior Engineer', department: 'Engineering', Mon: '09:00 - 17:00', Tue: '09:00 - 17:00', Wed: '09:00 - 17:00', Thu: '09:00 - 17:00', Fri: '09:00 - 17:00', status: { Mon: 'active', Tue: 'active', Wed: 'active', Thu: 'active', Fri: 'active' } },
    { employeeId: 6, name: 'Zainab Hassan', role: 'Product Designer', department: 'Engineering', Mon: '09:00 - 17:00', Tue: '09:00 - 17:00', Wed: '09:00 - 17:00', Thu: '09:00 - 17:00', Fri: '09:00 - 17:00', status: { Mon: 'active', Tue: 'active', Wed: 'active', Thu: 'active', Fri: 'active' } },
    { employeeId: 9, name: 'David Okonkwo', role: 'Backend Developer', department: 'Engineering', Mon: 'OFF', Tue: '09:00 - 17:00', Wed: 'OFF', Thu: '09:00 - 17:00', Fri: 'OFF', status: { Mon: 'off', Tue: 'active', Wed: 'off', Thu: 'active', Fri: 'off' } }
  ]
};

let sharedDb = null;
function loadSharedDb() {
  try {
    const raw = localStorage.getItem('crewly_shared_db');
    if (raw) {
      sharedDb = JSON.parse(raw);
    } else {
      sharedDb = defaultSharedDb;
      saveSharedDb();
    }
  } catch (e) {
    sharedDb = defaultSharedDb;
  }
}
function saveSharedDb() {
  try {
    localStorage.setItem('crewly_shared_db', JSON.stringify(sharedDb));
  } catch (e) {
    console.error('Failed to save shared database:', e);
  }
}
loadSharedDb();

const mgr = {
  get manager() {
    return sharedDb.manager;
  },
  set manager(val) {
    sharedDb.manager = val;
    saveSharedDb();
  },
  get team() {
    return sharedDb.employees.filter(e => e.manager === 'Daniel Mensah').map(e => {
      return new Proxy(e, {
        get(target, prop) {
          if (prop === 'dept') return target.department;
          return target[prop];
        },
        set(target, prop, value) {
          if (prop === 'dept') target.department = value;
          else target[prop] = value;
          saveSharedDb();
          return true;
        }
      });
    });
  },
  get attendance() {
    if (!sharedDb.teamAttendance) {
      sharedDb.teamAttendance = {};
    }
    return sharedDb.teamAttendance;
  },
  set attendance(val) {
    sharedDb.teamAttendance = val;
    saveSharedDb();
  },
  get approvals() {
    return sharedDb.leaveRequests;
  },
  set approvals(val) {
    sharedDb.leaveRequests = val;
    saveSharedDb();
  },
  get otherRequests() {
    return sharedDb.otherRequests;
  },
  set otherRequests(val) {
    sharedDb.otherRequests = val;
    saveSharedDb();
  },
  get history() {
    if (!sharedDb.history) {
      sharedDb.history = [];
    }
    return sharedDb.history;
  },
  set history(val) {
    sharedDb.history = val;
    saveSharedDb();
  },
  get performance() {
    const perfDict = {};
    sharedDb.employees.filter(e => e.manager === 'Daniel Mensah').forEach(e => {
      const ep = e.performance || { overallRating: 4.0, goalsCompleted: '8/10', trend: '+0%' };
      perfDict[e.id] = new Proxy(ep, {
        get(target, prop) {
          if (prop === 'rating') return target.overallRating || 0;
          if (prop === 'goals') return target.goalsCompleted || '0/0';
          return target[prop];
        },
        set(target, prop, value) {
          if (prop === 'rating') target.overallRating = value;
          else if (prop === 'goals') target.goalsCompleted = value;
          else target[prop] = value;
          saveSharedDb();
          return true;
        }
      });
    });
    return perfDict;
  },
  get appraisals() {
    return sharedDb.employees.filter(e => e.manager === 'Daniel Mensah').map(e => {
      const app = e.appraisal || { cycle: 'H1 2026', status: 'not_started' };
      return new Proxy(app, {
        get(target, prop) {
          if (prop === 'empId') return e.id;
          if (prop === 'stage') {
            if (target.status === 'pending_manager') return 'manager-review';
            if (target.status === 'calibration' || target.status === 'pending_hr') return 'calibration';
            if (target.status === 'completed') return 'completed';
            return 'awaiting-self';
          }
          if (prop === 'selfSubmitted') return target.submittedDate;
          if (prop === 'dueDate') return '2026-06-30';
          return target[prop];
        },
        set(target, prop, value) {
          if (prop === 'stage') {
            if (value === 'manager-review') target.status = 'pending_manager';
            else if (value === 'calibration' || value === 'pending_hr') target.status = 'pending_hr';
            else if (value === 'completed') target.status = 'completed';
            else target.status = 'not_started';
          } else if (prop === 'selfSubmitted') {
            target.submittedDate = value;
          } else {
            target[prop] = value;
          }
          saveSharedDb();
          return true;
        }
      });
    });
  },
  get courses() {
    return sharedDb.courses;
  },
  set courses(val) {
    sharedDb.courses = val;
    saveSharedDb();
  },
  get trainings() {
    return sharedDb.trainings;
  },
  set trainings(val) {
    sharedDb.trainings = val;
    saveSharedDb();
  },
  get announcements() {
    return sharedDb.announcements;
  },
  set announcements(val) {
    sharedDb.announcements = val;
    saveSharedDb();
  },
  get notifications() {
    if (!sharedDb.managerNotifications) {
      sharedDb.managerNotifications = [
        { id: 1, msg: 'Jessica Eze submitted a leave request', time: '10 min ago', unread: true },
        { id: 2, msg: 'Amaka Okafor submitted sick leave', time: '1 hour ago', unread: true },
        { id: 3, msg: 'Ngozi Eze submitted casual leave', time: '3 hours ago', unread: true },
        { id: 4, msg: 'Tunde Bakare completed Code Review training', time: 'Yesterday', unread: false }
      ];
    }
    return sharedDb.managerNotifications;
  },
  set notifications(val) {
    sharedDb.managerNotifications = val;
    saveSharedDb();
  },
  get activity() {
    if (!sharedDb.managerActivity) {
      sharedDb.managerActivity = [
        { icon: 'ti-checks', color: '#10B981', bg: '#ECFDF5', text: 'Approved leave for Chioma Nwankwo', time: '2 days ago' },
        { icon: 'ti-clipboard-check', color: '#7C3AED', bg: '#F5F3FF', text: 'Submitted H1 review for Tunde Bakare', time: '3 days ago' },
        { icon: 'ti-school', color: '#B45309', bg: '#FFFBEB', text: 'Assigned 2 training courses', time: '4 days ago' },
        { icon: 'ti-speakerphone', color: '#2563EB', bg: '#EFF6FF', text: 'Posted Q3 planning announcement', time: '5 days ago' }
      ];
    }
    return sharedDb.managerActivity;
  },
  set activity(val) {
    sharedDb.managerActivity = val;
    saveSharedDb();
  }
};

function saveData() {
  saveSharedDb();
}

// generate team attendance for today if not already present for today
const todayISO = new Date().toISOString().slice(0, 10);
if (!mgr.attendance || Object.keys(mgr.attendance).length === 0 || Object.values(mgr.attendance)[0].date !== todayISO) {
  mgr.attendance = {};
  mgr.team.forEach(e => {
    let status = 'present', clockIn = '08:30', lateBy = 0;
    if (e.id === 'EMP-022') { status = 'leave'; clockIn = '—'; }
    else if (e.id === 'EMP-040') { status = 'late'; clockIn = '09:25'; lateBy = 25; }
    else {
      const h = 8 + Math.floor(Math.random() * 1);
      const m = Math.floor(Math.random() * 45);
      clockIn = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
    }
    mgr.attendance[e.id] = { date: todayISO, clockIn, clockOut: status === 'leave' ? '—' : '17:30', hours: status === 'leave' ? 0 : 9, status, lateBy };
  });
  saveData();
}

// ── NAVIGATION ──
function showPage(page) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page === page));
  document.querySelectorAll('main.content > section').forEach(s => s.classList.add('hidden'));
  const sec = document.getElementById('page-' + page);
  if (sec) sec.classList.remove('hidden');
  const titles = { home: ['Dashboard', "Good morning, Daniel"], team: ['My Team', 'Manage your direct reports'], approvals: ['Pending Approvals', 'Review and decide on requests'], attendance: ['Team Attendance', "Today's overview"], performance: ['Performance', 'Team ratings and metrics'], appraisal: ['Appraisals', 'Review cycle status'], training: ['Training', 'Assign and track courses'], payroll: ['Payroll', 'Team compensation summary'], reports: ['Reports', 'Analytics and exports'], announcements: ['Announcements', 'Communicate with your team'], settings: ['Settings', 'Manage your preferences'] };
  const t = titles[page] || ['Dashboard', ''];
  document.getElementById('page-title').textContent = t[0];
  document.getElementById('page-breadcrumb').textContent = t[1];
  window.scrollTo(0, 0);
}

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => showPage(n.dataset.page)));

// ── TABS (Approvals) ──
document.querySelectorAll('#page-approvals .ptab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('#page-approvals .ptab').forEach(x => x.classList.remove('on'));
    t.classList.add('on');
    ['leave','other','history'].forEach(id => document.getElementById('ap-' + id).classList.add('hidden'));
    document.getElementById('ap-' + t.dataset.tab).classList.remove('hidden');
  });
});

// ── UTIL ──
function empById(id) { return mgr.team.find(e => e.id === id) || { name: id, avatar: '?', bg: '#EEF1F7', color: '#0F1724', title: '', dept: '' }; }
function avatar(e, sz = 'avatar-sm') { return `<div class="${sz}" style="background:${e.bg};color:${e.color};">${e.avatar}</div>`; }
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.opacity = '1'; t.style.transform = 'translateY(0)';
  clearTimeout(window._tt);
  window._tt = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; }, 2200);
}

// ── DATE ──
function setDate() {
  const d = new Date();
  document.getElementById('today-day').textContent = d.toLocaleDateString('en-US', { weekday: 'long' });
  document.getElementById('today-date').textContent = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── DASHBOARD ──
function renderDashboard() {
  const present = Object.values(mgr.attendance).filter(a => a.status === 'present').length;
  const late = Object.values(mgr.attendance).filter(a => a.status === 'late').length;
  document.getElementById('kpi-team').textContent = mgr.team.length;
  document.getElementById('kpi-present').textContent = present + late;
  document.getElementById('kpi-present-sub').textContent = Math.round(((present + late) / mgr.team.length) * 100) + '% attendance';
  document.getElementById('kpi-pending').textContent = mgr.approvals.filter(a => a.status === 'pending').length + mgr.otherRequests.filter(a => a.status === 'pending').length;
  const ratings = Object.values(mgr.performance).map(p => p.rating);
  const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
  document.getElementById('kpi-perf').innerHTML = Math.round(avg / 5 * 100) + '<span style="font-size:16px;font-weight:500;">%</span>';

  document.getElementById('activity-list').innerHTML = mgr.activity.map(a =>
    `<div class="announcement-item"><div class="ann-icon" style="background:${a.bg};"><i class="ti ${a.icon}" style="color:${a.color};"></i></div><div class="ann-body"><div class="ann-title">${a.text}</div><div class="ann-meta">${a.time}</div></div></div>`
  ).join('');

  // home team status (first 5)
  const rows = mgr.team.slice(0, 5).map(e => {
    const a = mgr.attendance[e.id];
    const pill = a.status === 'present' ? 'pill-green' : a.status === 'late' ? 'pill-amber' : a.status === 'leave' ? 'pill-purple' : 'pill-red';
    return `<tr><td><div class="row-avatar">${avatar(e)}<div><div style="font-weight:600;">${e.name}</div><div style="font-size:11px;color:var(--text-tertiary);">${e.title}</div></div></div></td><td><span class="pill ${pill}">${a.status.toUpperCase()}</span></td><td>${a.clockIn}</td><td>${a.clockOut}</td></tr>`;
  }).join('');
  document.getElementById('home-team-status').innerHTML = `<table class="team-table"><thead><tr><th>Employee</th><th>Status</th><th>Clock In</th><th>Clock Out</th></tr></thead><tbody>${rows}</tbody></table>`;

  document.getElementById('nav-approval-count').textContent = mgr.approvals.filter(a => a.status === 'pending').length + mgr.otherRequests.filter(a => a.status === 'pending').length;
}

// ── TEAM ──
function renderTeam() {
  const q = (document.getElementById('team-search')?.value || '').toLowerCase();
  const dept = document.getElementById('team-dept')?.value || '';
  const depts = [...new Set(mgr.team.map(e => e.dept))];
  const sel = document.getElementById('team-dept');
  if (sel.options.length <= 1) depts.forEach(d => { const o = document.createElement('option'); o.value = d; o.textContent = d; sel.appendChild(o); });
  const filtered = mgr.team.filter(e => (!q || e.name.toLowerCase().includes(q) || e.title.toLowerCase().includes(q) || e.id.toLowerCase().includes(q)) && (!dept || e.dept === dept));
  const rows = filtered.map(e => {
    const a = mgr.attendance[e.id];
    const pill = a.status === 'present' ? 'pill-green' : a.status === 'late' ? 'pill-amber' : a.status === 'leave' ? 'pill-purple' : 'pill-red';
    return `<tr><td><div class="row-avatar">${avatar(e)}<div><div style="font-weight:600;">${e.name}</div><div style="font-size:11px;color:var(--text-tertiary);">${e.id}</div></div></div></td><td>${e.title}</td><td>${e.dept}</td><td>${e.email}</td><td><span class="pill ${pill}">${a.status.toUpperCase()}</span></td><td>${fmtNGN(e.salary)}</td></tr>`;
  }).join('');
  document.getElementById('team-table-wrap').innerHTML = `<table class="team-table"><thead><tr><th>Name</th><th>Title</th><th>Department</th><th>Email</th><th>Today</th><th>Salary</th></tr></thead><tbody>${rows || '<tr><td colspan="6" style="text-align:center;padding:20px;color:var(--text-tertiary);">No matches</td></tr>'}</tbody></table>`;
}

function exportTeam() { toast('Team exported as CSV'); }

// ── APPROVALS ──
function renderApprovals() {
  const leave = mgr.approvals.filter(a => a.status === 'pending');
  document.getElementById('ap-leave').innerHTML = leave.length ? leave.map(a => {
    const e = empById(a.empId);
    return `<div class="approval-card"><div style="display:flex;gap:12px;flex:1;">${avatar(e)}<div><div style="font-weight:600;">${e.name} <span class="pill pill-blue" style="margin-left:6px;">${a.type}</span></div><div style="font-size:13px;color:var(--text-secondary);margin-top:4px;">${a.startDate} → ${a.endDate} · ${a.days} day${a.days>1?'s':''}</div><div style="font-size:13px;margin-top:6px;">${a.reason}</div><div class="approval-meta">Submitted ${a.submitted}</div></div></div><div class="approval-actions"><button class="btn-success" onclick="decideApproval(${a.id},'approved')"><i class="ti ti-check"></i> Approve</button><button class="btn-danger" onclick="decideApproval(${a.id},'rejected')"><i class="ti ti-x"></i> Reject</button></div></div>`;
  }).join('') : `<div style="padding:24px;text-align:center;color:var(--text-tertiary);">No pending leave requests 🎉</div>`;

  const other = mgr.otherRequests.filter(r => r.status === 'pending');
  document.getElementById('ap-other').innerHTML = other.length ? other.map(r => {
    const e = empById(r.empId);
    return `<div class="approval-card"><div style="display:flex;gap:12px;flex:1;">${avatar(e)}<div><div style="font-weight:600;">${e.name} <span class="pill pill-purple" style="margin-left:6px;">${r.type}</span></div><div style="font-size:13px;margin-top:6px;">${r.detail}</div><div class="approval-meta">Submitted ${r.submitted}</div></div></div><div class="approval-actions"><button class="btn-success" onclick="decideOther(${r.id},'approved')"><i class="ti ti-check"></i> Approve</button><button class="btn-danger" onclick="decideOther(${r.id},'rejected')"><i class="ti ti-x"></i> Reject</button></div></div>`;
  }).join('') : `<div style="padding:24px;text-align:center;color:var(--text-tertiary);">No other pending requests</div>`;

  document.getElementById('ap-history').innerHTML = mgr.history.map(h => {
    const e = empById(h.empId);
    const pill = h.status === 'approved' ? 'pill-green' : 'pill-red';
    return `<div class="approval-card"><div style="display:flex;gap:12px;flex:1;">${avatar(e)}<div><div style="font-weight:600;">${e.name} <span class="pill pill-blue" style="margin-left:6px;">${h.type}</span></div><div style="font-size:13px;color:var(--text-secondary);margin-top:4px;">${h.days ? h.days + ' days' : h.detail}</div><div class="approval-meta">Decided ${h.decided}</div></div></div><div><span class="pill ${pill}">${h.status.toUpperCase()}</span></div></div>`;
  }).join('');
}
function decideApproval(id, status) {
  const a = mgr.approvals.find(x => x.id === id);
  if (!a) return;
  a.status = status;
  
  if (status === 'approved') {
    const e = sharedDb.employees.find(x => x.id === a.empId);
    if (e && e.leave) {
      const typeKey = a.type.toLowerCase().split(' ')[0];
      if (e.leave[typeKey]) {
        e.leave[typeKey].used += a.days;
        e.leave[typeKey].remaining = Math.max(0, e.leave[typeKey].total - e.leave[typeKey].used);
      }
    }
  }

  const e = sharedDb.employees.find(x => x.id === a.empId);
  if (e) {
    if (!e.notifications) e.notifications = [];
    e.notifications.unshift({
      id: Date.now(),
      message: `Your ${a.type} request has been ${status}`,
      date: 'Just now',
      read: false,
      type: 'leave',
      actionUrl: '#leave'
    });
  }

  mgr.history.unshift({ id: 'h' + Date.now(), type: a.type, empId: a.empId, days: a.days, decided: new Date().toISOString().slice(0, 10), status });
  toast(`Request ${status}`);
  saveData();
  renderApprovals(); renderDashboard();
}
function decideOther(id, status) {
  const r = mgr.otherRequests.find(x => x.id === id);
  if (!r) return;
  r.status = status;
  
  const e = sharedDb.employees.find(x => x.id === r.empId);
  if (e) {
    if (!e.notifications) e.notifications = [];
    e.notifications.unshift({
      id: Date.now(),
      message: `Your ${r.type} request ("${r.detail}") has been ${status}`,
      date: 'Just now',
      read: false,
      type: 'request',
      actionUrl: '#requests'
    });
  }

  mgr.history.unshift({ id: 'h' + Date.now(), type: r.type, empId: r.empId, detail: r.detail, decided: new Date().toISOString().slice(0, 10), status });
  toast(`Request ${status}`);
  saveData();
  renderApprovals(); renderDashboard();
}

// ── TEAM ATTENDANCE ──
function renderTeamAttendance() {
  const att = mgr.attendance;
  const counts = { present: 0, late: 0, absent: 0, leave: 0 };
  Object.values(att).forEach(a => counts[a.status] = (counts[a.status] || 0) + 1);
  document.getElementById('att-present').textContent = counts.present;
  document.getElementById('att-late').textContent = counts.late;
  document.getElementById('att-absent').textContent = counts.absent;
  document.getElementById('att-leave').textContent = counts.leave;
  const rows = mgr.team.map(e => {
    const a = att[e.id];
    const pill = a.status === 'present' ? 'pill-green' : a.status === 'late' ? 'pill-amber' : a.status === 'leave' ? 'pill-purple' : 'pill-red';
    return `<tr><td><div class="row-avatar">${avatar(e)}<div><div style="font-weight:600;">${e.name}</div><div style="font-size:11px;color:var(--text-tertiary);">${e.id}</div></div></div></td><td><span class="pill ${pill}">${a.status.toUpperCase()}</span></td><td>${a.clockIn}</td><td>${a.clockOut}</td><td>${a.hours} hrs</td><td>${a.lateBy ? a.lateBy + ' min' : '—'}</td></tr>`;
  }).join('');
  document.getElementById('team-attendance-table').innerHTML = `<table class="team-table"><thead><tr><th>Employee</th><th>Status</th><th>Clock In</th><th>Clock Out</th><th>Hours</th><th>Late</th></tr></thead><tbody>${rows}</tbody></table>`;
}
function exportAttendance() { toast('Attendance report exported'); }

// ── PERFORMANCE ──
function renderPerformance() {
  const ratings = Object.values(mgr.performance).map(p => p.rating);
  const avg = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
  const topId = Object.entries(mgr.performance).sort((a, b) => b[1].rating - a[1].rating)[0][0];
  const lowCount = Object.values(mgr.performance).filter(p => p.rating < 3.0).length;
  document.getElementById('perf-avg').textContent = avg;
  document.getElementById('perf-top').textContent = empById(topId).name;
  const totalGoals = Object.values(mgr.performance).reduce((s, p) => { const [a, b] = p.goals.split('/').map(Number); return { d: s.d + a, t: s.t + b }; }, { d: 0, t: 0 });
  document.getElementById('perf-goals').textContent = totalGoals.d + '/' + totalGoals.t;
  document.getElementById('perf-low').textContent = lowCount;

  const rows = mgr.team.map(e => {
    const p = mgr.performance[e.id] || { rating: 0, goals: '0/0', trend: '0%' };
    const pct = Math.round(p.rating / 5 * 100);
    const trendClass = p.trend.startsWith('-') ? 'kpi-trend-down' : 'kpi-trend-up';
    return `<tr><td><div class="row-avatar">${avatar(e)}<div><div style="font-weight:600;">${e.name}</div><div style="font-size:11px;color:var(--text-tertiary);">${e.title}</div></div></div></td><td><strong>${p.rating}</strong> / 5.0<div class="mini-bar"><div style="width:${pct}%;"></div></div></td><td>${p.goals}</td><td class="${trendClass}">${p.trend}</td><td><button class="btn btn-secondary" onclick="toast('Opening review for ${e.name}')"><i class="ti ti-eye"></i> Review</button></td></tr>`;
  }).join('');
  document.getElementById('perf-team-table').innerHTML = `<table class="team-table"><thead><tr><th>Employee</th><th>Rating</th><th>Goals</th><th>Trend</th><th></th></tr></thead><tbody>${rows}</tbody></table>`;
}

// ── APPRAISALS ──
function renderAppraisals() {
  const stages = ['Self-Assessment', 'Manager Review', 'Calibration', 'Final Sign-off'];
  const current = 1; // manager review stage
  document.getElementById('appraisal-flow').innerHTML = stages.map((s, i) => {
    const cls = i < current ? 'done' : i === current ? 'active' : '';
    return `<div class="flow-step ${cls}"><div class="flow-circle">${i + 1}</div><div class="flow-label">${s}</div></div>`;
  }).join('<div class="flow-line"></div>');

  document.getElementById('appraisal-list').innerHTML = mgr.appraisals.map(a => {
    const e = empById(a.empId);
    const pill = a.stage === 'manager-review' ? 'pill-amber' : a.stage === 'awaiting-self' ? 'pill-blue' : 'pill-green';
    const label = a.stage.replace('-', ' ').toUpperCase();
    return `<div class="approval-card"><div style="display:flex;gap:12px;flex:1;">${avatar(e)}<div><div style="font-weight:600;">${e.name}</div><div style="font-size:13px;color:var(--text-secondary);margin-top:4px;">${e.title}</div><div class="approval-meta">Self submitted: ${a.selfSubmitted || '—'} · Due ${a.dueDate}</div></div></div><div style="display:flex;align-items:center;gap:10px;"><span class="pill ${pill}">${label}</span>${a.stage === 'manager-review' ? `<button class="btn btn-primary" onclick="openAppraisalReview('${a.empId}')"><i class="ti ti-clipboard-check"></i> Review</button>` : ''}</div></div>`;
  }).join('');
}

function openAppraisalReview(empId) {
  const e = empById(empId);
  const a = mgr.appraisals.find(x => x.empId === empId);
  if (!e || !a) return;

  document.getElementById('appraisal-emp-id').value = empId;
  document.getElementById('appraisal-emp-name').textContent = e.name;
  document.getElementById('appraisal-emp-title').textContent = e.title;
  document.getElementById('appraisal-avatar-wrap').innerHTML = avatar(e, 'avatar-md');
  
  document.getElementById('appraisal-self-text').textContent = a.selfSubmitted 
    ? `${e.name} submitted self-assessment on ${a.selfSubmitted}. They gave themselves a rating of ${mgr.performance[empId]?.rating || '4.0'}/5.0.` 
    : `${e.name} has not submitted their self-assessment yet.`;

  document.getElementById('appraisal-rating').value = mgr.performance[empId]?.rating || '4.0';
  document.getElementById('appraisal-comments').value = '';
  document.getElementById('appraisal-modal').classList.remove('hidden');
}

function closeAppraisalModal() {
  document.getElementById('appraisal-modal').classList.add('hidden');
}

function saveAppraisalReview(ev) {
  ev.preventDefault();
  const empId = document.getElementById('appraisal-emp-id').value;
  const rating = parseFloat(document.getElementById('appraisal-rating').value);
  const comments = document.getElementById('appraisal-comments').value.trim();

  const a = mgr.appraisals.find(x => x.empId === empId);
  if (a) {
    a.stage = 'calibration';
  }

  if (mgr.performance[empId]) {
    mgr.performance[empId].rating = rating;
  }

  const e = sharedDb.employees.find(x => x.id === empId);
  if (e && e.appraisal) {
    e.appraisal.manager = {
      name: 'Daniel Mensah',
      score: rating,
      comment: comments,
      date: new Date().toISOString().split('T')[0]
    };
    
    if (!e.notifications) e.notifications = [];
    e.notifications.unshift({
      id: Date.now(),
      message: `Daniel Mensah submitted your H1 appraisal review (Score: ${rating}/5)`,
      date: 'Just now',
      read: false,
      type: 'performance',
      actionUrl: '#performance'
    });
  }

  mgr.activity.unshift({
    icon: 'ti-clipboard-check',
    color: '#7C3AED',
    bg: '#F5F3FF',
    text: `Submitted appraisal review for ${empById(empId).name}`,
    time: 'Just now'
  });

  saveData();
  toast('Appraisal evaluation submitted successfully');
  closeAppraisalModal();
  renderAppraisals();
  renderDashboard();
  renderPerformance();
}

// ── TRAINING ──
function renderTraining() {
  const cSel = document.getElementById('t-course'), eSel = document.getElementById('t-employee');
  if (cSel.options.length === 0) {
    mgr.courses.forEach(c => { const o = document.createElement('option'); o.value = c.id; o.textContent = c.name; cSel.appendChild(o); });
    mgr.team.forEach(e => { const o = document.createElement('option'); o.value = e.id; o.textContent = e.name; eSel.appendChild(o); });
  }

  document.getElementById('training-progress').innerHTML = mgr.team.slice(0, 5).map(e => {
    const ts = mgr.trainings.filter(t => t.empId === e.id);
    const avg = ts.length ? Math.round(ts.reduce((s, t) => s + t.progress, 0) / ts.length) : 0;
    return `<div style="margin-bottom:14px;"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;"><span style="font-weight:600;">${e.name}</span><span>${avg}%</span></div><div class="mini-bar"><div style="width:${avg}%;"></div></div></div>`;
  }).join('');

  const rows = mgr.trainings.map(t => {
    const e = empById(t.empId), c = mgr.courses.find(x => x.id === t.courseId);
    const pill = t.status === 'completed' ? 'pill-green' : t.status === 'in-progress' ? 'pill-blue' : 'pill-amber';
    return `<tr><td>${c.name}</td><td><div class="row-avatar">${avatar(e)}<div style="font-weight:600;">${e.name}</div></div></td><td>${t.due}</td><td><div class="mini-bar" style="width:120px;"><div style="width:${t.progress}%;"></div></div><div style="font-size:11px;margin-top:2px;">${t.progress}%</div></td><td><span class="pill ${pill}">${t.status.replace('-', ' ').toUpperCase()}</span></td></tr>`;
  }).join('');
  document.getElementById('training-table').innerHTML = `<table class="team-table"><thead><tr><th>Course</th><th>Assignee</th><th>Due</th><th>Progress</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`;
}
function assignTraining(ev) {
  ev.preventDefault();
  const c = document.getElementById('t-course').value, e = document.getElementById('t-employee').value, d = document.getElementById('t-due').value;
  
  const course = sharedDb.courses.find(co => String(co.id) === String(c));
  const courseName = course ? course.name : 'new course';
  
  mgr.trainings.push({ id: 't' + Date.now(), courseId: c, empId: e, due: d, progress: 0, status: 'not-started', enrolledDate: new Date().toISOString().split('T')[0] });
  
  const emp = sharedDb.employees.find(x => x.id === e);
  if (emp) {
    if (!emp.notifications) emp.notifications = [];
    emp.notifications.unshift({
      id: Date.now(),
      message: `Assigned training course: ${courseName}`,
      date: 'Just now',
      read: false,
      type: 'training',
      actionUrl: '#training'
    });
  }

  toast('Training assigned');
  saveData();
  document.getElementById('training-form').reset();
  renderTraining();
}

// ── PAYROLL ──
// Manager's own salary record (synced with HR records). Medication coverage
// employee contribution is auto-deducted from gross, in addition to tax.
const MANAGER_SALARY = 950000;
const MED_EMP_CONTRIB = 8500;   // employee monthly contribution
const MED_ER_CONTRIB  = 17000;  // employer monthly contribution (no salary impact)

function medContribFor(emp) {
  // Pull from shared benefits if present (synced with the employee portal),
  // otherwise fall back to the org default for enrolled employees.
  if (emp && emp.benefits && emp.benefits.medication && emp.benefits.medication.enrolled) {
    return emp.benefits.medication.employeeContribution || MED_EMP_CONTRIB;
  }
  return MED_EMP_CONTRIB; // default: all team enrolled in the company plan
}

function renderPayroll() {
  const team = mgr.team;
  const managerRow = {
    id: 'EMP-MGR', name: mgr.manager.name, title: mgr.manager.title,
    salary: MANAGER_SALARY, avatar: mgr.manager.avatar,
    avatarBg: '#EFF6FF', avatarColor: '#1D4ED8',
    isManager: true
  };
  const all = [managerRow, ...team];

  const total = all.reduce((s, e) => s + e.salary, 0);
  const avg = total / all.length;
  const bonus = total * 0.05 * 6; // YTD
  const tax = total * 0.12;
  document.getElementById('pay-total').textContent = fmtNGN(total);
  document.getElementById('pay-avg').textContent = fmtNGN(avg);
  document.getElementById('pay-bonus').textContent = fmtNGN(bonus);
  document.getElementById('pay-tax').textContent = fmtNGN(tax);
  document.getElementById('pay-month').textContent = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Manager's own payroll snapshot
  const myTax = MANAGER_SALARY * 0.12;
  const myMed = MED_EMP_CONTRIB;
  const myNet = MANAGER_SALARY - myTax - myMed;
  const myNetEl = document.getElementById('my-pay-net');
  const myBkEl = document.getElementById('my-pay-breakdown');
  if (myNetEl) myNetEl.textContent = fmtNGN(myNet) + ' net';
  if (myBkEl) myBkEl.textContent =
    `Gross ${fmtNGN(MANAGER_SALARY)} · Tax ${fmtNGN(myTax)} · Medication ${fmtNGN(myMed)} (employer pays ${fmtNGN(MED_ER_CONTRIB)})`;

  const rows = all.map(e => {
    const gross = e.salary;
    const taxAmt = gross * 0.12;
    const med = medContribFor(e);
    const deductions = taxAmt + med;
    const net = gross - deductions;
    const youBadge = e.isManager
      ? ` <span style="margin-left:6px;font-size:10px;font-weight:700;background:#1D4ED8;color:#fff;padding:2px 6px;border-radius:999px;letter-spacing:.04em;">YOU</span>` : '';
    return `<tr${e.isManager ? ' style="background:var(--accent-bg);"' : ''}>
      <td><div class="row-avatar">${avatar(e)}<div><div style="font-weight:600;">${e.name}${youBadge}</div><div style="font-size:11px;color:var(--text-tertiary);">${e.id}</div></div></div></td>
      <td>${e.title}</td>
      <td>${fmtNGN(gross)}</td>
      <td title="Tax ${fmtNGN(taxAmt)} + Medication ${fmtNGN(med)}">${fmtNGN(deductions)}<div style="font-size:11px;color:var(--text-tertiary);">incl. ${fmtNGN(med)} med</div></td>
      <td><strong>${fmtNGN(net)}</strong></td>
      <td><span class="pill pill-green">PAID</span></td>
    </tr>`;
  }).join('');
  document.getElementById('payroll-table').innerHTML =
    `<table class="team-table"><thead><tr><th>Employee</th><th>Role</th><th>Gross</th><th>Deductions</th><th>Net</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`;
}
function exportPayroll() { toast('Payroll exported as CSV'); }

// ── REPORTS ──
function renderReports() {
  document.getElementById('report-metrics').innerHTML = `
    <div class="grid-3">
      <div><div style="font-size:12px;color:var(--text-tertiary);">Attendance Rate (30d)</div><div style="font-size:22px;font-weight:700;">94.3%</div><div class="mini-bar"><div style="width:94%;"></div></div></div>
      <div><div style="font-size:12px;color:var(--text-tertiary);">Avg Hours / Week</div><div style="font-size:22px;font-weight:700;">42.1</div><div class="mini-bar"><div style="width:84%;"></div></div></div>
      <div><div style="font-size:12px;color:var(--text-tertiary);">Leave Utilization</div><div style="font-size:22px;font-weight:700;">38%</div><div class="mini-bar"><div style="width:38%;"></div></div></div>
      <div><div style="font-size:12px;color:var(--text-tertiary);">Training Completion</div><div style="font-size:22px;font-weight:700;">62%</div><div class="mini-bar"><div style="width:62%;"></div></div></div>
      <div><div style="font-size:12px;color:var(--text-tertiary);">Avg Performance</div><div style="font-size:22px;font-weight:700;">4.2 / 5</div><div class="mini-bar"><div style="width:84%;"></div></div></div>
      <div><div style="font-size:12px;color:var(--text-tertiary);">Headcount Trend</div><div style="font-size:22px;font-weight:700;">+2 QoQ</div><div class="mini-bar"><div style="width:70%;"></div></div></div>
    </div>`;
}
function generateReport(type) { toast(`${type.charAt(0).toUpperCase() + type.slice(1)} report generated`); }

// ── ANNOUNCEMENTS ──
function renderAnnouncements() {
  document.getElementById('ann-list').innerHTML = mgr.announcements.map(a => {
    const colors = { info: ['#EFF6FF', '#2563EB', 'ti-info-circle'], important: ['#FFFBEB', '#B45309', 'ti-alert-circle'], urgent: ['#FEF2F2', '#EF4444', 'ti-alert-triangle'], warning: ['#FFFBEB', '#B45309', 'ti-alert-circle'], success: ['#F0FDF4', '#16A34A', 'ti-circle-check'] };
    const [bg, c, icon] = colors[a.priority] || colors.info;
    return `<div class="announcement-item"><div class="ann-icon" style="background:${bg};"><i class="ti ${icon}" style="color:${c};"></i></div><div class="ann-body"><div class="ann-title">${a.title}</div><div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">${a.msg}</div><div class="ann-meta">${a.author} · ${a.date}</div></div></div>`;
  }).join('');
}
function postAnnouncement(ev) {
  ev.preventDefault();
  const title = document.getElementById('ann-title').value;
  const msg = document.getElementById('ann-msg').value;
  const priority = document.getElementById('ann-pri').value;
  
  mgr.announcements.unshift({
    id: Date.now(),
    title: title,
    msg: msg,
    body: msg,
    priority: priority,
    type: priority === 'important' ? 'info' : (priority === 'urgent' ? 'warning' : 'info'),
    date: new Date().toISOString().slice(0, 10),
    author: mgr.manager.name
  });
  
  sharedDb.employees.forEach(emp => {
    if (!emp.notifications) emp.notifications = [];
    emp.notifications.unshift({
      id: Date.now(),
      message: `New announcement: ${title}`,
      date: 'Just now',
      read: false,
      type: 'announcement',
      actionUrl: '#home'
    });
  });

  document.getElementById('ann-form').reset();
  toast('Announcement published');
  saveData();
  renderAnnouncements();
}

// ── NOTIFICATIONS ──
function renderNotifs() {
  const list = document.getElementById('notif-list');
  list.innerHTML = mgr.notifications.map(n => `<div class="notif-item ${n.unread ? 'unread' : ''}"><div class="notif-dot-inner"></div><div><div class="notif-msg">${n.msg}</div><div class="notif-time">${n.time}</div></div></div>`).join('');
  document.getElementById('notif-dot').style.display = mgr.notifications.some(n => n.unread) ? 'block' : 'none';
}
function clearNotifications() { mgr.notifications.forEach(n => n.unread = false); renderNotifs(); toast('Notifications cleared'); }

document.getElementById('notif-btn').addEventListener('click', () => document.getElementById('notif-dropdown').classList.toggle('open'));
document.addEventListener('click', e => { if (!e.target.closest('.notif-container')) document.getElementById('notif-dropdown').classList.remove('open'); });

// ── DARK MODE & THEME TOGGLE ──
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.getElementById('theme-toggle-icon');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (icon) icon.className = 'ti ti-sun';
  } else {
    document.body.classList.remove('dark-theme');
    if (icon) icon.className = 'ti ti-moon';
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  const icon = document.getElementById('theme-toggle-icon');
  if (icon) {
    if (isDark) {
      icon.className = 'ti ti-sun';
    } else {
      icon.className = 'ti ti-moon';
    }
  }
  toast(`Switched to ${isDark ? 'Dark' : 'Light'} Mode`);
}

// ── INIT ──
initTheme();
setDate();
renderDashboard();
renderTeam();
renderApprovals();
renderTeamAttendance();
renderPerformance();
renderAppraisals();
renderTraining();
renderPayroll();
renderReports();
renderAnnouncements();
renderNotifs();

// ── AI CHAT ASSISTANT ──
let chatOpen = false;
let chatHistory = [];
let chatFirstOpen = true;

function toggleChat() {
  chatOpen = !chatOpen;
  const fab = document.getElementById('chat-fab');
  const panel = document.getElementById('chat-panel');

  if (chatOpen) {
    fab.classList.add('open');
    panel.classList.add('open');

    if (chatFirstOpen) {
      chatFirstOpen = false;
      const welcomeMsg = `Hi Daniel! 👋 I'm your Crewly AI assistant. I can help you monitor team attendance, check pending approvals, track performance ratings, or calculate payroll budget. What would you like to know?`;
      chatHistory.push({ role: 'bot', text: welcomeMsg, time: getCurrentTime() });
      renderChatMessages();
    }

    setTimeout(() => {
      document.getElementById('chat-input').focus();
    }, 400);
  } else {
    fab.classList.remove('open');
    panel.classList.remove('open');
  }
}

function sendFromInput() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  sendChatMessage(text);
}

function sendChatMessage(text) {
  if (!text || !text.trim()) return;
  text = text.trim();

  // Add user message
  chatHistory.push({ role: 'user', text: text, time: getCurrentTime() });
  renderChatMessages();
  scrollChatToBottom();

  // Show typing indicator
  showTypingIndicator();

  // Ask Gemini (the built-in answers are used if it is unavailable)
  const answer = window.CrewlyAI
    ? CrewlyAI.reply({
        role: 'manager',
        userName: mgr.manager.name,
        query: text,
        history: chatHistory.slice(0, -1),
        context: buildAIContext,
        fallback: () => processChatQuery(text)
      })
    : Promise.resolve(processChatQuery(text));

  answer.then(response => {
    hideTypingIndicator();
    chatHistory.push({ role: 'bot', text: response, time: getCurrentTime() });
    renderChatMessages();
    scrollChatToBottom();
  });
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages');
  container.innerHTML = chatHistory.map(msg => `
    <div class="chat-bubble-wrap ${msg.role}">
      <div class="chat-bubble ${msg.role}">
        <div class="chat-bubble-text">${window.CrewlyAI ? CrewlyAI.formatHTML(msg.text) : msg.text.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="chat-timestamp">${msg.time}</div>
    </div>
  `).join('');
}

function showTypingIndicator() {
  const container = document.getElementById('chat-messages');
  const indicator = document.createElement('div');
  indicator.id = 'chat-typing-indicator';
  indicator.className = 'chat-bubble-wrap bot';
  indicator.innerHTML = `
    <div class="chat-typing">
      <span class="chat-typing-dot"></span>
      <span class="chat-typing-dot"></span>
      <span class="chat-typing-dot"></span>
    </div>
  `;
  container.appendChild(indicator);
  scrollChatToBottom();
}

function hideTypingIndicator() {
  const indicator = document.getElementById('chat-typing-indicator');
  if (indicator) indicator.remove();
}

function scrollChatToBottom() {
  const container = document.getElementById('chat-messages');
  container.scrollTop = container.scrollHeight;
}

function handleChatChip(text) {
  sendChatMessage(text);
}

function handleChatKeypress(e) {
  if (e.key === 'Enter') {
    sendFromInput();
  }
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function processChatQuery(query) {
  const q = query.toLowerCase();

  // Greetings
  if (q.match(/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
    return `Hello Daniel! 👋 I'm your Crewly Manager Assistant. I can help you search the team, monitor attendance, check pending approvals, check training stats, or view payroll info!`;
  }

  // Help
  if (q.match(/\b(help|what can you do|commands)\b/)) {
    return `I can help you with:\n• Team attendance rate & late arrivals\n• Pending approvals count & details\n• Employee roster & salary details\n• Training assignments & completion rates\n• Team overall payroll budget\nJust ask!`;
  }

  // Thanks
  if (q.match(/\b(thank|thanks|thank you|cheers)\b/)) {
    return `You're welcome, Daniel! Let me know if you need any other team insights. 😊`;
  }

  // Attendance
  if (q.match(/\b(attendance|present|absent|clock|punctual)\b/)) {
    const total = mgr.team.length;
    const present = Object.values(mgr.attendance).filter(a => a.status === 'present').length;
    const late = Object.values(mgr.attendance).filter(a => a.status === 'late').length;
    const leave = Object.values(mgr.attendance).filter(a => a.status === 'leave').length;
    const absent = total - (present + late + leave);
    
    let resp = `📅 Today's Team Attendance:\n• Present: ${present + late} / ${total} (${Math.round(((present + late)/total)*100)}%)\n  - Punctual: ${present}\n  - Late: ${late}\n• On Leave: ${leave}\n• Absent: ${absent}`;
    
    if (late > 0) {
      const lateNames = mgr.team.filter(e => mgr.attendance[e.id]?.status === 'late').map(e => `${e.name} (clocked in at ${mgr.attendance[e.id].clockIn}, late by ${mgr.attendance[e.id].lateBy}m)`);
      resp += `\n\n⏰ Late today:\n• ${lateNames.join('\n• ')}`;
    }
    return resp;
  }

  // Who is late
  if (q.match(/\b(who.*late|late arrivals|late employees)\b/)) {
    const lateEmployees = mgr.team.filter(e => mgr.attendance[e.id]?.status === 'late');
    if (lateEmployees.length === 0) return `Nobody is late today! Everyone has clocked in on time. 🎉`;
    return `⏰ Late arrivals today:\n` + lateEmployees.map(e => `• ${e.name} — clocked in at ${mgr.attendance[e.id].clockIn} (late by ${mgr.attendance[e.id].lateBy} mins)`).join('\n');
  }

  // Pending Approvals
  if (q.match(/\b(pending|request|approval|approve|reject)\b/)) {
    const leaveCount = mgr.approvals.filter(a => a.status === 'pending').length;
    const otherCount = mgr.otherRequests.filter(r => r.status === 'pending').length;
    const total = leaveCount + otherCount;
    if (total === 0) return `You have no pending requests to approve! All caught up. 🎉`;
    
    let resp = `📥 You have ${total} pending request(s) awaiting your decision:\n• Leave requests: ${leaveCount}\n• Other requests: ${otherCount}`;
    
    if (leaveCount > 0) {
      resp += `\n\nLeave requests:`;
      mgr.approvals.filter(a => a.status === 'pending').forEach(a => {
        resp += `\n• ${empById(a.empId).name} — ${a.type} for ${a.days} day(s) starting ${a.startDate}`;
      });
    }
    if (otherCount > 0) {
      resp += `\n\nOther requests:`;
      mgr.otherRequests.filter(r => r.status === 'pending').forEach(r => {
        resp += `\n• ${empById(r.empId).name} — ${r.type}: "${r.detail}"`;
      });
    }
    return resp;
  }

  // Employee search / roster
  if (q.match(/\b(who is|find|search|look up|lookup|roster|team|employee|staff|salary|pay)\b/)) {
    const nameQuery = q.replace(/\b(who is|find|search|look up|lookup|for|the|employee|person|someone|staff|team|roster|details)\b/g, '').trim();
    if (nameQuery.length > 1) {
      const found = mgr.team.filter(e => e.name.toLowerCase().includes(nameQuery) || e.title.toLowerCase().includes(nameQuery) || e.id.toLowerCase().includes(nameQuery));
      if (found.length > 0) {
        return found.map(e => `👤 ${e.name} (${e.id})\n• Title: ${e.title}\n• Department: ${e.dept}\n• Email: ${e.email}\n• Salary: ${fmtNGN(e.salary)}/mo\n• Status today: ${mgr.attendance[e.id]?.status.toUpperCase() || 'UNKNOWN'}`).join('\n\n');
      } else {
        return `I couldn't find any team members matching "${nameQuery}".`;
      }
    }
    return `👥 Your team consists of ${mgr.team.length} employees:\n` + mgr.team.map(e => `• ${e.name} — ${e.title} (${e.dept})`).join('\n') + `\n\nTo search a specific employee's details, type e.g., "Find Jessica".`;
  }

  // Payroll
  if (q.match(/\b(payroll|salary budget|compensation|budget|cost)\b/)) {
    const total = mgr.team.reduce((s, e) => s + e.salary, 0);
    const avg = total / mgr.team.length;
    const tax = total * 0.12;
    return `💰 Team Payroll Budget:\n• Total monthly gross: ${fmtNGN(total)}\n• Average employee salary: ${fmtNGN(avg)}\n• Estimated tax withheld: ${fmtNGN(tax)}`;
  }

  // Performance
  if (q.match(/\b(performance|rating|goals|score|trend|top performer)\b/)) {
    const ratings = Object.values(mgr.performance).map(p => p.rating);
    const avg = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
    const topId = Object.entries(mgr.performance).sort((a, b) => b[1].rating - a[1].rating)[0][0];
    const lowCount = Object.values(mgr.performance).filter(p => p.rating < 3.0).length;
    
    return `⭐ Team Performance Summary:\n• Average Rating: ${avg} / 5.0\n• Top Performer: ${empById(topId).name} (Rating: ${mgr.performance[topId].rating})\n• Goals Completed: ${Object.values(mgr.performance).reduce((s, p) => s + parseInt(p.goals.split('/')[0]), 0)} across team\n• Rating below 3.0: ${lowCount} employee(s)`;
  }

  // Training
  if (q.match(/\b(training|course|learning|progress|completion)\b/)) {
    const total = mgr.trainings.length;
    const completed = mgr.trainings.filter(t => t.status === 'completed').length;
    const inProgress = mgr.trainings.filter(t => t.status === 'in-progress').length;
    const rate = total > 0 ? Math.round((completed / total) * 100) : 0;
    return `📚 Team Training Progress:\n• Total courses assigned: ${total}\n• Completed: ${completed} (${rate}% completion rate)\n• In Progress: ${inProgress}\n\nCheck the Training page to assign new courses.`;
  }

  // Default fallback
  return `I'm not sure how to answer that, Daniel. Try asking about "team attendance", "pending approvals", "who is late", "performance summary", or "payroll cost".`;
}

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

(function () {
  const last = window.CrewlyDB ? CrewlyDB.getLastPage() : null;
  if (last && last !== 'home' && document.getElementById('page-' + last)) showPage(last);
})();

/* ── Crewly AI: the data summary Gemini answers from (this manager's team) ── */
function buildAIContext() {
  const C = (v, n) => (window.CrewlyAI ? CrewlyAI.compact(v, n) : JSON.stringify(v).slice(0, n));
  const safe = (fn, fallback) => { try { return fn(); } catch (err) { return fallback; } };
  const lines = [];
  lines.push('MANAGER: ' + C(safe(() => mgr.manager, {}), 300));
  lines.push('TODAY (ISO date): ' + todayISO);
  lines.push('MY TEAM (direct reports): ' + C(safe(() => mgr.team.map(e => ({ id: e.id, name: e.name, title: e.title, department: e.dept, status: e.status, salaryNGN: e.salary, joined: e.joined, leave: e.leave })), []), 4500));
  lines.push('ATTENDANCE TODAY (by employee id): ' + C(safe(() => mgr.attendance, {}), 2500));
  lines.push('PERFORMANCE (by employee id): ' + C(safe(() => mgr.performance, {}), 3500));
  lines.push('PENDING LEAVE APPROVALS: ' + C(safe(() => mgr.approvals, []), 2000));
  lines.push('OTHER REQUESTS: ' + C(safe(() => mgr.otherRequests, []), 1500));
  lines.push('APPRAISALS: ' + C(safe(() => mgr.appraisals, []), 2500));
  lines.push('TRAINING COURSES: ' + C(safe(() => mgr.courses, []), 1500));
  lines.push('TRAINING ASSIGNMENTS: ' + C(safe(() => mgr.trainings, []), 2000));
  lines.push('ANNOUNCEMENTS: ' + C(safe(() => mgr.announcements, []), 1500));
  return lines.join('\n');
}

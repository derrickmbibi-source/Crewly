/* ═══════════════════════════════════════════════
   Crewly — Employee Portal (Enhanced)
   app.js - Comprehensive Business Logic with Professional Features
═══════════════════════════════════════════════ */

// ── DATA STORE ──
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

const appData = {
  get employee() {
    return sharedDb.employees.find(e => e.id === 'EMP-004');
  },
  get leave() {
    return this.employee.leave;
  },
  get leaveRequests() {
    return sharedDb.leaveRequests.filter(r => r.empId === 'EMP-004');
  },
  get payslips() {
    if (!this.employee.payslips) {
      this.employee.payslips = [];
    }
    return this.employee.payslips;
  },
  set payslips(val) {
    this.employee.payslips = val;
    saveSharedDb();
  },
  get attendance() {
    if (!this.employee.attendance) {
      this.employee.attendance = [];
    }
    return this.employee.attendance;
  },
  set attendance(val) {
    this.employee.attendance = val;
    saveSharedDb();
  },
  get currentClockIn() {
    return this.employee.currentClockIn || null;
  },
  set currentClockIn(val) {
    this.employee.currentClockIn = val;
    saveSharedDb();
  },
  get performance() {
    return this.employee.performance;
  },
  get appraisal() {
    return this.employee.appraisal;
  },
  get training() {
    return sharedDb.courses.map(course => {
      const enrollment = sharedDb.trainings.find(t => t.courseId === course.id && t.empId === 'EMP-004');
      if (enrollment) {
        return {
          ...course,
          status: enrollment.status === 'in-progress' ? 'enrolled' : enrollment.status,
          progress: enrollment.progress,
          enrolledDate: enrollment.enrolledDate,
          completedDate: enrollment.completedDate
        };
      }
      return {
        ...course,
        status: 'available',
        progress: 0,
        enrolledDate: null,
        completedDate: null
      };
    });
  },
  get requests() {
    return sharedDb.otherRequests.filter(r => r.empId === 'EMP-004');
  },
  get announcements() {
    return sharedDb.announcements;
  },
  get notifications() {
    if (!this.employee.notifications) {
      this.employee.notifications = [];
    }
    return this.employee.notifications;
  },
  set notifications(val) {
    this.employee.notifications = val;
    saveSharedDb();
  },
  get documents() {
    if (!this.employee.documents) {
      this.employee.documents = [];
    }
    return this.employee.documents;
  },
  get uploadedFiles() {
    if (!this.employee.uploadedFiles) {
      this.employee.uploadedFiles = [];
    }
    return this.employee.uploadedFiles;
  },
  get searchHistory() {
    if (!this.employee.searchHistory) {
      this.employee.searchHistory = [];
    }
    return this.employee.searchHistory;
  },
  get notificationSettings() {
    if (!this.employee.notificationSettings) {
      this.employee.notificationSettings = {
        emailNotifications: true,
        leaveUpdates: true,
        performanceUpdates: true,
        trainingUpdates: true,
        announcements: true
      };
    }
    return this.employee.notificationSettings;
  },
  get burnoutAlerts() {
    return sharedDb.burnoutAlerts;
  },
  get pulses() {
    return sharedDb.pulses;
  },
  get liveActivities() {
    return sharedDb.liveActivities;
  },
  get shifts() {
    return sharedDb.shifts;
  },
  get employees() {
    return sharedDb.employees;
  },
  get gigs() {
    if (!sharedDb.gigs) {
      sharedDb.gigs = [];
    }
    return sharedDb.gigs;
  },
  set gigs(val) {
    sharedDb.gigs = val;
    saveSharedDb();
  },
  get benefits() {
    if (!this.employee.benefits) {
      this.employee.benefits = {
        medication: {
          enrolled: true,
          provider: 'AXA Mansard Health',
          planName: 'Premium Health Plus — Medication Rider',
          policyNumber: 'AXA-MED-2026-04412',
          coverageStart: '2026-01-01',
          coverageEnd: '2026-12-31',
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
          claims: [
            { date: '2026-06-04', pharmacy: 'HealthPlus Pharmacy, Lekki', medication: 'Amoxicillin 500mg + Paracetamol', amount: 12500, status: 'approved' },
            { date: '2026-05-18', pharmacy: 'MedPlus, Victoria Island',   medication: 'Vitamin D3 + Multivitamin',        amount: 6800,  status: 'approved' },
            { date: '2026-04-22', pharmacy: 'Alpha Pharmacy, Ikeja',      medication: 'Lisinopril 10mg (90-day)',         amount: 18400, status: 'approved' },
            { date: '2026-03-09', pharmacy: 'HealthPlus Pharmacy, Lekki', medication: 'Ventolin Inhaler',                 amount: 9200,  status: 'approved' }
          ]
        }
      };
      saveSharedDb();
    }
    return this.employee.benefits;
  },
  set benefits(val) {
    this.employee.benefits = val;
    saveSharedDb();
  }
};

// ── TAX CALCULATION FUNCTIONS ──
function calculateTaxes(grossSalary) {
  // PAYE Calculation (Nigerian Progressive Tax)
  let paye = 0;
  if (grossSalary <= 300000) {
    paye = grossSalary * 0.01;  // 1% for first ₦300k
  } else if (grossSalary <= 600000) {
    paye = (300000 * 0.01) + ((grossSalary - 300000) * 0.11);  // 11% for ₦300k-600k
  } else if (grossSalary <= 1000000) {
    paye = (300000 * 0.01) + (300000 * 0.11) + ((grossSalary - 600000) * 0.15);  // 15% for ₦600k-1M
  } else {
    paye = (300000 * 0.01) + (300000 * 0.11) + (400000 * 0.15) + ((grossSalary - 1000000) * 0.19);  // 19% above ₦1M
  }
  const nhf = grossSalary * 0.02;  // NHF - 2%
  const pension = grossSalary * 0.05;  // Pension - 5%
  const totalDeductions = paye + nhf + pension;
  const netSalary = grossSalary - totalDeductions;
  return { paye: Math.round(paye), nhf: Math.round(nhf), pension: Math.round(pension), totalDeductions: Math.round(totalDeductions), netSalary: Math.round(netSalary) };
}

function generatePayslips() {
  const months = [{ month: 'June 2026', date: '2026-06-30' }, { month: 'May 2026', date: '2026-05-30' }, { month: 'April 2026', date: '2026-04-30' }, { month: 'March 2026', date: '2026-03-30' }];
  const grossSalary = 420000;
  const taxes = calculateTaxes(grossSalary);
  const medication = (appData.benefits && appData.benefits.medication && appData.benefits.medication.enrolled)
    ? appData.benefits.medication.employeeContribution : 0;
  const totalDeductions = taxes.totalDeductions + medication;
  const net = grossSalary - totalDeductions;
  appData.payslips = months.map(m => ({
    month: m.month, gross: grossSalary,
    paye: taxes.paye, nhf: taxes.nhf, pension: taxes.pension,
    medication: medication,
    totalDeductions: totalDeductions,
    net: net, status: 'paid', paymentDate: m.date
  }));
}

// ── INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  generatePayslips();  // Generate payslips with automatic tax calculation
  initializeApp();
  setTodayDate();
  setupTabListeners();
  setupNavigation();
  setupNotifications();
  updateDashboard();
  updateLiveActivityFeed();
  if (typeof updateAllPages === 'function') updateAllPages();
  startClock();
  startLiveSimulation();
});

// ── INITIALIZE APP ──
function initializeApp() {
  const last = window.CrewlyDB ? CrewlyDB.getLastPage() : null;
  showPage(last && document.getElementById('page-' + last) ? last : 'home');
}

// ── SET TODAY'S DATE ──
function setTodayDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'short' });
  
  document.getElementById('today-day').textContent = day;
  document.getElementById('today-date').textContent = month + ' 2026';
}

// ── NAVIGATION ──
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const page = this.getAttribute('data-page');
      
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      showPage(page);
    });
  });
}

// ── SHOW PAGE ──
function showPage(pageName) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.add('hidden'));
  
  const selectedPage = document.getElementById('page-' + pageName);
  if (selectedPage) {
    selectedPage.classList.remove('hidden');
  }
  
  updateTopbar(pageName);
  updatePageContent(pageName);
  
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-page') === pageName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// ── UPDATE TOPBAR ──
function updateTopbar(pageName) {
  const titles = {
    home: 'Home',
    profile: 'My Profile',
    payslips: 'My Payslips',
    attendance: 'Attendance',
    leave: 'Leave Management',
    requests: 'My Requests',
    performance: 'Performance',
    appraisal: 'Performance Appraisal',
    training: 'Training & Development',
    directory: 'Employee Directory',
    analytics: 'Reports & Analytics',
    settings: 'Settings',
    gigboard: 'Internal Skills Marketplace',
    burnout: 'Burnout & Pulse',
    schedule: 'Shift Schedule',
    feedback: 'Continuous Feedback',
    benefits: 'Health & Benefits'
  };
  
  const breadcrumbs = {
    home: 'Good morning, Jessica',
    profile: 'Manage your personal information',
    payslips: 'View and download your payslips',
    attendance: 'Track your attendance',
    leave: 'Request and track your leave',
    requests: 'Track all your submitted requests',
    performance: 'Your performance metrics',
    appraisal: 'Complete and track your appraisal cycle',
    training: 'Explore your learning journey',
    directory: 'Find and connect with team members',
    analytics: 'View company-wide analytics',
    settings: 'Manage your account and preferences',
    gigboard: 'Showcase skills, find gigs, and collaborate across teams',
    burnout: 'Track your wellbeing and submit weekly pulses',
    schedule: 'View your weekly shifts and report absences',
    feedback: 'Weekly check-ins, peer & manager feedback, and performance trends',
    benefits: 'Your enrolled health benefits and medication coverage'
  };

  
  document.getElementById('page-title').textContent = titles[pageName] || 'Page';
  document.getElementById('page-breadcrumb').textContent = breadcrumbs[pageName] || '';
}

// ── UPDATE DASHBOARD ──
function updateDashboard() {
  document.getElementById('leave-balance').textContent = appData.leave.annual.remaining;
  document.getElementById('leave-used').textContent = appData.leave.annual.used + ' days used this year';
  document.getElementById('sick-balance').textContent = appData.leave.sick.remaining;
  document.getElementById('perf-score').innerHTML = appData.performance.overallRating + '<span style="font-size:16px;font-weight:500;">★</span>';
  document.getElementById('last-pay').textContent = '₦' + (appData.payslips[0].net / 1000).toFixed(0) + 'k';
  
  // Announcements
  const announcementList = document.getElementById('announcement-list');
  announcementList.innerHTML = appData.announcements.map(ann => `
    <div class="announcement-item announcement-${ann.type}">
      <div class="ann-icon"><i class="ti ${ann.type === 'info' ? 'ti-speakerphone' : ann.type === 'success' ? 'ti-gift' : 'ti-clock'}"></i></div>
      <div>
        <div class="ann-title">${ann.title}</div>
        <div class="ann-body">${ann.body}</div>
        <div class="ann-time">Posted ${ann.date}</div>
      </div>
    </div>
  `).join('');

  // Schedule
  const scheduleList = document.getElementById('schedule-list');
  const schedule = [
    { day: 12, month: 'Jun', title: 'Sick Leave — Approved', sub: '1 day · Medical appointment', badge: 'Approved', badgeClass: 'badge-active' },
    { day: 20, month: 'Jun', title: 'Q2 Town Hall', sub: '2:00 PM · Main boardroom', badge: 'Event', badgeClass: 'badge-role' },
    { day: 30, month: 'Jun', title: 'Performance Review Deadline', sub: 'Complete your self-assessment', badge: 'Due Soon', badgeClass: 'badge-warning' }
  ];
  
  scheduleList.innerHTML = schedule.map(s => `
    <div class="schedule-item">
      <div class="schedule-date">
        <div class="sched-day">${s.day}</div>
        <div class="sched-month">${s.month}</div>
      </div>
      <div class="schedule-body">
        <div class="sched-title">${s.title}</div>
        <div class="sched-sub">${s.sub}</div>
      </div>
      <span class="badge ${s.badgeClass}">${s.badge}</span>
    </div>
  `).join('');
}

// ── UPDATE PAGE CONTENT ──
function updatePageContent(pageName) {
  switch(pageName) {
    case 'profile':
      updateProfilePage();
      break;
    case 'payslips':
      updatePayslipsPage();
      break;
    case 'attendance':
      updateAttendancePage();
      break;
    case 'leave':
      updateLeavePage();
      break;
    case 'requests':
      updateRequestsPage();
      break;
    case 'performance':
      updatePerformancePage();
      break;
    case 'appraisal':
      updateAppraisalPage();
      break;
    case 'training':
      updateTrainingPage();
      break;
    case 'directory':
      updateDirectoryPage();
      break;
    case 'gigboard':
      updateGigBoardPage();
      break;
    case 'burnout':
      updateBurnoutPage();
      break;
    case 'schedule':
      updateSchedulePage();
      break;
    case 'analytics':
      updateAnalyticsPage();
      break;
    case 'settings':
      updateSettingsPage();
      break;
    case 'feedback':
      updateFeedbackPage();
      break;
    case 'benefits':
      updateBenefitsPage();
      break;
  }
}

// ── SETTINGS PAGE ──
const SETTINGS_KEY = 'crewly_settings_v1';
const SETTINGS_DEFAULTS = {
  name: 'Jessica Eze',
  email: 'jessica.eze@crewly.com',
  phone: '+234 801 234 5678',
  language: 'en',
  timezone: 'WAT',
  twofa: false,
  theme: 'light',
  density: 'comfortable',
  notif_email: true,
  notif_push: true,
  notif_payslip: true,
  notif_leave: true,
  notif_announcements: false,
  privacy_directory: true,
  privacy_activity: true
};

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return Object.assign({}, SETTINGS_DEFAULTS, raw ? JSON.parse(raw) : {});
  } catch (e) { return Object.assign({}, SETTINGS_DEFAULTS); }
}

function persistSettings(s) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch (e) {}
}

function updateSettingsPage() {
  const s = loadSettings();
  const emp = appData && appData.employee ? appData.employee : {};
  document.getElementById('set-name').value = s.name || emp.name || '';
  document.getElementById('set-email').value = s.email || emp.email || '';
  document.getElementById('set-phone').value = s.phone || emp.phone || '';
  document.getElementById('set-language').value = s.language;
  document.getElementById('set-timezone').value = s.timezone;
  document.getElementById('set-2fa').checked = !!s.twofa;
  document.getElementById('set-theme').value = s.theme;
  document.getElementById('set-density').value = s.density;

  document.querySelectorAll('.set-toggle').forEach(el => {
    const k = el.getAttribute('data-key');
    el.checked = !!s[k];
    el.onchange = () => {
      const cur = loadSettings();
      cur[k] = el.checked;
      persistSettings(cur);
      showToast('✓ Preferences updated');
    };
  });
}

function saveAccountSettings(event) {
  event.preventDefault();
  const cur = loadSettings();
  cur.name = document.getElementById('set-name').value.trim();
  cur.email = document.getElementById('set-email').value.trim();
  cur.phone = document.getElementById('set-phone').value.trim();
  cur.language = document.getElementById('set-language').value;
  cur.timezone = document.getElementById('set-timezone').value;
  persistSettings(cur);
  showToast('✓ Account settings saved');
}

function changePassword(event) {
  event.preventDefault();
  const curPass = document.getElementById('set-pass-current').value;
  const newPass = document.getElementById('set-pass-new').value;
  const confirmPass = document.getElementById('set-pass-confirm').value;
  if (!curPass || !newPass || !confirmPass) {
    showToast('❌ Please fill in all password fields'); return;
  }
  if (newPass.length < 8) { showToast('❌ Password must be at least 8 characters'); return; }
  if (newPass !== confirmPass) { showToast('❌ New passwords do not match'); return; }
  const cur = loadSettings();
  cur.twofa = document.getElementById('set-2fa').checked;
  persistSettings(cur);
  document.getElementById('settings-security-form').reset();
  document.getElementById('set-2fa').checked = cur.twofa;
  showToast('✓ Password updated successfully');
}

function saveAppearance() {
  const cur = loadSettings();
  cur.theme = document.getElementById('set-theme').value;
  cur.density = document.getElementById('set-density').value;
  persistSettings(cur);
  showToast('✓ Appearance updated');
}

function signOutAll() {
  if (confirm('Sign out of all other sessions? You will remain signed in on this device.')) {
    showToast('✓ Other sessions have been signed out');
  }
}

// ── PROFILE PAGE ──
function updateProfilePage() {
  const emp = appData.employee;
  
  document.getElementById('profile-name').textContent = emp.name;
  document.getElementById('profile-title').textContent = emp.title + ' · ' + emp.department;
  document.getElementById('profile-id').textContent = emp.id;

  const infoGrid = document.getElementById('profile-info-grid');
  infoGrid.innerHTML = `
    <div class="field-item"><span class="field-key">Employee ID</span><span class="field-val">${emp.id}</span></div>
    <div class="field-item"><span class="field-key">Department</span><span class="field-val">${emp.department}</span></div>
    <div class="field-item"><span class="field-key">Job Title</span><span class="field-val">${emp.title}</span></div>
    <div class="field-item"><span class="field-key">Line Manager</span><span class="field-val">${emp.manager}</span></div>
    <div class="field-item"><span class="field-key">Start Date</span><span class="field-val">${emp.startDate}</span></div>
    <div class="field-item"><span class="field-key">Employment Type</span><span class="field-val">${emp.employmentType}</span></div>
    <div class="field-item"><span class="field-key">Annual Leave Balance</span><span class="field-val" style="color:var(--success-text);font-weight:700;">${appData.leave.annual.remaining} days remaining</span></div>
    <div class="field-item"><span class="field-key">Account Status</span><span class="field-val"><span class="badge badge-active">Active</span></span></div>
  `;

  const contactGrid = document.getElementById('profile-contact-grid');
  contactGrid.innerHTML = `
    <div class="field-item"><span class="field-key">Work Email</span><span class="field-val">${emp.email}</span></div>
    <div class="field-item"><span class="field-key">Work Phone</span><span class="field-val">${emp.phone}</span></div>
    <div class="field-item"><span class="field-key">Office Location</span><span class="field-val">${emp.location}</span></div>
    <div class="field-item"><span class="field-key">Emergency Contact</span><span class="field-val">${emp.emergencyContact}</span></div>
  `;

  const docList = document.getElementById('doc-list');
  docList.innerHTML = appData.documents.map(doc => `
    <div class="doc-item">
      <div class="doc-icon"><i class="ti ti-file"></i></div>
      <div class="doc-info">
        <div class="doc-name">${doc.name}</div>
        <div class="doc-meta">${doc.date} · ${doc.size}</div>
      </div>
      <div class="doc-actions">
        <button class="btn" onclick="downloadDocument('${doc.name}')"><i class="ti ti-download"></i></button>
      </div>
    </div>
  `).join('');
}

// ── PAYSLIPS PAGE ──
function updatePayslipsPage() {
  // Always regenerate so medication deduction stays in sync with benefits
  generatePayslips();
  const paySummary = document.getElementById('pay-summary');
  const latest = appData.payslips[0];
  const tax = latest.paye + latest.nhf + latest.pension;
  const med = latest.medication || 0;
  const totalDed = tax + med;

  paySummary.innerHTML = `
    <div class="pay-summary-item">
      <div class="pay-label">Gross Salary</div>
      <div class="pay-value" style="color: #059669; font-weight: 700;">₦${(latest.gross / 1000).toFixed(0)}k</div>
    </div>
    <div class="pay-summary-item">
      <div class="pay-label">Total Deductions</div>
      <div class="pay-value" style="color: #DC2626; font-weight: 700;">-₦${(totalDed / 1000).toFixed(1)}k</div>
      <div style="font-size:11px;color:var(--text-tertiary);margin-top:4px;">Tax ₦${(tax/1000).toFixed(1)}k${med ? ` · Medication ₦${(med/1000).toFixed(1)}k` : ''}</div>
    </div>
    <div class="pay-summary-item">
      <div class="pay-label">Net Pay (Take Home)</div>
      <div class="pay-value" style="color: #0891B2; font-weight: 700; font-size: 24px;">₦${(latest.net / 1000).toFixed(0)}k</div>
    </div>
  `;

  const payslipList = document.getElementById('payslip-list');
  payslipList.innerHTML = appData.payslips.map(slip => {
    const slipTax = slip.paye + slip.nhf + slip.pension;
    const slipMed = slip.medication || 0;
    return `
    <div class="payslip-item">
      <div class="payslip-month">${slip.month}</div>
      <div class="payslip-details">
        <div class="payslip-row"><span>Gross:</span><span style="color: #059669; font-weight: 600;">₦${(slip.gross / 1000).toFixed(0)}k</span></div>
        <div class="payslip-row"><span>Tax (PAYE + NHF + Pension):</span><span style="color: #DC2626; font-weight: 600;">-₦${(slipTax / 1000).toFixed(1)}k</span></div>
        ${slipMed ? `<div class="payslip-row"><span><i class="ti ti-pill" style="color:#2563EB;"></i> Medication Coverage:</span><span style="color:#DC2626;font-weight:600;">-₦${slipMed.toLocaleString()}</span></div>` : ''}
        <div class="payslip-row" style="border-top: 1px solid var(--border); padding-top: 8px; margin-top: 8px;"><span style="font-weight: 700;">Net Pay:</span><span style="font-weight:700;color: #0891B2; font-size: 16px;">₦${(slip.net / 1000).toFixed(0)}k</span></div>
      </div>
      <div class="payslip-actions">
        <button class="btn" onclick="downloadPayslip('${slip.month}')"><i class="ti ti-download"></i> Download</button>
      </div>
    </div>
  `;}).join('');
}

// ── HEALTH & BENEFITS PAGE ──
function updateBenefitsPage() {
  const m = appData.benefits.medication;
  const fmt = n => '₦' + Number(n).toLocaleString();
  const fmtDate = s => new Date(s).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const period = `${fmtDate(m.coverageStart)} – ${fmtDate(m.coverageEnd)}`;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  set('bn-period', period);
  set('bn-emp-contrib', fmt(m.employeeContribution) + '/mo');
  set('bn-er-contrib', fmt(m.employerContribution) + '/mo');
  set('bn-provider', m.provider);
  set('bn-plan', m.planName);
  set('bn-plan-line', `${m.provider} · ${m.planName}`);
  set('bn-coverage-period', period);
  set('bn-policy', m.policyNumber);
  set('bn-emp-c2', fmt(m.employeeContribution) + ' / month');
  set('bn-er-c2', fmt(m.employerContribution) + ' / month');

  set('bn-meds', m.medications.map(x => `<span class="med-chip"><i class="ti ti-pill"></i> ${x}</span>`).join(''));

  set('bn-limits', `
    <div class="limit-row"><span>Annual coverage limit</span><strong>${fmt(m.annualLimit)}</strong></div>
    <div class="limit-row"><span>Per‑visit limit</span><strong>${fmt(m.perVisitLimit)}</strong></div>
    <div class="limit-row"><span>Employee co‑pay</span><strong>${m.coPay}%</strong></div>
    <div class="limit-row"><span>Network</span><strong>Nationwide · 240+ pharmacies</strong></div>
  `);

  const used = m.claims.reduce((s,c)=>s+c.amount,0);
  const pct = Math.min(100, Math.round(used / m.annualLimit * 100));
  set('bn-claims', `
    <div class="claims-summary">
      <div>
        <div style="font-size:12px;color:var(--text-tertiary);">Used this year</div>
        <div style="font-size:18px;font-weight:700;">${fmt(used)} <span style="font-size:12px;color:var(--text-tertiary);font-weight:500;">of ${fmt(m.annualLimit)}</span></div>
      </div>
      <div class="claim-bar"><div class="claim-bar-fill" style="width:${pct}%;"></div></div>
    </div>
    <table class="claims-table">
      <thead><tr><th>Date</th><th>Pharmacy</th><th>Medication</th><th style="text-align:right;">Amount</th><th>Status</th></tr></thead>
      <tbody>
        ${m.claims.map(c => `
          <tr>
            <td>${fmtDate(c.date)}</td>
            <td>${c.pharmacy}</td>
            <td>${c.medication}</td>
            <td style="text-align:right;font-weight:600;">${fmt(c.amount)}</td>
            <td><span class="pill pill-green">${c.status}</span></td>
          </tr>`).join('')}
      </tbody>
    </table>
  `);
}

function downloadBenefitCard() {
  if (typeof showToast === 'function') showToast('⬇️ Benefit card downloaded');
  else alert('Benefit card downloaded');
}
function findHospitals() {
  if (typeof showToast === 'function') showToast('🏥 Opening participating hospitals & pharmacies directory');
  else alert('Opening participating hospitals & pharmacies directory');
}

// ── ATTENDANCE PAGE ──
function updateAttendancePage() {
  const attendanceSummary = document.getElementById('attendance-summary');
  const totalHours = appData.attendance.reduce((sum, a) => sum + a.hours, 0);
  const presentDays = appData.attendance.filter(a => a.status === 'present').length;
  
  attendanceSummary.innerHTML = `
    <div class="summary-row">
      <span class="summary-label">Present Days</span>
      <span class="summary-value">${presentDays} days</span>
    </div>
    <div class="summary-row">
      <span class="summary-label">Total Hours</span>
      <span class="summary-value">${totalHours.toFixed(2)} hrs</span>
    </div>
    <div class="summary-row">
      <span class="summary-label">Average Hours</span>
      <span class="summary-value">${(totalHours / presentDays).toFixed(2)} hrs/day</span>
    </div>
  `;

  const attendanceTable = document.getElementById('attendance-table');
  attendanceTable.innerHTML = `
    <table class="attendance-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Clock In</th>
          <th>Clock Out</th>
          <th>Hours</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${appData.attendance.map(a => `
          <tr>
            <td>${a.date}</td>
            <td>${a.clockIn}</td>
            <td>${a.clockOut}</td>
            <td>${a.hours.toFixed(2)}</td>
            <td><span class="badge badge-active">${a.status === 'present' ? 'Present' : 'Absent'}</span></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// ── LEAVE PAGE ──
function updateLeavePage() {
  const leaveBalanceList = document.getElementById('leave-balance-list');
  leaveBalanceList.innerHTML = `
    <div class="leave-balance-item">
      <div class="leave-balance-label">Annual Leave</div>
      <div class="leave-balance-value">${appData.leave.annual.remaining}/${appData.leave.annual.total}</div>
    </div>
    <div class="leave-balance-item sick">
      <div class="leave-balance-label">Sick Leave</div>
      <div class="leave-balance-value">${appData.leave.sick.remaining}/${appData.leave.sick.total}</div>
    </div>
    <div class="leave-balance-item casual">
      <div class="leave-balance-label">Casual Leave</div>
      <div class="leave-balance-value">${appData.leave.casual.remaining}/${appData.leave.casual.total}</div>
    </div>
  `;

  const leaveHistoryTable = document.getElementById('leave-history-table');
  leaveHistoryTable.innerHTML = `
    <table class="leave-history-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Days</th>
          <th>Reason</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${appData.leaveRequests.map(req => `
          <tr>
            <td>${req.type}</td>
            <td>${req.startDate}</td>
            <td>${req.endDate}</td>
            <td>${req.days}</td>
            <td>${req.reason}</td>
            <td><span class="badge badge-${req.status === 'approved' ? 'active' : req.status === 'pending' ? 'warning' : 'danger'}">${req.status.charAt(0).toUpperCase() + req.status.slice(1)}</span></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// ── REQUESTS PAGE ──
function requestItemHTML(req) {
  const statusBadge = req.status === 'approved' ? 'active' : req.status === 'pending' ? 'warning' : 'danger';
  const meta = req.status === 'approved' && req.approvedBy
    ? `<div class="request-date">Approved by ${req.approvedBy}${req.approvalDate ? ' · ' + req.approvalDate : ''}</div>`
    : req.status === 'rejected' && req.rejectionReason
    ? `<div class="request-date" style="color:var(--danger-text);">Reason: ${req.rejectionReason}</div>`
    : '';
  return `
    <div class="request-item">
      <div class="request-header">
        <div class="request-title">${req.title}</div>
        <span class="badge badge-${statusBadge}">${req.status.charAt(0).toUpperCase() + req.status.slice(1)}</span>
      </div>
      <div class="request-desc">${req.description}</div>
      <div class="request-date">Submitted ${req.submittedDate}</div>
      ${meta}
    </div>
  `;
}

function renderRequestsTab(tab) {
  const targets = {
    all: appData.requests,
    pending: appData.requests.filter(r => r.status === 'pending'),
    approved: appData.requests.filter(r => r.status === 'approved'),
    rejected: appData.requests.filter(r => r.status === 'rejected')
  };
  const container = document.getElementById('pp-' + tab);
  if (!container) return;
  const list = targets[tab];
  container.innerHTML = list.length
    ? list.map(requestItemHTML).join('')
    : `<div style="padding:32px;text-align:center;color:var(--text-tertiary);font-size:13px;">No ${tab === 'all' ? '' : tab + ' '}requests yet.</div>`;
}

function updateRequestsPage() {
  ['all','pending','approved','rejected'].forEach(renderRequestsTab);
  const section = document.getElementById('page-requests');
  const tabs = section.querySelectorAll('.ptab');
  tabs.forEach(tab => {
    if (tab.dataset.bound) return;
    tab.dataset.bound = '1';
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('on'));
      this.classList.add('on');
      const name = this.getAttribute('data-tab');
      ['all','pending','approved','rejected'].forEach(t => {
        const el = document.getElementById('pp-' + t);
        if (el) el.classList.toggle('hidden', t !== name);
      });
      renderRequestsTab(name);
    });
  });
}

// ── PERFORMANCE PAGE ──
function updatePerformancePage() {
  const metricsList = document.getElementById('metrics-list');
  metricsList.innerHTML = appData.performance.metrics.map(metric => `
    <div class="metric-item">
      <div class="metric-label">${metric.name}</div>
      <div class="metric-bar">
        <div class="metric-fill" style="width: ${metric.score}%"></div>
      </div>
      <div class="metric-score">${metric.score}%</div>
    </div>
  `).join('');

  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = appData.performance.reviewsList.map(review => `
    <div class="review-item">
      <div class="review-title">${review.reviewer} - ${review.date}</div>
      <div style="margin-bottom: 8px;">
        ${Array(Math.round(review.rating)).fill('★').join('')}
        <span style="color: var(--text-tertiary);">${review.rating}/5</span>
      </div>
      <div class="review-comment">${review.comment}</div>
    </div>
  `).join('');
}

// ── APPRAISAL PAGE ──
const APPRAISAL_STEPS = [
  { key: 'self', label: 'Self-Assessment', icon: 'ti-user', owner: 'You' },
  { key: 'manager', label: 'Manager Review', icon: 'ti-user-check', owner: 'CEO' },
  { key: 'hr', label: 'HR Approval', icon: 'ti-building', owner: 'Amara Nwosu' },
  { key: 'completed', label: 'Completed', icon: 'ti-circle-check', owner: '' }
];

function appraisalStageIndex() {
  const s = appData.appraisal.status;
  if (s === 'not_started' || s === 'sent_back') return 0;
  if (s === 'pending_manager') return 1;
  if (s === 'pending_hr') return 2;
  if (s === 'completed') return 3;
  return 0;
}

function updateAppraisalPage() {
  renderAppraisalFlow();
  renderAppraisalForm();
  renderAppraisalReviewChain();
  renderAppraisalHistory();
  document.getElementById('appraisal-cycle-badge').textContent = appData.appraisal.cycle;
}

function renderAppraisalFlow() {
  const flow = document.getElementById('appraisal-flow');
  const current = appraisalStageIndex();

  flow.innerHTML = APPRAISAL_STEPS.map((step, i) => {
    let state = 'upcoming';
    if (i < current) state = 'done';
    else if (i === current && appData.appraisal.status !== 'completed') state = 'current';
    else if (i === current && appData.appraisal.status === 'completed') state = 'done';

    const connector = i < APPRAISAL_STEPS.length - 1
      ? `<div class="flow-connector ${i < current ? 'flow-connector-done' : ''}"></div>` : '';

    return `
      <div class="flow-step flow-${state}">
        <div class="flow-icon"><i class="ti ${state === 'done' ? 'ti-check' : step.icon}"></i></div>
        <div class="flow-meta">
          <div class="flow-label">${step.label}</div>
          ${step.owner ? `<div class="flow-owner">${step.owner}</div>` : ''}
        </div>
      </div>
      ${connector}
    `;
  }).join('');
}

function renderAppraisalForm() {
  const ap = appData.appraisal;
  const editable = (ap.status === 'not_started' || ap.status === 'sent_back');

  const container = document.getElementById('appraisal-competencies');
  container.innerHTML = ap.competencies.map(c => `
    <div class="rate-row">
      <div class="rate-label">${c.label}</div>
      <div class="rate-stars" data-key="${c.key}">
        ${[1,2,3,4,5].map(n => `
          <span class="rate-star ${c.selfScore >= n ? 'on' : ''}" data-val="${n}"
            ${editable ? `onclick="setAppraisalScore('${c.key}', ${n})"` : ''}>★</span>
        `).join('')}
      </div>
    </div>
  `).join('');

  const achievements = document.getElementById('appraisal-achievements');
  const goals = document.getElementById('appraisal-goals');
  achievements.value = ap.achievements;
  goals.value = ap.goals;
  achievements.disabled = !editable;
  goals.disabled = !editable;

  const submitBtn = document.getElementById('appraisal-submit-btn');
  const lockedNote = document.getElementById('appraisal-locked-note');
  const lockedText = document.getElementById('appraisal-locked-text');

  if (editable) {
    submitBtn.classList.remove('hidden');
    lockedNote.classList.add('hidden');
    submitBtn.innerHTML = ap.status === 'sent_back'
      ? '<i class="ti ti-rotate"></i> Resubmit to Manager'
      : '<i class="ti ti-send"></i> Submit to Manager';
  } else {
    submitBtn.classList.add('hidden');
    lockedNote.classList.remove('hidden');
    const msg = {
      pending_manager: 'Submitted. Your self-assessment is locked and awaiting Manager review.',
      pending_hr: 'Approved by your manager. Awaiting final HR approval.',
      completed: 'Appraisal completed and finalised by HR.'
    };
    lockedText.textContent = msg[ap.status] || 'This appraisal is locked.';
  }
}

function setAppraisalScore(key, val) {
  const comp = appData.appraisal.competencies.find(c => c.key === key);
  if (!comp) return;
  comp.selfScore = val;
  saveSharedDb();
  renderAppraisalForm();
}

function renderAppraisalReviewChain() {
  const ap = appData.appraisal;
  const chain = document.getElementById('appraisal-review-chain');

  const stars = (n) => n ? Array(Math.round(n)).fill('★').join('') + ` <span style="color:var(--text-tertiary);">${n}/5</span>` : '<span style="color:var(--text-tertiary);">Pending</span>';

  let blocks = '';

  if (ap.status === 'sent_back' && ap.sentBackReason) {
    blocks += `
      <div class="appraisal-alert" style="margin-bottom:14px;">
        <i class="ti ti-arrow-back-up"></i>
        <span><strong>Sent back for revision:</strong> ${ap.sentBackReason}</span>
      </div>`;
  }

  blocks += `
    <div class="review-step">
      <div class="review-step-head">
        <span class="review-step-name"><i class="ti ti-user-check"></i> Manager — ${ap.manager.name}</span>
        ${reviewStatusPill('manager')}
      </div>
      <div class="review-step-body">
        <div class="review-rating">${stars(ap.manager.score)}</div>
        <div class="review-comment">${ap.manager.comment || 'No comment yet.'}</div>
      </div>
    </div>
    <div class="review-step">
      <div class="review-step-head">
        <span class="review-step-name"><i class="ti ti-building"></i> HR — ${ap.hr.name}</span>
        ${reviewStatusPill('hr')}
      </div>
      <div class="review-step-body">
        <div class="review-rating">${stars(ap.hr.score)}</div>
        <div class="review-comment">${ap.hr.comment || 'No comment yet.'}</div>
      </div>
    </div>
  `;

  if (ap.status === 'completed' && ap.finalRating) {
    blocks += `
      <div class="appraisal-final">
        <div class="appraisal-final-label">Final Rating</div>
        <div class="appraisal-final-value">${ap.finalRating.toFixed(1)} <span>/ 5.0</span></div>
      </div>`;
  }

  // Demo helper buttons to simulate the approval chain moving forward
  blocks += `<div class="appraisal-sim">
    <div class="appraisal-sim-title">Demo: simulate the review chain</div>
    <div class="appraisal-sim-btns">
      <button class="btn" onclick="simulateManagerReview(true)" ${ap.status === 'pending_manager' ? '' : 'disabled'}>Manager Approve</button>
      <button class="btn" onclick="simulateManagerReview(false)" ${ap.status === 'pending_manager' ? '' : 'disabled'}>Manager Send Back</button>
      <button class="btn" onclick="simulateHrReview()" ${ap.status === 'pending_hr' ? '' : 'disabled'}>HR Finalise</button>
      <button class="btn" onclick="resetAppraisal()">Reset Cycle</button>
    </div>
  </div>`;

  chain.innerHTML = blocks;
}

function reviewStatusPill(role) {
  const ap = appData.appraisal;
  const idx = appraisalStageIndex();
  let label = 'Waiting', cls = 'status-pending';

  if (role === 'manager') {
    if (idx > 1 || ap.status === 'completed') { label = 'Approved'; cls = 'status-approved'; }
    else if (ap.status === 'pending_manager') { label = 'In Review'; cls = 'status-pending'; }
    else if (ap.status === 'sent_back') { label = 'Sent Back'; cls = 'status-rejected'; }
    else { label = 'Not Started'; cls = 'status-pending'; }
  } else {
    if (ap.status === 'completed') { label = 'Approved'; cls = 'status-approved'; }
    else if (ap.status === 'pending_hr') { label = 'In Review'; cls = 'status-pending'; }
    else { label = 'Waiting'; cls = 'status-pending'; }
  }
  return `<span class="status-pill ${cls}">${label}</span>`;
}

function selfAverage() {
  const comps = appData.appraisal.competencies;
  const total = comps.reduce((s, c) => s + c.selfScore, 0);
  return comps.length ? (total / comps.length) : 0;
}

function submitAppraisal(event) {
  event.preventDefault();
  const ap = appData.appraisal;

  const unrated = ap.competencies.some(c => c.selfScore === 0);
  if (unrated) { showToast('❌ Please rate all competencies'); return; }

  ap.achievements = document.getElementById('appraisal-achievements').value.trim();
  ap.goals = document.getElementById('appraisal-goals').value.trim();

  if (!ap.achievements) { showToast('❌ Please add your key achievements'); return; }

  ap.status = 'pending_manager';
  ap.sentBackReason = '';
  ap.submittedDate = new Date().toISOString().split('T')[0];

  appData.notifications.unshift({
    id: appData.notifications.length + 1,
    message: 'Your appraisal was submitted to your manager',
    date: 'just now', read: false, type: 'performance'
  });
  saveSharedDb();

  updateAppraisalPage();
  updateNotificationList();
  showToast('✓ Appraisal submitted to manager');
}

function simulateManagerReview(approve) {
  const ap = appData.appraisal;
  if (ap.status !== 'pending_manager') return;

  if (approve) {
    ap.manager.score = Math.round((selfAverage() + 0.2) * 10) / 10;
    if (ap.manager.score > 5) ap.manager.score = 5;
    ap.manager.comment = 'Strong performance this cycle. Approved and forwarded to HR.';
    ap.manager.date = new Date().toISOString().split('T')[0];
    ap.status = 'pending_hr';
    showToast('✓ Manager approved — sent to HR');
  } else {
    ap.sentBackReason = 'Please add more detail to your achievements and re-score productivity.';
    ap.status = 'sent_back';
    ap.manager.score = null;
    ap.manager.comment = '';
    showToast('↩ Manager sent the appraisal back for revision');
  }
  saveSharedDb();
  updateAppraisalPage();
}

function simulateHrReview() {
  const ap = appData.appraisal;
  if (ap.status !== 'pending_hr') return;

  ap.hr.score = ap.manager.score;
  ap.hr.comment = 'Calibrated across the department. Rating confirmed and finalised.';
  ap.hr.date = new Date().toISOString().split('T')[0];
  ap.finalRating = Math.round(((ap.manager.score + selfAverage()) / 2) * 10) / 10;
  ap.status = 'completed';

  // Push into history
  ap.history.unshift({
    cycle: ap.cycle,
    selfAvg: Math.round(selfAverage() * 10) / 10,
    managerScore: ap.manager.score,
    finalRating: ap.finalRating,
    status: 'completed',
    completedDate: new Date().toISOString().split('T')[0]
  });

  appData.notifications.unshift({
    id: appData.notifications.length + 1,
    message: `Your ${ap.cycle} appraisal is complete — final rating ${ap.finalRating}/5`,
    date: 'just now', read: false, type: 'performance'
  });
  saveSharedDb();

  updateAppraisalPage();
  updateNotificationList();
  showToast('✓ HR finalised the appraisal');
}

function resetAppraisal() {
  const ap = appData.appraisal;
  ap.status = 'not_started';
  ap.competencies.forEach(c => c.selfScore = 0);
  ap.achievements = '';
  ap.goals = '';
  ap.submittedDate = null;
  ap.manager = { name: 'CEO', score: null, comment: '', date: null };
  ap.hr = { name: 'Amara Nwosu', score: null, comment: '', date: null };
  ap.finalRating = null;
  ap.sentBackReason = '';
  saveSharedDb();
  updateAppraisalPage();
  showToast('✓ Appraisal cycle reset');
}

function renderAppraisalHistory() {
  const table = document.getElementById('appraisal-history-table');
  table.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Cycle</th>
          <th>Self Avg</th>
          <th>Manager Score</th>
          <th>Final Rating</th>
          <th>Status</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        ${appData.appraisal.history.map(h => `
          <tr>
            <td style="font-weight:600;">${h.cycle}</td>
            <td>${h.selfAvg.toFixed(1)}</td>
            <td>${h.managerScore.toFixed(1)}</td>
            <td style="font-weight:700; color:var(--accent-text);">${h.finalRating.toFixed(1)}</td>
            <td><span class="badge badge-active">Completed</span></td>
            <td>${h.completedDate}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// ── TRAINING PAGE ──
function courseImage(course) {
  return `<div style="width:100%;height:140px;border-radius:var(--radius);overflow:hidden;margin-bottom:12px;background:var(--bg-surface);">
    <img src="${course.image}" alt="${course.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" />
  </div>`;
}

function renderCoursesTab(tab) {
  const container = document.getElementById('pp-' + tab);
  if (!container) return;
  const list = appData.training.filter(t => t.status === tab);
  if (!list.length) {
    container.innerHTML = `<div style="padding:32px;text-align:center;color:var(--text-tertiary);font-size:13px;grid-column:1/-1;">No ${tab} courses.</div>`;
    return;
  }
  container.innerHTML = list.map(course => {
    const meta = tab === 'completed'
      ? `Completed ${course.completedDate}`
      : `${course.hours} hours · Instructor: ${course.instructor}`;
    const action = tab === 'available'
      ? `<button class="btn btn-primary" onclick="enrollCourse(${course.id})" style="margin-top:12px;width:100%;">Enroll Now</button>`
      : tab === 'enrolled'
      ? `<div class="progress-bar" style="margin-top:12px;"><div class="progress-fill" style="width:${course.progress}%"></div></div>
         <div class="training-progress-label" style="margin-top:6px;">${course.progress}% Complete</div>`
      : `<button class="btn" onclick="downloadCertificate(${course.id})" style="margin-top:12px;width:100%;"><i class="ti ti-download"></i> Certificate</button>`;
    return `
      <div class="course-card${tab === 'completed' ? ' completed' : ''}">
        ${courseImage(course)}
        <div class="course-header">
          <h4 class="course-title">${course.title}</h4>
          <span class="course-level">${course.level}</span>
        </div>
        <div class="course-desc">${course.description || ''}</div>
        <div class="course-meta"><span class="course-duration"><i class="ti ti-clock"></i> ${meta}</span></div>
        ${action}
      </div>
    `;
  }).join('');
}

function updateTrainingPage() {
  ['available','enrolled','completed'].forEach(renderCoursesTab);
  const section = document.getElementById('page-training');
  const tabs = section.querySelectorAll('.ptab');
  tabs.forEach(tab => {
    if (tab.dataset.bound) return;
    tab.dataset.bound = '1';
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('on'));
      this.classList.add('on');
      const name = this.getAttribute('data-tab');
      ['available','enrolled','completed'].forEach(t => {
        const el = document.getElementById('pp-' + t);
        if (el) el.classList.toggle('hidden', t !== name);
      });
      renderCoursesTab(name);
    });
  });
}

// ── DIRECTORY PAGE ──
function updateDirectoryPage() {
  displayEmployeeGrid(appData.employees);
}

function displayEmployeeGrid(employees) {
  const grid = document.getElementById('employee-grid');
  
  grid.innerHTML = employees.map(emp => `
    <div class="employee-card" onclick="openEmployeeProfile('${emp.id}')">
      <div class="employee-avatar" style="background: ${emp.avatarBg}; color: ${emp.avatarColor};">${emp.avatar}</div>
      <div class="employee-name">${emp.name}</div>
      <div class="employee-title">${emp.title}</div>
      <div class="employee-dept">${emp.department}</div>
      <div class="employee-contact">
        <div class="employee-contact-item">📧 ${emp.email}</div>
        <div class="employee-contact-item">📱 ${emp.phone}</div>
      </div>
      <div class="employee-actions">
        <button class="btn" onclick="event.stopPropagation(); contactEmployee('${emp.email}', '${emp.name}')"><i class="ti ti-mail"></i> Email</button>
        <button class="btn" onclick="event.stopPropagation(); contactEmployee('${emp.phone}', '${emp.name}')"><i class="ti ti-phone"></i> Call</button>
      </div>
    </div>
  `).join('');
}

function searchDirectory() {
  const searchInput = document.getElementById('directory-search').value.toLowerCase();
  const filterSelect = document.getElementById('directory-filter').value;
  
  const filtered = appData.employees.filter(emp => {
    const matchesSearch = !searchInput || 
      emp.name.toLowerCase().includes(searchInput) ||
      emp.title.toLowerCase().includes(searchInput) ||
      emp.department.toLowerCase().includes(searchInput);
    
    const matchesFilter = !filterSelect || emp.department === filterSelect;
    
    return matchesSearch && matchesFilter;
  });
  
  displayEmployeeGrid(filtered);
  
  if (filtered.length === 0) {
    document.getElementById('employee-grid').innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-tertiary);">No employees found matching your criteria.</div>';
  }
}

function filterDirectory() {
  searchDirectory();
}

function openEmployeeProfile(empId) {
  const emp = appData.employees.find(e => e.id === empId);
  if (!emp) return;
  
  const modal = document.getElementById('employee-modal');
  const modalBody = document.getElementById('employee-modal-body');
  
  modalBody.innerHTML = `
    <div class="employee-profile-header">
      <div class="employee-profile-avatar" style="background: ${emp.avatarBg}; color: ${emp.avatarColor};">${emp.avatar}</div>
      <div class="employee-profile-info">
        <div class="employee-profile-name">${emp.name}</div>
        <div class="employee-profile-title">${emp.title}</div>
        <span class="employee-profile-dept">${emp.department}</span>
      </div>
    </div>

    <div class="employee-profile-section">
      <div class="employee-profile-section-title">Contact Information</div>
      <div class="employee-profile-row">
        <span class="employee-profile-label">Email</span>
        <span class="employee-profile-value">${emp.email}</span>
      </div>
      <div class="employee-profile-row">
        <span class="employee-profile-label">Phone</span>
        <span class="employee-profile-value">${emp.phone}</span>
      </div>
    </div>

    <div class="employee-profile-section">
      <div class="employee-profile-section-title">Employment Details</div>
      <div class="employee-profile-row">
        <span class="employee-profile-label">Manager</span>
        <span class="employee-profile-value">${emp.manager}</span>
      </div>
      <div class="employee-profile-row">
        <span class="employee-profile-label">Department</span>
        <span class="employee-profile-value">${emp.department}</span>
      </div>
      <div class="employee-profile-row">
        <span class="employee-profile-label">Job Title</span>
        <span class="employee-profile-value">${emp.title}</span>
      </div>
    </div>

    <div class="employee-profile-actions">
      <button class="btn btn-primary" onclick="contactEmployee('${emp.email}', '${emp.name}')"><i class="ti ti-mail"></i> Send Email</button>
      <button class="btn" onclick="contactEmployee('${emp.phone}', '${emp.name}')"><i class="ti ti-phone"></i> Call</button>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function closeEmployeeModal() {
  document.getElementById('employee-modal').classList.add('hidden');
}

function contactEmployee(contact, name) {
  if (contact.includes('@')) {
    showToast('📧 Opening email to ' + name);
  } else {
    showToast('📱 Opening phone to ' + name);
  }
}

// ── ANALYTICS / REPORTS PAGE ──
function updateAnalyticsPage() {
  const employees = (sharedDb && sharedDb.employees) ? sharedDb.employees : (appData.employees || []);
  const empCount = employees.length || 1;

  // ── KPI: Total Employees ──
  const totalEl = document.getElementById('total-employees');
  if (totalEl) totalEl.textContent = employees.length;

  // ── KPI: Attendance Rate (avg from attendance arrays) ──
  let presentDays = 0, totalDays = 0;
  employees.forEach(e => {
    const att = e.attendance || [];
    att.forEach(a => {
      totalDays++;
      if (a.status === 'present' || a.status === 'late') presentDays++;
    });
  });
  const attRate = totalDays ? Math.round((presentDays / totalDays) * 100) : 94;
  const attEl = document.getElementById('attendance-rate');
  if (attEl) attEl.textContent = attRate + '%';

  // ── KPI: Avg Leave Days Used ──
  let totalLeaveUsed = 0;
  employees.forEach(e => {
    const l = e.leave || {};
    ['annual','sick','casual','unpaid'].forEach(k => {
      if (l[k] && typeof l[k].used === 'number') totalLeaveUsed += l[k].used;
    });
  });
  const avgLeave = (totalLeaveUsed / empCount).toFixed(1);
  const avgEl = document.getElementById('avg-leave');
  if (avgEl) avgEl.textContent = avgLeave;

  // ── KPI: Training Hours ──
  let trainingHours = 0;
  employees.forEach(e => {
    if (Array.isArray(e.training)) {
      e.training.forEach(t => { trainingHours += (t.hours || 0); });
    } else if (e.trainingHours) {
      trainingHours += e.trainingHours;
    }
  });
  if (!trainingHours) trainingHours = empCount * 24; // sensible fallback
  const thEl = document.getElementById('training-hours');
  if (thEl) thEl.textContent = trainingHours.toLocaleString();

  // ── CHART: Leave Usage by Type (horizontal bars) ──
  const leaveTotals = { annual: 0, sick: 0, casual: 0, unpaid: 0 };
  employees.forEach(e => {
    const l = e.leave || {};
    Object.keys(leaveTotals).forEach(k => {
      if (l[k] && typeof l[k].used === 'number') leaveTotals[k] += l[k].used;
    });
  });
  const leaveColors = {
    annual: '#2563EB',
    sick:   '#EF4444',
    casual: '#F59E0B',
    unpaid: '#8A97A8'
  };
  const leaveLabels = {
    annual: 'Annual Leave',
    sick:   'Sick Leave',
    casual: 'Casual Leave',
    unpaid: 'Unpaid Leave'
  };
  const leaveMax = Math.max(1, ...Object.values(leaveTotals));
  const leaveChart = document.getElementById('leave-chart');
  if (leaveChart) {
    leaveChart.style.display = 'block';
    leaveChart.style.padding = '20px';
    leaveChart.innerHTML = Object.keys(leaveTotals).map(k => {
      const v = leaveTotals[k];
      const pct = Math.round((v / leaveMax) * 100);
      return `
        <div style="margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:6px;">
            <span>${leaveLabels[k]}</span><span>${v} days</span>
          </div>
          <div style="height:10px;background:var(--bg-hover);border-radius:6px;overflow:hidden;">
            <div style="height:100%;width:${pct}%;background:${leaveColors[k]};border-radius:6px;transition:width .3s;"></div>
          </div>
        </div>`;
    }).join('');
  }

  // ── CHART: Performance Distribution (rating buckets) ──
  const buckets = [
    { label: 'Outstanding (4.5+)', min: 4.5, max: 5.01, color: '#10B981', count: 0 },
    { label: 'Exceeds (4.0-4.5)',  min: 4.0, max: 4.5,  color: '#2563EB', count: 0 },
    { label: 'Meets (3.0-4.0)',    min: 3.0, max: 4.0,  color: '#F59E0B', count: 0 },
    { label: 'Below (<3.0)',       min: 0,   max: 3.0,  color: '#EF4444', count: 0 }
  ];
  employees.forEach(e => {
    const r = (e.performance && e.performance.overallRating) || 0;
    const b = buckets.find(x => r >= x.min && r < x.max);
    if (b) b.count++;
  });
  const perfMax = Math.max(1, ...buckets.map(b => b.count));
  const perfChart = document.getElementById('performance-chart');
  if (perfChart) {
    perfChart.style.display = 'flex';
    perfChart.style.alignItems = 'flex-end';
    perfChart.style.justifyContent = 'space-around';
    perfChart.style.gap = '16px';
    perfChart.style.padding = '20px';
    perfChart.innerHTML = buckets.map(b => {
      const h = Math.round((b.count / perfMax) * 200);
      return `
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;height:100%;justify-content:flex-end;">
          <div style="font-size:13px;font-weight:700;color:var(--text-primary);">${b.count}</div>
          <div style="width:100%;max-width:60px;height:${h}px;background:${b.color};border-radius:6px 6px 0 0;transition:height .3s;"></div>
          <div style="font-size:11px;color:var(--text-secondary);text-align:center;line-height:1.3;">${b.label}</div>
        </div>`;
    }).join('');
  }

  // ── TABLE: Department Statistics ──
  const deptMap = {};
  employees.forEach(e => {
    const d = e.department || 'Unassigned';
    if (!deptMap[d]) deptMap[d] = { name: d, count: 0, leaveUsed: 0, ratingSum: 0, ratingCount: 0, presentDays: 0, totalDays: 0 };
    const row = deptMap[d];
    row.count++;
    const l = e.leave || {};
    ['annual','sick','casual','unpaid'].forEach(k => {
      if (l[k] && typeof l[k].used === 'number') row.leaveUsed += l[k].used;
    });
    if (e.performance && e.performance.overallRating) {
      row.ratingSum += e.performance.overallRating;
      row.ratingCount++;
    }
    (e.attendance || []).forEach(a => {
      row.totalDays++;
      if (a.status === 'present' || a.status === 'late') row.presentDays++;
    });
  });
  const deptEl = document.getElementById('dept-stats');
  if (deptEl) {
    const rows = Object.values(deptMap).sort((a,b) => b.count - a.count);
    deptEl.innerHTML = `
      <table class="stats-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Employees</th>
            <th>Attendance</th>
            <th>Avg Leave Used</th>
            <th>Avg Rating</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(r => {
            const att = r.totalDays ? Math.round((r.presentDays / r.totalDays) * 100) + '%' : '—';
            const avgL = (r.leaveUsed / r.count).toFixed(1);
            const avgR = r.ratingCount ? (r.ratingSum / r.ratingCount).toFixed(2) : '—';
            return `
              <tr>
                <td style="font-weight:600;">${r.name}</td>
                <td>${r.count}</td>
                <td>${att}</td>
                <td>${avgL} days</td>
                <td>${avgR}</td>
              </tr>`;
          }).join('') || '<tr><td colspan="5" style="text-align:center;color:var(--text-tertiary);padding:20px;">No department data available</td></tr>'}
        </tbody>
      </table>
    `;
  }
}

// ── FORM SUBMISSION ──
function submitLeave(event) {
  event.preventDefault();
  
  const type = document.getElementById('leave-type').value;
  const startDate = document.getElementById('leave-start').value;
  const endDate = document.getElementById('leave-end').value;
  const reason = document.getElementById('leave-reason').value;
  
  if (!type || !startDate || !endDate || !reason) {
    showToast('❌ Please fill in all fields');
    return;
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  
  const newRequest = {
    id: appData.leaveRequests.length + 1,
    type: type.charAt(0).toUpperCase() + type.slice(1),
    startDate: startDate,
    endDate: endDate,
    days: days,
    reason: reason,
    status: 'pending',
    submittedDate: new Date().toISOString().split('T')[0]
  };
  
  newRequest.empId = 'EMP-004';
  sharedDb.leaveRequests.unshift(newRequest);
  saveSharedDb();
  
  // Add notification
  appData.notifications.unshift({
    id: appData.notifications.length + 1,
    message: `Leave request submitted for ${days} days`,
    date: 'just now',
    read: false,
    type: 'leave'
  });
  saveSharedDb();
  
  event.target.reset();
  updateLeavePage();
  showToast('✓ Leave request submitted successfully');
}

// ── TAB LISTENERS ──
function setupTabListeners() {
  const tabs = document.querySelectorAll('.ptab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('on'));
      this.classList.add('on');
      
      const tabName = this.getAttribute('data-tab');
      document.querySelectorAll('[id^="pp-"]').forEach(el => el.classList.add('hidden'));
      document.getElementById('pp-' + tabName).classList.remove('hidden');
    });
  });
}

// ── NOTIFICATIONS ──
function setupNotifications() {
  const notifBtn = document.getElementById('notif-btn');
  const notifDropdown = document.getElementById('notif-dropdown');
  
  notifBtn.addEventListener('click', () => {
    notifDropdown.classList.toggle('show');
    updateNotificationList();
  });
  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.notif-container')) {
      notifDropdown.classList.remove('show');
    }
  });
}

function updateNotificationList() {
  const notifList = document.getElementById('notif-list');
  const unreadCount = appData.notifications.filter(n => !n.read).length;
  
  document.getElementById('notif-dot').style.display = unreadCount > 0 ? 'block' : 'none';
  
  notifList.innerHTML = appData.notifications.map(n => `
    <div class="notif-item" onclick="markNotificationRead(${n.id})">
      <div style="font-size: 12px;">${n.message}</div>
      <div style="font-size: 10px; color: var(--text-tertiary); margin-top: 4px;">${n.date}</div>
    </div>
  `).join('');
}

function markNotificationRead(id) {
  const notif = appData.notifications.find(n => n.id === id);
  if (notif) {
    notif.read = true;
    saveSharedDb();
  }
  updateNotificationList();
}

function clearNotifications() {
  appData.notifications = [];
  updateNotificationList();
  showToast('✓ Notifications cleared');
}

// ── DOWNLOAD FUNCTIONS ──
function downloadPayslip(month) {
  showToast('⬇️ Downloading payslip for ' + month);
}

function downloadDocument(name) {
  showToast('⬇️ Downloading ' + name);
}

function downloadCertificate(courseId) {
  const course = appData.training.find(c => c.id === courseId);
  if (course) {
    showToast('⬇️ Downloading certificate for ' + course.title);
  }
}

function uploadDocument() {
  showToast('✓ Document uploaded successfully');
}

function enrollCourse(courseId) {
  let enrollment = sharedDb.trainings.find(t => t.courseId === courseId && t.empId === 'EMP-004');
  if (!enrollment) {
    enrollment = {
      id: 't' + Date.now(),
      courseId: courseId,
      empId: 'EMP-004',
      due: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      progress: 0,
      status: 'in-progress',
      enrolledDate: new Date().toISOString().split('T')[0]
    };
    sharedDb.trainings.push(enrollment);
    saveSharedDb();
    const course = sharedDb.courses.find(c => c.id === courseId);
    showToast('✓ Enrolled in ' + (course ? course.title : 'course'));
    updateTrainingPage();
  }
}

// ── TOAST NOTIFICATION ──
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ── CLOCK DISPLAY ──
function startClock() {
  setInterval(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const clockElement = document.getElementById('current-time');
    if (clockElement) {
      clockElement.textContent = timeStr;
    }
  }, 1000);
}

// ── CLOCK IN/OUT ──
function clockInOut() {
  const btn = document.getElementById('clock-btn');
  const status = document.getElementById('attendance-status');
  
  if (!appData.currentClockIn) {
    const now = new Date();
    appData.currentClockIn = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    btn.textContent = 'Clock Out';
    btn.style.background = '#EF4444';
    status.textContent = '✓ Clocked in at ' + appData.currentClockIn;
    showToast('✓ Clocked in successfully');
  } else {
    const clockOut = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    appData.currentClockIn = null;
    btn.textContent = 'Clock In';
    btn.style.background = '';
    status.textContent = '✓ Clocked out at ' + clockOut;
    showToast('✓ Clocked out successfully');
  }
}

// ── FILTER ATTENDANCE ──
function filterAttendance() {
  showToast('✓ Attendance filtered');
}

// ── FILTER LEAVE ──
function filterLeave() {
  showToast('✓ Leave filtered');
}

// ── TOGGLE EDIT PROFILE ──
function toggleEditProfile() {
  showToast('✓ Profile edit mode opened');
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('employee-modal');
  if (modal && event.target === modal) {
    closeEmployeeModal();
  }
});

// ══════════════════════════════════════════════════
//  AI CHAT ASSISTANT
// ══════════════════════════════════════════════════

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
      const welcomeMsg = `Hi ${appData.employee.name.split(' ')[0]}! 👋 I'm your Crewly AI assistant. I can help you check your leave balance, view payslips, find colleagues, and more. What would you like to know?`;
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
        role: 'employee',
        userName: appData.employee.name,
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

function processChatQuery(query) {
  const q = query.toLowerCase();

  // Greetings
  if (q.match(/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
    return 'Hello! 👋 I\'m your Crewly AI assistant. Ask me about your leave, payslips, performance, or search for a colleague!';
  }

  // Help
  if (q.match(/\b(help|what can you do|commands)\b/)) {
    return 'I can help with:\n• Leave balance & requests\n• Payslip details\n• Performance scores\n• Employee search\n• Training courses\n• Attendance records\n• Appraisal status\nJust type your question!';
  }

  // Thanks
  if (q.match(/\b(thank|thanks|thank you|cheers)\b/)) {
    return 'You\'re welcome! Let me know if you need anything else. 😊';
  }

  // Leave balance
  if (q.match(/\b(leave|balance|annual leave|sick leave|casual leave|vacation|day off|days off|pto)\b/)) {
    const pending = appData.leaveRequests.filter(r => r.status === 'pending');
    let response = `You have ${appData.leave.annual.remaining} annual leave days, ${appData.leave.sick.remaining} sick leave days, and ${appData.leave.casual.remaining} casual leave days remaining.`;
    if (pending.length > 0) {
      response += `\n\n📋 You also have ${pending.length} pending leave request(s).`;
    }
    return response;
  }

  // Payslip / Salary
  if (q.match(/\b(payslip|salary|pay|net pay|gross|deduction|wage|earning|income)\b/)) {
    if (appData.payslips.length === 0) {
      return 'No payslip data is available at the moment. Please check back later.';
    }
    const latest = appData.payslips[0];
    return `Your latest payslip (${latest.month}): Gross ₦${(latest.gross / 1000).toFixed(0)}k → Net ₦${(latest.net / 1000).toFixed(0)}k after deductions.\n\n📊 Breakdown:\n• PAYE Tax: ₦${latest.paye.toLocaleString()}\n• Pension: ₦${latest.pension.toLocaleString()}\n• NHF: ₦${latest.nhf.toLocaleString()}`;
  }

  // Performance / Rating
  if (q.match(/\b(performance|rating|score|review|goal|kpi)\b/)) {
    const metrics = appData.performance.metrics;
    const best = metrics.reduce((a, b) => a.score > b.score ? a : b);
    return `Your overall performance rating is ${appData.performance.overallRating}/5 ★ with ${appData.performance.goalsCompleted} goals completed.\n\n📈 Your strongest area is ${best.name} at ${best.score}%.\n\nMetrics:\n${metrics.map(m => `• ${m.name}: ${m.score}%`).join('\n')}`;
  }

  // Employee search — "who is [name]" or "find [name]"
  if (q.match(/\b(who is|find|search|look up|lookup)\b/)) {
    const nameQuery = q.replace(/\b(who is|find|search|look up|lookup|for|the|employee|person|someone|staff)\b/g, '').trim();
    if (nameQuery.length > 1) {
      const found = appData.employees.filter(emp =>
        emp.name.toLowerCase().includes(nameQuery)
      );
      if (found.length > 0) {
        return found.map(emp =>
          `👤 ${emp.name}\n• Title: ${emp.title}\n• Department: ${emp.department}\n• Email: ${emp.email}\n• Phone: ${emp.phone}`
        ).join('\n\n');
      } else {
        return 'I couldn\'t find anyone by that name. Try checking the Employee Directory.';
      }
    }
    return 'Please specify a name to search for. For example: "Find Chioma" or "Who is Tunde?"';
  }

  // Directory / Team
  if (q.match(/\b(directory|team|employees|staff|colleagues|coworker|people|headcount|department)\b/)) {
    const departments = [...new Set(appData.employees.map(e => e.department))];
    return `We have ${appData.employees.length} employees across ${departments.length} departments: ${departments.join(', ')}.\n\nCheck the Directory page for full details.`;
  }

  // Training / Courses
  if (q.match(/\b(training|course|learning|certificate|skill|enroll)\b/)) {
    const available = appData.training.filter(t => t.status === 'available').length;
    const enrolled = appData.training.filter(t => t.status === 'enrolled').length;
    const completed = appData.training.filter(t => t.status === 'completed').length;
    const enrolledCourses = appData.training.filter(t => t.status === 'enrolled');
    let response = `📚 Training overview:\n• ${available} course(s) available\n• ${enrolled} course(s) in progress\n• ${completed} course(s) completed`;
    if (enrolledCourses.length > 0) {
      response += '\n\nIn progress:';
      enrolledCourses.forEach(c => {
        response += `\n• ${c.title} — ${c.progress}% complete`;
      });
    }
    return response;
  }

  // Attendance
  if (q.match(/\b(attendance|clock|hours|time|present|absent|late|punctual)\b/)) {
    const records = appData.attendance;
    const presentDays = records.filter(r => r.status === 'present').length;
    const totalHours = records.reduce((sum, r) => sum + r.hours, 0);
    const avgHours = records.length > 0 ? (totalHours / records.length).toFixed(1) : 0;
    const lateDays = records.filter(r => r.lateBy > 0).length;
    return `📅 Attendance summary (recent ${records.length} records):\n• Present: ${presentDays} day(s)\n• Average hours: ${avgHours} hrs/day\n• Total hours: ${totalHours} hrs\n• Late arrivals: ${lateDays} day(s)`;
  }

  // Appraisal / Self-assessment
  if (q.match(/\b(appraisal|self-assessment|self assessment|evaluation|cycle)\b/)) {
    const appraisal = appData.appraisal;
    const statusLabels = {
      'not_started': 'Not Started',
      'pending_manager': 'Pending Manager Review',
      'pending_hr': 'Pending HR Review',
      'completed': 'Completed',
      'sent_back': 'Sent Back for Revision'
    };
    let response = `📋 Appraisal — ${appraisal.cycle}\n• Status: ${statusLabels[appraisal.status] || appraisal.status}`;
    if (appraisal.history.length > 0) {
      response += `\n\nPast cycles:`;
      appraisal.history.forEach(h => {
        response += `\n• ${h.cycle}: Final rating ${h.finalRating}/5 (${h.status})`;
      });
    }
    return response;
  }

  // Requests / Pending
  if (q.match(/\b(request|pending|approval|approved|rejected|status)\b/)) {
    const pending = appData.requests.filter(r => r.status === 'pending');
    const approved = appData.requests.filter(r => r.status === 'approved');
    const rejected = appData.requests.filter(r => r.status === 'rejected');
    let response = `📝 Requests overview:\n• Pending: ${pending.length}\n• Approved: ${approved.length}\n• Rejected: ${rejected.length}`;
    if (pending.length > 0) {
      response += '\n\nPending requests:';
      pending.forEach(r => {
        response += `\n• ${r.title} — submitted ${r.submittedDate}`;
      });
    }
    return response;
  }

  // Who is on leave
  if (q.match(/\b(on leave|who.*leave|absent today)\b/)) {
    const pending = appData.leaveRequests.filter(r => r.status === 'approved');
    if (pending.length > 0) {
      let response = `📅 Approved leave records:\n`;
      pending.forEach(r => {
        response += `• ${r.type}: ${r.startDate} to ${r.endDate} (${r.days} day(s))\n`;
      });
      return response;
    }
    return 'No approved leave requests found at the moment.';
  }

  // Gig Board
  if (q.match(/\b(gig|gig board|internal gig|skill|skills|freelance|outsourc)\b/)) {
    const openGigs = (appData.gigs || []).filter(g => g.status === 'open').length;
    const mySkills = (appData.employees.find(e => e.name === appData.employee.name) || {}).skills || [];
    const matchedGigs = (appData.gigs || []).filter(g => g.status === 'open' && g.requiredSkills.some(s => mySkills.includes(s))).length;
    return `💼 Gig Board summary:\n• ${openGigs} open gig(s)\n• ${matchedGigs} gig(s) matching your skills\n• Your skills: ${mySkills.join(', ')}\n\nVisit the Gig Board page to find or post internal gigs!`;
  }

  // Burnout / Stress / Risk
  if (q.match(/\b(burnout|risk|pulse|engagement|stress|exhausted|grace)\b/)) {
    const highRiskCount = appData.burnoutAlerts.filter(b => b.status === 'high').length;
    const highRiskNames = appData.burnoutAlerts.filter(b => b.status === 'high').map(b => b.name).join(', ');
    return `🔥 Burnout & Pulse summary:\n• ${highRiskCount} team member is currently at High Risk: **${highRiskNames}** (Risk Score: 85%)\n• Signals: 3 unplanned sick days, 18 hrs overtime logged\n• Active pulses: ${appData.pulses.length} collected this week\n\nVisit the Burnout & Pulse page to view details, submit your own pulse, or schedule a 1-on-1.`;
  }

  // Shift Schedule / Sick / Swap / Substitution
  if (q.match(/\b(schedule|shift|shifts|sick|substitute|substitution|swap|cover)\b/)) {
    const sickShiftsCount = appData.shifts.filter(s => Object.values(s.status).includes('sick')).length;
    let details = "All team members are currently active on their scheduled shifts.";
    if (sickShiftsCount > 0) {
      const sickList = [];
      appData.shifts.forEach(s => {
        Object.entries(s.status).forEach(([day, stat]) => {
          if (stat === 'sick') sickList.push(`${s.name} (${day})`);
        });
      });
      details = `Currently, ${sickShiftsCount} shift(s) called in sick: **${sickList.join(', ')}** and are awaiting coverage.`;
    }
    return `📅 Shift Schedule & Substitution:\n• ${details}\n\nGo to the **Shift Schedule** page to view the calendar, report sick, or dispatch auto-substitute requests.`;
  }

  // Default fallback
  return 'I\'m not sure about that. Try asking about your leave balance, payslips, performance, or search for a colleague by name.';
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages');
  container.innerHTML = chatHistory.map(msg => `
    <div class="chat-bubble-wrap ${msg.role === 'bot' ? 'bot' : 'user'}">
      <div class="chat-bubble ${msg.role === 'bot' ? 'bot' : 'user'}">${msg.role === 'bot' && window.CrewlyAI ? CrewlyAI.formatHTML(msg.text) : escapeHTML(msg.text)}</div>
      <span class="chat-timestamp">${msg.time}</span>
    </div>
  `).join('');
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML.replace(/\n/g, '<br>');
}

function showTypingIndicator() {
  const container = document.getElementById('chat-messages');
  const typing = document.createElement('div');
  typing.className = 'chat-typing';
  typing.id = 'chat-typing-indicator';
  typing.innerHTML = '<span class="chat-typing-dot"></span><span class="chat-typing-dot"></span><span class="chat-typing-dot"></span>';
  container.appendChild(typing);
  scrollChatToBottom();
}

function hideTypingIndicator() {
  const typing = document.getElementById('chat-typing-indicator');
  if (typing) typing.remove();
}

function scrollChatToBottom() {
  const container = document.getElementById('chat-messages');
  setTimeout(() => {
    container.scrollTop = container.scrollHeight;
  }, 50);
}

function handleChatChip(text) {
  sendChatMessage(text);
}

function handleChatKeypress(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendFromInput();
  }
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

// ══════════════════════════════════════════════════
//  INTERNAL GIG BOARD
// ══════════════════════════════════════════════════

appData.skillCategories = {
  'Engineering':   ['React', 'JavaScript', 'TypeScript', 'CSS', 'Git', 'Python', 'Node.js', 'PostgreSQL', 'REST APIs', 'Docker', 'AWS', 'System Architecture', 'API Design'],
  'Design':        ['Figma', 'UI/UX', 'Prototyping', 'User Research', 'Illustration'],
  'Marketing':     ['Content Strategy', 'Social Media', 'Brand Management', 'Copywriting', 'Google Analytics', 'Email Marketing', 'SEO', 'A/B Testing', 'Content Writing', 'Blog Writing', 'Content Calendar', 'Brand Voice'],
  'Sales':         ['Sales Strategy', 'CRM', 'Negotiation', 'Lead Generation', 'Presentation', 'Account Management', 'Cold Calling', 'Salesforce', 'Pipeline Management', 'Upselling'],
  'HR & People':   ['Recruitment', 'Policy Writing', 'Employee Relations', 'Compliance', 'Onboarding'],
  'Finance':       ['Financial Modelling', 'Budgeting', 'Tax Planning', 'Excel', 'Forecasting']
};

function getSkillCategory(skill) {
  for (const [cat, list] of Object.entries(appData.skillCategories)) {
    if (list.includes(skill)) return cat;
  }
  return 'Other';
}

if (!sharedDb.gigs) {
  sharedDb.gigs = [
    { id: 1, category: 'Design',      title: 'Redesign Marketing Landing Page', description: 'Need someone to create a modern landing page mockup in Figma for the Q3 campaign.', requiredSkills: ['Figma', 'UI/UX', 'Prototyping'], urgency: 'high', estimatedHours: 8, postedBy: 'Jessica Eze', department: 'Marketing', postedDate: '2026-06-10', status: 'open', assignedTo: null, applicants: [] },
    { id: 2, category: 'Engineering', title: 'Build Internal API for Leave Sync', description: 'Create a REST API endpoint that syncs leave data between Crewly and the payroll system.', requiredSkills: ['REST APIs', 'Node.js', 'Python'], urgency: 'medium', estimatedHours: 12, postedBy: 'Chioma Okafor', department: 'Engineering', postedDate: '2026-06-12', status: 'in-progress', assignedTo: 'David Okonkwo', applicants: [{name: 'David Okonkwo', appliedDate: '2026-06-12'}] },
    { id: 3, category: 'Marketing',   title: 'Write Blog Post: Company Culture', description: 'Need a 1500-word blog post about our company culture for the careers page.', requiredSkills: ['Blog Writing', 'Content Writing', 'Brand Voice'], urgency: 'low', estimatedHours: 4, postedBy: 'Amara Nwosu', department: 'HR', postedDate: '2026-06-14', status: 'open', assignedTo: null, applicants: [] },
    { id: 4, category: 'Marketing',   title: 'SEO Audit for Product Pages', description: 'Perform a full SEO audit on our product pages and provide recommendations.', requiredSkills: ['SEO', 'Google Analytics', 'Content Strategy'], urgency: 'medium', estimatedHours: 6, postedBy: 'Tunde Adeyemi', department: 'Sales', postedDate: '2026-06-08', status: 'open', assignedTo: null, applicants: [{name: 'Grace Adekunle', appliedDate: '2026-06-09'}] },
    { id: 5, category: 'Engineering', title: 'Code Review: Auth Module', description: 'Looking for a peer review of the new authentication module before merging.', requiredSkills: ['React', 'TypeScript', 'Git'], urgency: 'medium', estimatedHours: 3, postedBy: 'Chioma Okafor', department: 'Engineering', postedDate: '2026-06-13', status: 'open', assignedTo: null, applicants: [] },
    { id: 6, category: 'Finance',     title: 'Q2 Budget Spreadsheet Polish', description: 'Format and add charts to the Q2 budget tracking spreadsheet.', requiredSkills: ['Excel', 'Budgeting'], urgency: 'low', estimatedHours: 2, postedBy: 'Segun Oladele', department: 'Finance', postedDate: '2026-05-30', status: 'completed', assignedTo: 'Fatima Ibrahim', applicants: [{name: 'Fatima Ibrahim', appliedDate: '2026-05-31'}] }
  ];
  saveSharedDb();
}

let activeCategoryFilter = '';

function getCurrentEmployeeSkills() {
  const emp = appData.employees.find(e => e.name === appData.employee.name);
  return (emp && Array.isArray(emp.skills)) ? emp.skills : [];
}

function getSkillMatch(requiredSkills) {
  const mySkills = getCurrentEmployeeSkills();
  if (!requiredSkills || requiredSkills.length === 0) return 0;
  const matched = requiredSkills.filter(s => mySkills.includes(s)).length;
  return Math.round((matched / requiredSkills.length) * 100);
}

function updateGigBoardPage() {
  const openGigs = appData.gigs.filter(g => g.status === 'open');
  const inProgressGigs = appData.gigs.filter(g => g.status === 'in-progress');
  const myGigs = appData.gigs.filter(g => g.postedBy === appData.employee.name);
  const mySkills = getCurrentEmployeeSkills();
  const matchedGigs = openGigs.filter(g => g.requiredSkills.some(s => mySkills.includes(s)));

  // Stats
  document.getElementById('gig-stats').innerHTML = `
    <div class="stat-card">
      <div class="stat-icon" style="background: var(--accent-bg); color: var(--accent);"><i class="ti ti-briefcase"></i></div>
      <div class="stat-info"><div class="stat-number">${openGigs.length}</div><div class="stat-label">Open Gigs</div></div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background: var(--warning-bg); color: var(--warning);"><i class="ti ti-progress"></i></div>
      <div class="stat-info"><div class="stat-number">${inProgressGigs.length}</div><div class="stat-label">In Progress</div></div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background: var(--success-bg); color: var(--success);"><i class="ti ti-target-arrow"></i></div>
      <div class="stat-info"><div class="stat-number">${matchedGigs.length}</div><div class="stat-label">Match My Skills</div></div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background: var(--purple-bg); color: var(--purple);"><i class="ti ti-stars"></i></div>
      <div class="stat-info"><div class="stat-number">${mySkills.length}</div><div class="stat-label">My Skills</div></div>
    </div>
  `;

  // Populate skill filter dropdown
  const allSkills = [...new Set(appData.employees.flatMap(e => e.skills || []))].sort();
  const skillFilter = document.getElementById('gig-skill-filter');
  const currentVal = skillFilter.value;
  skillFilter.innerHTML = '<option value="">All Skills</option>' + allSkills.map(s => `<option value="${s}" ${s === currentVal ? 'selected' : ''}>${s}</option>`).join('');

  // Populate category dropdown on the post form
  const catSel = document.getElementById('gig-category');
  if (catSel && !catSel.options.length) {
    catSel.innerHTML = Object.keys(appData.skillCategories).map(c => `<option value="${c}">${c}</option>`).join('');
  }

  // Skill Category chips
  renderSkillCategoryChips();

  // Render gig feed
  renderGigFeed();

  // My skills display
  renderMySkillsProfile();

  // Suggested matches
  const suggestedEl = document.getElementById('gig-suggested-matches');
  if (matchedGigs.length > 0) {
    suggestedEl.innerHTML = matchedGigs.map(g => {
      const match = getSkillMatch(g.requiredSkills);
      return `<div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--border);">
        <div>
          <div style="font-weight: 600; font-size: 13px;">${g.title}</div>
          <div style="font-size: 11px; color: var(--text-tertiary);">${g.department} · ${g.estimatedHours}h · ${g.category || 'General'}</div>
        </div>
        <span class="match-badge ${match >= 67 ? 'high-match' : ''}"><i class="ti ti-sparkles" style="font-size: 12px;"></i> ${match}%</span>
      </div>`;
    }).join('');
  } else {
    suggestedEl.innerHTML = '<div style="font-size: 13px; color: var(--text-tertiary);">No matching gigs at the moment.</div>';
  }

  // New panels
  renderSkillEmployees();
  renderMyPostedGigsStatus();
  renderMyApplications();
}

function renderMySkillsProfile() {
  const mySkills = getCurrentEmployeeSkills();
  const el = document.getElementById('my-skills-display');
  if (!el) return;
  if (mySkills.length === 0) {
    el.innerHTML = '<div style="font-size:12px;color:var(--text-tertiary);">No skills yet. Add your first one below.</div>';
    return;
  }
  el.innerHTML = mySkills.map(s =>
    `<span class="skill-tag my-skill" onclick="filterGigsBySkill('${s.replace(/'/g, "\\'")}')" title="Category: ${getSkillCategory(s)}">${s} <i class="ti ti-x" style="font-size:10px;margin-left:4px;cursor:pointer;" onclick="event.stopPropagation();removeMySkill('${s.replace(/'/g, "\\'")}')"></i></span>`
  ).join(' ');
}

function addMySkill(event) {
  event.preventDefault();
  const input = document.getElementById('new-skill-input');
  const val = input.value.trim();
  if (!val) return;
  const emp = appData.employees.find(e => e.name === appData.employee.name);
  if (!emp) return;
  emp.skills = emp.skills || [];
  if (emp.skills.includes(val)) { showToast('You already have that skill'); return; }
  emp.skills.push(val);
  input.value = '';
  updateGigBoardPage();
  showToast(`✓ Skill "${val}" added to your profile`);
}

function removeMySkill(skill) {
  const emp = appData.employees.find(e => e.name === appData.employee.name);
  if (!emp || !emp.skills) return;
  emp.skills = emp.skills.filter(s => s !== skill);
  updateGigBoardPage();
  showToast(`Removed "${skill}"`);
}

function renderSkillCategoryChips() {
  const el = document.getElementById('skill-category-chips');
  if (!el) return;
  const cats = ['All', ...Object.keys(appData.skillCategories)];
  el.innerHTML = cats.map(c => {
    const val = c === 'All' ? '' : c;
    const active = activeCategoryFilter === val;
    const count = c === 'All'
      ? appData.gigs.length
      : appData.gigs.filter(g => g.category === c).length;
    return `<span class="skill-tag ${active ? 'matched' : ''}" style="cursor:pointer; font-weight:${active ? '700' : '500'};" onclick="setCategoryFilter('${val}')">${c} <span style="opacity:.6; font-weight:500;">· ${count}</span></span>`;
  }).join(' ');
}

function setCategoryFilter(cat) {
  activeCategoryFilter = cat;
  renderSkillCategoryChips();
  renderGigFeed();
  renderSkillEmployees();
}

function renderGigFeed() {
  const statusFilter = document.getElementById('gig-status-filter')?.value ?? 'open';
  const urgencyFilter = document.getElementById('gig-urgency-filter').value;
  const skillFilterVal = document.getElementById('gig-skill-filter').value;

  let gigs = appData.gigs.slice();
  if (statusFilter) gigs = gigs.filter(g => g.status === statusFilter);
  if (urgencyFilter) gigs = gigs.filter(g => g.urgency === urgencyFilter);
  if (skillFilterVal) gigs = gigs.filter(g => g.requiredSkills.includes(skillFilterVal));
  if (activeCategoryFilter) gigs = gigs.filter(g => g.category === activeCategoryFilter);

  const feed = document.getElementById('gig-feed');
  const mySkills = getCurrentEmployeeSkills();
  const myName = appData.employee.name;

  if (gigs.length === 0) {
    feed.innerHTML = `<div class="gig-empty"><i class="ti ti-briefcase-off"></i>No gigs match your filters.<br>Try adjusting your search or post a new gig!</div>`;
    return;
  }

  const statusBadge = (s) => {
    if (s === 'open')        return `<span class="badge badge-role" style="font-size:11px;">Open</span>`;
    if (s === 'in-progress') return `<span class="badge badge-warning" style="font-size:11px;">In Progress</span>`;
    if (s === 'completed')   return `<span class="badge badge-active" style="font-size:11px;">Completed</span>`;
    return '';
  };

  feed.innerHTML = gigs.map(gig => {
    const matchPercent = getSkillMatch(gig.requiredSkills);
    const isMyGig = gig.postedBy === myName;
    const hasApplied = gig.applicants.some(a => a.name === myName);
    const urgencyLabels = { high: '🔴 High', medium: '🟡 Medium', low: '🟢 Low' };

    let footerAction = '';
    if (gig.status === 'completed') {
      footerAction = `<span class="badge badge-active" style="font-size:11px;">Completed ✓</span>`;
    } else if (gig.status === 'in-progress') {
      footerAction = `<span class="badge badge-warning" style="font-size:11px;">Assigned to ${gig.assignedTo || '—'}</span>`;
      if (isMyGig) {
        footerAction += ` <button class="btn btn-primary" style="font-size:12px; padding:6px 12px; margin-left:6px;" onclick="completeGig(${gig.id})"><i class="ti ti-check"></i> Mark Complete</button>`;
      }
    } else if (isMyGig) {
      footerAction = `<span class="badge badge-active" style="font-size: 11px;">Your Gig</span>`;
    } else if (hasApplied) {
      footerAction = `<span class="badge badge-active" style="background: var(--success-bg); color: var(--success-text); font-size: 11px;">Applied ✓</span>`;
    } else {
      footerAction = `<button class="btn btn-primary" style="font-size: 12px; padding: 6px 16px;" onclick="applyToGig(${gig.id})"><i class="ti ti-send" style="font-size: 13px;"></i> Apply</button>`;
    }

    const applicantsSection = isMyGig && gig.applicants.length > 0 && gig.status === 'open' ? `
      <div class="gig-applicants">
        <div class="gig-applicants-title"><i class="ti ti-users" style="font-size: 14px;"></i> Applicants (${gig.applicants.length})</div>
        ${gig.applicants.map(a => `<div class="gig-applicant-item"><i class="ti ti-user" style="font-size: 13px;"></i> ${a.name} <span style="margin-left:8px; font-size:11px; color: var(--text-tertiary);">${a.appliedDate}</span><button class="btn btn-primary" style="margin-left:auto; font-size:11px; padding:4px 10px;" onclick="assignGig(${gig.id}, '${a.name.replace(/'/g, "\\'")}')"><i class="ti ti-user-check" style="font-size:12px;"></i> Assign</button></div>`).join('')}
      </div>
    ` : '';

    // Recommended employees (for my own open gigs without applicants yet, or always for my gigs)
    let recommendedSection = '';
    if (isMyGig && gig.status === 'open') {
      const recs = getRecommendedEmployees(gig).slice(0, 3);
      if (recs.length > 0) {
        recommendedSection = `
          <div class="gig-applicants" style="border-top:1px dashed var(--border); margin-top:8px;">
            <div class="gig-applicants-title"><i class="ti ti-sparkles" style="font-size:14px;"></i> Recommended employees</div>
            ${recs.map(r => `<div class="gig-applicant-item"><i class="ti ti-user" style="font-size:13px;"></i> <strong>${r.emp.name}</strong> <span style="font-size:11px; color:var(--text-tertiary); margin-left:6px;">${r.emp.title} · ${r.emp.department}</span><span class="match-badge ${r.match >= 67 ? 'high-match' : ''}" style="margin-left:auto;"><i class="ti ti-sparkles" style="font-size:12px;"></i> ${r.match}%</span></div>`).join('')}
          </div>`;
      }
    }

    return `
      <div class="gig-card">
        <div class="gig-card-header">
          <div>
            <div class="gig-card-title">${gig.title}</div>
            <div style="display:flex; gap:6px; margin-top:4px;">
              ${statusBadge(gig.status)}
              ${gig.category ? `<span class="badge badge-purple" style="font-size:11px;">${gig.category}</span>` : ''}
            </div>
          </div>
          <span class="urgency-badge ${gig.urgency}">${urgencyLabels[gig.urgency]}</span>
        </div>
        <div class="gig-card-desc">${gig.description}</div>
        <div class="gig-card-skills">
          ${gig.requiredSkills.map(s => `<span class="skill-tag ${mySkills.includes(s) ? 'matched' : ''}">${s}</span>`).join('')}
        </div>
        <div class="gig-card-meta">
          <span><i class="ti ti-clock"></i> ${gig.estimatedHours}h</span>
          <span><i class="ti ti-user"></i> ${gig.postedBy}</span>
          <span><i class="ti ti-building"></i> ${gig.department}</span>
          <span><i class="ti ti-calendar"></i> ${gig.postedDate}</span>
        </div>
        <div class="gig-card-footer">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="match-badge ${matchPercent >= 67 ? 'high-match' : ''}"><i class="ti ti-sparkles" style="font-size: 12px;"></i> ${matchPercent}% match</span>
            <span style="font-size: 12px; color: var(--text-tertiary);"><i class="ti ti-users" style="font-size: 13px;"></i> ${gig.applicants.length} applicant(s)</span>
          </div>
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; justify-content:flex-end;">${footerAction}</div>
        </div>
        ${applicantsSection}
        ${recommendedSection}
      </div>
    `;
  }).join('');
}

function getRecommendedEmployees(gig) {
  const myName = appData.employee.name;
  return appData.employees
    .filter(e => e.name !== gig.postedBy && e.skills && e.skills.length > 0)
    .map(e => {
      const matched = gig.requiredSkills.filter(s => e.skills.includes(s)).length;
      const match = Math.round((matched / gig.requiredSkills.length) * 100);
      return { emp: e, match, matched };
    })
    .filter(r => r.matched > 0)
    .sort((a, b) => b.match - a.match);
}

function renderSkillEmployees() {
  const grid = document.getElementById('skill-employee-grid');
  if (!grid) return;
  const q = (document.getElementById('skill-employee-search')?.value || '').toLowerCase().trim();
  const myName = appData.employee.name;

  let list = appData.employees.filter(e => e.name !== myName);
  if (activeCategoryFilter) {
    const catSkills = appData.skillCategories[activeCategoryFilter] || [];
    list = list.filter(e => (e.skills || []).some(s => catSkills.includes(s)));
  }
  if (q) {
    list = list.filter(e =>
      e.name.toLowerCase().includes(q) ||
      e.title.toLowerCase().includes(q) ||
      e.department.toLowerCase().includes(q) ||
      (e.skills || []).some(s => s.toLowerCase().includes(q))
    );
  }

  if (list.length === 0) {
    grid.innerHTML = `<div class="gig-empty" style="grid-column:1/-1;"><i class="ti ti-user-search"></i>No employees match your search.</div>`;
    return;
  }

  grid.innerHTML = list.map(e => {
    const skills = (e.skills || []);
    const highlight = q
      ? skills.filter(s => s.toLowerCase().includes(q))
      : (activeCategoryFilter ? skills.filter(s => (appData.skillCategories[activeCategoryFilter] || []).includes(s)) : []);
    return `
      <div class="gig-card" style="margin:0;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
          <div style="width:44px; height:44px; border-radius:50%; background:${e.avatarBg}; color:${e.avatarColor}; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:14px;">${e.avatar}</div>
          <div style="min-width:0;">
            <div style="font-weight:600; font-size:14px;">${e.name}</div>
            <div style="font-size:12px; color:var(--text-tertiary);">${e.title} · ${e.department}</div>
          </div>
        </div>
        <div class="gig-card-skills" style="margin-bottom:8px;">
          ${skills.map(s => `<span class="skill-tag ${highlight.includes(s) ? 'matched' : ''}">${s}</span>`).join('')}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--text-tertiary);">
          <span><i class="ti ti-stars" style="font-size:13px;"></i> ${skills.length} skill${skills.length === 1 ? '' : 's'}</span>
          <a href="mailto:${e.email}" class="btn btn-secondary" style="font-size:12px; padding:5px 12px;"><i class="ti ti-mail" style="font-size:13px;"></i> Contact</a>
        </div>
      </div>
    `;
  }).join('');
}

function renderMyPostedGigsStatus() {
  const el = document.getElementById('my-posted-gigs');
  if (!el) return;
  const mine = appData.gigs.filter(g => g.postedBy === appData.employee.name);
  if (mine.length === 0) {
    el.innerHTML = '<div style="font-size:13px; color:var(--text-tertiary);">You haven\'t posted any gigs yet.</div>';
    return;
  }
  const statusBadge = (s) => s === 'open' ? '<span class="badge badge-role">Open</span>'
                          : s === 'in-progress' ? '<span class="badge badge-warning">In Progress</span>'
                          : '<span class="badge badge-active">Completed</span>';
  el.innerHTML = mine.map(g => `
    <div style="padding:10px 0; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; gap:10px;">
      <div style="min-width:0;">
        <div style="font-weight:600; font-size:13px;">${g.title}</div>
        <div style="font-size:11px; color:var(--text-tertiary); margin-top:2px;">${g.category || 'General'} · ${g.applicants.length} applicant(s) ${g.assignedTo ? '· Assigned to ' + g.assignedTo : ''}</div>
      </div>
      <div>${statusBadge(g.status)}</div>
    </div>
  `).join('');
}

function renderMyApplications() {
  const el = document.getElementById('my-applications');
  if (!el) return;
  const myName = appData.employee.name;
  const apps = appData.gigs.filter(g => g.applicants.some(a => a.name === myName) || g.assignedTo === myName);
  if (apps.length === 0) {
    el.innerHTML = '<div style="font-size:13px; color:var(--text-tertiary);">You haven\'t applied to or been assigned any gigs yet.</div>';
    return;
  }
  el.innerHTML = apps.map(g => {
    const mine = g.assignedTo === myName;
    const label = mine
      ? (g.status === 'completed' ? '<span class="badge badge-active">Completed by you</span>' : '<span class="badge badge-warning">Assigned to you</span>')
      : (g.status === 'in-progress' && g.assignedTo !== myName
          ? '<span class="badge badge-dept">Not selected</span>'
          : '<span class="badge badge-role">Application pending</span>');
    return `
      <div style="padding:10px 0; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; gap:10px;">
        <div style="min-width:0;">
          <div style="font-weight:600; font-size:13px;">${g.title}</div>
          <div style="font-size:11px; color:var(--text-tertiary); margin-top:2px;">Posted by ${g.postedBy} · ${g.estimatedHours}h · ${g.category || 'General'}</div>
        </div>
        <div>${label}</div>
      </div>
    `;
  }).join('');
}

function assignGig(gigId, employeeName) {
  const gig = appData.gigs.find(g => g.id === gigId);
  if (!gig) return;
  if (gig.postedBy !== appData.employee.name) { showToast('Only the gig owner can assign', 'warning'); return; }
  gig.assignedTo = employeeName;
  gig.status = 'in-progress';
  updateGigBoardPage();
  showToast(`✓ Assigned "${gig.title}" to ${employeeName}`);
}

function completeGig(gigId) {
  const gig = appData.gigs.find(g => g.id === gigId);
  if (!gig) return;
  if (gig.postedBy !== appData.employee.name) { showToast('Only the gig owner can mark complete', 'warning'); return; }
  gig.status = 'completed';
  updateGigBoardPage();
  showToast(`✓ "${gig.title}" marked as completed`);
}

function filterGigs() {
  renderGigFeed();
}

function filterGigsBySkill(skill) {
  const skillFilter = document.getElementById('gig-skill-filter');
  skillFilter.value = skill;
  renderGigFeed();
  showToast(`Filtering gigs by: ${skill}`);
}

function postGig(event) {
  event.preventDefault();

  const title = document.getElementById('gig-title').value.trim();
  const description = document.getElementById('gig-description').value.trim();
  const skillsRaw = document.getElementById('gig-skills').value.trim();
  const urgency = document.getElementById('gig-urgency').value;
  const category = document.getElementById('gig-category')?.value || 'Other';
  const hours = parseInt(document.getElementById('gig-hours').value);

  if (!title || !description || !skillsRaw || !hours) {
    showToast('⚠ Please fill in all fields', 'warning');
    return;
  }

  const skills = skillsRaw.split(',').map(s => s.trim()).filter(s => s);
  if (skills.length === 0) {
    showToast('⚠ Please enter at least one skill', 'warning');
    return;
  }

  const newGig = {
    id: Math.max(0, ...appData.gigs.map(g => g.id)) + 1,
    category: category,
    title: title,
    description: description,
    requiredSkills: skills,
    urgency: urgency,
    estimatedHours: hours,
    postedBy: appData.employee.name,
    department: appData.employee.department,
    postedDate: new Date().toISOString().split('T')[0],
    status: 'open',
    assignedTo: null,
    applicants: []
  };

  sharedDb.gigs.unshift(newGig);
  saveSharedDb();
  document.getElementById('gig-form').reset();
  updateGigBoardPage();
  showToast('✓ Gig posted successfully!');
}

function applyToGig(gigId) {
  const gig = appData.gigs.find(g => g.id === gigId);
  if (!gig) {
    showToast('⚠ Gig not found', 'warning');
    return;
  }

  const myName = appData.employee.name;
  if (gig.applicants.some(a => a.name === myName)) {
    showToast('You have already applied to this gig');
    return;
  }

  if (gig.postedBy === myName) {
    showToast('⚠ You cannot apply to your own gig', 'warning');
    return;
  }

  gig.applicants.push({
    name: myName,
    appliedDate: new Date().toISOString().split('T')[0]
  });
  saveSharedDb();

  updateGigBoardPage();
  showToast(`✓ Applied to "${gig.title}"!`);
}


// ═══════════════════════════════════════════════
//  BURNOUT & PULSE
// ═══════════════════════════════════════════════
let selectedPulseRating = null;

function selectPulseRating(rating) {
  selectedPulseRating = rating;
  const buttons = document.querySelectorAll('.pulse-emoji-btn');
  buttons.forEach(btn => {
    if (parseInt(btn.getAttribute('data-rating')) === rating) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

function sendBurnoutOneOnOne(employeeName) {
  showToast(`✓ 1-on-1 invitation sent to ${employeeName}`);
}

function submitPulse(event) {
  event.preventDefault();
  if (selectedPulseRating === null) {
    showToast('⚠ Please select a pulse emoji', 'warning');
    return;
  }

  const comment = document.getElementById('pulse-comment').value.trim();
  const project = document.getElementById('pulse-project').value;
  const newPulse = {
    id: appData.pulses.length + 1,
    name: 'Jessica Eze',
    rating: selectedPulseRating,
    comment: comment || 'No comment provided.',
    project: project,
    date: new Date().toISOString().split('T')[0]
  };

  sharedDb.pulses.unshift(newPulse);
  saveSharedDb();
  
  // reset state
  selectedPulseRating = null;
  const buttons = document.querySelectorAll('.pulse-emoji-btn');
  buttons.forEach(btn => btn.classList.remove('selected'));
  document.getElementById('pulse-comment').value = '';
  document.getElementById('pulse-project').value = 'General';
  
  updateBurnoutPage();
  showToast('✓ Pulse submitted successfully!');
}

function updateBurnoutPage() {
  const me = appData.employee.name; // 'Jessica Eze'
  const myAlert = appData.burnoutAlerts.find(b => b.name === me) || {
    name: me, role: appData.employee.title, riskScore: 0, status: 'low', signals: ['No signals recorded']
  };
  const myPulses = appData.pulses.filter(p => p.name === me);

  // My average pulse rating
  const avgRating = myPulses.length > 0
    ? myPulses.reduce((sum, p) => sum + p.rating, 0) / myPulses.length
    : 0;
  const myEngagement = avgRating ? Math.round(avgRating * 20) : 0;

  // Risk-level colors
  const statusMap = {
    high:  { color: '#EF4444', bg: '#FEF2F2', label: 'High Risk',  badge: 'badge-danger',  bar: 'high' },
    watch: { color: '#F59E0B', bg: '#FFFBEB', label: 'Watch',      badge: 'badge-warning', bar: 'warning' },
    low:   { color: '#10B981', bg: '#ECFDF5', label: 'Low Risk',   badge: 'badge-active',  bar: 'success' }
  };
  const s = statusMap[myAlert.status] || statusMap.low;

  // Personal stat cards
  const statsContainer = document.getElementById('burnout-stats');
  statsContainer.innerHTML = `
    <div class="stat-card">
      <div class="stat-icon" style="background:${s.bg};"><i class="ti ti-flame" style="color:${s.color};"></i></div>
      <div class="stat-label">My Burnout Risk</div>
      <div class="stat-value" style="color:${s.color};">${myAlert.riskScore}%</div>
      <div class="stat-sub">${s.label}</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:#ECFDF5;"><i class="ti ti-activity" style="color:#10B981;"></i></div>
      <div class="stat-label">My Engagement</div>
      <div class="stat-value" style="color:#10B981;">${myEngagement}%</div>
      <div class="stat-sub">${myPulses.length ? 'Based on your pulses' : 'Submit a pulse to track'}</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:#F5F3FF;"><i class="ti ti-clipboard-list" style="color:#7C3AED;"></i></div>
      <div class="stat-label">Pulses Submitted</div>
      <div class="stat-value" style="color:#7C3AED;">${myPulses.length}</div>
      <div class="stat-sub">Your weekly check-ins</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:#EFF6FF;"><i class="ti ti-mood-smile" style="color:#2563EB;"></i></div>
      <div class="stat-label">Avg Mood</div>
      <div class="stat-value" style="color:#2563EB;">${avgRating ? avgRating.toFixed(1) + ' / 5' : '—'}</div>
      <div class="stat-sub">Across your reviews</div>
    </div>
  `;

  // Personal "Your Wellbeing Snapshot" — replaces team table
  const tableBody = document.getElementById('burnout-table-body');
  const signalsHtml = myAlert.signals.map(sig => `<div style="margin-bottom: 2px;">• ${sig}</div>`).join('');
  tableBody.innerHTML = `
    <tr style="vertical-align: top;">
      <td style="padding: 12px 8px;">
        <div style="font-weight: 700; color: var(--text-primary);">${myAlert.name}</div>
        <div style="font-size: 11px; color: var(--text-tertiary);">${myAlert.role}</div>
      </td>
      <td style="padding: 12px 8px; width: 140px;">
        <div style="font-weight: 600; color: var(--text-secondary);">${myAlert.riskScore}%</div>
        <div class="progress-bar-container">
          <div class="progress-bar ${s.bar}" style="width: ${myAlert.riskScore}%;"></div>
        </div>
      </td>
      <td style="padding: 12px 8px;">
        <span class="badge ${s.badge}">${s.label}</span>
      </td>
      <td style="padding: 12px 8px; color: var(--text-secondary); line-height: 1.3;">
        ${signalsHtml}
      </td>
      <td style="padding: 12px 8px; text-align: right;">
        <button class="btn btn-secondary btn-sm" onclick="sendBurnoutOneOnOne('Manager')" style="padding: 4px 8px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px;">
          <i class="ti ti-calendar-event"></i> Request 1-on-1
        </button>
      </td>
    </tr>
  `;

  // Pulse timeline — only the employee's own pulses
  const pulseContainer = document.getElementById('pulse-timeline');
  const emojisMap = { 1: '😢', 2: '😕', 3: '😐', 4: '🙂', 5: '😄' };

  if (myPulses.length === 0) {
    pulseContainer.innerHTML = '<div style="text-align: center; color: var(--text-tertiary); font-size: 12px; padding: 20px;">You haven\'t submitted any pulse reviews yet.</div>';
  } else {
    pulseContainer.innerHTML = myPulses.map(p => `
      <div class="timeline-item">
        <div class="timeline-marker rating-${p.rating}"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span>${p.name}</span>
            <span>${emojisMap[p.rating]}</span>
          </div>
          <div style="font-size: 10px; color: var(--text-tertiary); margin-bottom: 4px;">
            Project: <span style="font-weight: 600; color: var(--accent-text);">${p.project}</span> · ${p.date}
          </div>
          <div class="timeline-comment">${p.comment}</div>
        </div>
      </div>
    `).join('');
  }
}


// ── SHIFT SCHEDULE & SUBSTITUTION ──
function openAbsenceModal() {
  document.getElementById('absence-modal').classList.remove('hidden');
}

function closeAbsenceModal() {
  document.getElementById('absence-modal').classList.add('hidden');
  document.getElementById('absence-form').reset();
}

function handleAbsenceSubmit(event) {
  event.preventDefault();
  const empId = parseInt(document.getElementById('absence-employee').value);
  const day = document.getElementById('absence-day').value;
  const reason = document.getElementById('absence-reason').value;

  const shift = appData.shifts.find(s => s.employeeId === empId);
  if (!shift) {
    showToast('Employee shifts not found', 'warning');
    return;
  }

  // Set shift status to sick
  shift.status[day] = 'sick';
  
  closeAbsenceModal();
  updateSchedulePage();
  showToast(`🤒 Reported absence for ${shift.name} on ${day}`);
  
  // Find substitutions
  findSubstitutions(empId, day);
}

function findSubstitutions(empId, day) {
  const sickShift = appData.shifts.find(s => s.employeeId === empId);
  if (!sickShift) return;

  const subPanel = document.getElementById('sub-panel-content');
  
  // Find candidates: same department, has OFF on that day, and is not the sick person
  const candidates = appData.shifts.filter(s => 
    s.employeeId !== empId && 
    s.department === sickShift.department && 
    s.status[day] === 'off'
  );

  if (candidates.length === 0) {
    subPanel.innerHTML = `
      <div style="padding: 10px; background: #FEF2F2; color: #EF4444; border-radius: 6px; font-weight: 500;">
        ⚠ No auto-matched substitutes found in ${sickShift.department} on ${day}.
      </div>
    `;
    return;
  }

  subPanel.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 8px; color: var(--text-primary);">
      Qualified backups for ${sickShift.name} (${day}):
    </div>
    ${candidates.map(c => `
      <div class="sub-candidate-card">
        <div>
          <div style="font-weight: 700; color: var(--text-primary);">${c.name}</div>
          <div style="font-size: 11px; color: var(--text-tertiary);">${c.role}</div>
          <span class="badge badge-active" style="margin-top: 4px; padding: 2px 6px;">100% Match</span>
        </div>
        <button class="btn btn-primary btn-sm" id="sub-req-btn-${c.employeeId}" onclick="requestSubCover(${empId}, ${c.employeeId}, '${day}')" style="padding: 6px 10px; font-size: 11px;">
          Request Cover
        </button>
      </div>
    `).join('')}
  `;
}

function requestSubCover(sickEmpId, subEmpId, day) {
  const subBtn = document.getElementById(`sub-req-btn-${subEmpId}`);
  if (subBtn) {
    subBtn.disabled = true;
    subBtn.innerHTML = '<span class="chat-typing" style="margin: 0 4px;"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';
  }

  const sickEmp = appData.shifts.find(s => s.employeeId === sickEmpId);
  const subEmp = appData.shifts.find(s => s.employeeId === subEmpId);

  showToast(`✓ Substitution request sent to ${subEmp.name}`);

  // Simulate response after 3.5 seconds
  setTimeout(() => {
    // Perform shift swap
    sickEmp.status[day] = 'covered';
    sickEmp.coveredBy = subEmp.name;

    subEmp.status[day] = 'swapped';
    subEmp.coveringFor = sickEmp.name;

    // Toast alert
    showToast(`🔔 Shift Swap Accepted: ${subEmp.name} accepted covering ${sickEmp.name} on ${day}!`);
    
    // Add push notification
    const newNotif = {
      id: appData.notifications.length + 1,
      message: `🔄 Swap accepted: ${subEmp.name} is covering ${sickEmp.name} on ${day}`,
      date: 'Just now',
      read: false,
      type: 'leave',
      actionUrl: '#schedule'
    };
    appData.notifications.unshift(newNotif);
    updateNotificationList();

    // Re-render schedule
    updateSchedulePage();

    // Highlight the cells with swap animation
    const sickCell = document.getElementById(`shift-${sickEmpId}-${day}`);
    const subCell = document.getElementById(`shift-${subEmpId}-${day}`);
    if (sickCell) sickCell.classList.add('pulse-swap');
    if (subCell) subCell.classList.add('pulse-swap');

    // Remove animation class after 2 seconds
    setTimeout(() => {
      if (sickCell) sickCell.classList.remove('pulse-swap');
      if (subCell) subCell.classList.remove('pulse-swap');
    }, 2000);

    // Clear sub panel
    document.getElementById('sub-panel-content').innerHTML = `
      <div style="padding: 10px; background: #ECFDF5; color: #047857; border-radius: 6px; font-weight: 500; text-align: center;">
        ✓ Swap complete: ${subEmp.name} covers ${sickEmp.name} (${day}).
      </div>
    `;

  }, 3500);
}

function updateSchedulePage() {
  const container = document.getElementById('schedule-grid-body');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const me = appData.employee.name; // 'Jessica Eze'

  // Only show the current employee's own shifts
  const myShifts = appData.shifts.filter(s => s.name === me);

  if (myShifts.length === 0) {
    container.innerHTML = `
      <tr><td colspan="6" style="padding: 20px; text-align: center; color: var(--text-tertiary); font-size: 13px;">
        No shift schedule found for your account.
      </td></tr>
    `;
    return;
  }

  container.innerHTML = myShifts.map(s => {
    const cellsHtml = days.map(d => {
      let cardClass = 'active';
      let content = s[d];

      const status = s.status[d];
      if (status === 'off') {
        cardClass = 'off';
        content = 'OFF';
      } else if (status === 'sick') {
        cardClass = 'sick';
        content = '🤒 Called Sick';
      } else if (status === 'covered') {
        cardClass = 'covered';
        content = `🔄 Covered by ${s.coveredBy}`;
      } else if (status === 'swapped') {
        cardClass = 'swapped';
        content = `📅 Covering ${s.coveringFor}`;
      }

      return `
        <td style="padding: 8px 6px;" id="shift-${s.employeeId}-${d}">
          <div class="shift-card ${cardClass}">
            ${content}
          </div>
        </td>
      `;
    }).join('');

    return `
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 12px 10px;">
          <div style="font-weight: 700; color: var(--text-primary);">${s.name} <span style="font-size:10px; color:var(--accent-text); background:var(--accent-bg); padding:2px 6px; border-radius:10px; margin-left:4px;">You</span></div>
          <div style="font-size: 11px; color: var(--text-tertiary);">${s.role}</div>
        </td>
        ${cellsHtml}
      </tr>
    `;
  }).join('');
}


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
  showToast(`✓ Switched to ${isDark ? 'Dark' : 'Light'} Mode`);
}

// ── LIVE EVENT SIMULATION ENGINE ──
let liveSimInterval = null;

function startLiveSimulation() {
  if (liveSimInterval) return;
  // Trigger simulation every 35 seconds
  liveSimInterval = setInterval(simulateRandomEvent, 35000);
}

function updateLiveActivityFeed() {
  const container = document.getElementById('live-activity-list');
  if (!container) return;

  if (appData.liveActivities.length === 0) {
    container.innerHTML = '<div style="text-align: center; color: var(--text-tertiary); padding: 20px; font-size: 12px;">No activity yet.</div>';
    return;
  }

  container.innerHTML = appData.liveActivities.map(act => `
    <div class="activity-item ${act.type}">
      <div class="activity-icon-wrap">
        <i class="ti ${act.icon || 'ti-bell'}"></i>
      </div>
      <div style="flex: 1;">
        <div>${act.message}</div>
        <div class="activity-time-label">${act.time}</div>
      </div>
    </div>
  `).join('');
}

function simulateRandomEvent() {
  const events = [
    {
      type: 'success',
      icon: 'ti-calendar-plus',
      message: 'Emeka Chukwu submitted a casual leave request (2 days).',
      action: () => {
        const req = { id: sharedDb.leaveRequests.length + 1, type: 'Casual Leave', empId: 'EMP-009', startDate: '2026-06-22', endDate: '2026-06-23', days: 2, reason: 'Family business', status: 'pending', submittedDate: new Date().toISOString().split('T')[0], submitted: new Date().toISOString().split('T')[0] };
        sharedDb.leaveRequests.unshift(req);
        saveSharedDb();
        // Refresh active pages
        if (document.getElementById('page-leave') && !document.getElementById('page-leave').classList.contains('hidden')) {
          updateLeavePage();
        }
      }
    },
    {
      type: 'info',
      icon: 'ti-briefcase',
      message: 'Chioma Okafor posted a new internal gig: "Optimize Database Queries".',
      action: () => {
        const newGig = {
          id: (sharedDb.gigs || []).length + 1,
          title: 'Optimize Database Queries',
          description: 'Help optimize sluggish indexes and slow SELECT queries in PostgreSQL backend.',
          requiredSkills: ['PostgreSQL', 'SQL', 'System Architecture'],
          urgency: 'medium',
          estimatedHours: 8,
          postedBy: 'Chioma Okafor',
          department: 'Engineering',
          postedDate: new Date().toISOString().split('T')[0],
          status: 'open',
          applicants: []
        };
        if (!sharedDb.gigs) sharedDb.gigs = [];
        sharedDb.gigs.unshift(newGig);
        saveSharedDb();
        if (document.getElementById('page-gigboard') && !document.getElementById('page-gigboard').classList.contains('hidden')) {
          updateGigBoardPage();
        }
      }
    },
    {
      type: 'warning',
      icon: 'ti-activity',
      message: 'Funmi Alao submitted a weekly pulse check rating: 3/5.',
      action: () => {
        const p = { id: sharedDb.pulses.length + 1, name: 'Funmi Alao', rating: 3, comment: 'Slightly high workload this week, trying to catch up.', project: 'Website Revamp', date: new Date().toISOString().split('T')[0] };
        sharedDb.pulses.unshift(p);
        saveSharedDb();
        if (document.getElementById('page-burnout') && !document.getElementById('page-burnout').classList.contains('hidden')) {
          updateBurnoutPage();
        }
      }
    },
    {
      type: 'danger',
      icon: 'ti-alert-triangle',
      message: 'Burnout risk alert: Zainab Hassan logged 14 hours overtime this week.',
      action: () => {
        const alertIdx = sharedDb.burnoutAlerts.findIndex(b => b.name === 'Zainab Hassan');
        if (alertIdx !== -1) {
          sharedDb.burnoutAlerts[alertIdx].riskScore = 72;
          sharedDb.burnoutAlerts[alertIdx].status = 'high';
          sharedDb.burnoutAlerts[alertIdx].signals.unshift('Logged 14 hrs overtime this week');
        } else {
          sharedDb.burnoutAlerts.unshift({ id: sharedDb.burnoutAlerts.length + 1, name: 'Zainab Hassan', role: 'Product Designer', department: 'Engineering', riskScore: 72, status: 'high', signals: ['Logged 14 hrs overtime this week'] });
        }
        saveSharedDb();
        if (document.getElementById('page-burnout') && !document.getElementById('page-burnout').classList.contains('hidden')) {
          updateBurnoutPage();
        }
      }
    }
  ];

  // Pick a random event
  const picked = events[Math.floor(Math.random() * events.length)];
  
  // Execute action
  picked.action();

  // Create activity item
  const newActivity = {
    id: sharedDb.liveActivities.length + 1,
    type: picked.type,
    message: picked.message,
    time: 'Just now',
    icon: picked.icon
  };
  sharedDb.liveActivities.unshift(newActivity);

  // Add push notification
  const newNotif = {
    id: appData.notifications.length + 1,
    message: picked.message,
    date: 'Just now',
    read: false,
    type: 'live',
    actionUrl: '#home'
  };
  appData.notifications.unshift(newNotif);

  // Update UI elements
  saveSharedDb();
  updateLiveActivityFeed();
  updateNotificationList();
  showToast(`🔔 Live Sim: ${picked.message}`);
}

// ── CONTINUOUS FEEDBACK SYSTEM ──
const FEEDBACK_KEY = 'crewly_feedback_v1';

const defaultFeedback = {
  checkins: [
    { id: 1, week: 'Week of Jun 8', date: '2026-06-12', mood: 4, wins: 'Shipped auth refactor; mentored intern on PR reviews.', blockers: 'Waiting on design tokens for settings page.' },
    { id: 2, week: 'Week of Jun 1', date: '2026-06-05', mood: 5, wins: 'Closed 7 tickets; demo went well.', blockers: '' },
    { id: 3, week: 'Week of May 25', date: '2026-05-29', mood: 3, wins: 'Bug triage marathon.', blockers: 'Flaky CI is slowing everyone down.' },
    { id: 4, week: 'Week of May 18', date: '2026-05-22', mood: 4, wins: 'Onboarded to payments squad.', blockers: '' }
  ],
  peer: [
    { id: 1, from: 'David Kim', to: 'Jessica Eze', date: '2026-06-10', project: 'Auth Refactor', rating: 5, message: 'Jessica unblocked the whole squad on the OAuth migration — clear PRs, fast reviews.' },
    { id: 2, from: 'Aisha Bello', to: 'Jessica Eze', date: '2026-06-02', project: 'Design System', rating: 4, message: 'Great collaboration on the token rollout. Would love more async updates next time.' },
    { id: 3, from: 'Jessica Eze', to: 'Tunde Okafor', date: '2026-05-28', project: 'API v2', rating: 5, message: 'Tunde\'s spec doc saved us a week of guesswork.' }
  ],
  manager: [
    { id: 1, from: 'CEO (Manager)', to: 'Jessica Eze', date: '2026-06-14', project: 'Q2 Goals', rating: 5, message: 'Consistently exceeding sprint commitments. Ready to start scoping a tech-lead track.', visibility: 'visible' },
    { id: 2, from: 'CEO (Manager)', to: 'Jessica Eze', date: '2026-05-30', project: 'Quality', rating: 4, message: 'Bug-bash leadership was excellent. Push for more test coverage on new modules.', visibility: 'visible' }
  ],
  project: [
    { id: 1, from: 'Marcus Lin', to: 'Jessica Eze', date: '2026-06-08', project: 'Payments Migration', rating: 4, message: 'Strong technical execution. Communication with stakeholders could be more proactive.' }
  ]
};

function loadFeedback() {
  try {
    const raw = localStorage.getItem(FEEDBACK_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return JSON.parse(JSON.stringify(defaultFeedback));
}

function saveFeedback(data) {
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(data));
}

let _feedbackFilter = 'all';

function updateFeedbackPage() {
  const data = loadFeedback();
  const me = appData.employee.name;

  // Stats
  const lastCheckin = data.checkins[0];
  const avgMood = (data.checkins.reduce((s, c) => s + c.mood, 0) / data.checkins.length).toFixed(1);
  const recvPeer = data.peer.filter(f => f.to === me).length;
  const recvMgr = data.manager.filter(f => f.to === me).length;

  document.getElementById('feedback-stats').innerHTML = `
    <div class="stat-card"><div class="stat-label">Check-ins Submitted</div><div class="stat-value">${data.checkins.length}</div><div class="stat-sub">Last: ${lastCheckin ? lastCheckin.week : '—'}</div></div>
    <div class="stat-card"><div class="stat-label">Avg Weekly Mood</div><div class="stat-value">${avgMood}<span style="font-size:14px;">/5</span></div><div class="stat-sub">Rolling average</div></div>
    <div class="stat-card"><div class="stat-label">Peer Feedback Received</div><div class="stat-value">${recvPeer}</div><div class="stat-sub">All time</div></div>
    <div class="stat-card"><div class="stat-label">Manager Feedback</div><div class="stat-value">${recvMgr}</div><div class="stat-sub">Visible to you</div></div>
  `;

  // Check-in status
  document.getElementById('checkin-status').textContent = lastCheckin
    ? `Last check-in: ${lastCheckin.date} · Mood ${lastCheckin.mood}/5`
    : 'No check-ins yet — submit your first one below.';

  // Recipient dropdown
  const recipients = ['David Kim', 'Aisha Bello', 'Tunde Okafor', 'Marcus Lin', 'CEO (Manager)'];
  document.getElementById('fb-recipient').innerHTML =
    '<option value="">Select teammate…</option>' +
    recipients.map(r => `<option value="${r}">${r}</option>`).join('');

  // Performance trend (mood + avg ratings per week)
  const weeks = data.checkins.slice().reverse();
  const chart = document.getElementById('trend-chart');
  const labels = document.getElementById('trend-labels');
  chart.innerHTML = weeks.map(w => {
    const h = (w.mood / 5) * 100;
    const color = w.mood >= 4 ? '#10B981' : w.mood >= 3 ? '#F59E0B' : '#EF4444';
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;">
      <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px;">${w.mood}</div>
      <div style="width:100%;height:${h}%;background:${color};border-radius:4px 4px 0 0;"></div>
    </div>`;
  }).join('');
  labels.innerHTML = weeks.map(w => `<div style="flex:1;text-align:center;">${w.week.replace('Week of ', '')}</div>`).join('');

  // Manager feedback (visibility-controlled)
  const mgr = data.manager.filter(f => f.to === me && f.visibility === 'visible');
  document.getElementById('manager-feedback-list').innerHTML = mgr.length ? mgr.map(f => `
    <div style="padding:14px;border:1px solid var(--border);border-radius:8px;margin-bottom:10px;background:#FAFBFC;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <strong style="font-size:13px;">${f.from} · ${f.project}</strong>
        <span style="font-size:12px;color:#F59E0B;">${'★'.repeat(f.rating)}${'☆'.repeat(5-f.rating)}</span>
      </div>
      <div style="font-size:13px;color:var(--text-primary);margin-bottom:6px;">${f.message}</div>
      <div style="font-size:11px;color:var(--text-secondary);">${f.date}</div>
    </div>
  `).join('') : '<div style="font-size:13px;color:var(--text-secondary);">No manager feedback shared yet.</div>';

  renderFeedbackTimeline();
}

function renderFeedbackTimeline() {
  const data = loadFeedback();
  const me = appData.employee.name;
  const items = [];

  data.checkins.forEach(c => items.push({
    type: 'checkin', date: c.date,
    title: `Weekly Check-in · Mood ${c.mood}/5`,
    body: `Wins: ${c.wins}${c.blockers ? ' · Blockers: ' + c.blockers : ''}`,
    badge: 'Check-in', color: '#3B82F6'
  }));
  data.peer.filter(f => f.to === me || f.from === me).forEach(f => items.push({
    type: 'peer', date: f.date,
    title: `${f.from === me ? 'Gave' : 'Received'} peer feedback · ${f.from === me ? f.to : f.from}`,
    body: `${'★'.repeat(f.rating)} — ${f.message} (${f.project})`,
    badge: 'Peer', color: '#8B5CF6'
  }));
  data.manager.filter(f => f.to === me).forEach(f => items.push({
    type: 'manager', date: f.date,
    title: `Manager feedback · ${f.project}`,
    body: `${'★'.repeat(f.rating)} — ${f.message}`,
    badge: 'Manager', color: '#10B981'
  }));
  data.project.filter(f => f.to === me || f.from === me).forEach(f => items.push({
    type: 'project', date: f.date,
    title: `Project feedback · ${f.project}`,
    body: `${'★'.repeat(f.rating)} — ${f.message} (from ${f.from})`,
    badge: 'Project', color: '#F59E0B'
  }));

  items.sort((a, b) => b.date.localeCompare(a.date));
  const filtered = _feedbackFilter === 'all' ? items : items.filter(i => i.type === _feedbackFilter);

  const el = document.getElementById('feedback-timeline');
  if (!filtered.length) { el.innerHTML = '<div style="font-size:13px;color:var(--text-secondary);">No entries for this filter.</div>'; return; }

  el.innerHTML = filtered.map(i => `
    <div style="display:flex;gap:14px;padding:14px 0;border-bottom:1px solid var(--border);">
      <div style="width:10px;height:10px;border-radius:50%;background:${i.color};margin-top:6px;flex-shrink:0;"></div>
      <div style="flex:1;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
          <strong style="font-size:13px;">${i.title}</strong>
          <span class="badge" style="background:${i.color}20;color:${i.color};font-size:11px;">${i.badge}</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">${i.body}</div>
        <div style="font-size:11px;color:var(--text-secondary);">${i.date}</div>
      </div>
    </div>
  `).join('');
}

function filterFeedback(type) {
  _feedbackFilter = type;
  renderFeedbackTimeline();
}

function submitCheckin(e) {
  e.preventDefault();
  const data = loadFeedback();
  const today = new Date();
  const weekLabel = 'Week of ' + today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  data.checkins.unshift({
    id: Date.now(),
    week: weekLabel,
    date: today.toISOString().slice(0, 10),
    mood: parseInt(document.getElementById('checkin-mood').value),
    wins: document.getElementById('checkin-wins').value,
    blockers: document.getElementById('checkin-blockers').value
  });
  saveFeedback(data);
  e.target.reset();
  updateFeedbackPage();
  alert('Check-in submitted ✓');
}

function submitFeedback(e) {
  e.preventDefault();
  const data = loadFeedback();
  const type = document.getElementById('fb-type').value;
  const entry = {
    id: Date.now(),
    from: appData.employee.name,
    to: document.getElementById('fb-recipient').value,
    date: new Date().toISOString().slice(0, 10),
    project: document.getElementById('fb-project').value || 'General',
    rating: parseInt(document.getElementById('fb-rating').value),
    message: document.getElementById('fb-message').value
  };
  if (type === 'project') data.project.unshift(entry);
  else data.peer.unshift(entry);
  saveFeedback(data);
  e.target.reset();
  updateFeedbackPage();
  alert('Feedback sent ✓');
}

/* ═══════════════════════════════════════════════
   HR APPRAISAL SYNC (shared with HR Admin Dashboard)
   Keeps appData.appraisal in sync with the shared
   `crewly_appraisals_v1` localStorage bus written by
   the HR Admin Dashboard.
═══════════════════════════════════════════════ */
const HR_APPR_KEY = 'crewly_appraisals_v1';

function _readSharedAppraisals() {
  try {
    const raw = localStorage.getItem(HR_APPR_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function _writeSharedAppraisals(arr) {
  try { localStorage.setItem(HR_APPR_KEY, JSON.stringify(arr)); } catch (e) {}
}

// Push the current employee's appraisal into the shared bus so HR can review it.
function pushAppraisalToHR() {
  const ap = appData.appraisal;
  const emp = appData.employee;
  const arr = _readSharedAppraisals();
  const existingIdx = arr.findIndex(a => a.empId === emp.id && a.cycle === ap.cycle);

  const status = ap.status === 'pending_manager' ? 'pending_manager'
              : ap.status === 'pending_hr'      ? 'pending_hr'
              : ap.status === 'completed'       ? 'completed'
              : ap.status === 'sent_back'       ? 'sent_back'
              : 'pending_manager';

  const record = {
    id: existingIdx >= 0 ? arr[existingIdx].id : ('APR-' + Date.now().toString().slice(-6)),
    empId: emp.id,
    empName: emp.name,
    empRole: emp.title,
    dept: emp.department,
    cycle: ap.cycle,
    managerName: ap.manager?.name || emp.manager || 'Manager',
    submittedDate: ap.submittedDate || new Date().toISOString().split('T')[0],
    managerReviewDate: ap.manager?.date || null,
    status,
    competencies: ap.competencies.map(c => ({
      key: c.key, label: c.label,
      selfScore: c.selfScore || 0,
      managerScore: ap.manager?.score || null
    })),
    achievements: ap.achievements,
    goals: ap.goals,
    managerComment: ap.manager?.comment || '',
    managerScore: ap.manager?.score || null,
    hrComment: ap.hr?.comment || '',
    hrScore: ap.hr?.score || null,
    finalRating: ap.finalRating || null,
    hrReviewDate: ap.hr?.date || null,
    sentBackReason: ap.sentBackReason || ''
  };

  if (existingIdx >= 0) arr[existingIdx] = { ...arr[existingIdx], ...record };
  else arr.unshift(record);
  _writeSharedAppraisals(arr);
}

// Pull the HR decision into the employee's local state.
function pullAppraisalFromHR() {
  const arr = _readSharedAppraisals();
  const emp = appData.employee;
  const ap = appData.appraisal;
  const rec = arr.find(a => a.empId === emp.id && a.cycle === ap.cycle);
  if (!rec) return false;

  let changed = false;

  if (rec.status === 'completed' && ap.status !== 'completed') {
    ap.hr.score = rec.hrScore;
    ap.hr.comment = rec.hrComment;
    ap.hr.date = rec.hrReviewDate;
    ap.finalRating = rec.finalRating;
    ap.status = 'completed';
    ap.sentBackReason = '';

    // push into history if not already there
    const exists = (ap.history || []).some(h => h.cycle === ap.cycle && h.status === 'completed');
    if (!exists) {
      ap.history = ap.history || [];
      ap.history.unshift({
        cycle: ap.cycle,
        selfAvg: Math.round((ap.competencies.reduce((s,c)=>s+(c.selfScore||0),0) / ap.competencies.length) * 10) / 10,
        managerScore: rec.managerScore || 0,
        finalRating: rec.finalRating,
        status: 'completed',
        completedDate: rec.hrReviewDate
      });
    }

    appData.notifications && appData.notifications.unshift({
      id: (appData.notifications.length || 0) + 1,
      message: `Your ${ap.cycle} appraisal was approved by HR — final rating ${rec.finalRating}/5`,
      date: 'just now', read: false, type: 'performance'
    });
    changed = true;
  } else if (rec.status === 'sent_back' && ap.status !== 'sent_back') {
    ap.status = 'sent_back';
    ap.sentBackReason = rec.sentBackReason || 'HR has requested revisions.';
    appData.notifications && appData.notifications.unshift({
      id: (appData.notifications.length || 0) + 1,
      message: `HR sent your appraisal back for revision: ${ap.sentBackReason}`,
      date: 'just now', read: false, type: 'performance'
    });
    changed = true;
  }

  if (changed) {
    if (typeof updateAppraisalPage === 'function' && !document.getElementById('page-appraisal')?.classList.contains('hidden')) {
      updateAppraisalPage();
    }
    if (typeof updateNotificationList === 'function') updateNotificationList();
  }
  return changed;
}

// Wrap submitAppraisal / simulateManagerReview / simulateHrReview so every state change
// is mirrored to the shared bus.
(function wireAppraisalSync() {
  const origSubmit = window.submitAppraisal;
  if (typeof origSubmit === 'function') {
    window.submitAppraisal = function(event) {
      const result = origSubmit.apply(this, arguments);
      try { pushAppraisalToHR(); } catch (e) {}
      return result;
    };
  }
  const origMgr = window.simulateManagerReview;
  if (typeof origMgr === 'function') {
    window.simulateManagerReview = function() {
      const r = origMgr.apply(this, arguments);
      try { pushAppraisalToHR(); } catch (e) {}
      return r;
    };
  }
  const origHr = window.simulateHrReview;
  if (typeof origHr === 'function') {
    window.simulateHrReview = function() {
      const r = origHr.apply(this, arguments);
      try { pushAppraisalToHR(); } catch (e) {}
      return r;
    };
  }

  // Initial pull + bootstrap into shared bus on first load
  document.addEventListener('DOMContentLoaded', () => {
    try {
      pullAppraisalFromHR();
      // Ensure the employee's current appraisal exists in the shared bus
      const arr = _readSharedAppraisals();
      const emp = appData.employee;
      const exists = arr.some(a => a.empId === emp.id && a.cycle === appData.appraisal.cycle);
      if (!exists) pushAppraisalToHR();
    } catch (e) {}
  });

  // Cross-tab live sync: HR updates land here in real time
  window.addEventListener('storage', (e) => {
    if (e.key === HR_APPR_KEY) {
      try { pullAppraisalFromHR(); } catch (err) {}
    }
  });
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

/* ── Crewly AI: the data summary Gemini answers from (this employee only) ── */
function buildAIContext() {
  const C = (v, n) => (window.CrewlyAI ? CrewlyAI.compact(v, n) : JSON.stringify(v).slice(0, n));
  const e = appData.employee || {};
  const lines = [];
  lines.push('MY PROFILE: ' + C({ name: e.name, title: e.title, department: e.department, manager: e.manager, startDate: e.startDate, employmentType: e.employmentType, location: e.location, email: e.email, phone: e.phone }, 800));
  lines.push('MY LEAVE BALANCES (days): ' + C(appData.leave, 800));
  lines.push('MY LEAVE REQUESTS: ' + C((appData.leaveRequests || []).slice(0, 10), 1600));
  lines.push('MY PAYSLIPS (newest first): ' + C((appData.payslips || []).slice(0, 3), 1800));
  lines.push('MY RECENT ATTENDANCE: ' + C((appData.attendance || []).slice(0, 7), 1400));
  lines.push('MY PERFORMANCE: ' + C(appData.performance, 1800));
  lines.push('MY APPRAISAL: ' + C(appData.appraisal, 1800));
  lines.push('MY TRAINING: ' + C((appData.training || []).map(t => ({ name: t.name, level: t.level, hours: t.hours, status: t.status, progress: t.progress })), 2600));
  lines.push('MY REQUESTS: ' + C((appData.requests || []).map(r => ({ type: r.type, title: r.title, status: r.status, submitted: r.submittedDate || r.submitted })), 1600));
  lines.push('COMPANY ANNOUNCEMENTS: ' + C((appData.announcements || []).map(a => ({ title: a.title, text: a.body || a.msg, date: a.date })), 2200));
  lines.push('OPEN INTERNAL GIGS: ' + C((appData.gigs || []).filter(g => g.status === 'open').map(g => ({ title: g.title, category: g.category, skills: g.requiredSkills, hours: g.estimatedHours, urgency: g.urgency })), 1500));
  lines.push('COMPANY DIRECTORY: ' + C((appData.employees || []).map(x => ({ name: x.name, title: x.title, department: x.department, email: x.email })), 3500));
  return lines.join('\n');
}

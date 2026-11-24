export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  accent: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  status?: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  mockupType: 'campus' | 'agriculture' | 'bigdata';
}

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
  accent: 'purple' | 'magenta' | 'orange' | 'violet';
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  description: string;
  isFeaturedResearch?: boolean;
}

export const PROFILE = {
  fullName: 'Mohammad Kaif',
  roleLine:
    'Software Developer | AI & Machine Learning Enthusiast | Android App Developer',
  location: 'Bangalore, Karnataka, India',
  phone: '+91 6363351710',
  phoneHref: 'tel:+916363351710',
  email: 'mohammadkaif7795@gmail.com',
  emailHref: 'mailto:mohammadkaif7795@gmail.com',
  linkedin: 'https://linkedin.com/in/mohammad-kaif-67690433b',
  github: 'https://github.com/mohammadkaif141008-cmd',
  photoPath: '/images/mohammad-kaif.jpg',
};

export const MARQUEE_TECH_ROW_1 = [
  'Python',
  'Java',
  'Kotlin',
  'Android Studio',
  'Firebase',
  'Machine Learning',
];

export const MARQUEE_TECH_ROW_2 = [
  'Artificial Intelligence',
  'HTML',
  'CSS',
  'Git',
  'Big Data Analytics',
];

export const ABOUT_BIO =
  "I'm Mohammad Kaif, a Computer Science Engineering student at HKBK College of Engineering, Bangalore. I am passionate about software development, artificial intelligence, machine learning, Android application development, and emerging technologies. From developing CampusSchedulerAI to working on IoT-based smart agriculture solutions, I enjoy transforming technical ideas into practical applications. I believe in continuous learning, creative problem-solving, and building technology that makes a meaningful difference.";

export const EDUCATION = {
  degree: 'Bachelor of Engineering – Computer Science and Engineering',
  institution: 'HKBK College of Engineering, Bangalore',
  duration: '2023–2027',
  cgpa: '7.2',
};

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Software Development',
    description:
      'Building practical applications using Java, Python, and Kotlin.',
  },
  {
    number: '02',
    title: 'Android Development',
    description:
      'Developing Android applications using Android Studio, Java, XML, and Firebase.',
  },
  {
    number: '03',
    title: 'Artificial Intelligence',
    description:
      'Exploring machine learning concepts, intelligent systems, and AI-driven applications.',
  },
  {
    number: '04',
    title: 'Web Development',
    description:
      'Creating modern, responsive, and user-friendly websites.',
  },
  {
    number: '05',
    title: 'Data Analytics',
    description:
      'Working with data processing, analytical concepts, and Big Data technologies.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    accent: 'from-[#B600A8]/30 to-[#7621B0]/10',
    items: ['Python', 'Java', 'Kotlin'],
  },
  {
    category: 'Web Development',
    accent: 'from-[#7621B0]/30 to-[#BE4C00]/10',
    items: ['HTML', 'CSS'],
  },
  {
    category: 'AI & Data',
    accent: 'from-[#BE4C00]/30 to-[#B600A8]/10',
    items: [
      'Machine Learning Basics',
      'Linear Algebra',
      'Data Processing',
      'Big Data Analytics',
    ],
  },
  {
    category: 'Development Tools',
    accent: 'from-[#7721B1]/30 to-[#646973]/20',
    items: ['Android Studio', 'Git', 'Overleaf', 'Firebase'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'campus-scheduler-ai',
    number: '01',
    title: 'CampusSchedulerAI',
    category: 'AI-Based Android Application',
    status: 'Completed',
    description:
      'CampusSchedulerAI is an AI-based college timetable and class scheduling application designed to simplify academic scheduling and campus management.',
    features: [
      'Admin Dashboard',
      'Teacher Dashboard',
      'Student Dashboard',
      'AI-Based Timetable Generation',
      'Faculty Management',
      'Student Management',
      'Subject Management',
      'Department Management',
      'Classroom and Laboratory Management',
      'Class Assignments',
      'Teacher Scheduling',
      'Attendance Management',
      'Firebase Authentication',
      'Cloud Firestore Integration',
    ],
    techStack: [
      'Java',
      'XML',
      'Android Studio',
      'Firebase Authentication',
      'Cloud Firestore',
      'Gradle',
    ],
    githubUrl: 'https://github.com/mohammadkaif141008-cmd',
    mockupType: 'campus',
  },
  {
    id: 'smart-agriculture-system',
    number: '02',
    title: 'Smart Agriculture System',
    category: 'Internet of Things',
    status: 'Completed',
    description:
      'An IoT-based smart agriculture project focused on applying technology to improve agricultural monitoring and support smarter farming practices.',
    features: [
      'Agricultural Field Monitoring',
      'Connected Sensor Data Flow',
      'Smart Farming Decision Support',
      'Automated Resource Awareness',
    ],
    techStack: [
      'Internet of Things (IoT)',
      'Sensor Monitoring',
      'Embedded Logic',
      'Data Processing',
    ],
    githubUrl: 'https://github.com/mohammadkaif141008-cmd',
    mockupType: 'agriculture',
  },
  {
    id: 'big-data-analytics-website',
    number: '03',
    title: 'Big Data Analytics Website',
    category: 'Web Development & Data Analytics',
    description:
      'A modern educational website focused on Big Data Analytics, with structured topic content and an SQL query execution interface.',
    features: [
      'Structured Big Data Topic Modules',
      'Interactive SQL Query Execution Interface',
      'Clean Responsive Learning Layout',
      'Data Analytics Concept Navigation',
    ],
    techStack: ['HTML', 'CSS', 'Web Design', 'SQL Interface', 'Big Data Concepts'],
    githubUrl: 'https://github.com/mohammadkaif141008-cmd',
    mockupType: 'bigdata',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'AWS Machine Learning',
    issuer: 'NASSCOM',
    focus: 'Cloud ML fundamentals, model workflows, and applied AI concepts.',
    accent: 'magenta',
  },
  {
    title: 'Big Data Analytics',
    issuer: 'NASSCOM',
    focus: 'Large-scale data processing, analytics architectures, and data-driven insights.',
    accent: 'purple',
  },
  {
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    focus: 'Cybersecurity foundations, network defense mindset, and vulnerability assessment.',
    accent: 'orange',
  },
  {
    title: 'Continuous Technical Learning',
    issuer: 'Self-Directed & Academic Track',
    focus: 'Ongoing practical study across Android engineering, Java/Kotlin systems, and AI workflows.',
    accent: 'violet',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'IEEE Scopus-Indexed Research Publication',
    subtitle: 'Presented at BMS',
    description:
      'Represented and published a project implementation research paper in an IEEE Scopus-indexed publication at BMS.',
    isFeaturedResearch: true,
  },
  {
    title: 'Completed CampusSchedulerAI',
    subtitle: 'AI-Based Android Application',
    description:
      'Designed and built a full multi-role academic scheduling Android platform with AI timetable generation and Firebase backend.',
  },
  {
    title: 'Completed Smart Agriculture System',
    subtitle: 'Internet of Things',
    description:
      'Successfully delivered an IoT-driven agricultural monitoring system supporting smarter farming workflows.',
  },
  {
    title: 'Multiple Technical Certifications',
    subtitle: 'NASSCOM & Cisco Networking Academy',
    description:
      'Earned industry-aligned credentials in AWS Machine Learning, Big Data Analytics, and Ethical Hacking.',
  },
];
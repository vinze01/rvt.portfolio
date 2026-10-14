export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  index: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  github: string[];
  website?: string[];
  ongoing?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  points: string[];
  tags: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export const profile = {
  name: "Robin Vince Tupil",
  shortName: "RVT",
  role: "Full Stack Developer",
  location: "Las Piñas City, Philippines",
  email: "robin.vince01@gmail.com",
  // NOTE: Contact form composes a mailto to this address (existing behavior preserved).
  emailTo: "robinvincetupil@gmail.com",
  availability: "Open for opportunities",
  socials: [
    { label: "GitHub", url: "https://github.com/vinze01" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rvt-dev/" },
    { label: "Facebook", url: "https://www.facebook.com/veeenss/" },
  ],
};

export const roles: string[] = [
  "Full Stack Developer",
  "Vue.js Specialist",
  "Node.js Developer",
  "Backend Developer",
];

export const projects: Project[] = [
  {
    id: 1,
    index: "01",
    title: "Padyak Tayo",
    category: "Bike rental platform · Capstone",
    year: "Capstone",
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    image: require("@/assets/bike-rental.png"),
    description:
      "A modern bike rental and sharing service connecting bike owners with renters across the Philippines.",
    longDescription:
      "Padyak Tayo (Capstone Project) is a platform that connects bike owners with people all over the Philippines who are looking to rent or borrow bikes. It simplifies the process by allowing lenders to list their bikes, while renters can easily search for available bikes in their desired location. The platform aims to promote sustainable transportation and make bike-sharing accessible to more people.",
    features: [
      "User Signup and Login",
      "Browse Available Bikes",
      "Rental Confirmation and Payment Integration",
      "User Reviews and Ratings",
      "Geolocation Services for Nearby Bikes",
    ],
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Paypal"],
    github: [],
  },
  {
    id: 2,
    index: "02",
    title: "Dental Clinic Management",
    category: "Clinic operations · Scheduling",
    year: "Full stack",
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    image: require("@/assets/dental-services.png"),
    description:
      "A comprehensive solution for dental clinics to automate appointment management and patient records.",
    longDescription:
      "The Dental Clinic Management System is a comprehensive solution designed for dental clinics to automate and streamline the process of managing patient appointments, user accounts, and clinic operations. The system allows both patients and doctors to perform essential tasks such as scheduling, canceling, and viewing appointments. Additionally, it supports user profile management and provides automated email notifications for key actions, enhancing the clinic's efficiency.",
    features: [
      "User Signup and Login: Separate flows for patients and doctors",
      "Manage Appointments: Schedule, edit, view, and cancel appointments",
      "Profile Management: Update personal information and delete accounts",
      "Email Notifications: Automated confirmations for signup and appointments",
      "Role-based Access: Customizes features based on the user's role",
    ],
    technologies: ["React", "Ant Design", "Node.js", "Express.js", "Sequelize", "MySQL", "Nodemailer"],
    github: ["https://github.com/vinze01/dental-client", "https://github.com/vinze01/dental-service"],
  },
  {
    id: 3,
    index: "03",
    title: "Personal Finance Tracker",
    category: "Fintech dashboard · Data viz",
    year: "Ongoing",
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    image: require("@/assets/ft-dashboard.png"),
    description:
      "An application to help users manage their finances, track expenses, and set savings goals.",
    longDescription:
      "The Personal Finance Tracker is a tool that helps users manage their income, expenses, and savings. It provides features for tracking daily transactions, setting budgets, and viewing financial reports. The application includes visual dashboards that show spending trends, helping users understand their financial health and make informed decisions.",
    features: [
      "Track Income and Expenses: Record daily financial transactions",
      "Budget Planning: Set monthly or annual budgets",
      "Financial Reports: Generate reports with visual charts",
      "Goal Setting: Set and monitor savings goals",
    ],
    technologies: ["Vue.js", "Ant Design", "TypeScript", "Node.js", "Express.js", "Sequelize", "SQLite", "Apexchart"],
    github: ["https://github.com/vinze01/ft-client", "https://github.com/vinze01/ft-server"],
    ongoing: true,
  },
  {
    id: 4,
    index: "04",
    title: "Task Management System",
    category: "Productivity · Quests, alarms + auth",
    year: "Live demo",
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    image: require("@/assets/task-management.png"),
    description:
      "A playful quest-board SPA with priorities, self-set alarms, pagination, password-free sign-in, and dark mode. No backend required.",
    longDescription:
      "A quest-board single-page app built with Vue 3, TypeScript, and Vite, using Pinia and Vue Router with localStorage persistence. Quests support priorities, due dates, and self-set alarms that ring continuously with chime and vibration until actioned (complete, snooze, mute, or dismiss), with Wake Lock support for time-critical reminders. It also includes a password-free sign-in with avatar picker and CAPTCHA, a completed-quests hall of fame, and a persisted dark mode.",
    features: [
      "Quest creation via modal: title, priority picker, due date/time, and alarms",
      "Self-set alarms with repeating chime, phone buzz, snooze, mute, and mark-done actions",
      "Filter, search, sort, and paginated quest list with live status",
      "Password-free sign-in with avatar picker and CAPTCHA",
      "Completed hall of fame with reopen, edit, and bulk clear",
      "Dark mode with persisted theme, tasks, and session",
    ],
    technologies: ["Vue 3", "TypeScript", "Vite", "Pinia", "Vue Router"],
    website: ["https://rvt-task-management.netlify.app/"],
    github: ["https://github.com/vinze01/task-management"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "TLScontact Philippines Corporation, Makati, Philippines",
    period: "April 2025 – September 2026",
    points: [
      "Developed and migrated UI from legacy codebase to modern portal, improving maintainability and user experience",
      "Built scalable and reusable UI components using modern technologies",
      "Integrated RESTful APIs to connect frontend applications with backend services",
      "Collaborated with cross-functional teams to deliver features and resolve issues in production",
      "Participated in code reviews and followed best practices for clean, maintainable code",
    ],
    tags: ["UI Development", "REST APIs", "Code Review", "Best Practices"],
  },
  {
    title: "Full Stack Developer",
    company: "Centralized Cloud Computing International, Makati, Philippines",
    period: "August 2022 – March 2025",
    points: [
      "Wrote production-ready code with fluency in modern front-end and back-end frameworks",
      "Worked with back-end developers to design APIs",
      "Contributed and collaborated on multiple projects including HRIS, LMS, DMS, Media Sharing Application, Chat Bot App, and Gaming Website",
      "Developed and integrated REST APIs bridging front-end and back-end components",
      "Handled a group of interns and taught frameworks",
      "Managed version control and deployment of projects ensuring smooth integration and continuous delivery",
      "As assistant team lead, coordinated tasks, supported junior developers, and ensured project milestones were met",
    ],
    tags: ["Full Stack", "API Design", "Team Leadership", "Version Control", "Deployment"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Centralized Cloud Computing International, Makati, Philippines",
    period: "February 2022 – May 2022",
    points: [
      "Learned new emerging technologies and took initiative to offer technical direction and creative solutions",
      "Assisted with creating cross-platform UI web components and built responsive applications using frontend frameworks",
      "Integrated APIs in front-end",
      "Reviewed and debugged codes while working on improving the efficiency and functionality of the software system",
    ],
    tags: ["Frontend", "Responsive Design", "API Integration", "Debugging"],
  },
];

export const capabilityGroups = [
  {
    index: "A",
    title: "Frontend Engineering",
    body: "Responsive, accessible interfaces with Vue 3, React, and TypeScript. Reusable components, design-system thinking, and production-ready UI.",
    items: ["Vue 3", "Nuxt.js", "React", "TypeScript", "HTML / CSS", "Tailwind", "Ant Design"],
  },
  {
    index: "B",
    title: "Backend & APIs",
    body: "REST API design and integration across Node.js and PHP stacks, with relational modeling and auth-aware flows.",
    items: ["Node.js", "Express.js", "PHP", "REST APIs", "Sequelize", "MySQL", "SQLite", "MongoDB"],
  },
  {
    index: "C",
    title: "Delivery & Craft",
    body: "Version control, deployment, code review, and mentoring, plus applied AI tooling to move faster without cutting corners.",
    items: ["Git", "Docker", "npm", "CI / CD", "Code Review", "Python", "AI-assisted dev"],
  },
];

export const education: Education[] = [
  {
    school: "Adamson University",
    degree: "Bachelor's Degree in Information Technology",
    period: "2018 – 2022",
    location: "Manila, Philippines",
  },
  {
    school: "STI College",
    degree: "Technical-Vocational-Livelihood Track",
    period: "2016 – 2018",
    location: "Las Piñas City, Philippines",
  },
  {
    school: "Las Pinas East National High School",
    degree: "High School Diploma",
    period: "2012 – 2016",
    location: "Las Piñas City, Philippines",
  },
];

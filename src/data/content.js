/**
 * Centralized content configuration for the portfolio
 * All text, links, and data are managed here for easy updates
 */

export const SITE_CONFIG = {
  name: 'Kshama Jain',
  title: 'Software Engineer',
  email: 'kshamaj150896@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1keBx497WTluQyXiLFGEkQvG7y6mj5Ns1/view?usp=sharing',
  location: 'India',
};

export const SOCIAL_LINKS = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/kshamaj15',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kshamajain/',
    icon: 'linkedin',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/kshama__jain/',
    icon: 'instagram',
  },
];

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_CONTENT = {
  greeting: "Hi, I'm",
  name: 'Kshama Jain',
  tagline: 'Building digital experiences that matter',
  description: `Software Engineer with 4+ years of experience crafting large-scale web applications. 
    I specialize in React, TypeScript, and Node.js, with a passion for creating elegant, 
    performant solutions.`,
  cta: {
    primary: { text: 'View My Work', href: '#projects' },
    secondary: { text: 'Get Resume', href: SITE_CONFIG.resumeUrl, external: true },
  },
};

export const ABOUT_CONTENT = {
  title: 'About Me',
  subtitle: 'The story so far',
  paragraphs: [
    `I'm a Software Engineer who transforms ideas into seamless digital experiences. Born and raised in Sagar, Madhya Pradesh, I developed an early fascination with technology that led me to pursue Computer Science.`,
    `After graduating from SGSITS Indore in 2018, I've been on an exciting journey through the tech industry, working with companies ranging from startups to industry giants like Cisco.`,
    `Beyond code, I'm deeply passionate about data structures and algorithms. When I'm not programming, you'll find me reading books on business and entrepreneurship, always looking for the next big idea.`,
  ],
  image: '/myPhoto.avif',
  highlights: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '15+' },
  ],
};

export const EXPERIENCE_DATA = [
  {
    id: 'cisco',
    company: 'Cisco',
    subtitle: 'AppDynamics',
    role: 'Software Engineer',
    period: '2023 - Present',
    location: 'Bangalore, India',
    points: [
      'Collaborated with UI/UX teams to implement Cisco\'s "Magnetic" design system across the product',
      'Led performance optimization initiatives, improving page load times by up to 50%',
      'Architected scalable frontend solutions for enterprise monitoring dashboards',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Jest'],
  },
  {
    id: 'avataar',
    company: 'Avataar',
    subtitle: 'via Recro',
    role: 'Frontend Developer',
    period: '2022 - 2023',
    location: 'Remote',
    points: [
      'Developed comprehensive user management system with role-based permissions',
      'Built authentication flows including SignIn, Signup, and User Invite systems',
      'Designed and implemented reusable component library from scratch',
    ],
    technologies: ['React', 'Node.js', 'Zustand', 'SCSS'],
  },
  {
    id: 'dew',
    company: 'Dew Solutions',
    subtitle: null,
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    location: 'Indore, India',
    points: [
      'Developed custom modules and components based on client requirements',
      'Implemented API caching strategies that improved application performance',
      'Maintained hybrid frontend applications across multiple Angular versions',
    ],
    technologies: ['Angular', 'React', 'JavaScript', 'SCSS'],
  },
  {
    id: 'wipro',
    company: 'Wipro',
    subtitle: null,
    role: 'Software Engineer',
    period: '2018 - 2020',
    location: 'Bangalore, India',
    points: [
      'Consulted with clients to gather requirements and translate them into technical solutions',
      'Designed and developed UI components meeting usability and accessibility standards',
      'Collaborated in agile teams to deliver high-quality software products',
    ],
    technologies: ['React', 'Redux', 'Bootstrap', 'JavaScript'],
  },
];

export const SKILLS_DATA = {
  categories: [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 92 },
        { name: 'Angular', level: 70 },
        { name: 'HTML/CSS', level: 88 },
      ],
    },
    {
      title: 'Styling',
      skills: [
        { name: 'SCSS/Sass', level: 85 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Bootstrap', level: 80 },
        { name: 'CSS Modules', level: 82 },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Git', level: 85 },
        { name: 'REST APIs', level: 88 },
        { name: 'GraphQL', level: 65 },
      ],
    },
    {
      title: 'Other',
      skills: [
        { name: 'Data Structures', level: 80 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Agile/Scrum', level: 78 },
        { name: 'UI/UX Design', level: 70 },
      ],
    },
  ],
};

export const PROJECTS_DATA = [
  {
    id: 'project-1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order tracking.',
    image: null,
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/kshamaj15',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with drag-and-drop functionality, team workspaces, and progress tracking.',
    image: null,
    technologies: ['React', 'Redux', 'Firebase', 'SCSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/kshamaj15',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React showcasing projects, skills, and professional experience.',
    image: null,
    technologies: ['React', 'CSS3', 'AOS', 'Responsive Design'],
    liveUrl: 'https://kshamajain.in',
    githubUrl: 'https://github.com/kshamaj15',
    featured: false,
  },
  {
    id: 'project-4',
    title: 'Weather Application',
    description: 'A beautiful weather app with location-based forecasts, interactive maps, and 7-day predictions.',
    image: null,
    technologies: ['JavaScript', 'REST API', 'Geolocation', 'CSS3'],
    liveUrl: '#',
    githubUrl: 'https://github.com/kshamaj15',
    featured: false,
  },
];

export const BLOG_POSTS = [
  {
    id: 'blog-1',
    title: 'Optimizing React Performance: A Deep Dive',
    excerpt: 'Learn the techniques I used to improve page load times by 50% at Cisco, including code splitting, lazy loading, and memoization strategies.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'Performance', 'Optimization'],
    url: '#',
  },
  {
    id: 'blog-2',
    title: 'Building Scalable Component Libraries',
    excerpt: 'A comprehensive guide to creating reusable, maintainable component libraries that scale with your team and project.',
    date: '2023-11-20',
    readTime: '12 min read',
    tags: ['React', 'Design Systems', 'Architecture'],
    url: '#',
  },
  {
    id: 'blog-3',
    title: 'TypeScript Best Practices for Large Codebases',
    excerpt: 'Practical TypeScript patterns and conventions that help maintain code quality in enterprise applications.',
    date: '2023-09-05',
    readTime: '10 min read',
    tags: ['TypeScript', 'Best Practices', 'Enterprise'],
    url: '#',
  },
];

export const CONTACT_CONTENT = {
  title: 'Get In Touch',
  subtitle: "Let's build something amazing together",
  description: `I'm currently open to new opportunities and interesting projects. 
    Whether you have a question, want to collaborate, or just want to say hello, 
    my inbox is always open.`,
  cta: {
    text: 'Say Hello',
    href: `mailto:${SITE_CONFIG.email}`,
  },
};


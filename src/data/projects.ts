// Types
export interface Project {
  title: string;
  stack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    title: 'Tazama Integration — Transaction Monitoring',
    stack: ['ISO 20022', 'Tazama', 'AML/CFT', 'Django', 'PostgreSQL', 'REST APIs'],
    description: 'Implemented integration with Tazama, an open-source real-time transaction monitoring and fraud detection platform. Built screening pipelines for clients processing inter-continental and international transactions, ensuring regulatory compliance with ISO 20022 messaging standards. Proof of work available on demand.',
    category: 'Fintech'
  },
  {
    title: 'Dima eCommerce',
    stack: ['Django', 'React', 'PostgreSQL', 'Azure', 'JWT', 'Image Server'],
    description: 'Multi-vendor, multi-tenant eCommerce platform built end-to-end with Django & DRF (backend) and React (frontend). Features PostgreSQL, REST APIs, JWT authentication, SEO-friendly slugs, and a dedicated image-server for optimized CDN delivery. Fully deployed on Azure Cloud IaaS.',
    liveUrl: 'https://dima.co.ke',
    category: 'Full-Stack'
  },
  {
    title: 'Finarchitect — AI Financial Platform',
    stack: ['Django REST Framework', 'JWT', 'Gunicorn', 'Nginx', 'DigitalOcean', 'AI/ML'],
    description: 'Comprehensive financial management system with advanced AI capabilities for financial modeling and forecasting. Deployed on DigitalOcean with Gunicorn, Nginx, and systemd. Includes CI/CD pipelines with real-time Telegram notifications and automated deployment workflows.',
    liveUrl: 'https://ai.finarchitect.online',
    category: 'Fintech'
  },
  {
    title: 'Hookworm — CI/CD Automation Tool',
    stack: ['Flask', 'GitHub Webhooks', 'Telegram API', 'Python', 'systemd'],
    description: 'Custom-built CI/CD automation engine supporting multi-repository pipelines. Integrated with GitHub webhooks for event-driven build/test/deploy workflows, featuring Telegram and email notifications with detailed deployment reports.',
    category: 'DevOps'
  },
  {
    title: 'Inventory Management System',
    stack: ['Django', 'PostgreSQL', 'Payment Gateways', 'KRA Integration', 'REST APIs'],
    description: 'Enterprise-grade inventory platform handling procurement, warehouse management, and retail POS operations. Integrated with multiple payment gateways and Kenya Revenue Authority (KRA) for tax compliance. Designed for modular scalability and multi-branch deployment.',
    category: 'Enterprise'
  },
  {
    title: 'Business Registration System',
    stack: ['Django', 'PDF Generation', 'PostgreSQL', 'Automated Workflows'],
    description: 'Government-grade business registration system supporting multiple business types with unique registration number generation (CBR/TYPE/SEQ/YEAR format). Features PDF certificate generation upon admin approval, secure storage, and automated issuance workflows.',
    category: 'Enterprise'
  },
  {
    title: 'Diani Voyage — Travel Platform',
    stack: ['Django', 'React', 'Azure', 'Travel API', 'Booking System'],
    description: 'Comprehensive travel management platform hosted on Azure Cloud providing seamless booking experiences, itinerary management, and travel package distribution for tourism operators.',
    liveUrl: 'https://dianivoyage.maracore.me',
    category: 'Full-Stack'
  },
  {
    title: 'Patient Management System',
    stack: ['Django', 'PostgreSQL', 'Autocomplete', 'Data Management'],
    description: 'Healthcare data management system with spreadsheet-style record handling, live autocomplete search, and simplified patient data workflows designed for clinical staff efficiency.',
    category: 'Healthcare'
  },
];

export const categories = ['All', 'Fintech', 'Full-Stack', 'Enterprise', 'DevOps', 'Healthcare'];

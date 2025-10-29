export interface Project {
  title: string;
  stack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Dima eCommerce',
    stack: ['Django', 'React', 'PostgreSQL', 'Azure', 'JWT'],
    description:
      'A multivendor and multitenant platform built end-to-end with Django & DRF (backend) and React (frontend). Integrated PostgreSQL, REST APIs, JWT authentication, slugs for clean URLs, and a dedicated image-server for optimized image processing. Fully deployed on Azure Cloud IaaS.',
    liveUrl: 'https://dima.co.ke',
  },
  {
    title: 'Finarchitect',
    stack: ['Django REST Framework', 'JWT', 'Gunicorn', 'Nginx', 'DigitalOcean'],
    description:
      'Comprehensive financial management system using Django & DRF, deployed on DigitalOcean with Gunicorn, Nginx, and systemd. Includes advanced AI version "AI Finarchitect" for financial modeling and forecasting. Features CI/CD with Telegram notifications.',
    liveUrl: 'https://ai.finarchitect.online',
  },
  {
    title: 'Hookworm CI/CD Tool',
    stack: ['Flask', 'GitHub Webhooks', 'Telegram API', 'Python'],
    description:
      'Custom-built CI/CD automation tool supporting multiple repositories. Integrated with GitHub webhooks and Telegram notifications, with email alerts under development. Manages build/test/deploy pipelines using Flask.',
  },
  {
    title: 'Inventory Management System',
    stack: ['Django', 'PostgreSQL', 'Payment Gateways', 'KRA Integration'],
    description:
      'Handles procurement, warehouse, and retail POS operations. Integrated payment gateways and compliance with regulatory bodies such as KRA. Designed for scalability and modular customization.',
  },
  {
    title: 'Business Registration System',
    stack: ['Django', 'PDF Generation', 'PostgreSQL'],
    description:
      'Django system supporting multiple business types, generating unique registration numbers (CBR/TYPE/SEQ/YEAR). Produces verified PDF certificates upon admin approval, securely stored and downloadable by users.',
  },
  {
    title: 'Diani Voyage',
    stack: ['Django', 'React', 'Azure', 'Travel Platform'],
    description:
      'A comprehensive travel platform hosted on Azure Cloud, providing seamless booking experiences and travel management solutions.',
    liveUrl: 'https://dianivoyage.maracore.me',
  },
  {
    title: 'Patient Management System',
    stack: ['Django', 'PostgreSQL', 'Autocomplete'],
    description:
      'Spreadsheet-style record management system built with Django, includes live autocomplete search and simplified patient data handling.',
  },
];

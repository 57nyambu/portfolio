// Types
export interface Project {
  title: string;
  stack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
  status?: 'Live' | 'In Progress' | 'Proof on Demand';
  restricted?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Lipana — Developer Payment Platform',
    stack: ['ISO 20022', 'Tazama', 'AML/CFT', 'Django', 'PostgreSQL', 'MinIO S3', 'REST APIs'],
    description:
      'Worked at Lipana, a developer-focused payment platform, where I integrated Tazama — an open-source real-time transaction monitoring and fraud detection system — into the core payment pipeline. Also architected and deployed a MinIO S3-compatible object storage layer for scalable backend asset management, ensuring regulatory compliance with ISO 20022 messaging standards.',
    liveUrl: 'https://lipana.dev',
    category: 'Fintech',
    status: 'Live',
  },
  {
    title: 'Jangara Mall — Full-Stack Mall Services Platform',
    stack: ['Django', 'React', 'PostgreSQL', 'Booking System', 'REST APIs'],
    description:
      'Designed and built the complete full-stack platform for Jangara Mall — a client project covering bookings, utilities management, and a suite of other mall service features. Handled everything from architecture to production deployment, delivering a unified system for mall operations and tenant services.',
    liveUrl: 'https://jangara.tomnyambu.dev',
    category: 'Full-Stack',
    status: 'Live',
  },
  {
    title: 'Dima eCommerce — Multi-Tenant Platform',
    stack: ['Django', 'React', 'PostgreSQL', 'Azure', 'M-Pesa', 'SMS', 'Email', 'Realtime Analytics', 'JWT', 'Image Server'],
    description:
      'Multi-vendor, multi-tenant eCommerce platform currently in its final phase of setup. Built end-to-end with Django & DRF (backend) and React (frontend), integrating the core components of a production-grade commerce engine — M-Pesa payments, SMS & email notification pipelines, and realtime analytics. Features JWT authentication, SEO-friendly slugs, and a dedicated image server for optimized CDN delivery, fully deployed on Azure Cloud IaaS.',
    liveUrl: 'https://dima.co.ke',
    category: 'Full-Stack',
    status: 'In Progress',
  },
  {
    title: 'DevSend — Email Scheduling & Sending Tool',
    stack: ['FastAPI', 'SQLAlchemy', 'Resend API', 'APScheduler', 'PostgreSQL', 'JWT', 'Uvicorn'],
    description:
      'A secure email automation tool built on FastAPI and the Resend API. Supports scheduled sends (once, daily, weekly, monthly), rich HTML templates with custom placeholders, bulk personalized sending, multi-key API rotation, and recipient metadata management. Includes a full admin interface with delivery logging, CSV export, and real-time search.',
    category: 'Full-Stack',
    status: 'Live',
  },
  {
    title: 'Finarchitect — AI Financial Platform',
    stack: ['Django REST Framework', 'JWT', 'Gunicorn', 'Nginx', 'DigitalOcean', 'AI/ML'],
    description:
      'Comprehensive financial management system with advanced AI capabilities for financial modeling and forecasting. Deployed on DigitalOcean with Gunicorn, Nginx, and systemd. Includes CI/CD pipelines with real-time Telegram notifications and automated deployment workflows.',
    liveUrl: 'https://ai.finarchitect.online',
    category: 'Fintech',
    status: 'Live',
  },
  {
    title: 'Hookworm — CI/CD Automation Tool',
    stack: ['Flask', 'GitHub Webhooks', 'Telegram API', 'Python', 'systemd'],
    description:
      'Custom-built CI/CD automation engine supporting multi-repository pipelines. Integrated with GitHub webhooks for event-driven build/test/deploy workflows, featuring Telegram and email notifications with detailed deployment reports.',
    category: 'DevOps',
    status: 'Proof on Demand',
  },
  {
    title: 'Inventory Management System',
    stack: ['Django', 'PostgreSQL', 'Payment Gateways', 'KRA Integration', 'REST APIs'],
    description:
      'Enterprise-grade inventory platform handling procurement, warehouse management, and retail POS operations. Integrated with multiple payment gateways and Kenya Revenue Authority (KRA) for tax compliance. Designed for modular scalability and multi-branch deployment.',
    category: 'Enterprise',
    status: 'Proof on Demand',
    restricted: true,
  },
  {
    title: 'Business Registration System',
    stack: ['Django', 'PDF Generation', 'PostgreSQL', 'Automated Workflows'],
    description:
      'Government-grade business registration system supporting multiple business types with unique registration number generation (CBR/TYPE/SEQ/YEAR format). Features PDF certificate generation upon admin approval, secure storage, and automated issuance workflows.',
    category: 'Enterprise',
    status: 'Proof on Demand',
    restricted: true,
  },
  {
    title: 'Diani Voyage — Travel Platform',
    stack: ['Django', 'React', 'Azure', 'Travel API', 'Booking System'],
    description:
      'Comprehensive travel management platform hosted on Azure Cloud providing seamless booking experiences, itinerary management, and travel package distribution for tourism operators.',
    liveUrl: 'https://dianivoyage.maracore.me',
    category: 'Full-Stack',
    status: 'Live',
  },
  {
    title: 'Patient Management System',
    stack: ['Django', 'PostgreSQL', 'Autocomplete', 'Data Management'],
    description:
      'Healthcare data management system with spreadsheet-style record handling, live autocomplete search, and simplified patient data workflows designed for clinical staff efficiency.',
    category: 'Healthcare',
    status: 'Proof on Demand',
    restricted: true,
  },
  {
    title: 'Umami — Self-Hosted Analytics',
    stack: ['Umami', 'PostgreSQL', 'Next.js', 'Self-Hosted', 'Privacy-First'],
    description:
      'Deployed and self-host a Umami analytics instance providing privacy-focused, cookie-free traffic analytics across all live projects. Tracks pageviews, sessions, referrers, and custom events in real time — giving full visibility into platform usage without relying on third-party data collection.',
    category: 'DevOps',
    status: 'Live',
  },
];

export const categories = ['All', 'Fintech', 'Full-Stack', 'Enterprise', 'DevOps', 'Healthcare'];

export const siteNote =
  'Some projects involve restricted-access systems or custom client solutions — public links are not available for these. Demos and walkthroughs are available on request.';

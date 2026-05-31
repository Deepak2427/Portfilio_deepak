export const PORTFOLIO = {
  hero: {
    roles: ['Web Developer', 'UI/UX Designer', 'Freelancer', 'Problem Solver'],
    typewriter: ['Welcome to my profile', 'My name is Deepak Sahu', 'I am a full stack developer'],
    tags: ['React / Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
  },

  stats: [
    { value: '4+', label: 'Projects delivered' },
    { value: '100%', label: 'Client satisfaction' },
    { value: '4', label: 'Industries covered' },
    { value: '24h', label: 'Response time' },
  ],

  skills: [
    { icon: '⚛️', name: 'React / Next.js', level: 0.95 },
    { icon: '🟢', name: 'Node.js / Express', level: 0.88 },
    { icon: '🔷', name: 'TypeScript', level: 0.85 },
    { icon: '🎨', name: 'Tailwind / CSS3', level: 0.95 },
    { icon: '🗄️', name: 'PostgreSQL / MongoDB', level: 0.82 },
    { icon: '🌐', name: 'REST APIs / GraphQL', level: 0.90 },
    { icon: '✨', name: 'GSAP / Framer Motion', level: 0.88 },
    { icon: '☁️', name: 'Vercel / AWS / Firebase', level: 0.78 },
  ],

  projects: [
    {
      id: 'gym',
      title: 'Rock the Gym',
      category: 'Fitness & Lifestyle',
      catColor: 'rgba(255,92,40,.14)',
      catText: '#FF8C68',
      preview: 'gym',
      description:
        'High-energy gym landing page with cinematic hero animation, membership plans, class schedules, and online booking flow.',
      stack: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
      features: [
        'Cinematic hero with parallax scroll animations',
        'Dynamic class schedule with real-time availability',
        'Membership plans with Stripe payment integration',
        'Online booking system with calendar view',
        'Mobile-responsive design with gesture support',
      ],
      liveUrl: '#',
      filter: 'frontend',
    },
    {
      id: 'stock',
      title: 'StockSense',
      category: 'Fintech / SaaS',
      catColor: 'rgba(108,99,255,.14)',
      catText: '#a5b4fc',
      preview: 'stock',
      description:
        'Deep fundamental stock analysis tool with 5-model mathematical valuation (DCF, Graham, EV/EBITDA), live NSE data, PDF export, and a scorecard dashboard.',
      stack: ['React', 'Node.js', 'REST APIs', 'Chart.js', 'PostgreSQL', 'PDF Gen'],
      features: [
        '5-model valuation engine (DCF, Graham, EV/EBITDA, P/E, P/B)',
        'Live NSE/BSE stock data with auto-refresh',
        'Interactive charts with historical performance',
        'One-click PDF report generation',
        'Scorecard dashboard with watchlist tracking',
      ],
      liveUrl: 'https://stock-what-you-want.vercel.app/',
      filter: 'fullstack',
    },
    {
      id: 'anim',
      title: 'Dream Frame Studios',
      category: 'Creative / Media',
      catColor: 'rgba(108,99,255,.14)',
      catText: '#c4b5fd',
      preview: 'anim',
      description:
        'Full marketing website for an animation studio with service showcase, animated work gallery, careers page, and quote request flow.',
      stack: ['Next.js', 'GSAP', 'Three.js', 'Tailwind CSS', 'Sanity CMS'],
      features: [
        '3D interactive portfolio showcase with Three.js',
        'Smooth page transitions powered by GSAP',
        'CMS-driven content for easy updates',
        'Careers page with application form',
        'Quote request flow with email notifications',
      ],
      liveUrl: '#',
      filter: 'frontend',
    },
    {
      id: 'data',
      title: 'DataPlus',
      category: 'Data / SaaS',
      catColor: 'rgba(0,229,255,.14)',
      catText: '#00e5ff',
      preview: 'data',
      description:
        'Precision-engineered data infrastructure portal for orchestrating complex data environments. Synthesizes market telemetry into actionable insights with an advanced neural dashboard.',
      stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Chart.js'],
      features: [
        'Architectural intelligence dashboard with real-time metrics',
        'Multi-environment deployment orchestration',
        'Security protocol monitoring and threat analysis',
        'Neural data pipeline visualization',
        'Modular infrastructure component system',
      ],
      liveUrl: 'https://studio-vert-mu-18.vercel.app/',
      filter: 'fullstack',
    },
  ],
};

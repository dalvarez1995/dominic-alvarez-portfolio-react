import type { PortfolioConfig } from '../types/portfolio.types';

// Default configuration (Dominic's portfolio as template)
export const defaultPortfolioConfig: PortfolioConfig = {
  personal: {
    name: "Dominic Alvarez Robles",
    title: "Software Technical Lead & Founder",
    shortDescription: "I architect, build, and ship production SaaS — from multi-tenant backends to mobile apps.",
    availability: {
      status: true,
      text: "🚀 Available for new opportunities"
    }
  },

  contact: {
    email: "dom.alva1995@gmail.com",
    location: "Available Worldwide",
    social: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/dominic-alvarez-robles-1598a018a", icon: "fab fa-linkedin", color: "#0077b5" },
      { name: "GitHub", url: "https://github.com/dalvarez1995", icon: "fab fa-github", color: "#333" },
      { name: "Email", url: "mailto:dom.alva1995@gmail.com", icon: "fas fa-envelope", color: "#ea4335" },
      { name: "Medium", url: "https://medium.com/@dom.alva1995", icon: "fab fa-medium", color: "#00ab6c" }
    ]
  },

  navigation: [
    { name: "Home", href: "#home", icon: "fas fa-home" },
    { name: "About", href: "#about", icon: "fas fa-user" },
    { name: "Projects", href: "#projects", icon: "fas fa-briefcase" },
    { name: "Education", href: "#education", icon: "fas fa-graduation-cap" },
    { name: "Contact", href: "#contact", icon: "fas fa-envelope" }
  ],

  hero: {
    greeting: "Software Technical Lead",
    title: ["Builder & Founder"],
    description: "I architect, build, and ship production SaaS — from multi-tenant backends to mobile apps. Currently founder & creator of [Syncita](https://syncita.app), a production platform built end-to-end.",
    buttons: [
      { text: "View My Work", href: "#projects", type: "primary", icon: "fas fa-arrow-right" },
      { text: "Get In Touch", href: "#contact", type: "secondary", icon: "fas fa-paper-plane" }
    ],
    backgroundEffects: true,
    scrollIndicator: true
  },

  about: {
    description: [
      "Software Technical Lead with deep expertise in enterprise full-stack development, currently building [Syncita](https://syncita.app) — a multi-tenant SaaS platform — as founder and sole architect. I obsess over both the engineering craft and the user experience.",
      "Over years working across .NET, NestJS, React, React Native, and self-hosted DevOps stacks, I've shipped enterprise migrations, payment orchestration systems, and now my own SaaS product in production."
    ],
    stats: [
      { value: "7+", label: "Years Exp", description: "Professional experience" },
      { value: "20+", label: "Projects", description: "Completed successfully" },
      { value: "0", label: "Certificates", description: "Professional certifications" } // Will be computed dynamically
    ],
    skills: [
      {
        name: "Frontend Excellence",
        icon: "fas fa-code",
        color: "primary",
        skills: ["React", "Angular", "Vue", "TypeScript", "Blazor"]
      },
      {
        name: "Backend Mastery",
        icon: "fas fa-server",
        color: "accent",
        skills: [".NET Core", "Node.js", "SQL Server", "Azure", "AWS"]
      }
    ],
    location: {
      country: "Ecuador",
      countryCode: "EC", // ISO 3166-1 alpha-2 code for Ecuador
      flag: "🇪🇨", // Fallback emoji
      city: "Guayaquil"
    },
    languages: [
      {
        name: "Spanish",
        level: "Native",
        proficiency: 100,
        countryCode: "ES",
        flag: "🇪🇸"
      },
      {
        name: "English",
        level: "B2", // Upper-intermediate level
        proficiency: 75,
        countryCode: "US",
        flag: "🇺🇸"
      },
    ]
  },

  projects: {
    title: "Featured Projects",
    description: "Enterprise solutions that drive business transformation and innovation",
    featured: [
      {
        id: "syncita",
        title: "Syncita",
        category: "SaaS Platform · Founder",
        description: "Founder & creator. Multi-tenant SaaS for appointment management and treatment-based businesses (clinics, salons, therapists). Production system serving real customers — full-stack TypeScript monorepo with NestJS API, React 19 frontend, PostgreSQL multi-tenant DB, Redis throttling, AI agent integration via Langfuse, and self-hosted infrastructure on Coolify.",
        logo: "/images/syncita/syncita-logo-dark.webp",
        flagship: true,
        responsibilities: [
          "Sole architect & founder — product, backend, frontend, and DevOps all in one",
          "Cloud infrastructure on AWS (S3 for storage, SES for transactional email) + self-hosted via Coolify",
          "Online payment processing with Payphone: subscriptions, billing cycles, trial periods, grace periods, and webhook integration",
          "AI integration: WhatsApp assistant with LLM tool-calling agents, full observability via Langfuse tracing",
          "NestJS event-driven architecture: Bull queues, background jobs, WebSocket gateways, cron tasks",
          "Row-level multi-tenant isolation: 15+ business modules with per-tenant Prisma guards",
          "WhatsApp Business API for automated reminders, confirmations, and AI-powered replies",
          "End-to-end typed error system with structured codes (backend → frontend registry)"
        ],
        technologies: [
          { name: "NestJS 11", color: "accent" },
          { name: "React 19", color: "accent" },
          { name: "TypeScript", color: "primary" },
          { name: "PostgreSQL", color: "primary" },
          { name: "Redis", color: "primary" },
          { name: "Prisma", color: "primary" },
          { name: "Tailwind v4", color: "accent" },
          { name: "shadcn/ui", color: "accent" },
          { name: "Langfuse", color: "accent" },
          { name: "Coolify", color: "primary" },
          { name: "Docker", color: "primary" }
        ],
        features: [
          { icon: "fas fa-building", title: "Multi-tenant", description: "Workspace isolation", color: "accent" },
          { icon: "fas fa-bolt", title: "Real-time", description: "Redis + queues", color: "accent" },
          { icon: "fas fa-robot", title: "AI Agents", description: "Langfuse + LLM routing", color: "accent" },
          { icon: "fas fa-shield-halved", title: "Production", description: "Self-hosted, observable", color: "accent" }
        ],
        type: "personal",
        links: [
          { type: "demo", url: "https://syncita.app" }
        ]
      },
      {
        id: "payment-controller",
        title: "Payment Controller",
        category: "Payment Processing · Enterprise",
        description: "Architected a payment orchestration service for Servientrega S.A., managing real-time communication between POS terminals and the corporate web platform. Modular 3-tier architecture: Web App + Web API with WebSocket server + WPF Desktop client.",
        screenshots: [
          "/images/payment-controller/login.webp",
          "/images/payment-controller/dashboard.webp",
          "/images/payment-controller/desktop.webp",
          "/images/payment-controller/transaction.webp"
        ],
        screenshotLabels: [
          "Login screen — secure access for operators and administrators",
          "Dashboard — real-time transaction monitoring across all POS terminals",
          "WPF Desktop client — local agent bridging POS hardware to the web platform",
          "Transaction detail — full audit trail with status, amount, and terminal info"
        ],
        technologies: [
          { name: ".NET 9", color: "accent" },
          { name: "SignalR", color: "primary" },
          { name: "WPF", color: "primary" },
          { name: "WebSocket", color: "primary" },
          { name: "C#", color: "accent" }
        ],
        features: [
          { icon: "fas fa-bolt", title: "Real-time", description: "WebSocket sync", color: "accent" },
          { icon: "fas fa-cube", title: "Modular", description: "3-tier design", color: "accent" },
          { icon: "fas fa-credit-card", title: "POS Bridge", description: "Terminal ↔ Web", color: "accent" },
          { icon: "fas fa-shield", title: "Enterprise", description: "Servientrega scale", color: "accent" }
        ],
        company: {
          name: "Sismetic",
          logo: "/images/sismetic-logo-light.webp",
          description: "Developed as Sismetic collaborator for Servientrega S.A."
        },
        type: "enterprise"
      },
      {
        id: "fast-order-app",
        title: "Fast Order",
        category: "Restaurant POS · Mobile",
        description: "Restaurant order management system: monorepo with React Native 19, Node.js backend, and shared TypeScript library. Optimistic UI, dual-ID system for offline-first flow, and bidirectional mobile↔desktop sync. Built and tested in real restaurant operations.",
        screenshots: [
          "/images/fastorder/login.webp",
          "/images/fastorder/order-tab.webp",
          "/images/fastorder/table-selection.webp",
          "/images/fastorder/split-bill.webp"
        ],
        screenshotLabels: [
          "Login — staff authentication flow",
          "Order tab — real-time item management with optimistic updates",
          "Table selection — restaurant floor plan with live table status",
          "Split bill — flexible payment splitting between multiple customers"
        ],
        technologies: [
          { name: "React Native 19", color: "accent" },
          { name: "Expo", color: "accent" },
          { name: "Node.js", color: "primary" },
          { name: "TypeScript", color: "primary" },
          { name: "Monorepo", color: "primary" }
        ],
        features: [
          { icon: "fas fa-bolt", title: "Optimistic UI", description: "Instant updates", color: "accent" },
          { icon: "fas fa-layer-group", title: "Monorepo", description: "Shared codebase", color: "accent" },
          { icon: "fas fa-mobile-screen", title: "Offline-first", description: "Dual-ID sync", color: "accent" },
          { icon: "fas fa-receipt", title: "Real-world", description: "Production tested", color: "accent" }
        ],
        type: "personal"
      }
    ],
    cta: {
      title: "Ready to Build Something Amazing?",
      description: "Let's collaborate on your next project and create innovative solutions that drive real business impact.",
      buttonText: "Get In Touch"
    }
  },

  education: {
    title: "Education & Certifications",
    description: "Continuous learning and professional development through industry-recognized programs and specialized certifications",
    stats: [], // Stats are now computed automatically from certification and specialization data
    certifications: {
      dataSource: "src/data/certifications.ts", // ✅ TypeScript data with enhanced functionality
      searchEnabled: true,
      filterEnabled: true
    },
    specializations: {
      dataSource: "src/data/specializations.ts" // ✅ TypeScript data with enhanced functionality
    }
  },

  theme: {
    colors: {
      primary: {
        50:  '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617'
      },
      accent: {
        50:  '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63'
      }
    },
    fonts: {
      display: 'Poppins',
      body: 'Inter'
    },
    animations: true
  },

  seo: {
    title: "Dominic Alvarez Robles - Portfolio",
    titleTemplate: "{name} - {role} | Portfolio", // Template for dynamic title generation
    description: "Portfolio of Dominic Alvarez Robles, showcasing expertise in .NET, enterprise solutions, and modern web development.",
    keywords: ["Software Developer", "Technical Lead", ".NET", "React", "Azure", "Full Stack"],
    ogImage: "/images/syncita/syncita-og.webp" // Open Graph image for social media sharing
  }
};


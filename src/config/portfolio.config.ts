import type { PortfolioConfig } from '../types/portfolio.types';

// Default configuration (Dominic's portfolio as template)
export const defaultPortfolioConfig: PortfolioConfig = {
  personal: {
    name: "Dominic Alvarez Robles",
    title: "Software Technical Lead & Developer",
    shortDescription: "I create innovative solutions across web, desktop, and mobile platforms with a focus on technical leadership and cutting-edge technology.",
    profileImage: "/assets/images/profile-photo.jpg",
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
    greeting: "Software Technical",
    title: ["Lead & Developer"],
    description: "I create innovative solutions across web, desktop, and mobile platforms with a focus on technical leadership and cutting-edge technology.",
    buttons: [
      { text: "View My Work", href: "#projects", type: "primary", icon: "fas fa-arrow-right" },
      { text: "Get In Touch", href: "#contact", type: "secondary", icon: "fas fa-paper-plane" }
    ],
    backgroundEffects: true,
    scrollIndicator: true
  },

  about: {
    description: [
      "I am a passionate Software Technical Lead who believes that products should not only perform excellently but also be visually appealing and easy to use for end users. With over 6 years of experience in enterprise software development, I specialize in creating scalable solutions using modern technologies.",
      "My journey in tech has taken me through exciting projects ranging from enterprise ERP migrations to cutting-edge document management systems powered by AI and OCR technology."
    ],
    stats: [
      { value: "6+", label: "Years Exp", description: "Professional experience" },
      { value: "20+", label: "Projects", description: "Completed successfully" },
      { value: "0", label: "Certificates", description: "Professional certifications" } // Will be computed dynamically
    ],
    skills: [
      {
        name: "Frontend Excellence",
        icon: "fas fa-code",
        color: "primary",
        skills: ["React", "Angular", "Vue", "TypeScript"]
      },
      {
        name: "Backend Mastery",
        icon: "fas fa-server",
        color: "accent",
        skills: [".NET Core", "Node.js", "SQL Server", "Azure"]
      }
    ],
    profileImage: "/images/profile-photo.jpg",
    location: {
      country: "Ecuador",
      countryCode: "EC", // ISO 3166-1 alpha-2 code for Ecuador
      flag: "🇪🇨", // Fallback emoji
      city: "Guayaquil"
    }
  },

  projects: {
    title: "Featured Projects",
    description: "Enterprise solutions that drive business transformation and innovation",
    featured: [
      {
        id: "payment-controller",
        title: "Payment Controller",
        category: "Payment Processing",
        description: "Architected a comprehensive payment orchestration service managing real-time communication between POS terminals and Servientrega's web platform. Built with modular architecture featuring Web App, Web API with WebSocket server, and Desktop client.",
        technologies: [
          { name: ".NET 9", color: "primary" },
          { name: "SignalR", color: "gray" },
          { name: "WPF", color: "gray" }
        ],
        features: [
          { icon: "fas fa-bolt", title: "Real-time", description: "WebSocket sync", color: "accent" },
          { icon: "fas fa-cube", title: "Modular", description: "3-tier design", color: "accent" }
        ],
        company: {
          name: "Sismetic",
          logo: "/images/sismetic-logo-light.webp",
          description: "Developed as Sismetic collaborator for Servientrega S.A"
        },
        type: "enterprise"
      },
      {
        id: "document-manager",
        title: "Export Document Manager",
        category: "Document Management",
        description: "Revolutionized document management for Nirsa S.A.'s export operations by implementing OCR technology and workflow automation, reducing processing time by 70% and improving accuracy.",
        technologies: [
          { name: ".NET Framework", color: "accent" },
          { name: "SSR", color: "gray" },
          { name: "OCR Technology", color: "gray" },
          { name: "Workflow Automation", color: "gray" }
        ],
        features: [
          { icon: "fas fa-clock", title: "70% Faster", description: "Process time", color: "primary" },
          { icon: "fas fa-robot", title: "AI-Powered", description: "OCR integration", color: "primary" }
        ],
        company: {
          name: "Sismetic",
          logo: "/images/sismetic-logo-light.webp",
          description: "Developed as Sismetic collaborator for Nirsa S.A."
        },
        type: "enterprise"
      },
      {
        id: "fast-order-app",
        title: "Fast Order App",
        category: "Mobile Development",
        description: "Complete restaurant order management system built as a monorepo with React Native 19, Node.js backend, and shared TypeScript library. Features optimistic UI, dual-ID system, and bidirectional mobile-desktop sync.",
        image: "/images/fast-order-splash-dark.webp",
        technologies: [
          { name: "React Native 19", color: "blue" },
          { name: "Node.js", color: "gray" },
          { name: "Expo", color: "gray" }
        ],
        features: [
          { icon: "fas fa-sync", title: "Optimistic UI", description: "Instant updates", color: "blue" },
          { icon: "fas fa-layer-group", title: "Monorepo", description: "Shared codebase", color: "blue" }
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
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a'
      },
      accent: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b'
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
    ogImage: "/images/profile-photo.jpg" // Open Graph image for social media sharing
  }
};

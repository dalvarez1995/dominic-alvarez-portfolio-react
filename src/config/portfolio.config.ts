// Education interfaces
export interface Certification {
  verifyCode: string;
  partners: Array<{
    name: string;
    logo: string;
  }>;
  grade: number;
  name: string;
  completionDate: number;
  platformOrigin: string;
  id: number;
  courseId: string;
  slug: string;
  distinctionLevel: string;
  instructors: Array<{
    firstName: string;
    lastName: string;
    photo: string;
    title: string;
  }>;
}

export interface Specialization {
  verifyCode: string;
  productVariant: string;
  name: string;
  specializationId: string;
  completionDate: number;
  id: number;
  partnerNames: string[];
}

// Portfolio Configuration - Highly customizable for different users
export interface PortfolioConfig {
  // Personal Information
  personal: {
    name: string;
    title: string;
    shortDescription: string;
    profileImage: string;
    availability: {
      status: boolean;
      text: string;
    };
  };

  // Contact Information
  contact: {
    email: string;
    phone?: string;
    location?: string;
    social: SocialLink[];
  };

  // Navigation
  navigation: NavItem[];

  // Hero Section
  hero: {
    greeting: string;
    title: string[];
    description: string;
    buttons: HeroButton[];
    backgroundEffects: boolean;
    scrollIndicator: boolean;
  };

  // About Section
  about: {
    description: string[];
    stats: StatItem[];
    skills: SkillCategory[];
    profileImage: string;
  };

  // Projects Section
  projects: {
    title: string;
    description: string;
    featured: Project[];
    cta: {
      title: string;
      description: string;
      buttonText: string;
    };
  };

  // Education Section
  education: {
    title: string;
    description: string;
    stats: EducationStat[];
    certifications: {
      dataSource: string; // Path to JSON file in src/assets/data/
      searchEnabled: boolean;
      filterEnabled: boolean;
    };
    specializations: {
      dataSource: string; // Path to JSON file in src/assets/data/
    };
  };

  // Theme Configuration
  theme: {
    colors: {
      primary: ColorScale;
      accent: ColorScale;
    };
    fonts: {
      display: string;
      body: string;
    };
    animations: boolean;
  };

  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color?: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

export interface HeroButton {
  text: string;
  href: string;
  type: 'primary' | 'secondary';
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: Technology[];
  features: ProjectFeature[];
  company?: CompanyInfo;
  type: 'enterprise' | 'personal' | 'freelance';
  links?: ProjectLink[];
}

export interface Technology {
  name: string;
  color: string;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface CompanyInfo {
  name: string;
  logo: string;
  description: string;
}

export interface ProjectLink {
  type: 'github' | 'demo' | 'case-study';
  url: string;
}

export interface EducationStat {
  value: string;
  label: string;
  icon: string;
  color: string;
}

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

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
    email: "dominic@example.com",
    location: "Available Worldwide",
    social: [
      { name: "LinkedIn", url: "https://linkedin.com/in/dominic", icon: "fab fa-linkedin", color: "#0077b5" },
      { name: "GitHub", url: "https://github.com/dominic", icon: "fab fa-github", color: "#333" },
      { name: "Email", url: "mailto:dominic@example.com", icon: "fas fa-envelope", color: "#ea4335" }
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
      { value: "21", label: "Certificates", description: "Professional certifications" }
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
    profileImage: "/images/profile-photo.jpg"
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
    stats: [
      { value: "24", label: "Total Credentials", icon: "fas fa-certificate", color: "primary" },
      { value: "3", label: "Leading Partners", icon: "fas fa-university", color: "accent" },
      { value: "98%", label: "Average Score", icon: "fas fa-chart-line", color: "blue" }
    ],
    certifications: {
      dataSource: "src/assets/data/certifications.json", // ✅ Datos privados en src/
      searchEnabled: true,
      filterEnabled: true
    },
    specializations: {
      dataSource: "src/assets/data/specializations.json" // ✅ Datos privados en src/
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
    description: "Portfolio of Dominic Alvarez Robles, showcasing expertise in .NET, enterprise solutions, and modern web development.",
    keywords: ["Software Developer", "Technical Lead", ".NET", "React", "Azure", "Full Stack"]
  }
};

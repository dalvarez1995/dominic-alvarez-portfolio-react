// Example custom configuration for another user
// This shows how to customize the portfolio template for different users
import type { PortfolioConfig } from './portfolio.config';

export const exampleCustomConfig: Partial<PortfolioConfig> = {
  // Personal Information - CUSTOMIZE THIS
  personal: {
    name: "Your Name Here",
    title: "Your Professional Title",
    shortDescription: "Your brief description of what you do and your expertise.",
    profileImage: "/assets/images/your-profile-photo.jpg", // Replace with your photo
    availability: {
      status: true,
      text: "🚀 Available for new opportunities" // Or whatever status you prefer
    }
  },

  // Contact Information - CUSTOMIZE THIS
  contact: {
    email: "your.email@example.com", // Your actual email
    phone: "+1 (555) 123-4567", // Optional: your phone number
    location: "Your City, Country", // Optional: your location
    social: [
      { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "fab fa-linkedin", color: "#0077b5" },
      { name: "GitHub", url: "https://github.com/yourusername", icon: "fab fa-github", color: "#333" },
      { name: "Twitter", url: "https://twitter.com/yourusername", icon: "fab fa-twitter", color: "#1da1f2" },
      { name: "Email", url: "mailto:your.email@example.com", icon: "fas fa-envelope", color: "#ea4335" }
    ]
  },

  // Hero Section - CUSTOMIZE THIS
  hero: {
    greeting: "Hi, I'm", // Or whatever greeting you prefer
    title: ["Your Name", "Your Title"], // Split your title into lines for better display
    description: "Your **detailed description** here. You can use **bold text** by wrapping words in double asterisks.",
    buttons: [
      { text: "View My Work", href: "#projects", type: "primary", icon: "fas fa-arrow-right" },
      { text: "Get In Touch", href: "#contact", type: "secondary", icon: "fas fa-paper-plane" }
    ]
  },

  // About Section - CUSTOMIZE THIS
  about: {
    description: [
      "Your first paragraph about yourself, your background, and what you're passionate about.",
      "Your second paragraph about your experience, journey, or what drives you in your career."
    ],
    stats: [
      { value: "X+", label: "Years Exp", description: "Professional experience" },
      { value: "Y+", label: "Projects", description: "Completed successfully" },
      { value: "Z", label: "Clients", description: "Happy clients served" }
    ],
    skills: [
      {
        name: "Your Frontend Skills",
        icon: "fas fa-code",
        color: "primary",
        skills: ["React", "Vue", "Angular", "TypeScript"] // Your actual skills
      },
      {
        name: "Your Backend Skills",
        icon: "fas fa-server",
        color: "accent",
        skills: ["Node.js", "Python", "PHP", "PostgreSQL"] // Your actual skills
      }
    ],
    profileImage: "/assets/images/your-profile-photo.jpg" // Same as above
  },

  // Projects Section - CUSTOMIZE THIS COMPLETELY
  projects: {
    title: "My Featured Projects",
    description: "Here are some of the projects I've worked on that showcase my skills and experience",
    featured: [
      {
        id: "project-1",
        title: "Your Project Title",
        category: "Web Development", // Or whatever category fits
        description: "Description of your project, what it does, technologies used, and impact.",
        image: "/assets/images/your-project-screenshot.jpg", // Optional: project screenshot
        technologies: [
          { name: "React", color: "blue" },
          { name: "Node.js", color: "green" },
          { name: "MongoDB", color: "gray" }
        ],
        features: [
          { icon: "fas fa-rocket", title: "Fast", description: "Lightning fast performance", color: "primary" },
          { icon: "fas fa-shield-alt", title: "Secure", description: "Enterprise-grade security", color: "accent" }
        ],
        company: {
          name: "Company Name",
          logo: "/assets/images/company-logo.svg",
          description: "Developed for Company Name"
        },
        type: "enterprise", // or "personal" or "freelance"
        links: [
          { type: "github", url: "https://github.com/yourusername/project" },
          { type: "demo", url: "https://yourproject.com" }
        ]
      }
      // Add more projects here...
    ]
  },

  // Education Section - CUSTOMIZE THIS
  education: {
    title: "Education & Certifications",
    description: "My educational background and professional certifications",
    stats: [
      { value: "X", label: "Certifications", icon: "fas fa-certificate", color: "primary" },
      { value: "Y", label: "Courses", icon: "fas fa-graduation-cap", color: "accent" },
      { value: "Z%", label: "Average Score", icon: "fas fa-chart-line", color: "blue" }
    ],
    certifications: {
      dataSource: "/assets/your-certifications.json", // Create your own JSON file
      searchEnabled: true,
      filterEnabled: true
    },
    specializations: {
      dataSource: "/assets/your-specializations.json" // Create your own JSON file
    }
  },

  // Theme Configuration - CUSTOMIZE COLORS IF DESIRED
  theme: {
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316', // Orange theme example
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12'
      },
      accent: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4', // Cyan theme example
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63'
      }
    },
    fonts: {
      display: 'Montserrat', // Or any Google Font you prefer
      body: 'Open Sans' // Or any Google Font you prefer
    },
    animations: true
  },

  // SEO - CUSTOMIZE THIS
  seo: {
    title: "Your Name - Portfolio",
    titleTemplate: "{name} - {role} | Portfolio", // Dynamic title template
    description: "Portfolio of Your Name, showcasing expertise in your field and technologies.",
    keywords: ["Your Skills", "Your Technologies", "Your Industry", "Your Location"],
    ogImage: "/images/your-og-image.jpg" // Your Open Graph image for social media sharing
  }
};

// Additional example configurations for different professions:

// Frontend Developer Example
export const frontendDeveloperConfig: Partial<PortfolioConfig> = {
  personal: {
    name: "Jane Smith",
    title: "Frontend Developer & UI/UX Designer",
    shortDescription: "Creating beautiful, user-friendly interfaces with modern web technologies."
  },
  about: {
    skills: [
      {
        name: "Frontend Frameworks",
        icon: "fab fa-react",
        color: "primary",
        skills: ["React", "Vue.js", "Svelte", "Next.js"]
      },
      {
        name: "Design & Styling",
        icon: "fas fa-palette",
        color: "accent",
        skills: ["Tailwind CSS", "Sass", "Figma", "Adobe XD"]
      }
    ]
  }
};

// Backend Developer Example
export const backendDeveloperConfig: Partial<PortfolioConfig> = {
  personal: {
    name: "John Doe",
    title: "Backend Developer & DevOps Engineer",
    shortDescription: "Building scalable server architectures and cloud infrastructure."
  },
  about: {
    skills: [
      {
        name: "Backend Technologies",
        icon: "fas fa-server",
        color: "primary",
        skills: ["Node.js", "Python", "Go", "PostgreSQL"]
      },
      {
        name: "DevOps & Cloud",
        icon: "fas fa-cloud",
        color: "accent",
        skills: ["Docker", "Kubernetes", "AWS", "Azure"]
      }
    ]
  }
};

// Mobile Developer Example
export const mobileDeveloperConfig: Partial<PortfolioConfig> = {
  personal: {
    name: "Alex Johnson",
    title: "Mobile App Developer",
    shortDescription: "Creating innovative mobile experiences for iOS and Android platforms."
  },
  about: {
    skills: [
      {
        name: "Mobile Development",
        icon: "fas fa-mobile-alt",
        color: "primary",
        skills: ["React Native", "Flutter", "Swift", "Kotlin"]
      },
      {
        name: "Mobile Backend",
        icon: "fas fa-database",
        color: "accent",
        skills: ["Firebase", "GraphQL", "REST APIs", "SQLite"]
      }
    ]
  }
};

# Portfolio Template React

A highly customizable and modern portfolio template built with React, TypeScript, and Tailwind CSS. This template is designed to be easily configurable for different users while maintaining a professional, responsive design.

## ✨ Features

- **Highly Parametrizable**: Easily customize all content, colors, and layout through configuration files
- **Dynamic Title Generation**: Smart title templates with SEO optimization and professional formatting
- **Modern Design**: Beautiful, responsive design with smooth animations and gradients
- **TypeScript**: Full type safety and excellent developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Mobile Responsive**: Looks great on all devices
- **Accessibility**: Built with accessibility best practices
- **Font Awesome Icons**: Extensive icon library included
- **Dynamic Certifications**: Load certifications from JSON files with search and filtering
- **Contact Form**: Working contact form with email integration
- **Smooth Scrolling**: Beautiful navigation between sections

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Assets

1. Replace the profile image: `public/assets/images/profile-photo.webp`
2. Add your project images to: `public/assets/images/`
3. Update certifications data: `public/assets/coursera-accomplishments/`

### 3. Configure Your Portfolio

Edit `src/config/portfolio.config.ts` to customize your portfolio:

```typescript
// Update personal information
personal: {
  name: "Your Name",
  title: "Your Professional Title",
  shortDescription: "Your brief description...",
  profileImage: "/assets/images/your-photo.jpg",
  // ... rest of config
}
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view your portfolio.

### 5. Build for Production

```bash
npm run build
```

## 📋 Configuration Guide

The main configuration file is located at `src/config/portfolio.config.ts`. Here's what you can customize:

### Personal Information
```typescript
personal: {
  name: "Your Full Name",
  title: "Your Job Title", 
  shortDescription: "Brief description of what you do",
  profileImage: "/assets/images/your-photo.jpg",
  availability: {
    status: true, // Show availability badge
    text: "🚀 Available for new opportunities"
  }
}
```

### Contact Information
```typescript
contact: {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567", // Optional
  location: "Your City, Country", // Optional
  social: [
    { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "fab fa-linkedin", color: "#0077b5" },
    { name: "GitHub", url: "https://github.com/yourusername", icon: "fab fa-github", color: "#333" },
    // Add more social links...
  ]
}
```

### Projects
Add your projects to showcase your work:

```typescript
projects: {
  featured: [
    {
      id: "unique-project-id",
      title: "Project Title",
      category: "Project Category", 
      description: "Detailed project description...",
      technologies: [
        { name: "React", color: "blue" },
        { name: "Node.js", color: "green" }
      ],
      type: "enterprise", // "enterprise" | "personal" | "freelance"
      // ... more project details
    }
  ]
}
```

### Dynamic Title Configuration
Configure smart, SEO-optimized titles:

```typescript
seo: {
  title: "Your Name - Portfolio", // Fallback title
  titleTemplate: "{name} - {role} | Portfolio", // Dynamic template
  description: "Your professional description...",
  keywords: ["Your", "Skills", "Technologies"]
}
```

**Title Template Variables:**
- `{name}` - Your full name
- `{role}` - Your professional title  
- `{title}` - Alias for role
- `{shortDescription}` - Brief description

**Example Templates:**
- `"{name} | {role}"` → "John Doe | Software Engineer"
- `"{name} • {role} • Portfolio"` → "John Doe • Software Engineer • Portfolio"
- `"{name} - {role}"` → "John Doe - Software Engineer"

> 📖 **See the complete guide:** [Title Customization Documentation](docs/TITLE-CUSTOMIZATION.md)

### Theme Customization
Customize colors and fonts:

```typescript
theme: {
  colors: {
    primary: {
      500: '#3b82f6', // Your primary color
      600: '#2563eb',
      // ... full color scale
    },
    accent: {
      500: '#10b981', // Your accent color
      600: '#059669',
      // ... full color scale
    }
  },
  fonts: {
    display: 'Poppins', // Google Font name
    body: 'Inter'       // Google Font name
  }
}
```

## 🎨 Customization Examples

See `src/config/examples.config.ts` for complete configuration examples for different professions:
- Frontend Developer
- Backend Developer
- Mobile Developer
- UI/UX Designer

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section  
│   ├── Projects.tsx    # Projects showcase
│   ├── Education.tsx   # Education & certifications
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── config/             # Configuration files
│   ├── portfolio.config.ts    # Main configuration
│   └── examples.config.ts     # Example configurations
├── hooks/              # Custom React hooks
│   └── usePortfolioConfig.ts  # Configuration management
└── App.tsx            # Main application component
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 💡 Tips for Customization

1. **Start with the default configuration** in `portfolio.config.ts`
2. **Replace images** in the `public/assets/images/` directory
3. **Update certifications** by modifying the JSON files in `public/assets/coursera-accomplishments/`
4. **Customize colors** by updating the theme configuration
5. **Add your projects** to the projects.featured array
6. **Test responsiveness** on different devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ using React, TypeScript & Tailwind CSS**

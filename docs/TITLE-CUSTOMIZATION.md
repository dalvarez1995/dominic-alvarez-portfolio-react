# Portfolio Title Customization Guide

## 🎯 Overview

The portfolio template now supports dynamic and configurable title generation, making it easy to customize for different users while maintaining SEO best practices.

## 🔧 Configuration Options

### Basic Title Configuration

```typescript
// In your portfolio.config.ts
seo: {
  title: "Your Name - Portfolio", // Fallback title
  titleTemplate: "{name} - {role} | Portfolio", // Dynamic template
  description: "Your portfolio description...",
  keywords: ["Your", "Keywords", "Here"]
}
```

### Title Template Variables

You can use the following variables in your `titleTemplate`:

- `{name}` - Person's full name from `personal.name`
- `{title}` - Professional title from `personal.title`
- `{role}` - Alias for `{title}`
- `{shortDescription}` - Brief description from `personal.shortDescription`

### Title Format Examples

#### 1. Professional Standard
```typescript
titleTemplate: "{name} - {role} | Portfolio"
// Result: "John Doe - Software Engineer | Portfolio"
```

#### 2. Modern Format
```typescript
titleTemplate: "{name} | {role}"
// Result: "John Doe | Software Engineer"
```

#### 3. Creative Format
```typescript
titleTemplate: "{name} • {role} • Portfolio"
// Result: "John Doe • Software Engineer • Portfolio"
```

#### 4. Simple Format
```typescript
titleTemplate: "{name} - {role}"
// Result: "John Doe - Software Engineer"
```

## 🎨 Template Examples by Profession

### Frontend Developer
```typescript
personal: {
  name: "Alex Johnson",
  title: "Frontend Developer",
  // ...
},
seo: {
  titleTemplate: "{name} | Frontend Developer Portfolio",
  // Result: "Alex Johnson | Frontend Developer Portfolio"
}
```

### Backend Engineer
```typescript
personal: {
  name: "Sarah Chen",
  title: "Backend Engineer",
  // ...
},
seo: {
  titleTemplate: "{name} - {role} & DevOps",
  // Result: "Sarah Chen - Backend Engineer & DevOps"
}
```

### Full Stack Developer
```typescript
personal: {
  name: "Mike Rodriguez",
  title: "Full Stack Developer",
  // ...
},
seo: {
  titleTemplate: "{name} • {role} • Portfolio",
  // Result: "Mike Rodriguez • Full Stack Developer • Portfolio"
}
```

### Mobile Developer
```typescript
personal: {
  name: "Lisa Park",
  title: "Mobile App Developer",
  // ...
},
seo: {
  titleTemplate: "{name} | iOS & Android Developer",
  // Result: "Lisa Park | iOS & Android Developer"
}
```

## 📱 SEO Considerations

The title utility automatically handles SEO optimization:

- **Length Optimization**: Titles are optimized for search engines (max 60 characters)
- **Fallback Handling**: If template results are too long, shorter alternatives are used
- **Dynamic Updates**: Titles update automatically when configuration changes

## 🛠️ Advanced Customization

### Custom Title Logic

If you need more complex title generation, you can extend the `titleUtils.ts`:

```typescript
// Custom title generation function
export function generateCustomTitle(config: PortfolioConfig): string {
  const { personal } = config;
  
  // Your custom logic here
  if (personal.title.includes('Lead')) {
    return `${personal.name} - Technical Leadership Portfolio`;
  }
  
  return generateDynamicTitle(config);
}
```

### Multiple Title Variants

```typescript
// Generate multiple title options
const titleSuggestions = generateTitleSuggestions(config);
console.log('Title options:', titleSuggestions);
```

## 🔄 Migration from Static Titles

If you're upgrading from a static title setup:

1. **Update your configuration**:
   ```typescript
   // Old way
   seo: {
     title: "John Doe - Portfolio"
   }
   
   // New way
   seo: {
     title: "John Doe - Portfolio", // Fallback
     titleTemplate: "{name} - {role} | Portfolio" // Dynamic
   }
   ```

2. **The system automatically**:
   - Uses the template if provided
   - Falls back to static title if template is missing
   - Optimizes for SEO length requirements

## 🎯 Best Practices

1. **Keep titles concise** - Under 60 characters for SEO
2. **Include keywords** - Use your main professional focus
3. **Be descriptive** - Help visitors understand what you do
4. **Test responsiveness** - Check how titles appear in browser tabs
5. **Consider branding** - Maintain consistency across platforms

## 🔍 Testing Your Titles

1. Run the development server: `npm run dev`
2. Check the browser tab title
3. Inspect the page source for the `<title>` tag
4. Test with different configurations
5. Verify SEO optimization in browser dev tools

---

## 📚 Related Files

- `src/config/portfolio.config.ts` - Main configuration
- `src/config/examples.config.ts` - Example configurations
- `src/utils/titleUtils.ts` - Title generation utilities
- `src/App.tsx` - Title implementation
- `index.html` - Base HTML template

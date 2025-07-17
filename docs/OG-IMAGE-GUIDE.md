# Open Graph Image Guide

This guide explains how to properly configure and use the `ogImage` property in your portfolio template for optimal social media sharing.

## What is an Open Graph Image?

An Open Graph (OG) image is the image that appears when your portfolio is shared on social media platforms like LinkedIn, Twitter, Facebook, and other social networks. It's crucial for creating an attractive preview of your portfolio.

## Configuration

### Basic Setup

In your `portfolio.config.ts`, set the `ogImage` property in the SEO section:

```typescript
seo: {
  title: "Your Name - Portfolio",
  titleTemplate: "{name} - {role} | Portfolio",
  description: "Your portfolio description...",
  keywords: ["Developer", "Portfolio", "..."],
  ogImage: "/images/og-image.jpg" // Your Open Graph image
}
```

### Image Path Options

You can specify the `ogImage` in several ways:

#### 1. Relative Path (Recommended)
```typescript
ogImage: "/images/og-image.jpg"
```
- Place the image in the `public/images/` folder
- The system will automatically generate the full URL

#### 2. Absolute URL
```typescript
ogImage: "https://yourdomain.com/images/og-image.jpg"
```
- Use when hosting images on a CDN or external service

#### 3. Profile Photo (Simple Option)
```typescript
ogImage: "/images/profile-photo.jpg"
```
- Reuse your existing profile photo
- Good for personal portfolios

## Image Specifications

### Recommended Dimensions
- **Facebook/LinkedIn**: 1200 × 630 pixels (1.91:1 ratio)
- **Twitter**: 1200 × 600 pixels (2:1 ratio)
- **Universal**: 1200 × 630 pixels (works well across all platforms)

### File Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Under 8MB (preferably under 1MB for faster loading)
- **Quality**: High resolution, clear and readable text

### Design Best Practices
1. **Include your name and title** prominently
2. **Use consistent branding** (colors, fonts from your portfolio)
3. **Avoid small text** that becomes unreadable when scaled down
4. **Test on different devices** and platforms
5. **Keep important content** in the center (some platforms crop edges)

## Example OG Image Designs

### Option 1: Professional Headshot
```
[Your Photo] | Your Name
              Software Developer
              Portfolio
```

### Option 2: Brand-Focused
```
Your Name
Software Developer & Technical Lead
[Your Logo/Icon]
yourportfolio.com
```

### Option 3: Skills Showcase
```
Your Name - Portfolio
• React Developer
• .NET Expert  
• Azure Specialist
[Background with your brand colors]
```

## Implementation Details

The portfolio template automatically handles:

1. **Meta tag generation** for Open Graph and Twitter Cards
2. **URL resolution** (converts relative paths to absolute URLs)
3. **Alt text** generation for accessibility
4. **Fallback handling** when no image is specified

### Generated Meta Tags

When you set `ogImage: "/images/og-image.jpg"`, the system generates:

```html
<!-- Open Graph -->
<meta property="og:image" content="https://yourdomain.com/images/og-image.jpg" />
<meta property="og:image:alt" content="Your Name - Portfolio" />

<!-- Twitter Cards -->
<meta name="twitter:image" content="https://yourdomain.com/images/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

## Testing Your OG Image

### Online Tools
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Check**: https://www.opengraph.xyz/

### Quick Test
1. Deploy your portfolio
2. Share the URL on any social platform
3. Check if the image appears correctly
4. Use the validation tools above for detailed analysis

## Troubleshooting

### Image Not Showing
- ✅ Check file path is correct
- ✅ Ensure image exists in `public/` folder
- ✅ Verify image size is under 8MB
- ✅ Clear social media cache using validation tools

### Image Appears Blurry
- ✅ Use higher resolution (minimum 1200px wide)
- ✅ Check compression settings
- ✅ Ensure image is in RGB color mode

### Wrong Image Showing
- ✅ Clear cache using Facebook Sharing Debugger
- ✅ Check browser cache (try incognito mode)
- ✅ Verify no other OG images are set elsewhere

## Example File Structure

```
public/
├── images/
│   ├── og-image.jpg          # Your custom OG image
│   ├── profile-photo.jpg     # Alternative option
│   └── og-image-dark.jpg     # Optional: dark theme variant
└── favicon/
    └── ...
```

## Tips for Success

1. **Create multiple versions** for A/B testing
2. **Update seasonally** to keep content fresh
3. **Include your website URL** for branding
4. **Use your brand colors** for consistency
5. **Keep it simple** - complex designs don't scale well
6. **Test mobile appearance** as many shares happen on mobile

Remember: Your OG image is often the first impression people get of your portfolio. Make it count! 🚀

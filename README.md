# 🚀 Portfolio Template React

Una plantilla moderna y altamente personalizable para portfolios profesionales construida con **React**, **TypeScript**, **Tailwind CSS** y **Vite**.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Use-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue)
![React](https://img.shields.io/badge/React-19+-61dafb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-38b2ac)

## ✨ Características

- **🎨 Altamente Personalizable**: Configura todo el contenido, colores y diseño desde archivos de configuración
- **📱 Responsive Design**: Se adapta perfectamente a cualquier dispositivo
- **⚡ Rendimiento Optimizado**: Carga rápida con animaciones suaves
- **🔍 SEO Ready**: Meta tags optimizados y estructura HTML semántica
- **🌍 Multiidioma**: Soporte para múltiples idiomas
- **📊 Certificaciones Dinámicas**: Sistema automático de carga de certificaciones
- **💼 Gestión de Proyectos**: Showcase interactivo de proyectos
- **📧 Formulario de Contacto**: Sistema de contacto integrado
- **🎭 Efectos Visuales**: Partículas de fondo y animaciones con Framer Motion
- **♿ Accesibilidad**: Construido siguiendo las mejores prácticas de accesibilidad

## 🚀 Inicio Rápido

### 1. Clona o descarga el proyecto

```bash
git clone https://github.com/tu-usuario/portfolio-template-react.git
cd portfolio-template-react
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Personaliza tu portfolio

#### 📝 Configuración Principal
Edita `src/config/portfolio.config.ts`:

```typescript
export const defaultPortfolioConfig: PortfolioConfig = {
  personal: {
    name: "Tu Nombre Completo",
    title: "Tu Título Profesional",
    shortDescription: "Tu descripción breve...",
    profileImage: "/images/tu-foto.jpg",
    availability: {
      status: true,
      text: "🚀 Disponible para nuevas oportunidades"
    }
  },
  
  contact: {
    email: "tu-email@gmail.com",
    location: "Tu Ubicación",
    social: [
      { name: "LinkedIn", url: "https://linkedin.com/in/tu-perfil", icon: "fab fa-linkedin" },
      { name: "GitHub", url: "https://github.com/tu-usuario", icon: "fab fa-github" },
      // ... más redes sociales
    ]
  },
  
  // ... más configuraciones
};
```

#### 🎯 Configuración SEO
Actualiza `src/config/seo.config.ts`:

```typescript
export const seoConfig = {
  domain: 'https://tu-dominio.com',
  siteName: 'Tu Nombre - Portfolio',
  description: 'Tu descripción para SEO...',
  // ... más configuraciones SEO
};
```

### 4. Agrega tus recursos

#### 📸 Imágenes
- **Foto de perfil**: `public/images/profile-photo.jpg`
- **Imágenes de proyectos**: `public/images/`
- **Favicon**: `public/favicon/` (ya incluye todos los formatos necesarios)

#### 📜 Certificaciones
Agrega tus certificaciones en `src/data/certifications.ts`:

```typescript
export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Nombre de la Certificación",
    provider: "Proveedor",
    date: "2024-01-15",
    skills: ["React", "TypeScript"],
    verificationUrl: "https://...",
    image: "/images/cert-image.jpg"
  },
  // ... más certificaciones
];
```

#### 💼 Proyectos
Configura tus proyectos en `src/config/portfolio.config.ts`:

```typescript
projects: {
  featured: [
    {
      id: "proyecto-1",
      title: "Nombre del Proyecto",
      description: "Descripción del proyecto...",
      technologies: ["React", "TypeScript", "Tailwind"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com/usuario/proyecto",
      image: "/images/proyecto-1.jpg",
      // ... más detalles
    }
  ]
}
```

### 5. Ejecuta en modo desarrollo

```bash
npm run dev
```

### 6. Construye para producción

```bash
npm run build
```

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── About.tsx       # Sección Acerca de
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Education.tsx   # Educación y certificaciones
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección principal/hero
│   ├── Projects.tsx    # Showcase de proyectos
│   └── ...
├── config/             # Archivos de configuración
│   ├── portfolio.config.ts  # Configuración principal ⭐
│   ├── seo.config.ts        # Configuración SEO
│   └── verification.config.ts
├── data/               # Datos estáticos
│   ├── certifications.ts   # Certificaciones
│   └── specializations.ts  # Especializaciones
├── hooks/              # Custom React Hooks
├── types/              # Definiciones TypeScript
├── utils/              # Utilidades y helpers
└── ...
```

## ⚙️ Configuración Detallada

### 🎨 Personalización Visual

#### Colores y Tema
Los colores se configuran en `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      },
      // ... más colores personalizados
    }
  }
}
```

#### Animaciones
Las animaciones se gestionan con Framer Motion y están configuradas en cada componente.

### 📊 Sistema de Certificaciones

El template incluye un sistema automático para mostrar certificaciones:

1. **Proveedores Soportados**: Coursera, Credly, Platzi, y más
2. **Verificación Automática**: Enlaces de verificación integrados
3. **Filtros y Búsqueda**: Sistema de filtrado por habilidades y proveedores
4. **Responsive Cards**: Diseño adaptativo para las tarjetas

### 🌐 SEO y Optimización

#### Meta Tags Dinámicos
```typescript
// Se generan automáticamente basados en la configuración
<title>{name} - {title} | Portfolio</title>
<meta name="description" content={shortDescription} />
<meta property="og:title" content={`${name} - Portfolio`} />
```

#### Sitemap y Robots.txt
Se generan automáticamente al construir:

```bash
npm run build  # Genera sitemap.xml y robots.txt automáticamente
```

### 📱 Responsive Design

El template es completamente responsive con breakpoints optimizados:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo

# Construcción
npm run build           # Build completo con SEO
npm run build:clean     # Build sin generar archivos SEO
npm run generate:seo    # Solo genera sitemap y robots.txt

# Calidad de código
npm run lint           # Ejecuta ESLint
npm run preview        # Preview del build
```

## 🌟 Funcionalidades Avanzadas

### 🎭 Efectos Visuales
- **Partículas de Fondo**: Animación interactiva con tsParticles
- **Scroll Suave**: Navegación fluida entre secciones
- **Animaciones**: Transiciones suaves con Framer Motion
- **Gradientes**: Efectos de gradiente modernos

### 📧 Sistema de Contacto
Formulario de contacto con validación integrada y soporte para diferentes servicios de email.

### 🔍 Búsqueda y Filtros
Sistema de búsqueda para certificaciones y proyectos con filtros por:
- Tecnologías/Habilidades
- Proveedores/Empresas
- Fechas
- Categorías

## 📝 Personalización Paso a Paso

### 1. Información Personal
```typescript
// src/config/portfolio.config.ts
personal: {
  name: "Tu Nombre",
  title: "Tu Título Profesional",
  shortDescription: "Tu elevator pitch...",
  profileImage: "/images/tu-foto.jpg"
}
```

### 2. Redes Sociales
```typescript
contact: {
  social: [
    { name: "LinkedIn", url: "tu-linkedin", icon: "fab fa-linkedin" },
    { name: "GitHub", url: "tu-github", icon: "fab fa-github" },
    // Agrega más redes según necesites
  ]
}
```

### 3. Secciones del Portfolio
```typescript
navigation: [
  { name: "Inicio", href: "#home", icon: "fas fa-home" },
  { name: "Acerca", href: "#about", icon: "fas fa-user" },
  // Personaliza las secciones que quieres mostrar
]
```

## 🚀 Despliegue

### Render (Recomendado)
```bash
# 1. Conecta tu repositorio a Render
# 2. Configura el proyecto como Static Site
# 3. Build Command: npm run build
# 4. Publish Directory: dist

# Variables de entorno (opcional)
NODE_VERSION=18.x
```

**Configuración rápida en Render:**
1. Ve a [render.com](https://render.com) y conecta tu GitHub
2. Selecciona "New Static Site"
![Conectar Repositorio](docs/Render%20-%20Connect%20Repository.png)
3. Conecta tu repositorio
4. Configura:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
![Conectar Repositorio](docs/Render%20-%20Configurate%20Build%20Command%20&%20Publish%20Directory.png)
5. Deploy automático en cada push a main

### Vercel
```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel
```

### Netlify
```bash
# Build local
npm run build

# Sube la carpeta dist/ a Netlify
```

### GitHub Pages
```bash
# Configura GitHub Actions para auto-deploy desde main
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Créditos

- **React** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animaciones
- **Vite** - Build tool
- **Font Awesome** - Iconos
- **tsParticles** - Efectos de partículas

---

⭐ **¡Si este template te ha sido útil, no olvides darle una estrella!**

🔗 **Demo en vivo**: [Ver Portfolio](https://dominic-alvarez.dev)

📧 **Soporte**: Si tienes preguntas, abre un issue o contactame.

## 📚 Documentación Adicional

Para configuraciones avanzadas, consulta la carpeta `docs/`:

- [📝 Personalización de Títulos](docs/PERSONALIZACION-TITULOS.md)
- [🔒 Sistema de Verificación](docs/SISTEMA-VERIFICACION.md)
- [🌍 Guía de Ubicaciones](docs/GUIA-UBICACIONES.md)
- [🏆 Niveles de Idiomas](docs/NIVELES-IDIOMAS.md)
- [🔐 Configuración de Seguridad](docs/CONFIGURACION-SEGURIDAD.md)

# 📝 Guía de Personalización de Títulos

## 🎯 Descripción General

El template de portfolio ahora soporta generación dinámica y configurable de títulos, facilitando la personalización para diferentes usuarios mientras mantiene las mejores prácticas de SEO.

## 🔧 Opciones de Configuración

### Configuración Básica de Títulos

```typescript
// En tu portfolio.config.ts
seo: {
  title: "Tu Nombre - Portfolio", // Título de respaldo
  titleTemplate: "{name} - {role} | Portfolio", // Template dinámico
  description: "Descripción de tu portfolio...",
  keywords: ["Tus", "Palabras", "Clave"]
}
```

### Variables de Template de Título

Puedes usar las siguientes variables en tu `titleTemplate`:

- `{name}` - Nombre completo de la persona desde `personal.name`
- `{title}` - Título profesional desde `personal.title`
- `{role}` - Alias para `{title}`
- `{shortDescription}` - Descripción breve desde `personal.shortDescription`

### Ejemplos de Formato de Títulos

#### 1. Formato Profesional Estándar
```typescript
titleTemplate: "{name} - {role} | Portfolio"
// Resultado: "Juan Pérez - Ingeniero de Software | Portfolio"
```

#### 2. Formato Moderno
```typescript
titleTemplate: "{name} | {role}"
// Resultado: "Juan Pérez | Ingeniero de Software"
```

#### 3. Formato Creativo
```typescript
titleTemplate: "{name} • {role} • Portfolio"
// Resultado: "Juan Pérez • Ingeniero de Software • Portfolio"
```

#### 4. Formato Simple
```typescript
titleTemplate: "{name} - {role}"
// Resultado: "Juan Pérez - Ingeniero de Software"
```

## 🎨 Ejemplos de Templates por Profesión

### Desarrollador Frontend
```typescript
personal: {
  name: "Ana García",
  title: "Desarrolladora Frontend",
  // ...
},
seo: {
  titleTemplate: "{name} | Portfolio Desarrolladora Frontend",
  // Resultado: "Ana García | Portfolio Desarrolladora Frontend"
}
```

### Ingeniero Backend
```typescript
personal: {
  name: "Carlos Rodríguez",
  title: "Ingeniero Backend",
  // ...
},
seo: {
  titleTemplate: "{name} - {role} & DevOps",
  // Resultado: "Carlos Rodríguez - Ingeniero Backend & DevOps"
}
```

### Desarrollador Full Stack
```typescript
personal: {
  name: "María López",
  title: "Desarrolladora Full Stack",
  // ...
},
seo: {
  titleTemplate: "{name} • {role} • Portfolio",
  // Resultado: "María López • Desarrolladora Full Stack • Portfolio"
}
```

### Desarrollador Mobile
```typescript
personal: {
  name: "Luis Martínez",
  title: "Desarrollador Mobile",
  // ...
},
seo: {
  titleTemplate: "{name} - {role} iOS & Android",
  // Resultado: "Luis Martínez - Desarrollador Mobile iOS & Android"
}
```

### UX/UI Designer
```typescript
personal: {
  name: "Sofía Hernández",
  title: "UX/UI Designer",
  // ...
},
seo: {
  titleTemplate: "{name} | {role} & Creative Portfolio",
  // Resultado: "Sofía Hernández | UX/UI Designer & Creative Portfolio"
}
```

### Data Scientist
```typescript
personal: {
  name: "Diego Morales",
  title: "Data Scientist",
  // ...
},
seo: {
  titleTemplate: "{name} - {role} & Machine Learning",
  // Resultado: "Diego Morales - Data Scientist & Machine Learning"
}
```

## 🌐 Consideraciones SEO

### Mejores Prácticas para Títulos
- **Longitud óptima**: 50-60 caracteres
- **Palabras clave**: Incluye términos relevantes de tu profesión
- **Marca personal**: Tu nombre debe aparecer primero
- **Diferenciación**: Haz que tu título sea único

### Ejemplos Optimizados para SEO

#### Para Posicionamiento Local
```typescript
titleTemplate: "{name} - {role} en Madrid | Portfolio"
// Resultado: "Juan Pérez - Desarrollador React en Madrid | Portfolio"
```

#### Para Nicho Específico
```typescript
titleTemplate: "{name} | Especialista {role} E-commerce"
// Resultado: "Ana García | Especialista Frontend E-commerce"
```

#### Para Freelancers
```typescript
titleTemplate: "{name} - {role} Freelance | Portfolio & Servicios"
// Resultado: "Carlos López - Desarrollador Full Stack Freelance | Portfolio & Servicios"
```

## 🔧 Configuración Avanzada

### Títulos Dinámicos por Sección
```typescript
// Configuración para diferentes páginas/secciones
seo: {
  titles: {
    home: "{name} - {role} | Portfolio Profesional",
    about: "Acerca de {name} - {role}",
    projects: "Proyectos de {name} | {role}",
    contact: "Contactar a {name} - {role}"
  }
}
```

### Templates Condicionales
```typescript
// Basado en disponibilidad
titleTemplate: personal.availability.status 
  ? "{name} - {role} | Disponible para Proyectos"
  : "{name} - {role} | Portfolio Profesional"
```

## 📱 Adaptación para Redes Sociales

### Open Graph Titles
```typescript
seo: {
  og: {
    titleTemplate: "{name} | {role} - Portfolio Profesional",
    // Para compartir en redes sociales
  }
}
```

### Twitter Cards
```typescript
seo: {
  twitter: {
    titleTemplate: "{name} - {role} | Sígueme para más contenido",
    // Para Twitter/X cards
  }
}
```

## 🎯 Casos de Uso Especiales

### Portfolio Multiidioma
```typescript
// Español
titleTemplate: "{name} - {role} | Portfolio Profesional"

// Inglés  
titleTemplate: "{name} - {role} | Professional Portfolio"

// Francés
titleTemplate: "{name} - {role} | Portfolio Professionnel"
```

### Especialidades Múltiples
```typescript
personal: {
  name: "Alexandra Ruiz",
  title: "Frontend Developer & UX Designer",
  // ...
},
seo: {
  titleTemplate: "{name} | {role} Portfolio",
  // Resultado: "Alexandra Ruiz | Frontend Developer & UX Designer Portfolio"
}
```

## 🔍 Testing y Validación

### Herramientas Recomendadas
- **Google Search Console**: Verifica cómo se ven tus títulos
- **SEO Meta Inspector**: Valida meta tags
- **Social Media Debuggers**: Facebook, Twitter, LinkedIn

### Checklist de Validación
- [ ] El título se muestra correctamente en la pestaña del navegador
- [ ] No excede los 60 caracteres
- [ ] Incluye palabras clave relevantes
- [ ] Es único y descriptivo
- [ ] Se ve bien en resultados de búsqueda
- [ ] Funciona correctamente en redes sociales

## 💡 Tips y Trucos

### Símbolos Especiales
```typescript
// Usa símbolos para hacer títulos más atractivos
titleTemplate: "{name} ⚡ {role} | Portfolio"
titleTemplate: "{name} 🚀 {role} | Portfolio Profesional"
titleTemplate: "{name} ✨ {role} | Soluciones Creativas"
```

### Palabras Clave de Acción
```typescript
// Incluye verbos de acción
titleTemplate: "{name} - Creando {role} Solutions"
titleTemplate: "{name} - Desarrollando {role} Experiences"
titleTemplate: "{name} - Diseñando {role} Interfaces"
```

### Personalización por Industria
```typescript
// Tech Startup
titleTemplate: "{name} | {role} Building the Future"

// Agencia Digital
titleTemplate: "{name} - {role} | Creative Digital Solutions"

// Consultoría
titleTemplate: "{name} | {role} Consultant & Strategist"
```

---

**💡 Recuerda**: El título es lo primero que ven los usuarios y motores de búsqueda. ¡Hazlo memorable y profesional!

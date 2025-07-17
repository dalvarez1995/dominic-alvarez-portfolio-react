# 🌍 Guía de Configuración de Ubicación con Banderas

Esta guía te ayudará a configurar tu ubicación con una bandera atractiva en tu portfolio.

## 🚀 Funcionalidad

El portfolio ahora incluye un sistema de ubicación configurable que muestra:
- **Bandera del país**: SVG de alta calidad usando `react-country-flag`
- **Nombre del país**: Texto configurable
- **Ciudad (opcional)**: Información adicional de ubicación
- **Animaciones**: Efectos hover y transiciones suaves

## 📝 Configuración

### Estructura de la Configuración

```typescript
location: {
  country: "Ecuador",           // Nombre completo del país
  countryCode: "EC",           // Código ISO 3166-1 alpha-2
  flag: "🇪🇨",                 // Emoji fallback (opcional)
  city: "Guayaquil"            // Ciudad (opcional)
}
```

## 🌎 Ejemplos por País

### 🇪🇨 Ecuador
```typescript
location: {
  country: "Ecuador",
  countryCode: "EC",
  city: "Guayaquil"
}
```

### 🇺🇸 Estados Unidos
```typescript
location: {
  country: "Estados Unidos",
  countryCode: "US",
  city: "Nueva York"
}
```

### 🇪🇸 España
```typescript
location: {
  country: "España",
  countryCode: "ES",
  city: "Madrid"
}
```

### 🇲🇽 México
```typescript
location: {
  country: "México",
  countryCode: "MX",
  city: "Ciudad de México"
}
```

### 🇦🇷 Argentina
```typescript
location: {
  country: "Argentina",
  countryCode: "AR",
  city: "Buenos Aires"
}
```

### 🇨🇴 Colombia
```typescript
location: {
  country: "Colombia",
  countryCode: "CO",
  city: "Bogotá"
}
```

### 🇵🇪 Perú
```typescript
location: {
  country: "Perú",
  countryCode: "PE",
  city: "Lima"
}
```

### 🇨🇱 Chile
```typescript
location: {
  country: "Chile",
  countryCode: "CL",
  city: "Santiago"
}
```

### 🇻🇪 Venezuela
```typescript
location: {
  country: "Venezuela",
  countryCode: "VE",
  city: "Caracas"
}
```

### 🇧🇷 Brasil
```typescript
location: {
  country: "Brasil",
  countryCode: "BR",
  city: "São Paulo"
}
```

### 🇩🇪 Alemania
```typescript
location: {
  country: "Alemania",
  countryCode: "DE",
  city: "Berlín"
}
```

### 🇫🇷 Francia
```typescript
location: {
  country: "Francia",
  countryCode: "FR",
  city: "París"
}
```

### 🇮🇹 Italia
```typescript
location: {
  country: "Italia",
  countryCode: "IT",
  city: "Roma"
}
```

### 🇬🇧 Reino Unido
```typescript
location: {
  country: "Reino Unido",
  countryCode: "GB",
  city: "Londres"
}
```

### 🇨🇦 Canadá
```typescript
location: {
  country: "Canadá",
  countryCode: "CA",
  city: "Toronto"
}
```

### 🇯🇵 Japón
```typescript
location: {
  country: "Japón",
  countryCode: "JP",
  city: "Tokio"
}
```

### 🇦🇺 Australia
```typescript
location: {
  country: "Australia",
  countryCode: "AU",
  city: "Sídney"
}
```

### 🇮🇳 India
```typescript
location: {
  country: "India",
  countryCode: "IN",
  city: "Mumbai"
}
```

### 🇨🇳 China
```typescript
location: {
  country: "China",
  countryCode: "CN",
  city: "Pekín"
}
```

### 🇷🇺 Rusia
```typescript
location: {
  country: "Rusia",
  countryCode: "RU",
  city: "Moscú"
}
```

## 🔍 Códigos de País ISO 3166-1 Alpha-2

Para referencia rápida, aquí tienes los códigos más comunes:

| País | Código | País | Código |
|------|--------|------|--------|
| Ecuador | EC | España | ES |
| México | MX | Argentina | AR |
| Colombia | CO | Perú | PE |
| Chile | CL | Venezuela | VE |
| Brasil | BR | Estados Unidos | US |
| Canadá | CA | Reino Unido | GB |
| Francia | FR | Alemania | DE |
| Italia | IT | Portugal | PT |
| Japón | JP | China | CN |
| India | IN | Australia | AU |

**🔗 Lista completa**: [ISO Country Codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

## 🎨 Personalización Visual

### Tamaño de la Bandera
```css
/* En tu CSS personalizado */
.country-flag {
  width: 24px;  /* Ancho personalizado */
  height: auto; /* Mantiene proporción */
  border-radius: 4px; /* Bordes redondeados */
}
```

### Efectos Hover
```css
.location-container:hover .country-flag {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}
```

### Layout Personalizado
```typescript
// Opción 1: Bandera antes del texto
🇪🇨 Ecuador, Guayaquil

// Opción 2: Bandera después del texto  
Ecuador, Guayaquil 🇪🇨

// Opción 3: Bandera en línea separada
Ecuador
🇪🇨 Guayaquil
```

## 🔧 Configuración Avanzada

### Solo País (Sin Ciudad)
```typescript
location: {
  country: "Ecuador",
  countryCode: "EC"
  // city no especificada
}
```

### Múltiples Ubicaciones
```typescript
location: {
  country: "Disponible Globalmente",
  countryCode: "GLOBAL", // Código especial
  city: "Remoto"
}
```

### Ubicación con Zona Horaria
```typescript
location: {
  country: "Ecuador",
  countryCode: "EC",
  city: "Guayaquil",
  timezone: "GMT-5"
}
```

## 🌐 Casos Especiales

### Trabajo Remoto
```typescript
location: {
  country: "Trabajo Remoto",
  countryCode: "🌐", // Emoji como código especial
  city: "Disponible Globalmente"
}
```

### Múltiples Países
```typescript
location: {
  country: "Ecuador / España",
  countryCode: "EC", // Bandera principal
  city: "Guayaquil / Madrid"
}
```

### Nómada Digital
```typescript
location: {
  country: "Nómada Digital",
  countryCode: "✈️", // Emoji viaje
  city: "Ubicación Variable"
}
```

## 🚀 Funcionalidades Adicionales

### Link a Google Maps
```typescript
location: {
  country: "Ecuador",
  countryCode: "EC",
  city: "Guayaquil",
  mapUrl: "https://maps.google.com/?q=Guayaquil,Ecuador"
}
```

### Información de Contacto Local
```typescript
location: {
  country: "Ecuador",
  countryCode: "EC", 
  city: "Guayaquil",
  localTime: "GMT-5",
  preferredContact: "Horario: 9:00 - 18:00 (GMT-5)"
}
```

## 📱 Responsive Design

### Mobile
```css
@media (max-width: 768px) {
  .location-container {
    flex-direction: column;
    text-align: center;
  }
  
  .country-flag {
    width: 20px;
    margin-bottom: 4px;
  }
}
```

### Desktop
```css
@media (min-width: 769px) {
  .location-container {
    flex-direction: row;
    align-items: center;
  }
  
  .country-flag {
    width: 28px;
    margin-right: 8px;
  }
}
```

## 🔧 Troubleshooting

### Bandera No Se Muestra
1. **Verifica el código de país**: Debe ser válido ISO 3166-1 alpha-2
2. **Instala react-country-flag**: `npm install react-country-flag`
3. **Usa emoji fallback**: Incluye la propiedad `flag` con emoji

### Código de País Incorrecto
```typescript
// ❌ Incorrecto
countryCode: "ESP" // Código de 3 letras

// ✅ Correcto  
countryCode: "ES"  // Código de 2 letras
```

### Banderas Difusas o Pixeladas
```css
.country-flag {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
```

## 💡 Tips y Mejores Prácticas

### 1. **Consistencia Cultural**
- Usa nombres de países en el idioma de tu portfolio
- Considera nombres locales vs internacionales

### 2. **Información Relevante**
- Incluye ciudad solo si es relevante profesionalmente
- Considera zona horaria para trabajos remotos

### 3. **Accesibilidad**
- Incluye texto alternativo para banderas
- Asegura buen contraste de colores

### 4. **Performance**
- Las banderas SVG son más ligeras que imágenes PNG
- Considera lazy loading para múltiples banderas

---

**🌍 Recuerda**: Tu ubicación puede ser una ventaja competitiva. ¡Preséntala de manera profesional y atractiva!

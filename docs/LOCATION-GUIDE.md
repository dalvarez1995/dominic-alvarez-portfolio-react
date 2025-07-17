# 🌍 Guía de Configuración de Ubicación con Banderas

Esta guía te ayudará a configurar tu ubicación con una bandera atractiva en tu portafolio.

## 🚀 Funcionalidad

El portafolio ahora incluye un sistema de ubicación configurable que muestra:
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

### Ejemplos por País

#### 🇪🇨 Ecuador
```typescript
location: {
  country: "Ecuador",
  countryCode: "EC",
  city: "Guayaquil"
}
```

#### 🇺🇸 Estados Unidos
```typescript
location: {
  country: "United States",
  countryCode: "US",
  city: "New York"
}
```

#### 🇪🇸 España
```typescript
location: {
  country: "España",
  countryCode: "ES",
  city: "Madrid"
}
```

#### 🇲🇽 México
```typescript
location: {
  country: "México",
  countryCode: "MX",
  city: "Ciudad de México"
}
```

#### 🇦🇷 Argentina
```typescript
location: {
  country: "Argentina",
  countryCode: "AR",
  city: "Buenos Aires"
}
```

#### 🇨🇴 Colombia
```typescript
location: {
  country: "Colombia",
  countryCode: "CO",
  city: "Bogotá"
}
```

#### 🇵🇪 Perú
```typescript
location: {
  country: "Perú",
  countryCode: "PE",
  city: "Lima"
}
```

#### 🇩🇪 Alemania
```typescript
location: {
  country: "Germany",
  countryCode: "DE",
  city: "Berlin"
}
```

#### 🇫🇷 Francia
```typescript
location: {
  country: "France",
  countryCode: "FR",
  city: "Paris"
}
```

#### 🇬🇧 Reino Unido
```typescript
location: {
  country: "United Kingdom",
  countryCode: "GB",
  city: "London"
}
```

## 🔧 Códigos ISO de Países

Los códigos de país siguen el estándar **ISO 3166-1 alpha-2**. Aquí tienes los más comunes:

### América
- **AR** - Argentina
- **BO** - Bolivia
- **BR** - Brasil
- **CA** - Canadá
- **CL** - Chile
- **CO** - Colombia
- **CR** - Costa Rica
- **CU** - Cuba
- **DO** - República Dominicana
- **EC** - Ecuador
- **GT** - Guatemala
- **HN** - Honduras
- **MX** - México
- **NI** - Nicaragua
- **PA** - Panamá
- **PE** - Perú
- **PY** - Paraguay
- **SV** - El Salvador
- **US** - Estados Unidos
- **UY** - Uruguay
- **VE** - Venezuela

### Europa
- **AT** - Austria
- **BE** - Bélgica
- **CH** - Suiza
- **DE** - Alemania
- **DK** - Dinamarca
- **ES** - España
- **FI** - Finlandia
- **FR** - Francia
- **GB** - Reino Unido
- **IE** - Irlanda
- **IT** - Italia
- **NL** - Países Bajos
- **NO** - Noruega
- **PL** - Polonia
- **PT** - Portugal
- **RU** - Rusia
- **SE** - Suecia

### Asia
- **CN** - China
- **IN** - India
- **JP** - Japón
- **KR** - Corea del Sur
- **SG** - Singapur
- **TH** - Tailandia

### Otros
- **AU** - Australia
- **NZ** - Nueva Zelanda
- **ZA** - Sudáfrica

## 🎨 Personalización

### Ocultar la Ubicación
Para ocultar completamente la sección de ubicación, simplemente omite la propiedad `location` o establécela como `undefined`:

```typescript
// Opción 1: No incluir la propiedad
about: {
  description: [...],
  stats: [...],
  skills: [...],
  profileImage: "...",
  // location no está definida
}

// Opción 2: Establecer como undefined
location: undefined
```

### Solo País (sin ciudad)
```typescript
location: {
  country: "Ecuador",
  countryCode: "EC"
  // city omitida
}
```

## 📱 Características Técnicas

- **SVG de alta calidad**: Las banderas se muestran como SVG escalables
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Accesibilidad**: Incluye atributos `title` y `aria-label`
- **Performance**: Cargas eficientes sin impacto en el rendimiento
- **Animaciones**: Efectos hover suaves con `group-hover:scale-110`

## 🔗 Referencias

- [Lista completa de códigos ISO 3166-1](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)
- [react-country-flag Documentation](https://github.com/danalloway/react-country-flag)

---

¡Tu portafolio ahora tendrá una bandera profesional que represente tu ubicación! 🎉

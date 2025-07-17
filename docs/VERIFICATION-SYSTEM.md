# Sistema de Verificación de Certificaciones - Guía Completa

## 📋 Descripción General

El sistema de verificación implementado es **robusto, flexible y extensible**, permitiendo configuración global y overrides específicos por certificación. Soporta múltiples proveedores de certificaciones más allá de Coursera.

## 🔧 Configuración Global de Proveedores

### Archivo: `src/config/verification.config.ts`

```typescript
export const VERIFICATION_PROVIDERS: ProviderConfig = {
  coursera: {
    baseUrl: 'https://coursera.org',
    urlPattern: 'https://coursera.org/verify/{verifyCode}',
    displayName: 'Coursera',
    icon: 'fas fa-external-link-alt'
  },
  'coursera-specialization': {
    baseUrl: 'https://www.coursera.org',
    urlPattern: 'https://www.coursera.org/account/accomplishments/professional-cert/{verifyCode}',
    displayName: 'Coursera Professional Certificate',
    icon: 'fas fa-trophy'
  },
  udemy: {
    baseUrl: 'https://udemy.com',
    urlPattern: 'https://udemy.com/certificate/{verifyCode}',
    displayName: 'Udemy',
    icon: 'fas fa-external-link-alt'
  },
  // ... más proveedores
};
```

## 🎯 Niveles de Configuración (Prioridad)

### 1. **Override Específico por Certificación** (Máxima Prioridad)
```typescript
{
  courseId: "example-course",
  name: "Custom Course",
  verifyCode: "ABC123",
  verificationUrl: "https://custom-provider.com/verify/ABC123", // ✅ Override directo
  // ...otros campos
}
```

### 2. **Provider Específico por Certificación**
```typescript
{
  courseId: "example-course", 
  name: "Udemy Course",
  verifyCode: "ABC123",
  provider: "udemy", // ✅ Usa configuración de Udemy
  // ...otros campos
}
```

### 3. **Detección Automática por Partner**
```typescript
{
  courseId: "example-course",
  name: "Microsoft Course",
  partners: [{ name: "Microsoft", logo: "..." }], // ✅ Auto-detecta provider "microsoft"
  verifyCode: "ABC123",
  // ...otros campos
}
```

### 4. **Configuración Global por Defecto**
```typescript
// Si no hay override, provider, o detección → usa DEFAULT_PROVIDER ('coursera')
```

## 🚀 Ejemplos de Uso

### Ejemplo 1: Certificación de Coursera (Default)
```typescript
{
  courseId: "course-123",
  name: "React Advanced",
  partners: [{ name: "Meta", logo: "..." }],
  verifyCode: "ABC123XYZ",
  // ✅ Genera: https://coursera.org/verify/ABC123XYZ
}
```

### Ejemplo 2: Certificación de Udemy
```typescript
{
  courseId: "udemy-course",
  name: "JavaScript Mastery",
  partners: [{ name: "Udemy Academy", logo: "..." }],
  verifyCode: "UDEMY789",
  provider: "udemy",
  // ✅ Genera: https://udemy.com/certificate/UDEMY789
}
```

### Ejemplo 3: Override Personalizado
```typescript
{
  courseId: "custom-course",
  name: "Internal Company Training",
  partners: [{ name: "ACME Corp", logo: "..." }],
  verifyCode: "INTERNAL456",
  verificationUrl: "https://company.com/training/verify/{verifyCode}",
  // ✅ Genera: https://company.com/training/verify/INTERNAL456
}
```

### Ejemplo 4: Especialización de Coursera
```typescript
{
  specializationId: "spec-123",
  name: "Full-Stack Developer",
  partnerNames: ["Microsoft"],
  verifyCode: "SPEC789",
  // ✅ Auto-detecta y genera: 
  // https://www.coursera.org/account/accomplishments/professional-cert/SPEC789
}
```

## 🔄 Funciones Principales

### `getVerificationUrl(verifyCode, provider?, customUrl?)`
```typescript
// Uso básico
getVerificationUrl("ABC123") 
// → https://coursera.org/verify/ABC123

// Con provider específico
getVerificationUrl("XYZ789", "udemy")
// → https://udemy.com/certificate/XYZ789

// Con URL personalizada
getVerificationUrl("CUSTOM123", "any", "https://custom.com/verify/{verifyCode}")
// → https://custom.com/verify/CUSTOM123
```

### `getSpecializationVerificationUrl(verifyCode, provider?, customUrl?)`
```typescript
// Para especializaciones usa automáticamente el patrón correcto
getSpecializationVerificationUrl("SPEC456")
// → https://www.coursera.org/account/accomplishments/professional-cert/SPEC456
```

### `detectProvider(partnerNames, verificationUrl?)`
```typescript
detectProvider(["Microsoft"]) // → "microsoft"
detectProvider(["Google"])    // → "google"
detectProvider(["Amazon"])    // → "aws"
detectProvider(["Meta"])      // → "coursera"
```

## 🎨 Componente UI - Renderizado Dinámico

```tsx
// El botón se adapta automáticamente al proveedor
<a 
  href={getVerificationUrlForCert(cert)}
  title={`Verify on ${getProviderInfoForItem(cert.provider).displayName}`}
>
  <i className={getProviderInfoForItem(cert.provider).icon}></i>
  Verify on {getProviderInfoForItem(cert.provider).displayName}
</a>

// Ejemplos de renderizado:
// Coursera: "Verify on Coursera" con ícono fas fa-external-link-alt
// Microsoft: "Verify on Microsoft Learn" con ícono fab fa-microsoft
// Udemy: "Verify on Udemy" con ícono fas fa-external-link-alt
```

## ➕ Agregar Nuevos Proveedores

### 1. Actualizar `VERIFICATION_PROVIDERS`
```typescript
export const VERIFICATION_PROVIDERS: ProviderConfig = {
  // ... proveedores existentes
  skillshare: {
    baseUrl: 'https://skillshare.com',
    urlPattern: 'https://skillshare.com/certificates/{verifyCode}',
    displayName: 'Skillshare',
    icon: 'fas fa-paint-brush'
  }
};
```

### 2. Actualizar Detección Automática (Opcional)
```typescript
const partnerToProvider: Record<string, string> = {
  // ... mapeos existentes
  'skillshare': 'skillshare'
};
```

### 3. Usar en Certificaciones
```typescript
{
  courseId: "new-course",
  name: "Design Fundamentals",
  partners: [{ name: "Skillshare", logo: "..." }],
  verifyCode: "SKILL123",
  provider: "skillshare" // ✅ O se auto-detecta
}
```

## 🔒 Beneficios del Sistema

✅ **Flexibilidad Total**: Soporta cualquier proveedor o URL personalizada  
✅ **Extensibilidad**: Fácil agregar nuevos proveedores  
✅ **Backward Compatibility**: Certificaciones existentes siguen funcionando  
✅ **Auto-detección Inteligente**: Detecta proveedores por partner names  
✅ **Override Granular**: Control fino por certificación individual  
✅ **Type Safety**: TypeScript completo con intellisense  
✅ **UI Adaptativa**: Botones y textos se adaptan al proveedor  
✅ **Mantenibilidad**: Configuración centralizada y documentada  

## 🚨 Casos de Uso Avanzados

### Migrar de Coursera a otro proveedor
```typescript
// Cambio global en verification.config.ts
export const DEFAULT_PROVIDER = 'udemy'; // En lugar de 'coursera'
```

### URLs con patrones complejos
```typescript
azure: {
  baseUrl: 'https://learn.microsoft.com',
  urlPattern: 'https://learn.microsoft.com/api/credentials/share/{verifyCode}?locale=en-us',
  displayName: 'Microsoft Learn',
  icon: 'fab fa-microsoft'
}
```

### Certificaciones internas de empresa
```typescript
{
  courseId: "internal-training",
  name: "Security Awareness Training",
  partners: [{ name: "Internal IT", logo: "/internal-logo.png" }],
  verifyCode: "EMP2024-789",
  verificationUrl: "https://internal.company.com/hr/certificates/{verifyCode}",
  // ✅ Completa flexibilidad para sistemas internos
}
```

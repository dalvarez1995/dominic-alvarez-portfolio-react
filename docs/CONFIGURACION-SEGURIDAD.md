# 🔐 Configuración de Seguridad

## ✅ Solución Implementada: Assets Privados en src/

### Problema Original
Los archivos de accomplishments en carpetas públicas exponían información sensible como códigos de verificación e información personal.

### Solución Elegante
Los datos ahora se almacenan en `src/assets/data/` como imports directos del bundler:

```
src/
  assets/
    data/
      certifications.json    # ✅ Privado, bundleado
      specializations.json   # ✅ Privado, bundleado
```

### Ventajas de Esta Solución

#### 🔒 **Seguridad:**
- **Archivos privados**: No accesibles públicamente via URL
- **Bundleado**: Procesados por Vite en build time
- **No exposición**: Información sensible protegida

#### 📦 **Organización:**
- **Configuración limpia**: `portfolio.config.ts` no se llena de datos
- **Separación clara**: Datos separados de configuración
- **Escalabilidad**: Fácil agregar más certificaciones sin afectar config

#### ⚡ **Performance:**
- **Tree shaking**: Solo datos usados en el bundle
- **Imports directos**: Más rápido que fetch en runtime
- **Tipo seguro**: TypeScript valida estructura

## 🏗️ Estructura de Archivos

```typescript
// src/utils/educationData.ts
import certificationsData from '../assets/data/certifications.json';
import specializationsData from '../assets/data/specializations.json';

export const loadCertifications = async (): Promise<Certification[]> => {
  // Datos importados directamente, no fetch público
  return certificationsData.elements.sort(...);
};
```

## 🚀 Migración Recomendada

### Para usuarios existentes:
1. **Mueve** tus archivos JSON desde `public/` a `src/assets/data/`
2. **Verifica** que la estructura JSON tenga un array `elements`
3. **Los datos se cargan automáticamente** sin cambios en configuración

### Estructura JSON esperada:
```json
{
  "elements": [
    {
      "id": 1,
      "name": "Nombre del Curso",
      "verifyCode": "ABC123",
      // ... otros campos
    }
  ]
}
```

## ⚙️ Configuración

En `portfolio.config.ts` solo necesitas mantener las rutas de referencia:

```typescript
education: {
  certifications: {
    dataSource: "/src/assets/data/certifications.json", // Solo referencia
    searchEnabled: true,
    filterEnabled: true
  },
  specializations: {
    dataSource: "/src/assets/data/specializations.json" // Solo referencia
  }
}
```

*Nota: Las rutas en dataSource son solo referencias. Los datos se cargan via imports directos.*

## 🔒 Mejores Prácticas de Seguridad

### 1. **Información Sensible**
```typescript
// ❌ NO exponer en público
const sensitiveData = {
  verifyCode: "ABC123XYZ",
  personalId: "12345678",
  internalNotes: "Información privada"
};

// ✅ Mantener privado en src/
import { certifications } from '../assets/data/certifications.json';
```

### 2. **Variables de Entorno**
```bash
# .env.local (nunca en .env público)
VITE_API_KEY=tu-api-key-secreta
VITE_PRIVATE_CONFIG=valor-privado
```

```typescript
// Uso seguro en código
const apiKey = import.meta.env.VITE_API_KEY;
```

### 3. **Configuración por Entorno**
```typescript
// src/config/env.config.ts
export const envConfig = {
  development: {
    debugMode: true,
    mockData: true
  },
  production: {
    debugMode: false,
    mockData: false
  }
};

export const currentConfig = envConfig[import.meta.env.MODE];
```

## 🛡️ Protección de Datos Personales

### Datos Recomendados para Público
```typescript
// ✅ Seguro para exponer
const publicProfile = {
  name: "Juan Pérez",
  title: "Desarrollador Frontend",
  skills: ["React", "TypeScript"],
  location: "Madrid, España",
  socialLinks: ["linkedin", "github"]
};
```

### Datos a Mantener Privados
```typescript
// ❌ NO exponer directamente
const privateData = {
  fullAddress: "Calle Ejemplo 123, 4º B",
  phoneNumber: "+34 666 777 888",
  personalEmail: "personal@email.com",
  birthDate: "1990-01-01",
  nationalId: "12345678A"
};
```

## 🔐 Autenticación y Autorización

### Formulario de Contacto Seguro
```typescript
// src/components/Contact.tsx
const handleSubmit = async (formData: ContactForm) => {
  // Validación del lado cliente
  const sanitizedData = sanitizeInput(formData);
  
  // Envío seguro (HTTPS solamente)
  await sendSecureEmail(sanitizedData);
};

const sanitizeInput = (data: ContactForm): ContactForm => {
  return {
    name: data.name.trim().slice(0, 100),
    email: data.email.trim().toLowerCase(),
    message: data.message.trim().slice(0, 1000)
  };
};
```

### Rate Limiting
```typescript
// src/utils/rateLimiter.ts
const contactAttempts = new Map();

export const checkRateLimit = (ip: string): boolean => {
  const attempts = contactAttempts.get(ip) || 0;
  if (attempts > 5) {
    return false; // Bloquear si más de 5 intentos
  }
  contactAttempts.set(ip, attempts + 1);
  return true;
};
```

## 🌐 Seguridad Web

### Headers de Seguridad
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  }
});
```

### CSP (Content Security Policy)
```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline' fonts.googleapis.com;
               font-src 'self' fonts.gstatic.com;
               img-src 'self' data: https:;">
```

## 📊 Monitoreo y Auditoría

### Logging de Seguridad
```typescript
// src/utils/securityLogger.ts
export const logSecurityEvent = (event: SecurityEvent) => {
  if (import.meta.env.PROD) {
    console.warn('Security Event:', {
      type: event.type,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      // No loggear información sensible
    });
  }
};
```

### Detección de Anomalías
```typescript
// src/utils/anomalyDetection.ts
export const detectSuspiciousActivity = (activity: UserActivity): boolean => {
  // Detectar patrones sospechosos
  if (activity.rapidRequests > 10) return true;
  if (activity.unusualNavigation) return true;
  if (activity.suspiciousInputs) return true;
  
  return false;
};
```

## 🔄 Backup y Recuperación

### Backup de Configuración
```typescript
// src/utils/backup.ts
export const createConfigBackup = (): ConfigBackup => {
  return {
    timestamp: Date.now(),
    config: { ...portfolioConfig },
    version: packageJson.version
  };
};

export const restoreFromBackup = (backup: ConfigBackup): void => {
  // Validar backup antes de restaurar
  if (validateBackup(backup)) {
    // Proceso de restauración seguro
  }
};
```

## 📱 Seguridad Mobile

### Responsive Secure Headers
```css
/* Prevenir zoom en inputs sensibles en mobile */
input[type="email"], 
input[type="password"] {
  font-size: 16px; /* Previene zoom automático en iOS */
}
```

### Touch Event Security
```typescript
// Prevenir activación accidental de enlaces sensibles
const handleTouchStart = (e: TouchEvent) => {
  if (e.touches.length > 1) {
    e.preventDefault(); // Bloquear multi-touch en elementos críticos
  }
};
```

## 🔍 Auditoría y Testing

### Security Testing
```typescript
// tests/security.test.ts
describe('Security Features', () => {
  test('no expose sensitive data in bundle', () => {
    const bundleContent = readBundleContent();
    expect(bundleContent).not.toContain('private-key');
    expect(bundleContent).not.toContain('secret');
  });

  test('sanitizes user input', () => {
    const maliciousInput = '<script>alert("xss")</script>';
    const sanitized = sanitizeInput(maliciousInput);
    expect(sanitized).not.toContain('<script>');
  });
});
```

### Performance vs Security
| Método | Seguridad | Escalabilidad | Performance | Mantenimiento |
|--------|-----------|---------------|-------------|---------------|
| **src/assets/ (actual)** | ✅ Alta | ✅ Excelente | ⚡ Óptima | ✅ Fácil |
| public/ archivos | ❌ Baja | ✅ Buena | ⚡ Buena | ⚠️ Riesgo |
| Dentro de config | ✅ Alta | ❌ Pobre | ⚡ Buena | ❌ Difícil |
| Base de datos | ✅ Alta | ✅ Excelente | ⚠️ Depende | ⚠️ Complejo |

## 🚀 Próximos Pasos de Seguridad

### 1. **Migra tus datos** a `src/assets/data/`
### 2. **Configura variables de entorno** para datos sensibles
### 3. **Implementa validación** en formularios
### 4. **Añade headers de seguridad** en tu servidor
### 5. **Configura CSP** apropiado para tu dominio
### 6. **Implementa rate limiting** en endpoints públicos
### 7. **Añade monitoreo** de eventos de seguridad

## ⚠️ Alertas de Seguridad

### No Hacer
- ❌ Nunca pongas API keys en código público
- ❌ No expongas información personal en URLs
- ❌ No confíes en validación solo del lado cliente
- ❌ No uses HTTP para datos sensibles

### Hacer Siempre
- ✅ Usa HTTPS en producción
- ✅ Valida y sanitiza todas las entradas
- ✅ Implementa rate limiting
- ✅ Mantén dependencias actualizadas
- ✅ Usa headers de seguridad apropiados

---

**🔐 Recuerda**: La seguridad es un proceso continuo, no un destino. ¡Mantén tu portfolio actualizado y seguro!

# Nuevos Proveedores: Credly y Platzi

## ✅ Proveedores Agregados

### 🏆 **Credly**
- **URL Pattern**: `https://credly.com/badges/{verifyCode}`
- **Uso**: Badges y certificaciones digitales de múltiples proveedores
- **Auto-detección**: Cuando partner incluye "credly"
- **Icono**: `fas fa-award`

### 🎓 **Platzi** 
- **URL Pattern**: `https://platzi.com/p/{verifyCode}/diploma/detalle/`
- **Uso**: Cursos y especializaciones de tecnología en español
- **Auto-detección**: Cuando partner incluye "platzi"
- **Icono**: `fas fa-graduation-cap`

## 🚀 **Ejemplos de Uso**

### Certificación de Credly
```typescript
{
  courseId: "credly-aws-badge",
  name: "AWS Solutions Architect Associate",
  partners: [{ name: "Credly", logo: "credly-logo.jpg" }],
  verifyCode: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  provider: "credly"
  // ✅ Genera: https://credly.com/badges/a1b2c3d4-e5f6-7890-abcd-ef1234567890
}
```

### Auto-detección de Credly
```typescript
{
  courseId: "company-credly-badge",
  name: "Cybersecurity Fundamentals",
  partners: [{ name: "IBM via Credly", logo: "ibm-credly-logo.jpg" }],
  verifyCode: "badge-id-12345"
  // ✅ Auto-detecta provider "credly" por partner name
  // ✅ Genera: https://credly.com/badges/badge-id-12345
}
```

### Certificación de Platzi
```typescript
{
  courseId: "platzi-react-native",
  name: "Curso de React Native",
  partners: [{ name: "Platzi", logo: "platzi-logo.jpg" }],
  verifyCode: "username123",
  provider: "platzi"
  // ✅ Genera: https://platzi.com/p/username123/diploma/detalle/
}
```

### Auto-detección de Platzi
```typescript
{
  courseId: "platzi-js-course",
  name: "Curso Profesional de JavaScript",
  partners: [{ name: "Escuela de JavaScript - Platzi", logo: "platzi-js-logo.jpg" }],
  verifyCode: "mi-usuario-platzi"
  // ✅ Auto-detecta provider "platzi" por partner name
  // ✅ Genera: https://platzi.com/p/mi-usuario-platzi/diploma/detalle/
}
```

## 🔍 **Validación de URLs**

### Credly
- ✅ **Formato correcto**: `https://credly.com/badges/{verifyCode}`
- ✅ **Ejemplo real**: `https://credly.com/badges/a1b2c3d4-e5f6-7890-abcd-ef1234567890`
- ✅ **Usado por**: AWS, IBM, Microsoft, Cisco, Adobe, etc.

### Platzi
- ✅ **Formato correcto**: `https://platzi.com/p/{verifyCode}/diploma/detalle/`
- ✅ **Ejemplo real**: `https://platzi.com/p/usuario123/diploma/detalle/`
- ✅ **Usado por**: Cursos de tecnología, programación, marketing digital

## 📊 **Proveedores Totales Soportados**

| # | Proveedor | URL Pattern | Auto-detecta |
|---|-----------|-------------|--------------|
| 1 | **Coursera** | `coursera.org/verify/{verifyCode}` | ✅ Meta, IBM, Universities |
| 2 | **Coursera Specializations** | `coursera.org/account/accomplishments/professional-cert/{verifyCode}` | ✅ Automático |
| 3 | **Udemy** | `udemy.com/certificate/{verifyCode}` | ⚙️ Manual |
| 4 | **edX** | `courses.edx.org/certificates/{verifyCode}` | ⚙️ Manual |
| 5 | **Microsoft Learn** | `learn.microsoft.com/api/credentials/share/{verifyCode}` | ✅ Microsoft |
| 6 | **Google Cloud** | `googlecloudskillsboost.google/public_profiles/{verifyCode}` | ✅ Google |
| 7 | **AWS Training** | `aws.amazon.com/verification/{verifyCode}` | ✅ Amazon, AWS |
| 8 | **LinkedIn Learning** | `linkedin.com/learning/certificates/{verifyCode}` | ⚙️ Manual |
| 9 | **Pluralsight** | `pluralsight.com/achievements/{verifyCode}` | ⚙️ Manual |
| 10 | **Codecademy** | `codecademy.com/profiles/{verifyCode}/certificates` | ⚙️ Manual |
| 11 | **🆕 Credly** | `credly.com/badges/{verifyCode}` | ✅ Credly |
| 12 | **🆕 Platzi** | `platzi.com/p/{verifyCode}/diploma/detalle/` | ✅ Platzi |

**Total: 12 proveedores soportados** 🎉

## ✨ **Notas Importantes**

### Credly
- **verifyCode** es el ID del badge (formato UUID típicamente)
- Usado por muchas empresas para emitir badges digitales
- Certificaciones comunes: AWS, Azure, Google Cloud, Cisco, etc.

### Platzi  
- **verifyCode** es el nombre de usuario de Platzi
- Popular en Latinoamérica para cursos de tecnología
- Cursos en español principalmente
- Formato de diploma público accesible

El sistema ahora es aún más robusto y cubre una gama más amplia de proveedores de certificaciones! 🚀

/**
 * EJEMPLO PRÁCTICO: Agregar certificaciones de múltiples proveedores
 * 
 * Este archivo muestra ejemplos reales de cómo usar el sistema de verificación
 * con diferentes proveedores y configuraciones.
 */

import type { Certification, Specialization } from '../types/education.types';

// ========================================
// EJEMPLO 1: Certificaciones Mixtas
// ========================================
export const ejemploCertificacionesMixtas: Certification[] = [
  // Coursera (default) - Sin configuración especial
  {
    courseId: "coursera-react-123",
    name: "Advanced React Development",
    partners: [{ name: "Meta", logo: "meta-logo.jpg" }],
    verifyCode: "ABC123COURSERA",
    completionDate: new Date("2025-06-15").getTime(),
    distinctionLevel: "NORMAL"
    // ✅ URL generada: https://coursera.org/verify/ABC123COURSERA
  },

  // Udemy - Con provider específico
  {
    courseId: "udemy-js-456",
    name: "JavaScript: The Complete Guide",
    partners: [{ name: "Udemy", logo: "udemy-logo.jpg" }],
    verifyCode: "UDEMY456JS",
    completionDate: new Date("2025-07-01").getTime(),
    distinctionLevel: "NORMAL",
    provider: "udemy"
    // ✅ URL generada: https://udemy.com/certificate/UDEMY456JS
  },

  // Microsoft Learn - Auto-detectado por partner
  {
    courseId: "microsoft-azure-789",
    name: "Azure Fundamentals",
    partners: [{ name: "Microsoft", logo: "microsoft-logo.jpg" }],
    verifyCode: "MS789AZURE",
    completionDate: new Date("2025-07-10").getTime(),
    distinctionLevel: "NORMAL"
    // ✅ URL generada: https://learn.microsoft.com/api/credentials/share/MS789AZURE
    // (Auto-detectado porque partner = "Microsoft")
  },

  // URL Personalizada - Override completo
  {
    courseId: "company-training-101",
    name: "Internal Security Training",
    partners: [{ name: "ACME Corp", logo: "acme-logo.jpg" }],
    verifyCode: "ACME2025SEC",
    completionDate: new Date("2025-06-30").getTime(),
    distinctionLevel: "NORMAL",
    verificationUrl: "https://acme-corp.com/training/verify/{verifyCode}?dept=IT"
    // ✅ URL generada: https://acme-corp.com/training/verify/ACME2025SEC?dept=IT
  },

  // LinkedIn Learning - Provider específico
  {
    courseId: "linkedin-leadership-202",
    name: "Strategic Leadership",
    partners: [{ name: "LinkedIn Learning", logo: "linkedin-logo.jpg" }],
    verifyCode: "LI202LEAD",
    completionDate: new Date("2025-07-05").getTime(),
    distinctionLevel: "NORMAL",
    provider: "linkedin"
    // ✅ URL generada: https://linkedin.com/learning/certificates/LI202LEAD
  }
];

// ========================================
// EJEMPLO 2: Especializaciones Mixtas
// ========================================
export const ejemploEspecializacionesMixtas: Specialization[] = [
  // Coursera Professional Certificate (default para especializaciones)
  {
    specializationId: "coursera-fullstack-spec",
    name: "Full-Stack Web Development",
    partnerNames: ["Google"],
    verifyCode: "GOOG2025FULL",
    completionDate: new Date("2025-07-15").getTime()
    // ✅ URL generada: https://www.coursera.org/account/accomplishments/professional-cert/GOOG2025FULL
  },

  // edX MicroMasters - Provider específico
  {
    specializationId: "edx-data-science-micro",
    name: "Data Science MicroMasters",
    partnerNames: ["MIT"],
    verifyCode: "MIT2025DS",
    completionDate: new Date("2025-08-01").getTime(),
    provider: "edx"
    // ✅ URL generada: https://courses.edx.org/certificates/MIT2025DS
  },

  // Programa interno de empresa
  {
    specializationId: "internal-leadership-program",
    name: "Senior Leadership Development Program",
    partnerNames: ["ACME University"],
    verifyCode: "ACME-LEAD-2025",
    completionDate: new Date("2025-07-20").getTime(),
    verificationUrl: "https://acme-university.com/programs/verify/{verifyCode}"
    // ✅ URL generada: https://acme-university.com/programs/verify/ACME-LEAD-2025
  }
];

// ========================================
// EJEMPLO 3: Configuración de Nuevo Proveedor
// ========================================

/*
Para agregar Pluralsight como nuevo proveedor:

1. Actualizar verification.config.ts:

export const VERIFICATION_PROVIDERS: ProviderConfig = {
  // ... proveedores existentes
  pluralsight: {
    baseUrl: 'https://pluralsight.com',
    urlPattern: 'https://pluralsight.com/achievements/{verifyCode}',
    displayName: 'Pluralsight',
    icon: 'fas fa-play-circle'
  }
};

2. Opcional: Agregar detección automática:

const partnerToProvider: Record<string, string> = {
  // ... mapeos existentes
  'pluralsight': 'pluralsight'
};

3. Usar en certificaciones:
*/

export const ejemploPluralsight: Certification = {
  courseId: "pluralsight-react-advanced",
  name: "Advanced React Patterns",
  partners: [{ name: "Pluralsight", logo: "pluralsight-logo.jpg" }],
  verifyCode: "PS2025REACT",
  completionDate: new Date("2025-07-12").getTime(),
  distinctionLevel: "NORMAL",
  provider: "pluralsight"
  // ✅ URL generada: https://pluralsight.com/achievements/PS2025REACT
};

// ========================================
// EJEMPLO 4: Migración Gradual
// ========================================

/*
Si quieres migrar certificaciones existentes de Coursera a otro proveedor:

1. Opción A - Cambiar provider específico:
*/
export const migracionIndividual: Certification = {
  courseId: "existing-course",
  name: "Existing Course",
  partners: [{ name: "Partner", logo: "logo.jpg" }],
  verifyCode: "EXISTING123",
  completionDate: new Date("2025-01-01").getTime(),
  distinctionLevel: "NORMAL",
  provider: "udemy" // ✅ Cambia solo esta certificación
};

/*
2. Opción B - Cambiar default global:
En verification.config.ts:
export const DEFAULT_PROVIDER = 'udemy'; // En lugar de 'coursera'
*/

/*
3. Opción C - Override temporal con URL personalizada:
*/
export const overrideTemporalUdemy: Certification = {
  courseId: "temp-override",
  name: "Temporary Override Course",
  partners: [{ name: "Partner", logo: "logo.jpg" }],
  verifyCode: "TEMP123",
  completionDate: new Date("2025-01-01").getTime(),
  distinctionLevel: "NORMAL",
  verificationUrl: "https://udemy.com/certificate/{verifyCode}"
  // ✅ Override directo sin cambiar configuración global
};

// ========================================
// VERIFICACIÓN DE EJEMPLOS
// ========================================

/*
Para probar estos ejemplos:

import { getVerificationUrl, getSpecializationVerificationUrl } from '../config/verification.config';

// Coursera
console.log(getVerificationUrl("ABC123COURSERA")); 
// → https://coursera.org/verify/ABC123COURSERA

// Udemy
console.log(getVerificationUrl("UDEMY456JS", "udemy")); 
// → https://udemy.com/certificate/UDEMY456JS

// Microsoft
console.log(getVerificationUrl("MS789AZURE", "microsoft")); 
// → https://learn.microsoft.com/api/credentials/share/MS789AZURE

// Custom URL
console.log(getVerificationUrl("ACME2025SEC", "any", "https://acme-corp.com/training/verify/{verifyCode}?dept=IT")); 
// → https://acme-corp.com/training/verify/ACME2025SEC?dept=IT

// Specialization
console.log(getSpecializationVerificationUrl("GOOG2025FULL"));
// → https://www.coursera.org/account/accomplishments/professional-cert/GOOG2025FULL
*/

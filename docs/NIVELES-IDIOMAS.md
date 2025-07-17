# 🏆 Guía de Niveles de Idiomas

Esta guía explica los diferentes niveles de competencia lingüística disponibles en el template de portfolio.

## 📚 Niveles CEFR (Marco Común Europeo de Referencia)

Los niveles de competencia lingüística más estandarizados a nivel internacional:

### Niveles Principiante
- **A1** - Principiante: Puede entender y usar expresiones familiares de uso cotidiano
- **A2** - Elemental: Puede comunicarse en tareas simples que requieren intercambio básico de información

### Niveles Intermedio  
- **B1** - Intermedio: Puede manejar la mayoría de situaciones al viajar, expresar opiniones
- **B2** - Intermedio Alto: Puede interactuar con hablantes nativos con cierta fluidez

### Niveles Avanzado
- **C1** - Avanzado: Puede usar el idioma de manera flexible para propósitos sociales, académicos y profesionales
- **C2** - Competente: Puede entender prácticamente todo lo que escucha o lee

## 🗣️ Descripciones Alternativas de Niveles

Para descripciones más casuales o descriptivas:

- **Nativo** - Competencia de hablante nativo
- **Bilingüe** - Competencia igual en dos idiomas
- **Fluido** - Muy alta competencia, casi nivel nativo
- **Profesional** - Competencia apropiada para negocios/trabajo
- **Conversacional** - Puede mantener conversaciones cómodamente
- **Avanzado** - Alto nivel de competencia
- **Intermedio** - Competencia moderada
- **Elemental** - Competencia básica
- **Básico** - Competencia limitada
- **Principiante** - Recién comenzando a aprender

## 💼 Ejemplos de Uso

### Configuración Típica Hispanohablante
```typescript
languages: [
  {
    name: "Español",
    level: "Nativo",
    proficiency: 100,
    countryCode: "ES",
    flag: "🇪🇸"
  },
  {
    name: "Inglés", 
    level: "B2", // Nivel CEFR
    proficiency: 75,
    countryCode: "US",
    flag: "🇺🇸"
  },
  {
    name: "Francés",
    level: "Conversacional", // Nivel descriptivo
    proficiency: 60,
    countryCode: "FR",
    flag: "🇫🇷"
  }
]
```

### Desarrollador Internacional
```typescript
languages: [
  {
    name: "Español",
    level: "Nativo",
    proficiency: 100,
    countryCode: "ES",
    flag: "🇪🇸"
  },
  {
    name: "Inglés",
    level: "Profesional", // Para entornos de trabajo
    proficiency: 85,
    countryCode: "US",
    flag: "🇺🇸"
  },
  {
    name: "Portugués",
    level: "B1",
    proficiency: 65,
    countryCode: "BR",
    flag: "🇧🇷"
  }
]
```

### Políglota Profesional
```typescript
languages: [
  {
    name: "Mandarín",
    level: "Nativo",
    proficiency: 100,
    countryCode: "CN",
    flag: "🇨🇳"
  },
  {
    name: "Inglés",
    level: "Fluido",
    proficiency: 95,
    countryCode: "US",
    flag: "🇺🇸"
  },
  {
    name: "Español",
    level: "Avanzado",
    proficiency: 80,
    countryCode: "ES",
    flag: "🇪🇸"
  },
  {
    name: "Japonés",
    level: "Intermedio",
    proficiency: 70,
    countryCode: "JP",
    flag: "🇯🇵"
  }
]
```

## 🎨 Codificación por Colores

El componente asigna automáticamente colores basados en el nivel de competencia:

### 🟣 Púrpura (90-100%)
- **Nativo**, **Bilingüe**
- Indica dominio completo del idioma

### 🟢 Verde (75-89%)
- **C2**, **C1**, **Fluido**, **Avanzado**
- Alta competencia, uso profesional y académico

### 🔵 Azul (50-74%)
- **B2**, **B1**, **Profesional**, **Intermedio**, **Conversacional**
- Competencia funcional para comunicación efectiva

### 🟡 Amarillo (25-49%)
- **A2**, **A1**, **Elemental**, **Básico**, **Principiante**
- Competencia limitada, uso básico

### 🔴 Rojo (0-24%)
- Niveles muy básicos o en aprendizaje inicial

## 📊 Escalas de Proficiencia

### Escala Porcentual
```typescript
// Ejemplos de mapeo nivel → porcentaje
const proficiencyMap = {
  "Nativo": 100,
  "C2": 95,
  "C1": 85,
  "B2": 75,
  "B1": 65,
  "A2": 45,
  "A1": 25
};
```

### Escala 1-10
```typescript
languages: [
  {
    name: "Inglés",
    level: "B2",
    proficiency: 8, // De 10
    scale: "1-10"
  }
]
```

### Escala 1-5
```typescript
languages: [
  {
    name: "Francés",
    level: "Intermedio",
    proficiency: 3, // De 5
    scale: "1-5"
  }
]
```

## 🌍 Variaciones por País/Región

### Inglés Específico
```typescript
{
  name: "Inglés (Americano)",
  level: "B2",
  proficiency: 75,
  countryCode: "US",
  variant: "American English"
}
```

### Español Regional
```typescript
{
  name: "Español (Argentino)",
  level: "Nativo",
  proficiency: 100,
  countryCode: "AR",
  variant: "Rioplatense"
}
```

### Chino Dialectos
```typescript
{
  name: "Mandarín",
  level: "Intermedio",
  proficiency: 70,
  countryCode: "CN",
  variant: "Mandarín Estándar"
}
```

## 💼 Contexto Profesional

### Idiomas para Desarrolladores
```typescript
languages: [
  {
    name: "Español",
    level: "Nativo",
    proficiency: 100,
    context: "Documentación técnica, comunicación con equipos"
  },
  {
    name: "Inglés",
    level: "Profesional",
    proficiency: 85,
    context: "Código, documentación, comunicación internacional"
  }
]
```

### Sectores Específicos
```typescript
// Para trabajos con clientes internacionales
{
  name: "Inglés",
  level: "B2",
  proficiency: 78,
  businessContext: "Reuniones con clientes, presentaciones, emails"
}
```

## 🎯 Certificaciones de Idiomas

### Inglés
```typescript
{
  name: "Inglés",
  level: "B2",
  proficiency: 75,
  certifications: [
    {
      name: "TOEFL",
      score: "85/120",
      date: "2023-06"
    },
    {
      name: "Cambridge First",
      grade: "B",
      date: "2023-03"
    }
  ]
}
```

### Español para Extranjeros
```typescript
{
  name: "Español",
  level: "C1",
  proficiency: 85,
  certifications: [
    {
      name: "DELE C1",
      institution: "Instituto Cervantes",
      date: "2023-05"
    }
  ]
}
```

### Francés
```typescript
{
  name: "Francés",
  level: "B1",
  proficiency: 65,
  certifications: [
    {
      name: "DELF B1",
      score: "75/100",
      date: "2022-11"
    }
  ]
}
```

## 📈 Progreso y Objetivos

### En Aprendizaje
```typescript
{
  name: "Alemán",
  level: "A2 → B1",
  proficiency: 40,
  status: "En progreso",
  targetDate: "2024-12",
  weeklyHours: 3
}
```

### Mantenimiento
```typescript
{
  name: "Italiano",
  level: "B2",
  proficiency: 75,
  status: "Mantenimiento",
  lastPractice: "2024-01",
  notes: "Práctica ocasional con podcasts"
}
```

## 🎭 Presentación Creativa

### Con Emojis
```typescript
{
  name: "🇯🇵 Japonés",
  level: "🌱 Principiante",
  proficiency: 20
}
```

### Con Iconos
```typescript
{
  name: "Inglés",
  level: "Profesional",
  proficiency: 85,
  icon: "💼", // Indica uso profesional
  specialty: "Tecnología y Negocios"
}
```

## 🔧 Configuración Avanzada

### Múltiples Competencias
```typescript
{
  name: "Inglés",
  levels: {
    speaking: { level: "B2", proficiency: 75 },
    writing: { level: "C1", proficiency: 85 },
    reading: { level: "C1", proficiency: 88 },
    listening: { level: "B2", proficiency: 78 }
  }
}
```

### Por Contexto
```typescript
{
  name: "Francés",
  contexts: {
    business: { level: "B1", proficiency: 65 },
    casual: { level: "B2", proficiency: 75 },
    technical: { level: "A2", proficiency: 45 }
  }
}
```

## 📱 Responsive Design

### Mobile
```css
.language-item {
  flex-direction: column;
  text-align: center;
}

.language-flag {
  margin-bottom: 8px;
}
```

### Desktop
```css
.language-item {
  flex-direction: row;
  align-items: center;
}

.language-progress {
  width: 200px;
}
```

## 💡 Tips y Mejores Prácticas

### 1. **Honestidad en Niveles**
- Sé realista con tu autoevaluación
- Considera evaluaciones formales si es posible
- Actualiza niveles según tu progreso

### 2. **Relevancia Profesional**
- Prioriza idiomas relevantes para tu campo
- Incluye contexto de uso profesional
- Destaca certificaciones válidas

### 3. **Presentación Visual**
- Usa banderas para identificación rápida
- Implementa barras de progreso claras
- Mantén consistencia en el diseño

### 4. **Información Adicional**
- Incluye contexto de aprendizaje si es relevante
- Menciona experiencia vivencial (viajes, trabajo)
- Especifica variantes regionales si aplica

---

**🗣️ Recuerda**: Los idiomas son una ventaja competitiva significativa. ¡Preséntelos de manera precisa y atractiva!

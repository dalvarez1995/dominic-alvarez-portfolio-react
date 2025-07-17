# Language Levels Guide

This guide explains the different language proficiency levels available in the portfolio template.

## CEFR (Common European Framework of Reference) Levels

The most standardized language proficiency levels used internationally:

### Beginner Levels
- **A1** - Beginner: Can understand and use familiar everyday expressions
- **A2** - Elementary: Can communicate in simple tasks requiring basic info exchange

### Intermediate Levels  
- **B1** - Intermediate: Can handle most situations when traveling, express opinions
- **B2** - Upper-intermediate: Can interact with native speakers with some fluency

### Advanced Levels
- **C1** - Advanced: Can use language flexibly for social, academic, and professional purposes
- **C2** - Proficient: Can understand virtually everything heard or read

## Alternative Level Descriptions

For more casual or descriptive levels:

- **Native** - Native speaker proficiency
- **Bilingual** - Equal proficiency in two languages
- **Fluent** - Very high proficiency, near-native level
- **Professional** - Business/work-appropriate proficiency
- **Conversational** - Can hold conversations comfortably
- **Advanced** - High proficiency level
- **Intermediate** - Moderate proficiency
- **Elementary** - Basic proficiency
- **Basic** - Limited proficiency
- **Beginner** - Just starting to learn

## Usage Example

```typescript
languages: [
  {
    name: "Spanish",
    level: "Native",
    proficiency: 100,
    countryCode: "ES",
    flag: "🇪🇸"
  },
  {
    name: "English", 
    level: "B2", // CEFR level
    proficiency: 75,
    countryCode: "US",
    flag: "🇺🇸"
  },
  {
    name: "French",
    level: "Conversational", // Descriptive level
    proficiency: 60,
    countryCode: "FR",
    flag: "🇫🇷"
  }
]
```

## Color Coding

The component automatically assigns colors based on proficiency level:
- **Purple**: Native, Bilingual
- **Green**: C2, C1, Fluent, Advanced  
- **Blue**: B2, B1, Professional, Intermediate, Conversational
- **Yellow**: A2, A1, Elementary, Basic, Beginner

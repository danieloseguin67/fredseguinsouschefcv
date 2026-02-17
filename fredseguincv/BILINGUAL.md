# Bilingual Support (English/French)

The Fred Seguin website now supports both English and French languages with seamless switching.

## Features

- **Dynamic Language Switching**: Switch between English and French without page reload
- **Language Persistence**: Selected language is saved in browser localStorage
- **Browser Detection**: Automatically detects browser language on first visit
- **Bilingual Content**: All UI text and data content available in both languages
- **Language Switcher**: EN/FR buttons in navigation menu

## Implementation

### Translation Files

Translation strings are stored in JSON files:
- `/public/assets/i18n/en.json` - English translations
- `/public/assets/i18n/fr.json` - French translations

### Data Files

All content JSON files support bilingual data:
- `/public/assets/data/carousel.json`
- `/public/assets/data/experience.json`
- `/public/assets/data/skills.json`
- `/public/assets/data/services.json`
- `/public/assets/data/about.json`

Data structure example:
```json
{
  "title": {
    "en": "English Title",
    "fr": "Titre Français"
  }
}
```

### Components

All components use:
- **TranslateModule** for UI translations
- **TranslateService** for language management
- **getText()** method to extract bilingual data

## Adding New Translations

### UI Text

1. Add new keys to both `en.json` and `fr.json`:
```json
{
  "newSection": {
    "title": "English Title",
    "description": "English description"
  }
}
```

2. Use in templates with the translate pipe:
```html
<h1>{{ 'newSection.title' | translate }}</h1>
<p>{{ 'newSection.description' | translate }}</p>
```

### Data Content

1. Update JSON data files with bilingual structure:
```json
{
  "field": {
    "en": "English value",
    "fr": "Valeur française"
  }
}
```

2. Use `getText()` method in component:
```typescript
getText(field: any): string {
  if (typeof field === 'string') return field;
  return field[this.currentLang] || field.en;
}
```

3. Display in template:
```html
<p>{{ getText(item.field) }}</p>
```

## Language Detection

On first visit, the website:
1. Checks localStorage for saved preference
2. Falls back to browser language if en/fr
3. Defaults to English if neither is available

## Switching Languages

Users can switch languages via the EN/FR buttons in the navigation menu. The selection is:
- Applied immediately across all pages
- Saved to localStorage
- Persists across browser sessions

## Technical Details

### Dependencies

- `@ngx-translate/core@17.0.0` - Core translation library
- `@ngx-translate/http-loader@17.0.0` - HTTP loader for translation files

### Configuration

Translation module configured in `src/app/app.config.ts`:
- Default language: English
- Custom loader: `CustomTranslateLoader`
- Translation files: `/assets/i18n/`

### Components with Translation Support

All components include:
- TranslateModule import
- TranslateService injection
- Language change subscription
- getText() helper method

## Testing

To test translations:

1. Start development server:
```bash
npm start
```

2. Open http://localhost:4200

3. Click EN/FR buttons in navigation

4. Verify:
   - All text changes language
   - Navigation items translate
   - Data content switches
   - Language preference persists on refresh

## Maintenance

When updating content:

1. **Update translation files** (`en.json`, `fr.json`) for UI text
2. **Update data files** for content that appears in both languages
3. **Test both languages** to ensure translations are correct
4. **Keep consistency** between English and French versions

## Future Enhancements

Potential improvements:
- Add more languages (Spanish, German, etc.)
- Language-specific URLs (/en/, /fr/)
- Translation management interface
- Professional translation review
- Right-to-left language support
- Language-specific formatting (dates, numbers)

---

For questions or issues with translations, consult the ngx-translate documentation:
https://github.com/ngx-translate/core

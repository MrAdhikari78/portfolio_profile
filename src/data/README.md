# Data Directory

Centralized configuration and content management for the portfolio.

## Files Overview

### `site.json`
Global site configuration, metadata, and contact information.

**Usage:**
```typescript
import siteData from '../data/site.json';
const title = siteData.site.title;
const email = siteData.site.email;
```

### `navigation.json`
Navigation links and social media profiles.

**Usage:**
```typescript
import navData from '../data/navigation.json';
navData.navLinks.map(link => link.href); // Navigation routes
navData.socialLinks.map(social => social.url); // Social profiles
```

### `projects.json`
Portfolio projects with descriptions, technologies, and links.

**Usage:**
```typescript
import projectsData from '../data/projects.json';
projectsData.projects.map(project => project.title);
```

### `about.json`
Personal information and hero section content.

**Usage:**
```typescript
import aboutData from '../data/about.json';
const bio = aboutData.about.bio;
```

### `skills.json`
Technical skills organized by category.

**Usage:**
```typescript
import skillsData from '../data/skills.json';
skillsData.skills.forEach(category => {
  console.log(category.category); // "Frontend", "Backend", etc.
  console.log(category.technologies); // Array of tech names
});
```

### `config.json`
Application configuration, theme settings, and feature flags.

**Usage:**
```typescript
import config from '../data/config.json';
if (config.features.darkMode) { /* enable dark mode */ }
```

## Adding New Data Files

1. Create a new JSON file in this directory
2. Follow the naming convention: `feature-name.json`
3. Add documentation above
4. Import using: `import data from '../data/file-name.json'`

## Backend Integration

When transitioning to a backend API:
1. Move data files to backend database
2. Replace JSON imports with API calls in `/src/api/`
3. Update components to use fetched data
4. Keep JSON files as fallback/defaults

## Tips

- Keep JSON files well-formatted and validated
- Use meaningful keys and consistent naming
- Add comments in JSON for complex sections
- Consider creating TypeScript interfaces matching JSON structure
- Test imports after modifying JSON structure

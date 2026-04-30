# Developer's Guide: Frontend & Backend Structure

## Overview

This portfolio is structured to be:
- **Frontend-first**: Built with Astro, React, and Tailwind CSS
- **Backend-ready**: Prepared for API integration whenever needed
- **Scalable**: Easy to add features, pages, and functionality
- **Maintainable**: Clear separation of concerns and well-organized code

## Architecture Layers

### 1. **Presentation Layer** (`/src/components`)
Where your UI lives. Components are organized by type:
- `common/` - Layout wrappers, navigation, footers
- `sections/` - Full-width page sections
- `ui/` - Reusable buttons, cards, inputs

**When to use:**
- Visual logic goes here
- Interaction handling (click, hover, etc.)
- Minimal business logic

### 2. **Data Layer** (`/src/data`)
All your content and configuration:
- `.json` files for easy editing without coding
- No components should hardcode text, titles, or links
- Use this as your "CMS" until you build a backend

**When to add data:**
- New project, skill, or link
- Update hero section text
- Add new navigation
- Change social profiles

### 3. **Utility Layer** (`/src/utils`)
Helper functions and reusable logic:
- `cn.ts` - Class name utilities
- `date.ts` - Date formatting
- `validation.ts` - Form validation
- `index.ts` - General utilities

**When to use:**
- Common calculations or transformations
- Formatting/validation logic
- Shared functions across components

### 4. **API Layer** (`/src/api`) - *Future Use*
When you need a backend:
- `client.ts` - HTTP client configuration
- `services/` - API endpoint handlers
- `hooks/` - React hooks for API calls

**When to migrate to API:**
1. You have dynamic data (users, comments, etc.)
2. You need real-time updates
3. You want a database
4. You need authentication

---

## Common Workflows

### ✅ Adding a New Project

**Step 1:** Edit `/src/data/projects.json`
```json
{
  "id": "my-app",
  "title": "My Awesome App",
  "description": "A brief description",
  "tags": ["React", "Node.js"],
  "link": "https://myapp.com",
  "github": "https://github.com/user/myapp",
  "image": "https://example.com/image.jpg"
}
```

**Step 2:** No component changes needed! The projects page automatically displays it.

### ✅ Updating Site Configuration

Edit `/src/data/site.json`:
- `title` - Browser tab title & meta
- `description` - SEO description
- `email` - Contact email
- `url` - Your domain

### ✅ Adding a New Blog Post

Option 1: Markdown file (current setup)
- Add to `/src/content/blog/`
- File name becomes the URL slug
- Metadata in frontmatter

Option 2: From API (when backend exists)
- POST to `/api/blog`
- Database stores it
- API serves it

### ✅ Changing Social Links

Edit `/src/data/navigation.json`:
```json
"socialLinks": [
  {
    "name": "GitHub",
    "url": "https://github.com/yourusername",
    "icon": "github"
  }
]
```

### ✅ Adding a New Skill Category

Edit `/src/data/skills.json`:
```json
{
  "category": "Mobile",
  "technologies": ["React Native", "Flutter"]
}
```

---

## Component Best Practices

### ❌ Don't Do This
```astro
---
// ❌ Hardcoded data in component
const projects = [
  { title: "My Project", ... },
  { title: "Another Project", ... }
];
---
```

### ✅ Do This Instead
```astro
---
import projectsData from '../data/projects.json';
const projects = projectsData.projects;
---
```

### ❌ Don't Do This
```astro
<h1>Contact me at john@example.com</h1>
```

### ✅ Do This Instead
```astro
---
import siteData from '../data/site.json';
---
<h1>Contact me at {siteData.site.email}</h1>
```

---

## Frontend Stack

### Astro (Framework)
- File-based routing (pages/index.astro → /)
- Static site generation (fast!)
- Partial hydration with React

### React (UI Components)
- Interactive components (animations, state management)
- Client-side interactivity
- Hooks for component logic

### Tailwind CSS (Styling)
- Utility-first CSS
- Configuration in `tailwind.config.mjs`
- Dark mode support built-in

### TypeScript (Type Safety)
- Optional but recommended
- Catch errors before runtime
- Better IDE autocomplete

---

## Backend Migration Path

When you're ready for a backend:

### Phase 1: Prepare Frontend ✅ (Already Done)
- Extract data to JSON files ✓
- Create `/src/api/` layer ✓
- Plan API endpoints ✓

### Phase 2: Build Backend
Choose your stack:
- **Node.js + Express** - Quick and simple
- **Python + FastAPI** - Data science friendly
- **Firebase** - Serverless & easy
- **.NET** - Enterprise grade

### Phase 3: Connect Frontend to Backend
Update `/src/api/services/` to call real endpoints:
```typescript
// Before: Reading JSON
import projectsData from '../data/projects.json';

// After: Calling API
export async function getProjects() {
  return apiClient.get('/api/projects');
}
```

### Phase 4: Migrate Data
- Export JSON data to database
- Update environment variables
- Test thoroughly

---

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check  # if configured

# Linting
npm run lint  # if configured

# Format code
npm run format  # if configured
```

---

## File Structure Cheat Sheet

| Need | Location | Example |
|------|----------|---------|
| Add project | `/src/data/projects.json` | Edit JSON |
| Add page | `/src/pages/newpage.astro` | Create .astro file |
| Add component | `/src/components/*/` | Create .astro or .jsx |
| Add utility | `/src/utils/` | Create function |
| Update config | `/src/data/site.json` | Edit JSON |
| API client | `/src/api/client.ts` | Already set up |
| API service | `/src/api/services/` | Create new service |
| Blog post | `/src/content/blog/` | Create .md file |
| Styles | `/src/styles/` or inline | Tailwind classes |
| Static assets | `/public/` | Favicons, robots.txt |

---

## Troubleshooting

### Project data not showing
1. Check `/src/data/projects.json` is valid JSON
2. Verify you imported the data correctly
3. Rebuild with `npm run build`

### Component not rendering
1. Check file name and extension
2. Verify import paths are correct
3. Check TypeScript errors

### Styles not applying
1. Verify Tailwind class names are correct
2. Check dark mode is configured
3. Verify `tailwind.config.mjs` includes correct paths

### API calls failing
1. Check `.env` variables are set
2. Verify API endpoint is correct
3. Check CORS settings on backend

---

## Next Steps

1. **Customize your data** - Edit JSON files with your info
2. **Update components** - Modify designs as needed
3. **Add more pages** - Create new routes in `/src/pages/`
4. **Deploy** - Follow `DEPLOYMENT.md` for GitHub Pages
5. **Build backend** - When you need dynamic features

---

## Resources

- [Astro Docs](https://docs.astro.build)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

Good luck! 🚀

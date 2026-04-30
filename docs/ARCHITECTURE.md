# Project Architecture Overview

## Tech Stack

- **Framework:** Astro (Static Site Generator)
- **Styling:** Tailwind CSS
- **Components:** Astro + React (where needed)
- **Deployment:** GitHub Pages
- **Content:** Markdown (for blog posts)

## Why This Architecture?

### Frontend-Only (No Backend)

This is a **static portfolio website** - it doesn't need a backend server because:

1. **Content is static:** Blog posts are Markdown files
2. **No database:** All data is in files or constants
3. **No user authentication:** Public portfolio
4. **Fast & cheap:** Can be hosted anywhere (GitHub Pages is free)
5. **Build-time generation:** Pages are generated once, served as static files

### Component Architecture

**Hierarchical component organization:**

```
Layout (MainLayout.astro)
  ↓
Common Components (Navbar, Footer)
  ↓
Page Components (index.astro, projects.astro)
  ↓
Section Components (PageHeader, Section, AnimatedGradient)
  ↓
UI Components (ProjectCard, ThemeToggle)
```

## File Organization Strategy

### Why This Folder Structure?

**`src/components/`** → Organized by component type
- **`common/`** → Components that appear on every page
- **`sections/`** → Reusable content templates
- **`ui/`** → Standalone UI elements

**Benefits:**
- 📍 Easy to find components by category
- 🔄 Prevents duplication
- 📦 Scalable as project grows
- 🎯 Clear responsibility for each folder

### What Goes Where?

| Folder | Examples | Rule |
|--------|----------|------|
| `common/` | Navbar, Footer, Sidebar | Appears on ≥2 pages |
| `sections/` | PageHeader, Hero, Testimonials | Reusable section pattern |
| `ui/` | Button, Card, Toggle | Standalone element |
| `layouts/` | MainLayout | Page wrapper |
| `pages/` | index.astro, projects.astro | Routes (auto-routed) |
| `content/` | Blog posts (Markdown) | Dynamic content |
| `constants/` | navigation.ts | App-wide constants |
| `utils/` | formatDate, cn | Helper functions |
| `assets/` | Icons, images, fonts | Static media |
| `styles/` | global.css | CSS & utilities |

## Data Flow

```
constants/navigation.ts (centralized data)
    ↓
components/common/{Navbar,Footer}.astro (consume data)
    ↓
pages/*.astro (display content)
    ↓
build output → static HTML files
    ↓
deployed to GitHub Pages
```

## Key Principles

### 1. Single Responsibility
Each component has ONE job:
- Navbar = Navigation only
- Footer = Contact & links only
- ProjectCard = Display project only

### 2. Reusability
Write components once, use everywhere:
- PageHeader → Used on Blog, Projects pages
- Section → Used on multiple pages
- Utilities → Used across components

### 3. Consistency
Use design system utilities:
- Button styles: `.btn-primary`, `.btn-secondary`
- Text styles: `.text-gradient`
- Cards: `.card-hover`

### 4. No Duplication
- Navigation data → `constants/navigation.ts`
- Date formatting → `utils/date.ts`
- Global styles → `src/styles/global.css`

## Deployment Architecture

```
Development
  ↓
npm run build (generates dist/)
  ↓
Static files (HTML, CSS, JS)
  ↓
GitHub Pages
  ↓
Hosted at yourdomain.com
```

**Why this works:**
- Static files are super fast 🚀
- No server needed
- Free hosting on GitHub
- Great for portfolios & blogs

## Adding New Features

### New Page

1. Create `src/pages/newpage.astro`
2. Import `MainLayout`
3. Use reusable components
4. Astro auto-routes it to `/newpage`

### New Component

1. Decide category (ui, sections, common)
2. Create in appropriate folder
3. Export from component file
4. Import where needed
5. Use CSS utility classes

### New Utility

1. Create in `src/utils/`
2. Export from `utils/index.ts`
3. Import in components: `import { myUtil } from '../utils'`

## Performance Optimization

- **Static generation:** Zero JavaScript for content
- **Component-level hydration:** Only interactive parts use JS
- **CSS-in-class:** Tailwind purges unused styles
- **Asset optimization:** Automatic image optimization in Astro

## Security Considerations

- **No server vulnerabilities:** Static files only
- **No database to hack:** Data in files
- **Environment variables:** For sensitive data (API keys)
- **Content safety:** Markdown is sanitized


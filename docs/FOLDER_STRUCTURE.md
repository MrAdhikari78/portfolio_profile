# Directory Structure Guide

## Portfolio Project Structure (Optimized)

```
portfolioprofile/
├── src/
│   ├── assets/                     # Static assets
│   │   ├── icons/                  # SVG icons
│   │   ├── images/                 # Project & blog images
│   │   └── fonts/                  # Custom fonts (if any)
│   │
│   ├── components/                 # Reusable Astro & React components
│   │   ├── common/                 # Layout & shared components
│   │   │   ├── Navbar.astro        # Navigation header
│   │   │   └── Footer.astro        # Page footer
│   │   │
│   │   ├── sections/               # Page section components
│   │   │   ├── PageHeader.astro    # Reusable page header
│   │   │   ├── Section.astro       # Generic section wrapper
│   │   │   └── AnimatedGradient.astro  # Animated backgrounds
│   │   │
│   │   └── ui/                     # UI elements
│   │       ├── ThemeToggle.astro   # Dark mode toggle
│   │       └── ProjectCard.jsx     # Project card component
│   │
│   ├── constants/                  # Constants & configuration
│   │   └── navigation.ts           # Navigation & social links
│   │
│   ├── content/                    # Markdown & content files
│   │   └── blog/                   # Blog posts
│   │       ├── config.ts           # Content config
│   │       ├── getting-started-with-astro.md
│   │       └── react-best-practices-2024.md
│   │
│   ├── layouts/                    # Page layouts
│   │   └── MainLayout.astro        # Main layout wrapper
│   │
│   ├── pages/                      # Route pages (auto-routed)
│   │   ├── index.astro             # Home page
│   │   ├── projects.astro          # Projects page
│   │   └── blog/
│   │       ├── index.astro         # Blog listing
│   │       └── [slug].astro        # Dynamic blog post
│   │
│   ├── styles/                     # Stylesheets
│   │   └── global.css              # Global styles & utilities
│   │
│   ├── utils/                      # Utility functions
│   │   ├── date.ts                 # Date utilities
│   │   ├── cn.ts                   # Class name utilities
│   │   └── index.ts                # Export all utilities
│   │
│   └── env.d.ts                    # TypeScript environment types
│
├── docs/                           # Documentation
│   ├── ARCHITECTURE.md             # Project architecture
│   ├── COMPONENT_GUIDE.md          # Component documentation
│   └── DEPLOYMENT.md               # Deployment instructions
│
├── public/                         # Static public files
│   └── favicon.ico
│
├── .github/
│   └── workflows/                  # GitHub Actions CI/CD
│
├── astro.config.mjs                # Astro configuration
├── tailwind.config.mjs             # Tailwind CSS config
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies & scripts
├── .gitignore                      # Git ignore rules
├── DESIGN_SYSTEM.md                # Design system guidelines
└── README.md                       # Project documentation
```

## Folder Organization Principles

### Components (`src/components/`)
- **`common/`** → Shared layout components (Navbar, Footer, etc.)
- **`sections/`** → Reusable page sections (Headers, dividers, etc.)
- **`ui/`** → Standalone UI elements (Cards, buttons, toggles, etc.)

### Assets (`src/assets/`)
- **`icons/`** → SVG icon files
- **`images/`** → Project screenshots, blog images
- **`fonts/`** → Custom font files

### Content Organization
- **`constants/`** → App-wide constants (navigation, metadata, etc.)
- **`utils/`** → Reusable helper functions
- **`content/`** → Markdown files and content config
- **`layouts/`** → Page layout wrappers
- **`pages/`** → Route files (auto-routed by Astro)

## Frontend-Only Structure (No Backend)

This is a **frontend-only portfolio**. There's no backend section because:
- ✅ Static site generation with Astro
- ✅ Markdown-based blog posts
- ✅ No API routes needed
- ✅ Deployed as static files to GitHub Pages

## Key Files

| File | Purpose |
|------|---------|
| `src/layouts/MainLayout.astro` | Base layout for all pages |
| `src/styles/global.css` | Global styles & Tailwind utilities |
| `src/constants/navigation.ts` | Centralized navigation data |
| `src/utils/index.ts` | Utility functions export |
| `DESIGN_SYSTEM.md` | Design system guidelines |

## Import Paths Guide

```typescript
// ✅ Components
import Navbar from '../components/common/Navbar.astro';
import PageHeader from '../components/sections/PageHeader.astro';
import { ProjectCard } from '../components/ui/ProjectCard.jsx';

// ✅ Constants & Utils
import { NAV_LINKS } from '../constants/navigation';
import { formatDate, cn } from '../utils';

// ✅ Content
import { getCollection } from 'astro:content';
```

## Best Practices

1. **Component Location**
   - UI components → `components/ui/`
   - Layout components → `components/common/`
   - Section templates → `components/sections/`

2. **File Naming**
   - Components: PascalCase (`Navbar.astro`)
   - Utils: camelCase (`formatDate.ts`)
   - Constants: camelCase (`navigation.ts`)

3. **Exports**
   - Use barrel exports (`index.ts`) in utils folder
   - Group related utilities together

4. **Styling**
   - Use utility classes from `global.css`
   - Avoid inline styles
   - Use CSS classes for reusable styles

## Removed Files

The following redundant files have been moved or removed:
- ❌ `src/components/Navbar.astro` → `src/components/common/Navbar.astro`
- ❌ `src/components/Footer.astro` → `src/components/common/Footer.astro`
- ❌ `src/components/ThemeToggle.astro` → `src/components/ui/ThemeToggle.astro`
- ❌ `src/components/ProjectCard.jsx` → `src/components/ui/ProjectCard.jsx`
- ❌ `src/components/PageHeader.astro` → `src/components/sections/PageHeader.astro`
- ❌ `src/components/Section.astro` → `src/components/sections/Section.astro`
- ❌ `src/components/AnimatedGradient.astro` → `src/components/sections/AnimatedGradient.astro`
- ❌ Root level `styles.css` → Moved to `src/styles/global.css`
- ❌ Root level `index.html` → Not needed (Astro generates it)

## Next Steps

To complete the migration:

1. Delete old component files from `src/components/`
2. Delete `styles.css` from root
3. Delete `index.html` from root
4. Run `npm run build` to test
5. Commit changes


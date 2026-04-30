# Portfolio Project Structure

## Directory Organization

```
portfolioprofile/
├── public/                 # Static assets (images, fonts, favicons)
├── src/
│   ├── api/               # Backend API integration layer (future-ready)
│   │   ├── README.md
│   │   ├── client.ts      # API client configuration
│   │   ├── hooks/         # React hooks for API calls
│   │   └── services/      # API service modules
│   │
│   ├── components/        # Reusable React/Astro components
│   │   ├── common/        # Shared layout components
│   │   ├── sections/      # Page section components
│   │   ├── ui/            # UI components (buttons, cards, etc.)
│   │   ├── AnimatedGradient.astro
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   ├── ThemeToggle.astro
│   │   └── PageHeader.astro
│   │
│   ├── constants/         # Deprecated - Use /data instead
│   │   └── navigation.ts  # Re-exports from /data for backward compat
│   │
│   ├── content/           # Markdown content & collections
│   │   ├── config.ts
│   │   └── blog/
│   │       ├── getting-started-with-astro.md
│   │       └── react-best-practices-2024.md
│   │
│   ├── data/              # ⭐ Centralized configuration & content
│   │   ├── README.md
│   │   ├── site.json      # Site metadata & contact info
│   │   ├── navigation.json# Nav links & social profiles
│   │   ├── projects.json  # Portfolio projects
│   │   ├── about.json     # Personal bio & hero content
│   │   ├── skills.json    # Technical skills by category
│   │   └── config.json    # App configuration & feature flags
│   │
│   ├── layouts/           # Layout templates
│   │   └── MainLayout.astro
│   │
│   ├── pages/             # Route pages (Astro file-based routing)
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   │
│   ├── styles/            # Global & component styles
│   │   └── global.css
│   │
│   ├── utils/             # Utility functions
│   │   ├── cn.ts          # Class name utilities
│   │   ├── date.ts        # Date utilities
│   │   ├── validation.ts  # Input validation
│   │   └── index.ts
│   │
│   ├── assets/            # Media assets
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   │
│   └── env.d.ts           # TypeScript environment definitions
│
├── docs/                  # Documentation
│   ├── ARCHITECTURE.md
│   ├── COMPONENT_GUIDE.md
│   └── FOLDER_STRUCTURE.md
│
├── Configuration Files
│   ├── astro.config.mjs
│   ├── tailwind.config.mjs
│   ├── tsconfig.json
│   └── package.json
│
├── Ignore/Build
│   ├── .gitignore
│   ├── .astro/            # Astro cache (DO NOT COMMIT)
│   ├── dist/              # Build output (DO NOT COMMIT)
│   └── node_modules/      # Dependencies (DO NOT COMMIT)
│
└── Metadata
    ├── README.md
    ├── CNAME              # GitHub Pages domain
    ├── DEPLOYMENT.md
    ├── DESIGN_SYSTEM.md
    └── .git/              # Version control

```

## Key Features of This Structure

### 1. **Centralized Data (`/src/data/`)**
- All content and configuration in JSON files
- Easy to edit without touching code
- Ready for CMS integration or API migration

### 2. **API-Ready (`/src/api/`)**
- Placeholder for backend integration
- Structured for adding REST/GraphQL clients
- Isolated from component logic

### 3. **Clear Separation of Concerns**
- **Components**: UI logic only
- **Pages**: Route definitions
- **Utils**: Reusable functions
- **Data**: Content & configuration
- **Styles**: Centralized styling

### 4. **Scalable Component Organization**
- `common/`: Layout & wrapper components
- `sections/`: Full-width page sections
- `ui/`: Atomic components (buttons, cards, etc.)

### 5. **Backend-Ready**
- `/api/` directory prepared for backend integration
- Data layer abstraction makes switching to APIs easy
- Clear interface between frontend and backend

## Common Tasks

### Adding a New Project
Edit `src/data/projects.json`:
```json
{
  "id": "project-id",
  "title": "Project Title",
  "description": "...",
  "tags": ["Tech1", "Tech2"],
  "link": "...",
  "github": "...",
  "image": "..."
}
```

### Adding Navigation Links
Edit `src/data/navigation.json` to add new links in `navLinks`.

### Adding Skills
Edit `src/data/skills.json` to add new skill categories.

### Adding Social Profiles
Edit `src/data/navigation.json` in `socialLinks` section.

### Creating a New Component
1. Determine component type:
   - **Layout components** → `/components/common/`
   - **Section components** → `/components/sections/`
   - **UI components** → `/components/ui/`
2. Create `.astro` or `.jsx` file
3. Import data from `/data/` as needed

## Build & Deployment

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Deploy to GitHub Pages
# (Configured in DEPLOYMENT.md)
```

## Notes

- **Avoid hardcoding data** in components - use JSON files
- **Use TypeScript** for type safety where possible
- **Follow component naming** conventions (PascalCase)
- **Keep styles modular** with Tailwind CSS utilities
- **Test locally** before pushing to main branch

## For Backend Integration

When adding a backend:
1. Create API endpoints in `/src/api/services/`
2. Replace JSON imports with API calls
3. Keep JSON files as fallback defaults
4. Update environment variables in `.env`
5. Add API documentation in `docs/`


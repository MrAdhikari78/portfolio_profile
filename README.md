# 📱 Portfolio Website - Astro + React

A modern, fully-optimized portfolio website built with **Astro**, **React**, **Tailwind CSS**, and **Framer Motion**. Deployed to **GitHub Pages** with dark/light theme support, smooth animations, and a production-ready architecture.

**⭐ Completely restructured for scalability, maintainability, and backend integration readiness!**

---

## 🎯 Quick Navigation

| Need | Link |
|------|------|
| **Start in 5 minutes** | [QUICK_START.md](./QUICK_START.md) |
| **Understand everything** | [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) |
| **Documentation index** | [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) |
| **What was optimized** | [OPTIMIZATION_SUMMARY.md](./OPTIMIZATION_SUMMARY.md) |
| **Detailed folder guide** | [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) |

---

## 🚀 Key Features

- ⚡ **Lightning Fast** - Static site generation (SSG) with Astro
- 🎨 **Modern Design** - Beautiful, responsive UI with Tailwind CSS
- 🌙 **Dark Mode** - Seamless theme switching with system preference support
- ✨ **Smooth Animations** - Framer Motion for interactive components
- 📱 **Mobile-First** - Fully responsive design
- 🔍 **SEO Optimized** - Meta tags, structured data, Open Graph
- 📝 **Blog System** - Markdown-based blog with content collections
- 🚀 **GitHub Pages Ready** - Automated deployment with GitHub Actions
- 📋 **Content Management** - JSON-based data for easy editing
- 🔌 **Backend Ready** - API layer prepared for future expansion
- 🛡️ **Type-Safe** - Full TypeScript support
- ♿ **Accessible** - WCAG compliant components

---

## 📦 Tech Stack

### Frontend
- **Astro 4.0+** - Static site generator with partial hydration
- **React 18** - Interactive UI components
- **TypeScript** - Type safety and better DX
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library

### Build & DevOps
- **Vite** - Lightning-fast build tool
- **Node.js 16+** - JavaScript runtime
- **npm** - Package manager

### Deployment
- **GitHub Pages** - Free static hosting
- **GitHub Actions** - Automated CI/CD

---

## 📁 Complete Project Structure

### Root Level Files

```
portfolioprofile/
├── 📄 README.md                    # This file (complete reference)
├── 📄 QUICK_START.md               # 5-minute setup guide
├── 📄 DOCUMENTATION_INDEX.md       # Documentation navigation
├── 📄 DEVELOPER_GUIDE.md           # Complete development handbook
├── 📄 OPTIMIZATION_SUMMARY.md      # What changed & improvements
├── 📄 PROJECT_STRUCTURE.md         # Visual folder layout
├── 📄 FOLDER_STRUCTURE.md          # Detailed structure reference
├── 📄 DEPLOYMENT.md                # How to deploy
├── 📄 DESIGN_SYSTEM.md             # Design guidelines
├── 📄 .env.example                 # Environment variables template
│
├── 📝 Configuration Files
│   ├── package.json                # Dependencies & scripts
│   ├── tsconfig.json               # TypeScript configuration
│   ├── astro.config.mjs            # Astro framework config
│   ├── tailwind.config.mjs         # Tailwind CSS config
│   ├── .gitignore                  # Git ignore rules
│   └── CNAME                       # GitHub Pages domain
│
├── 📁 public/                      # Static assets (served as-is)
│   ├── favicon.ico
│   ├── robots.txt
│   └── [other static files]
│
├── 📁 src/                         # Source code
│   ├── 📁 api/                     # 🆕 Backend API layer
│   ├── 📁 data/                    # 🆕 Centralized JSON config
│   ├── 📁 components/              # Reusable UI components
│   ├── 📁 pages/                   # Route pages (file-based routing)
│   ├── 📁 layouts/                 # Page templates
│   ├── 📁 styles/                  # Global styles
│   ├── 📁 utils/                   # Utility functions
│   ├── 📁 content/                 # Markdown blog posts
│   ├── 📁 constants/               # Deprecated (backward compat)
│   ├── 📁 assets/                  # Media files (fonts, icons, images)
│   └── env.d.ts                    # TypeScript environment definitions
│
├── 📁 docs/                        # Additional documentation
├── 📁 dist/                        # Build output (ignored by git)
├── 📁 node_modules/                # Dependencies (ignored by git)
├── 📁 .astro/                      # Astro cache (ignored by git)
└── 📁 .git/                        # Version control
```

---

## 🗂️ Detailed File-by-File Operations

### 🔵 `/src/api/` - Backend API Layer

**Purpose:** Abstraction layer for backend integration (future-ready)

| File | Purpose | Operations |
|------|---------|-----------|
| `client.ts` | HTTP client wrapper | Creates fetch requests with error handling, configures base URL, handles timeouts |
| `services/projects.ts` | Projects API service | `getProjects()`, `getProjectById()`, `createProject()`, `updateProject()`, `deleteProject()` |
| `services/blog.ts` | Blog API service | `getBlogPosts()`, `getBlogPostBySlug()`, `searchBlogPosts()`, `getBlogPostsByTag()` |
| `services/index.ts` | Centralized exports | Re-exports all services |
| `README.md` | API documentation | Explains API layer structure and usage |

**When to use:**
- Calling backend endpoints
- Implementing real-time features
- Handling user authentication
- Syncing data with server

**Example:**
```typescript
import { getProjects } from '../api/services/projects';
const projects = await getProjects(); // Calls API or falls back to JSON
```

---

### 🔵 `/src/data/` - Centralized Configuration & Content

**Purpose:** All editable content in JSON format (no code changes needed)

| File | Purpose | Contains | Operations |
|------|---------|----------|-----------|
| `site.json` | Global site metadata | Title, description, email, domain, author | Update site-wide info without touching code |
| `navigation.json` | Navigation & social links | Nav links, social media profiles | Edit navigation and social links |
| `projects.json` | Portfolio projects | 6 sample projects with descriptions, tags, links | Add/edit/delete projects |
| `about.json` | Personal information | Hero section title, subtitle, bio | Update hero section content |
| `skills.json` | Technical skills | Skills organized by category (Frontend, Backend, etc.) | Add/remove skill categories and technologies |
| `config.json` | App configuration | App name, version, theme, feature flags | Enable/disable features globally |
| `README.md` | Data guide | Documentation for data files | Reference for working with JSON data |

**When to edit:**
- Add new project
- Update social media links
- Change email or domain
- Add/remove skills
- Update hero section
- Enable/disable features

**Example:**
```json
// src/data/projects.json
{
  "id": "my-project",
  "title": "My Project",
  "description": "...",
  "tags": ["React", "Node.js"],
  "link": "https://myproject.com",
  "github": "https://github.com/user/project",
  "image": "https://example.com/image.jpg"
}
```

---

### 🔵 `/src/components/` - Reusable UI Components

**Purpose:** Modular, reusable visual components

#### Common Components (`/common/`)

| Component | Purpose | Operations | Props |
|-----------|---------|-----------|-------|
| `Navbar.astro` | Site navigation | Renders nav links, handles routing | `navigation` array |
| `Footer.astro` | Site footer | Shows social links, copyright | `socialLinks`, `email` |

#### Section Components (`/sections/`)

| Component | Purpose | Operations | Props |
|-----------|---------|-----------|-------|
| `PageHeader.astro` | Page title & description | Renders header with title, subtitle | `title`, `description` |
| `Section.astro` | Content wrapper | Provides consistent spacing & styling | `title`, `children` |
| `AnimatedGradient.astro` | Gradient background | Animated gradient overlay | (none) |

#### UI Components (`/ui/`)

| Component | Purpose | Operations | Props |
|-----------|---------|-----------|-------|
| `ProjectCard.jsx` | Project card with animations | Shows project info with hover effects, animations | `title`, `description`, `image`, `tags`, `link`, `github` |
| `ThemeToggle.astro` | Dark/light mode toggle | Switches theme, saves preference | (none) |

**When to use:**
- Need to reuse UI across pages
- Want consistent styling
- Adding animations or interactions
- Building complex layouts

**Example:**
```astro
<ProjectCard
  title="My Project"
  description="Project description"
  tags={["React", "Node.js"]}
  link="https://example.com"
  github="https://github.com/user/project"
  image="https://example.com/image.jpg"
/>
```

---

### 🔵 `/src/pages/` - Route Pages (File-Based Routing)

**Purpose:** Each file automatically becomes a route

| File | Route | Purpose | Data Source | Operations |
|------|-------|---------|------------|-----------|
| `index.astro` | `/` | Home page | `data/about.json` | Hero section, intro, CTA |
| `projects.astro` | `/projects` | Projects showcase | `data/projects.json` | Lists all projects with cards |
| `blog/index.astro` | `/blog` | Blog listing | Markdown in `content/blog/` | Shows all blog posts |
| `blog/[slug].astro` | `/blog/:slug` | Individual blog post | Markdown files | Renders single blog post |

**How routing works:**
- `pages/about.astro` → `/about/`
- `pages/contact/index.astro` → `/contact/`
- `pages/blog/[slug].astro` → `/blog/post-title/`

**Example:**
```astro
---
import projectsData from '../data/projects.json';
const projects = projectsData.projects;
---
```

---

### 🔵 `/src/layouts/` - Page Templates

| File | Purpose | Operations | Includes |
|------|---------|-----------|----------|
| `MainLayout.astro` | Main page template | Wraps pages with header/footer, meta tags | Navbar, Footer, slot for content |

**Usage:**
```astro
---
import MainLayout from '../layouts/MainLayout.astro';
---
<MainLayout title="Page Title" description="Meta description">
  <!-- Page content here -->
</MainLayout>
```

---

### 🔵 `/src/styles/` - Styling

| File | Purpose | Operations |
|------|---------|-----------|
| `global.css` | Global styles | Base styles, CSS variables, theme setup |

**How theming works:**
- Tailwind CSS handles dark mode
- CSS variables for consistent colors
- `dark:` prefix for dark mode styles

---

### 🔵 `/src/utils/` - Utility Functions

| File | Functions | Purpose | Usage |
|------|-----------|---------|-------|
| `cn.ts` | `cn()` | Class name merger (for Tailwind) | Conditional Tailwind classes |
| `date.ts` | `formatDate()`, `isToday()` | Date formatting utilities | Format blog post dates |
| `validation.ts` | `isValidEmail()`, `validateFormData()`, etc. | Form & data validation | Validate user input |
| `index.ts` | General exports | Centralized utility exports | Import multiple utilities |

**Example:**
```typescript
import { cn } from '../utils/cn';
const classes = cn('px-4 py-2', isActive && 'bg-blue-500');
```

---

### 🔵 `/src/content/` - Markdown Content

| Directory | Purpose | Operations |
|-----------|---------|-----------|
| `blog/` | Blog posts | Add `.md` files for new posts |
| `config.ts` | Content collections config | Defines content schema and validation |

**Blog post format:**
```markdown
---
title: "Blog Post Title"
description: "Short description"
author: "Author Name"
date: 2024-04-30
tags: ["tag1", "tag2"]
---

# Blog post content in Markdown
```

---

### 🔵 `/src/assets/` - Media Files

```
assets/
├── fonts/          # Custom fonts (.woff, .woff2)
├── icons/          # SVG icons
└── images/         # Image files
```

---

### 🔵 `/src/constants/` - Constants (Deprecated)

| File | Status | Purpose | Alternative |
|------|--------|---------|-------------|
| `navigation.ts` | ⚠️ Deprecated | Re-exports from data files | Use `src/data/navigation.json` directly |

**Why deprecated:**
- Data belongs in JSON, not TypeScript
- Easier to edit JSON than TypeScript
- Backward compatibility maintained

---

### 📝 Configuration Files

| File | Purpose | Operations |
|------|---------|-----------|
| `package.json` | Dependencies & scripts | Defines npm packages, build commands |
| `tsconfig.json` | TypeScript settings | Configures type checking behavior |
| `astro.config.mjs` | Astro framework setup | Route configuration, build settings |
| `tailwind.config.mjs` | Tailwind CSS config | Colors, spacing, dark mode, plugins |
| `.gitignore` | Git rules | Ignores `node_modules/`, `dist/`, `.env` |
| `CNAME` | GitHub Pages domain | Sets custom domain |

---

## 🔄 Data Flow & Architecture

### How Data Flows Through the App

```
┌─────────────────────────────────────┐
│        src/data/*.json              │
│  (Centralized configuration)        │
└────────┬────────────────────────────┘
         │
         ├──→ Components read JSON data
         ├──→ Pages import JSON
         └──→ API services as fallback
         │
┌────────▼────────────────────────────┐
│    Components & Pages               │
│  - Render with data                 │
│  - Apply Tailwind styling           │
│  - Add Framer Motion animations     │
└────────┬────────────────────────────┘
         │
         ├──→ Browser DOM rendering
         ├──→ JavaScript hydration (React)
         └──→ Event listeners activated
         │
┌────────▼────────────────────────────┐
│      Static HTML Output             │
│   (dist/ folder - ready to deploy)  │
└─────────────────────────────────────┘
```

### Component Hierarchy

```
MainLayout
├── Navbar
│   └── Navigation Links (from data/navigation.json)
├── Page Content
│   ├── Hero Section
│   ├── Projects Grid
│   │   └── ProjectCard (React) × 6
│   ├── Skills Section
│   └── Blog Posts
└── Footer
    └── Social Links (from data/navigation.json)
```

---

## 🚀 Development Workflow

### 1. **Local Development**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

**What happens:**
- Hot Module Replacement (HMR) enables live reloading
- Changes to `.astro`, `.jsx`, `.css` files reload instantly
- JSON changes require manual refresh

### 2. **Edit Content (No Code Changes)**

**Add a new project:**
1. Edit `src/data/projects.json`
2. Add new project object
3. Save file
4. Refresh browser → Project appears!

**Update social links:**
1. Edit `src/data/navigation.json`
2. Update `socialLinks` array
3. Save file
4. Refresh browser → Links updated!

### 3. **Customize Components**

**Change ProjectCard styling:**
1. Edit `src/components/ui/ProjectCard.jsx`
2. Modify Tailwind classes
3. Save file
4. Browser reloads automatically

**Add new component:**
1. Create file in `src/components/`
2. Import and use in pages
3. Save file
4. Browser reloads automatically

### 4. **Build for Production**

```bash
# Build static site
npm run build

# Output goes to dist/ folder
# Ready for deployment!
```

**What happens:**
- All pages are pre-rendered to static HTML
- JavaScript is optimized and minified
- CSS is purged to remove unused styles
- Files are optimized for fast loading

### 5. **Deploy to GitHub Pages**

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions automatically:
1. Builds your site
2. Generates static files
3. Deploys to `gh-pages` branch
4. Site goes live!

---

## 📊 Common Operations Guide

### ✏️ Add a New Project

**Step 1:** Edit `src/data/projects.json`
```json
{
  "id": "my-app",
  "title": "My Awesome App",
  "description": "Brief description of what it does",
  "tags": ["React", "Node.js", "Tailwind CSS"],
  "link": "https://myapp.com",
  "github": "https://github.com/yourusername/myapp",
  "image": "https://example.com/project-image.jpg"
}
```

**Step 2:** Save and refresh browser
- Projects page automatically includes your new project! ✨

---

### 👥 Update Social Media Links

**Step 1:** Edit `src/data/navigation.json`
```json
"socialLinks": [
  {
    "name": "GitHub",
    "url": "https://github.com/YOUR_USERNAME",
    "icon": "github"
  }
]
```

**Step 2:** Save and refresh
- Navbar and footer automatically update! ✨

---

### 📝 Create a New Blog Post

**Step 1:** Create `src/content/blog/my-post.md`
```markdown
---
title: "My Blog Post Title"
description: "Short description for preview"
author: "Your Name"
date: 2024-04-30
tags: ["astro", "portfolio"]
---

# Post content here

Write your blog post in **Markdown**!
```

**Step 2:** Save and refresh
- Post appears on `/blog` page automatically! ✨

---

### 🎨 Change Site Title & Description

**Step 1:** Edit `src/data/site.json`
```json
{
  "site": {
    "title": "Your Name | Your Headline",
    "description": "Your short bio or tagline",
    "email": "your.email@example.com"
  }
}
```

**Step 2:** Save and refresh
- Browser tab title and meta tags update! ✨

---

### 🔧 Add Your Skills

**Step 1:** Edit `src/data/skills.json`
```json
{
  "category": "Your Category",
  "technologies": ["Tech1", "Tech2", "Tech3"]
}
```

**Step 2:** Save and refresh
- Skills section updates automatically! ✨

---

## 🏗️ When to Use Each Technology

| Need | Technology | File | Example |
|------|-----------|------|---------|
| Static HTML | Astro | `src/pages/*.astro` | `index.astro`, `projects.astro` |
| Interactive UI | React | `src/components/*.jsx` | `ProjectCard.jsx` |
| Styling | Tailwind CSS | Any `.astro` or `.jsx` | `className="px-4 py-2 hover:bg-blue-500"` |
| Animations | Framer Motion | `ProjectCard.jsx` | `<motion.div>` |
| Type Safety | TypeScript | `src/api/*.ts` | Type interfaces, functions |
| Configuration | JSON | `src/data/*.json` | Site data, projects, skills |
| Static Assets | Files | `public/` | Favicon, robots.txt |
| Markdown Content | `.md` files | `src/content/blog/` | Blog posts |

---

## 🆘 Troubleshooting

### Build Fails

**Problem:** `npm run build` returns errors

**Solution:**
1. Check JSON files are valid (use [jsonlint.com](https://jsonlint.com))
2. Verify all imports have correct paths
3. Check TypeScript errors: `npm run type-check`
4. Try clean rebuild: `rm -rf dist/ .astro/` then `npm run build`

### Page Not Showing

**Problem:** New page in `src/pages/` not appearing

**Solution:**
1. Verify file name (no spaces, correct extension)
2. Check it's exported properly
3. Restart dev server: stop and `npm run dev`
4. Clear browser cache (Cmd+Shift+R)

### Styles Not Applying

**Problem:** Tailwind classes not working

**Solution:**
1. Check class names are spelled correctly
2. Verify Tailwind is configured in `tailwind.config.mjs`
3. Clear build cache: `rm -rf dist/ .astro/`
4. Rebuild: `npm run build`

### JSON Data Not Updating

**Problem:** Changed `src/data/*.json` but site doesn't update

**Solution:**
1. Verify JSON is valid (no trailing commas, proper quotes)
2. Check import statement in component
3. Refresh browser (Cmd+R or Ctrl+F5 for hard refresh)
4. Restart dev server

### GitHub Pages Not Deploying

**Problem:** Site doesn't deploy after push

**Solution:**
1. Check GitHub Actions logs (Settings → Actions)
2. Verify branch is set to `gh-pages` deployment source
3. Check `CNAME` file for correct domain
4. Try rebuilding locally: `npm run build`
5. Verify `.gitignore` doesn't exclude important files

---

## 📚 Learning Resources

### Official Documentation
- [Astro Docs](https://docs.astro.build) - Framework guide
- [React Docs](https://react.dev) - React fundamentals
- [Tailwind CSS](https://tailwindcss.com) - Styling reference
- [Framer Motion](https://www.framer.com/motion/) - Animation guide
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Type safety

### Project Documentation
- [QUICK_START.md](./QUICK_START.md) - Fast setup guide
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Development handbook
- [OPTIMIZATION_SUMMARY.md](./OPTIMIZATION_SUMMARY.md) - What changed
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Visual structure
- [src/data/README.md](./src/data/README.md) - Data files guide
- [src/api/README.md](./src/api/README.md) - API integration guide

---

## 📋 Quick Command Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production site
npm run build

# Preview production build
npm run preview

# Type checking
npx tsc --noEmit

# Format code
npm run format  # if configured
```

---

## 🔒 Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```
VITE_SITE_TITLE="Your Name | Portfolio"
VITE_SITE_URL="https://yourdomain.com"
VITE_CONTACT_EMAIL="your@email.com"
VITE_API_URL="http://localhost:3000/api"
```

Access in code:
```typescript
const title = import.meta.env.VITE_SITE_TITLE;
```

---

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Settings → Pages
   - Set source to `gh-pages` branch

2. **Configure CNAME** (optional)
   - Edit `CNAME` file with your domain
   - Update DNS settings with your registrar

3. **Deploy**
   ```bash
   git push origin main
   ```
   - GitHub Actions automatically builds and deploys!

### Vercel

1. Import repository to Vercel
2. Configure build settings
3. Deploy with single click

### Other Hosts

- **Netlify** - Supports static site deployment
- **Firebase Hosting** - Google's hosting service
- **Any static host** - Works with `dist/` folder output

---

## 🎯 Roadmap & Future Features

### Phase 1: Content ✅ (Current)
- [x] Portfolio projects showcase
- [x] Blog system
- [x] Dark mode
- [x] Responsive design

### Phase 2: Backend (Coming Soon)
- [ ] Add authentication
- [ ] Database for projects/blog
- [ ] API endpoints
- [ ] Contact form backend

### Phase 3: Advanced Features
- [ ] Comments on blog posts
- [ ] User profiles
- [ ] Real-time updates
- [ ] Advanced analytics

---

## 📞 Getting Help

1. **Check Documentation** - Read relevant `.md` files
2. **Review Examples** - Look at existing components
3. **Search Issues** - Check GitHub issues
4. **Read Error Messages** - They usually tell you what's wrong!
5. **Google It** - Stack Overflow often has answers

---

## 📄 Project Structure Checklist

Essential files for your portfolio to work:

```
✅ src/data/
   ✅ site.json         # Update with your info
   ✅ navigation.json   # Update with your links
   ✅ projects.json     # Add your projects
   ✅ about.json        # Update your bio
   ✅ skills.json       # Add your skills
   ✅ config.json       # App config

✅ src/pages/
   ✅ index.astro       # Home page
   ✅ projects.astro    # Projects page
   ✅ blog/
      ✅ index.astro    # Blog listing

✅ src/components/
   ✅ All components present

✅ Configuration
   ✅ package.json
   ✅ astro.config.mjs
   ✅ tailwind.config.mjs
   ✅ tsconfig.json

✅ Documentation
   ✅ README.md
   ✅ All guide files
```

---

## ✨ Summary

Your portfolio is now:
- **✅ Production-ready** - Fully tested and optimized
- **✅ Backend-ready** - API layer prepared for future expansion
- **✅ Well-documented** - 8 comprehensive guide files
- **✅ Easy to customize** - Edit JSON files, no code changes
- **✅ Scalable** - Ready to grow with your career
- **✅ Type-safe** - Full TypeScript support
- **✅ Accessible** - WCAG compliant

---

## 🎉 Let's Get Started!

1. **Quick Setup** → [QUICK_START.md](./QUICK_START.md)
2. **Full Guide** → [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)
3. **Documentation** → [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)

**Happy coding! 🚀**

---

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Created and maintained by **Manisha Adhikari**

---

**Last Updated:** April 30, 2026
**Build Status:** ✅ Production Ready

### Add Blog Posts

Create a new markdown file in `src/content/blog/`:

```markdown
---
title: "My Post Title"
description: "Brief description"
pubDate: 2024-03-15
author: "Your Name"
image: "https://example.com/image.jpg"
tags: ["tag1", "tag2"]
---

Your content here...
```

## 🚀 Deployment

### GitHub Pages Automatic Deployment

1. Push changes to `main` branch
2. GitHub Actions will automatically build and deploy to `gh-pages`
3. Site is live at your custom domain (configured in CNAME)

### Manual Deployment

```bash
npm run build
# Deploy dist/ folder contents to GitHub Pages
```

## 📚 Content Collections

Blog posts use Astro's Content Collections with schema validation:

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});
```

## 🎬 Animations

- **Page loads** - Fade in animations
- **Scroll interactions** - Elements animate into view
- **Hover effects** - Smooth transitions on interactive elements
- **Theme toggle** - Seamless dark/light mode transition

## 🌐 SEO

- Meta tags for all pages
- Open Graph support
- Twitter Card integration
- Semantic HTML

## 📝 License

Feel free to use this template for your own portfolio!

## 🤝 Contributing

Found an issue or have a suggestion? Feel free to open an issue or submit a pull request.

---

Built with ❤️ by Manish Adhikari
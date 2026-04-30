# Portfolio Website - Astro

A modern, responsive portfolio website built with Astro, React, Tailwind CSS, and Framer Motion. Optimized for GitHub Pages with dark/light theme support and smooth animations.

## 🚀 Features

- ⚡ **Lightning Fast** - Static site generation with Astro
- 🎨 **Modern Design** - Beautiful UI with Tailwind CSS
- 🌙 **Dark Mode** - Seamless theme switching
- ✨ **Animations** - Smooth transitions with Framer Motion
- 📱 **Responsive** - Mobile-first design
- 🔍 **SEO Optimized** - Meta tags and structured data
- 📝 **Blog System** - Markdown-based blog with content collections
- 🚀 **GitHub Pages Ready** - Deployed automatically

## 📦 Tech Stack

- **Astro** - Static site generator
- **React** - UI components (with ProjectCard animations)
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Markdown** - Blog content

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will reload as you make changes.

### Build

```bash
npm run build
```

This generates a static site in the `dist/` folder, ready for deployment to GitHub Pages.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## 📁 Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.astro
│   │   ├── ThemeToggle.astro
│   │   ├── ProjectCard.jsx (React component with Framer Motion)
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/             # Routes
│   │   ├── index.astro    # Home page
│   │   ├── projects.astro # Projects page
│   │   └── blog/
│   │       ├── index.astro         # Blog listing
│   │       └── [slug].astro        # Blog post dynamic page
│   ├── content/           # Markdown content
│   │   └── blog/          # Blog posts
│   └── styles/
│       └── global.css     # Global styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Update Personal Information

1. **Home Page** - Edit `src/pages/index.astro`
2. **Projects** - Update project data in `src/pages/projects.astro`
3. **Blog** - Add markdown files to `src/content/blog/`
4. **Footer Links** - Modify `src/components/Footer.astro`

### Colors & Theme

Edit `tailwind.config.mjs` to customize colors and animations.

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
# Component Organization Guide

## Component Categories

### 1. Common Components (`src/components/common/`)
Shared layout components used across multiple pages.

```
common/
├── Navbar.astro      # Main navigation bar
└── Footer.astro      # Page footer with contact & social
```

**When to use:** Layout elements that appear on every page.

### 2. Section Components (`src/components/sections/`)
Reusable content sections and templates.

```
sections/
├── PageHeader.astro           # Page title section
├── Section.astro              # Generic section wrapper
└── AnimatedGradient.astro     # Animated background effect
```

**When to use:** Repeated section patterns across pages.

### 3. UI Components (`src/components/ui/`)
Standalone UI elements and utilities.

```
ui/
├── ThemeToggle.astro          # Dark mode toggle
└── ProjectCard.jsx            # Project display card
```

**When to use:** Individual, reusable UI elements.

## Component Examples

### Adding a New Component

**Example 1: New UI Component**
```astro
// src/components/ui/BlogPost.astro
---
interface Props {
  title: string;
  date: Date;
  content: string;
}

const { title, date, content } = Astro.props;
---

<article class="card-hover p-6">
  <h2 class="text-2xl font-bold mb-2">{title}</h2>
  <time class="text-sm text-slate-500">
    {date.toLocaleDateString()}
  </time>
  <div class="mt-4 prose dark:prose-invert">
    {/* Content goes here */}
  </div>
</article>
```

**Example 2: New Section Component**
```astro
// src/components/sections/Testimonials.astro
---
const testimonials = [
  { author: 'John', text: '...' },
  { author: 'Jane', text: '...' }
];
---

<section class="py-20 px-4">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-gradient text-4xl font-bold mb-12 text-center">
      Testimonials
    </h2>
    <div class="grid md:grid-cols-2 gap-8">
      {testimonials.map(t => (
        <div class="card-hover">
          <p>{t.text}</p>
          <p class="font-bold mt-4">— {t.author}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

## CSS Classes Reference

### Typography
```css
.text-gradient      /* Blue-to-purple gradient */
.text-gradient-alt  /* Purple-to-pink gradient */
```

### Buttons
```css
.btn-primary   /* Large action button */
.btn-secondary /* Large secondary button */
.btn-small     /* Compact button */
```

### Cards
```css
.card-base    /* Base card styling */
.card-hover   /* Card with hover effects */
```

### Backgrounds
```css
.gradient-bg-primary    /* Blue gradient background */
.gradient-bg-secondary  /* Purple gradient background */
.gradient-bg-multi      /* Multi-color gradient */
.section-container      /* Max-width container */
```

## Component Import Patterns

### From pages
```astro
import PageHeader from '../../components/sections/PageHeader.astro';
import Navbar from '../../components/common/Navbar.astro';
import { ProjectCard } from '../../components/ui/ProjectCard.jsx';
```

### From layouts
```astro
import Navbar from '../components/common/Navbar.astro';
import Footer from '../components/common/Footer.astro';
```

## Naming Conventions

- **Components:** PascalCase + file extension
  - ✅ `PageHeader.astro`
  - ✅ `ProjectCard.jsx`
  - ❌ `page-header.astro`

- **Props:** camelCase
  - ✅ `interface Props { isActive: boolean; }`
  - ❌ `interface Props { IsActive: boolean; }`

- **Files & Folders:** kebab-case or lowercase
  - ✅ `src/components/common/`
  - ✅ `src/styles/global.css`
  - ❌ `src/Components/Common/`

## Testing Imports

After reorganizing, verify imports work:

```bash
# Build to catch import errors
npm run build

# Check for TypeScript errors
npx astro check
```


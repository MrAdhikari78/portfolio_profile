# Design System & Optimization Guide

## Components Created for Code Reduction

### 1. **PageHeader.astro**
- **Purpose**: Reusable page header component for consistent headers across pages
- **Properties**: 
  - `title` (required): Page title
  - `subtitle` (optional): Subtitle text
  - `description` (optional): Page description
  - `gradient` (optional): 'blue' | 'purple' | 'multi'
- **Usage**: Blog page, Projects page
- **Reduces**: ~15 lines of duplicate HTML per page

### 2. **Section.astro**
- **Purpose**: Reusable section wrapper with consistent spacing and layout
- **Properties**:
  - `title` (optional): Section title
  - `subtitle` (optional): Subtitle
  - `maxWidth` (optional): Content max-width constraint
  - `padding` (optional): 'sm' | 'md' | 'lg'
  - `background` (optional): 'white' | 'light' | 'dark'
- **Usage**: Wrap content sections for consistent styling
- **Reduces**: Redundant container and spacing code

### 3. **AnimatedGradient.astro**
- **Purpose**: Reusable animated blob background effect
- **Usage**: Hero sections and any section needing animated backgrounds
- **Reduces**: ~10 lines of duplicate animation code

## Utility Classes (global.css)

### Button Utilities
- `.btn-primary` - Main action button with gradient
- `.btn-secondary` - Secondary button with border
- `.btn-small` - Compact button style

### Text Utilities
- `.text-gradient` - Blue-to-purple gradient text
- `.text-gradient-alt` - Purple-to-pink gradient text

### Card Utilities
- `.card-base` - Base card styling
- `.card-hover` - Card with hover effects

### Background Utilities
- `.gradient-bg-primary` - Primary gradient background
- `.gradient-bg-secondary` - Secondary gradient background
- `.gradient-bg-multi` - Multi-color gradient background

## Design Consistency Standards

### Colors
- Primary: Blue (#2563eb → #7c3aed)
- Secondary: Purple (#9333ea)
- Accents: Pink, Green
- Use Tailwind's built-in slate color for neutrals

### Typography
- Headings: Sizes 2xl to 7xl with font-bold
- Text: 14px to 18px with slate-600 dark:slate-400
- Use font-light for subtitles

### Spacing
- Container max-width: max-w-4xl or max-w-6xl
- Padding: px-4, with responsive adjustments
- Section padding: py-16 to py-20

### Animations
- Fade in: fade-in (0.5s)
- Slide up: slide-up (0.6s)
- Blob effect: animate-blob (7s)
- Hover transitions: duration-300

## Navigation Structure

**All navigation data is centralized in `src/constants/navigation.ts`**
- NAV_LINKS: Main navigation menu
- SOCIAL_LINKS: Social media profile links
- Contact info and site metadata

This prevents duplicating navigation code across components.

## Optimization Summary

### Before
- Header sections duplicated in 3 pages
- Inline styles repeated throughout
- Background animations hardcoded in multiple places
- Button styles scattered across pages
- No reusable components or utilities

### After
- **PageHeader Component**: One source of truth for page headers
- **AnimatedGradient Component**: Centralized animation code
- **Global CSS Utilities**: Reusable styling classes
- **Section Component**: Flexible section wrapper
- **Navigation Constants**: Single source for nav data
- **~50+ lines of code eliminated** through componentization

## Maintaining Consistency

1. **Always use components** instead of duplicating HTML
2. **Add new utilities to global.css** instead of inline styles
3. **Update constants** when adding new navigation items
4. **Use provided CSS classes** (.btn-primary, .text-gradient, etc.)
5. **Reference this guide** when styling new sections

## Future Improvements

- Extract contact section to a reusable component
- Create a skill card component for About section
- Centralize project data in a constants file
- Add component prop validation with Zod

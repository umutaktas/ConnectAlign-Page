# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ConnectAlign is a landing page for a digital transformation platform. It's a single-page React application built with Vite, featuring a bilingual (Turkish/English) interface for internal communication and document management services.

## Tech Stack

- **Framework**: React 18 with Vite 4
- **Styling**: Tailwind CSS with custom animations and utilities
- **UI Components**: Custom components built with Radix UI primitives
- **Animations**: Framer Motion for component animations and transitions
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Development Commands

```bash
# Start development server (runs on port 3000, accessible on all network interfaces)
npm run dev

# Build for production
npm run build

# Preview production build (runs on port 3000)
npm run preview
```

Note: The build script references `tools/generate-llms.js` which doesn't currently exist in the codebase - this will fail silently with `|| true`.

## Architecture

### Application Structure

- **Single-page application**: All content is in one scrollable page with smooth scroll navigation
- **Component-based**: Each major section (Hero, Features, Pricing, etc.) is a separate component
- **Language handling**: Global language state managed in App.jsx, passed down to all components as props
- **No routing**: Navigation uses `scrollIntoView` for smooth scrolling to sections by ID

### State Management

Language switching is the only global state, managed through React useState in App.jsx and passed as props. No external state management libraries are used.

### Component Organization

```
src/
├── components/
│   ├── [Section Components] - Main page sections (Hero, Features, Pricing, etc.)
│   └── ui/ - Reusable UI primitives (Button, Toast, etc. from Radix UI)
├── hooks/ - Custom React hooks
├── lib/ - Utility functions (cn() for className merging)
├── App.jsx - Main app component with language state
├── main.jsx - React entry point
└── index.css - Global styles with Tailwind utilities
```

### Path Aliases

The project uses `@/` as an alias for the `src/` directory. All imports should use this alias:
- `@/components/Header` instead of `../components/Header`
- `@/lib/utils` instead of `../../lib/utils`

### Styling Conventions

Custom utility classes are defined in `src/index.css`:
- `.btn-primary` - Primary action buttons with gradient
- `.btn-secondary` - Secondary buttons with border
- `.feature-card` - Cards for feature sections with hover effects
- `.pricing-card` - Standard pricing cards
- `.pricing-card-popular` - Featured pricing card with gradient
- `.text-gradient` - Blue-to-purple gradient text
- `.pattern-bg` - Dark background with dot pattern

Tailwind config extends the default with custom HSL color variables and animations from Radix UI components.

### Animation Patterns

Components use Framer Motion for animations:
- Page sections animate in with `initial`, `animate`, and `transition` props
- Common pattern: fade in with slide up (`opacity: 0, y: 20` → `opacity: 1, y: 0`)
- Intersection Observer hook (`useInView.js`) triggers animations when elements enter viewport
- Global CSS animations: `.animate-fade-in`, `.animate-slide-up`, `.animate-count-up`

### Bilingual Implementation

All components receive `language` prop ('tr' or 'en'). Content is typically structured as:
```javascript
const content = {
  tr: { /* Turkish content */ },
  en: { /* English content */ }
};
const text = content[language];
```

### Navigation

Header component provides:
- Smooth scroll navigation to sections by ID
- Sticky header that changes style on scroll
- Mobile hamburger menu
- Language toggle button
- No actual routing - all navigation is scroll-based

## Key Files

- `src/App.jsx` - Main app component, manages language state
- `src/index.css` - Custom Tailwind utilities and animations
- `tailwind.config.js` - Extended Tailwind configuration with Radix UI theme
- `package.json` - Note: build script references non-existent `tools/generate-llms.js`

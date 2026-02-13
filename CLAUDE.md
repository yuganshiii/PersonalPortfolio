# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Current Status

This is a **planning document** for a personal portfolio website. The actual codebase has not been created yet. Once the project is initialized with React + Vite, this section will be updated with development commands.

## Development Commands (To be added after project setup)

Once the project is initialized, these commands will be available:
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

---

# Personal Portfolio Website - Project Specification

## Project Overview

Building a personal portfolio website for a professional targeting roles in **Data Science, Data Engineering, Software Engineering, and Machine Learning/AI**. The site should showcase technical depth, breadth of skills, storytelling around problem-solving, and visual impact.

**Reference Design**: https://www.hannahyan.com/index.html
- We are capturing the *aesthetic and feel* of this site, NOT replicating its functionality
- Key design elements: clean, airy layout, soft muted color palette, elegant typography, grid-based project gallery, subtle animations, personal but professional tone

---

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | React 18+ with Vite | Fast builds, optimized for GitHub Pages |
| Styling | Tailwind CSS | Utility-first, matches minimal aesthetic |
| Animations | Framer Motion | Smooth, elegant transitions |
| Charts | D3.js + Plotly React | For embedded interactive visualizations |
| Routing | React Router v6 | For project detail pages |
| Deployment | GitHub Pages via gh-pages | Automated deploys |

---

## Design System

### Color Palette

```css
:root {
  /* Backgrounds */
  --bg-primary: #faf9f7;        /* Warm off-white */
  --bg-secondary: #f5f3f0;      /* Slightly darker for sections */
  --bg-card: #ffffff;           /* Card backgrounds */
  
  /* Text */
  --text-primary: #2d2d2d;      /* Soft charcoal for body */
  --text-secondary: #6b6b6b;    /* Muted for captions */
  --text-tertiary: #9a9a9a;     /* Very muted for timestamps */
  
  /* Accents - choose ONE primary accent */
  --accent-primary: #7c9885;    /* Muted sage green */
  --accent-hover: #6b8574;      /* Darker sage for hover */
  --accent-subtle: #e8eeea;     /* Very light sage for backgrounds */
  
  /* Alternative accent options (use only one):
  --accent-primary: #b8a9c9;    /* Dusty lavender */
  --accent-primary: #c9a9a9;    /* Dusty rose */
  --accent-primary: #a9b8c9;    /* Muted blue */
  */
  
  /* Utility */
  --border-light: #e8e6e3;      /* Subtle borders */
  --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.08);
}
```

### Typography

```css
/* Headings: Elegant serif */
--font-heading: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;

/* Body: Clean sans-serif */
--font-body: 'DM Sans', 'Outfit', -apple-system, sans-serif;

/* Code/Technical: Monospace */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Scale */
--text-xs: 0.75rem;     /* 12px - timestamps, badges */
--text-sm: 0.875rem;    /* 14px - captions */
--text-base: 1rem;      /* 16px - body */
--text-lg: 1.125rem;    /* 18px - lead text */
--text-xl: 1.25rem;     /* 20px - section intros */
--text-2xl: 1.5rem;     /* 24px - card titles */
--text-3xl: 2rem;       /* 32px - section headings */
--text-4xl: 2.5rem;     /* 40px - page titles */
--text-5xl: 3.5rem;     /* 56px - hero name */
```

### Spacing & Layout

- Use generous whitespace (padding: 80-120px for sections)
- Max content width: 1200px
- Project grid: CSS Grid with auto-fit, min 320px columns
- Card border-radius: 8-12px (subtle, not too rounded)
- Consistent spacing scale: 4, 8, 16, 24, 32, 48, 64, 96, 128px

### Animation Principles

```javascript
// Framer Motion defaults
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// Hover states for cards
const cardHover = {
  scale: 1.02,
  y: -4,
  transition: { duration: 0.3 }
};
```

- Animations should be subtle and elegant, never flashy
- Use scroll-triggered animations sparingly
- Hover effects: subtle lift (translateY: -4px) + shadow increase
- Page transitions: simple fade with slight vertical movement

---

## Site Structure

### Pages & Routes

```
/                     → Home (single-page with sections)
/project/:slug        → Individual project detail pages
/resume               → Interactive resume (optional, can be modal)
```

### Home Page Sections (in order)

#### 1. Hero Section
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     [Your Name]                             │
│                                                             │
│     Data Scientist · ML Engineer · Software Developer       │
│                                                             │
│     [View Projects]        [Download Resume]                │
│                                                             │
│     ↓ (subtle scroll indicator)                             │
└─────────────────────────────────────────────────────────────┘
```
- Clean, centered layout
- Optional: subtle animated background (gradient mesh, particles, or abstract shapes)
- Name in large serif font
- Tagline can rotate/animate between roles
- Two CTA buttons with subtle styling

#### 2. Project Gallery (Filterable)
```
┌─────────────────────────────────────────────────────────────┐
│  Projects                                                   │
│                                                             │
│  [All] [Data Science] [Data Engineering] [SWE] [ML/AI]     │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │  Image   │  │  Image   │  │  Image   │                  │
│  │          │  │          │  │          │                  │
│  │ Title    │  │ Title    │  │ Title    │                  │
│  │ Desc     │  │ Desc     │  │ Desc     │                  │
│  │ [badges] │  │ [badges] │  │ [badges] │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │  ...     │  │  ...     │  │  ...     │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
└─────────────────────────────────────────────────────────────┘
```
- Filter buttons styled as pills/tabs
- Smooth filter animation (fade out/in, layout shift)
- Cards show: thumbnail, title, one-line description, tech badges
- Hover: subtle lift + "View Project →" appears
- 4-6 projects expected

#### 3. Interactive Timeline
```
┌─────────────────────────────────────────────────────────────┐
│  Journey                                                    │
│                                                             │
│  2024 ──●── Current Role/Status                            │
│         │   Description, skills gained                      │
│         │                                                   │
│  2022 ──●── Previous Experience                            │
│         │   Description, achievements                       │
│         │                                                   │
│  2020 ──●── Education/Early Career                         │
│         │   Degree, key projects                            │
│         │                                                   │
│  2018 ──●── Starting Point                                 │
│             How it all began                                │
└─────────────────────────────────────────────────────────────┘
```
- Vertical timeline for mobile, can be horizontal on desktop
- Each node expands/reveals details on click
- Connect timeline items to relevant projects
- Subtle scroll-triggered animations as items enter view

#### 4. Skills Section
```
┌─────────────────────────────────────────────────────────────┐
│  Skills & Technologies                                      │
│                                                             │
│  Languages        Frameworks       Tools & Platforms        │
│  ┌─────────┐      ┌─────────┐      ┌─────────┐             │
│  │ Python  │      │ PyTorch │      │ AWS     │             │
│  │ SQL     │      │ Spark   │      │ Docker  │             │
│  │ Java    │      │ React   │      │ Git     │             │
│  │ ...     │      │ ...     │      │ ...     │             │
│  └─────────┘      └─────────┘      └─────────┘             │
│                                                             │
│  Data & ML                  Databases                       │
│  ┌─────────┐                ┌─────────┐                    │
│  │ Pandas  │                │ PostgreSQL │                 │
│  │ Scikit  │                │ MongoDB  │                   │
│  │ TensorFlow │             │ Redis    │                   │
│  └─────────┘                └─────────┘                    │
└─────────────────────────────────────────────────────────────┘
```
- Grouped by category
- Clean icon/text grid (not progress bars—they're arbitrary)
- Subtle hover effects
- Optional: skill tags link to projects using that skill

#### 5. About Section
```
┌─────────────────────────────────────────────────────────────┐
│  About                                                      │
│                                                             │
│  ┌──────────┐                                               │
│  │  Photo   │   [2-3 paragraphs about background,          │
│  │          │    what excites you, what you're seeking]    │
│  │          │                                               │
│  └──────────┘   Fun fact or personal touch to be           │
│                 memorable.                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
- Professional but warm photo
- Text should feel personal, not corporate
- Include what makes you unique

#### 6. Contact Section
```
┌─────────────────────────────────────────────────────────────┐
│  Let's Connect                                              │
│                                                             │
│        ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐                  │
│        │Email│  │GitHub│ │LinkedIn│ │Resume│               │
│        └─────┘  └─────┘  └─────┘  └─────┘                  │
│                                                             │
│        youremail@example.com                                │
└─────────────────────────────────────────────────────────────┘
```
- Simple, clean
- Icon links with hover effects
- Optional: simple contact form

---

### Project Detail Page Template

```
/project/:slug

┌─────────────────────────────────────────────────────────────┐
│  ← Back to Projects                                         │
│                                                             │
│  [Project Title]                                            │
│  [Category Tag]  •  [Tech] [Stack] [Badges]                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  THE PROBLEM                                                │
│  What challenge were you solving? Context and motivation.  │
│  Why does this matter? Who benefits?                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  THE APPROACH                                               │
│  Methodology, architecture decisions, key insights.         │
│  Can include diagrams or architecture visuals.              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  INTERACTIVE DEMO                                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │   Embedded D3/Plotly visualization                  │   │
│  │   OR interactive chart                              │   │
│  │   OR code snippet with live output                  │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  RESULTS & IMPACT                                           │
│  Metrics, outcomes, learnings, what you'd do differently.  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  [GitHub Repo]     [Live Demo]     [Blog Post/Paper]       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ← Previous Project              Next Project →            │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx           # Sticky nav with smooth scroll
│   │   ├── Footer.jsx           # Simple footer
│   │   └── Section.jsx          # Reusable section wrapper
│   │
│   ├── home/
│   │   ├── Hero.jsx             # Hero section
│   │   ├── ProjectGallery.jsx   # Filterable project grid
│   │   ├── ProjectCard.jsx      # Individual project card
│   │   ├── Timeline.jsx         # Interactive timeline
│   │   ├── TimelineItem.jsx     # Single timeline entry
│   │   ├── Skills.jsx           # Skills grid
│   │   ├── About.jsx            # About section
│   │   └── Contact.jsx          # Contact section
│   │
│   ├── project/
│   │   ├── ProjectDetail.jsx    # Full project page
│   │   ├── ProjectNav.jsx       # Prev/Next navigation
│   │   └── InteractiveDemo.jsx  # Embedded D3/Plotly wrapper
│   │
│   └── ui/
│       ├── Button.jsx           # Styled buttons
│       ├── Badge.jsx            # Tech stack badges
│       ├── FilterTabs.jsx       # Filter pill buttons
│       ├── AnimatedSection.jsx  # Scroll-triggered animations
│       └── Icons.jsx            # Custom/social icons
│
├── data/
│   ├── projects.js              # Project data array
│   ├── timeline.js              # Timeline entries
│   └── skills.js                # Skills by category
│
├── hooks/
│   ├── useScrollAnimation.js    # Intersection observer hook
│   └── useFilter.js             # Filter state management
│
├── styles/
│   └── index.css                # Tailwind + custom CSS variables
│
├── pages/
│   ├── Home.jsx                 # Main landing page
│   └── Project.jsx              # Project detail page
│
├── App.jsx                      # Router setup
└── main.jsx                     # Entry point
```

---

## Data Structures

### projects.js
```javascript
export const projects = [
  {
    id: 'project-slug',
    title: 'Project Title',
    description: 'One-line description for the card.',
    category: 'ml-ai', // 'data-science' | 'data-engineering' | 'swe' | 'ml-ai'
    thumbnail: '/images/projects/project-thumb.png',
    techStack: ['Python', 'PyTorch', 'AWS'],
    featured: true,
    
    // Detail page content
    problem: 'Detailed problem description...',
    approach: 'Methodology and technical approach...',
    results: 'Outcomes, metrics, learnings...',
    
    // Links
    github: 'https://github.com/username/repo',
    demo: 'https://demo-url.com',
    blog: 'https://blog-post-url.com',
    
    // Interactive demo config (optional)
    interactiveDemo: {
      type: 'plotly', // 'plotly' | 'd3' | 'iframe'
      data: { /* chart data */ },
      config: { /* chart config */ }
    }
  },
  // ... more projects
];
```

### timeline.js
```javascript
export const timeline = [
  {
    year: '2024',
    title: 'Current Role / Status',
    organization: 'Company Name',
    description: 'What you do/did, key achievements.',
    skills: ['Python', 'ML', 'Cloud'],
    linkedProjects: ['project-slug-1'], // Links to relevant projects
  },
  // ... more entries (reverse chronological)
];
```

### skills.js
```javascript
export const skills = {
  languages: ['Python', 'SQL', 'JavaScript', 'Java', 'Scala'],
  frameworks: ['PyTorch', 'TensorFlow', 'Spark', 'React', 'FastAPI'],
  data: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Hugging Face'],
  databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Snowflake', 'BigQuery'],
  tools: ['Docker', 'Kubernetes', 'Airflow', 'MLflow', 'Git'],
  cloud: ['AWS', 'GCP', 'Azure'],
};
```

---

## Implementation Guidelines

### DO:
- Keep animations subtle and elegant (ease-out, 300-500ms duration)
- Use semantic HTML for accessibility
- Implement smooth scroll for anchor links
- Add loading states for any async content
- Optimize images (WebP, lazy loading, proper sizing)
- Make it fully responsive (mobile-first)
- Use CSS Grid for the project gallery
- Implement keyboard navigation for filters
- Add proper meta tags for SEO
- Include Open Graph tags for social sharing

### DON'T:
- Use flashy or distracting animations
- Overuse bold text or ALL CAPS
- Add too many colors (stick to the palette)
- Use generic stock photos
- Include progress bars for skills (they're meaningless)
- Auto-play videos or sounds
- Use carousels (show all projects in grid)
- Add loading spinners unless truly necessary
- Use placeholder text in production

### Accessibility:
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Focus states for interactive elements
- Sufficient color contrast (WCAG AA)
- Skip-to-content link
- ARIA labels where needed

### Performance:
- Lazy load images below the fold
- Code split project detail pages
- Minimize bundle size
- Use font-display: swap for web fonts
- Preload critical fonts

---

## GitHub Pages Deployment

### vite.config.js
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace with your repo name
  build: {
    outDir: 'dist',
  },
});
```

### package.json scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### GitHub Actions (optional)
Create `.github/workflows/deploy.yml` for auto-deploy on push to main.

---

## Content Placeholders

Until real content is provided, use:
- Name: `[Your Name]`
- Placeholder images: Use geometric abstract shapes or gradients
- Lorem ipsum for long text blocks
- Realistic but fictional project titles

---

## Questions to Ask User

Before implementing, clarify:
1. Exact name for the portfolio
2. Preferred accent color (sage green, dusty rose, muted blue, etc.)
3. Do they have project images/thumbnails ready?
4. Resume PDF to include?
5. Social links (GitHub, LinkedIn, email, Twitter?)
6. Any specific projects they want to highlight?

---

## Reference Links

- Hannah Yan's site (aesthetic reference): https://www.hannahyan.com/index.html
- Framer Motion docs: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs
- D3.js: https://d3js.org/
- Plotly React: https://plotly.com/javascript/react/
- Google Fonts (Cormorant Garamond): https://fonts.google.com/specimen/Cormorant+Garamond
- Google Fonts (DM Sans): https://fonts.google.com/specimen/DM+Sans

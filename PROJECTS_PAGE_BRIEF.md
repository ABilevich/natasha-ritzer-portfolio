# Projects Page Brief

This is the working handoff for starting a dedicated Projects page for Natasha Ritzer's portfolio.

## Current Site Stack

- React 19, TypeScript, Vite 8
- React Router via `src/routes/router.tsx`
- Tailwind CSS v4
- shadcn/ui primitives in `src/components/ui/`
- lucide-react icons
- Main shared layout in `src/components/layout/`

## Current Routing

The app currently has only the homepage route:

- `/` -> `HomePage`

Routing is defined in:

- `src/routes/router.tsx`

Recommended next step for the Projects page:

- Create `src/pages/ProjectsPage.tsx`
- Add a route such as `/projects`
- Reuse `MainLayout` so the shared header/footer stay consistent

## Homepage Structure

The homepage is composed in:

- `src/pages/HomePage.tsx`

Current homepage flow:

1. `HeroSection`
2. `AboutSection`
3. `QuoteSection`
4. `SkillsSection`
5. `ParallaxGallerySection`
6. `ProjectsSection`
7. `ConnectSection`

Key layout updates already done:

- Header and footer are shared layout components.
- Header has desktop nav and a mobile hamburger drawer.
- Hero uses `GradientBlobBackground`.
- About section is now `min-h-svh` so it fills at least one viewport height.
- Skills section uses reusable skill cards.
- The visual break between Skills and Projects is now a fullscreen parallax gallery.
- Projects section is an accordion with three categories.

## Project Data

Project data lives in:

- `src/features/projects/projectsContent.ts`

This is the central source of truth for homepage project cards and should also power the future Projects page.

Current categories:

- `UX UI Design`
- `Graphic Design`
- `Project Management`

Current project type:

```ts
export type PortfolioProject = {
  slug: string
  title: string
  category: ProjectCategoryTitle
  description: string
  image: string
}
```

Current projects:

| Category | Slug | Title | Image |
| --- | --- | --- | --- |
| UX UI Design | `delphi-one-ux-ui` | Delphi One | `D1.jpg` |
| UX UI Design | `bnc` | BNC | `BNC.jpg` |
| UX UI Design | `agenda-vital` | Agenda Vital | `Agenda-Vital.jpg` |
| Graphic Design | `regalalo` | Regalalo | `Regalalo.jpg` |
| Graphic Design | `port-salus` | Port Salus | `port-salus.jpg` |
| Graphic Design | `habit-driven` | Habit Driven | `HD.jpg` |
| Project Management | `delphi-one-project-management` | Delphi One | `D1-PM.jpg` |
| Project Management | `pasimedia` | Pasimedia | `Pasimedia-pm.jpg` |
| Project Management | `mazalosa` | Mazalosa | `Mazalosa-pm.jpg` |

All project cards currently use the same placeholder description:

```ts
Project description coming soon. Replace this text with a short summary for the homepage card.
```

## Project Components

Homepage project section:

- `src/features/home/components/ProjectsSection.tsx`

Reusable project preview card:

- `src/features/home/components/ProjectPreviewCard.tsx`
- `src/features/home/components/ProjectPreviewCard.css`

Current project card behavior:

- Card image fills the tile with `object-cover`.
- Card content is hidden on desktop until hover/focus.
- On small screens, content is visible by default.
- Overlay is a stronger white gradient so titles and descriptions remain readable.
- Project title uses `font-semibold`.
- Arrow icon uses `ArrowRight` from lucide-react.

Current project card dimensions:

- Mobile: `h-[220px]`
- Tablet: `md:h-[300px]`
- Desktop: `lg:h-[372px]`

For the dedicated Projects page, this card can be reused, or a larger page-specific card can be created if the page needs richer metadata.

## Project Images

Project images are stored in:

- `src/assets/figma/`

Recommended homepage card image ratio:

- Best: landscape, around `1600 x 1000` or `1600 x 1200`
- The card uses `object-cover`, so images may crop slightly if ratios differ.

Useful existing assets:

- `D1.jpg`
- `BNC.jpg`
- `Agenda-Vital.jpg`
- `Regalalo.jpg`
- `port-salus.jpg`
- `HD.jpg`
- `D1-PM.jpg`
- `Pasimedia-pm.jpg`
- `Mazalosa-pm.jpg`

## Parallax Gallery

The fullscreen gallery between Skills and Projects is implemented in:

- `src/features/home/components/ParallaxGallerySection.tsx`
- `src/features/home/hooks/useParallaxGallery.ts`
- Data in `src/features/home/homeContent.ts`

Current gallery behavior:

- Fullscreen white section.
- Uses local images from `src/assets/figma/`.
- Each tile keeps the natural image ratio.
- Each item has one editable `size` number.
- Position is editable with `position` and `mobilePosition`.
- Scroll movement is driven by CSS variables to avoid React re-rendering on scroll.
- Respects reduced motion.

Gallery data pattern:

```ts
{
  id: 'studio-process',
  image: delphiOneImage,
  alt: '',
  speed: 0.48,
  rotation: 0,
  size: 25,
  position: { left: '1%', top: '7%' },
  mobilePosition: { left: '-18%', top: '8%' },
}
```

## Design Decisions So Far

- Use modular feature folders rather than giant page components.
- Keep editable content in data files where possible.
- Use Tailwind first.
- Use shadcn/ui only where it naturally fits.
- Keep section components independent.
- Use responsive layouts from the beginning.
- Avoid horizontal overflow.
- Prefer real local assets over external Figma URLs.
- Avoid visible instructional text inside the UI.

## Recommended Projects Page Direction

Suggested route:

- `/projects`

Suggested files:

- `src/pages/ProjectsPage.tsx`
- `src/features/projects/components/ProjectsPageHero.tsx`
- `src/features/projects/components/ProjectGrid.tsx`
- `src/features/projects/components/ProjectCard.tsx`
- Optional: `src/features/projects/components/ProjectFilters.tsx`

Suggested Projects page structure:

1. Page hero with title `Projects`
2. Category filters or tabs: UX/UI, Graphic Design, Project Management
3. Full project grid using `projects` from `projectsContent.ts`
4. Each card links later to a project detail route

Suggested future detail routes:

- `/projects/:slug`

Suggested data additions before building detail pages:

```ts
type PortfolioProject = {
  slug: string
  title: string
  category: ProjectCategoryTitle
  description: string
  image: string
  summary?: string
  year?: string
  role?: string
  tools?: string[]
  caseStudyImages?: string[]
}
```

## Important Implementation Notes

- Preserve the current homepage project accordion.
- Reuse `projectsContent.ts` for the Projects page instead of duplicating project lists.
- Keep homepage descriptions short.
- Use richer project content only on the Projects page or future detail pages.
- Keep project cards accessible with semantic links once routes exist.
- If adding filters, use real buttons/tabs with visible active state.
- Test desktop, tablet, and phone widths after layout changes.

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
```

Run `npm run lint` and `npm run build` before handing off meaningful code changes.

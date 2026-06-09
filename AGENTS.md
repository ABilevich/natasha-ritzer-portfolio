# AGENTS.md

This file is the working brief for coding agents helping with Natasha Ritzer's portfolio site. Read it before making changes in a new conversation.

## Project Overview

- Personal portfolio for Natasha Ritzer.
- Stack: React 19, TypeScript, Vite 8, React Router, Tailwind CSS v4, shadcn/ui, lucide-react.
- Current focus: a Figma-inspired homepage with modular sections and responsive behavior across phone, tablet, and desktop.
- The app is a client-side React app. Routing is configured in `src/routes/router.tsx`.

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`
- Lint: `npm run lint`
- Preview production build: `npm run preview`

Before handing off code changes, run `npm run build` and `npm run lint` whenever practical.

## Project Structure

- `src/App.tsx`: app boundary and router provider.
- `src/routes/`: router setup and hash-scroll helper.
- `src/components/layout/`: shared layout components used across pages.
- `src/components/ui/`: shadcn/ui primitives. Prefer adding shadcn components here via the CLI rather than hand-writing divergent copies.
- `src/features/home/`: homepage feature module.
- `src/features/home/components/`: homepage sections and reusable homepage-specific UI.
- `src/features/home/homeContent.ts`: editable structured homepage content.
- `src/features/home/hooks/`: homepage-specific hooks when needed.
- `src/assets/figma/`: local assets derived from the Figma design or temporary image placeholders.
- `src/index.css`: Tailwind imports, shadcn theme variables, global design tokens, and global reset.

## Architecture Principles

- Keep pages thin. `src/pages/HomePage.tsx` should compose sections, not contain large UI blocks.
- Keep feature-specific code inside `src/features/<feature>/`.
- Extract reusable pieces when a pattern appears more than once, such as cards, section headers, image tiles, project previews, or content blocks.
- Keep editable content in structured arrays/objects when possible. For the homepage, use `homeContent.ts` for stats, skills, and project categories.
- Shared site chrome belongs in `src/components/layout/`.
- Cross-feature primitives belong in `src/components/ui/` or another shared folder if they are not shadcn components.
- Avoid one-off giant components generated directly from Figma. Convert Figma output into clean React components that match the project patterns.

## Styling

- Styling is Tailwind CSS v4-first.
- Use shadcn/ui components when they fit the UI primitive: buttons, cards, badges, dialogs, inputs, etc.
- Use CSS variables from `src/index.css` for project design tokens.
- Keep global CSS minimal. Add local CSS only when Tailwind would make the code less readable, such as complex animations or highly specific effects.
- The active typeface for the portfolio visual language is Instrument Sans. Geist is still present because the shadcn preset installed it.
- Use lucide-react icons when appropriate. Do not add new icon packages unless there is a clear need.

## Responsiveness

Responsiveness is a core requirement, not a final polish pass.

- Check phone, tablet, and desktop behavior for layout changes.
- Important reference widths: `320px`, `390px`, `768px`, `1024px`, and desktop.
- Avoid horizontal overflow. In browser QA, `document.body.scrollWidth` should match the viewport width.
- Use fluid sizing with `clamp()`, responsive Tailwind prefixes, and flexible grids.
- Desktop Figma dimensions should not be copied blindly to mobile. Large desktop grids should usually switch at `lg`, while tablet often needs a balanced two-column layout.
- Keep text readable on small screens. Do not let long headings, nav items, or card text overflow their containers.
- Respect reduced-motion preferences for animation-heavy effects.

## Homepage Notes

- `HeroSection` uses `GradientBlobBackground` for the animated homepage hero background.
- Keep the hero background decorative, subtle, pointer-events-free, and respectful of reduced-motion preferences.
- `AboutSection`, `SkillsSection`, and `ProjectsSection` should remain independent sections.
- `StatCard`, `SkillCard`, and `SectionTitle` are reusable homepage building blocks.
- `ConnectSection` is separate from the global footer because it is part of the homepage content flow.

## shadcn/ui

- shadcn is initialized with aliases in `components.json`.
- The `@/*` alias points to `src/*` and is configured in TypeScript and Vite.
- Add components with commands such as:

```bash
npx shadcn@4.11.0 add button
```

- shadcn generated components may export variant helpers. If lint complains about React Refresh for a generated variant export, prefer a narrow allow-list in `eslint.config.js` rather than rewriting the generated component API.

## Best Practices

- Preserve user edits. Check `git status --short` before making broad changes.
- Keep changes scoped to the requested feature.
- Prefer semantic HTML: sections, headings, navs, links, buttons, lists.
- Use accessible labels for icon-only links/buttons.
- Keep images local when possible instead of depending on expiring Figma asset URLs.
- Do not introduce new dependencies unless they solve a real problem and fit the stack.
- After visual changes, verify in the browser when possible.

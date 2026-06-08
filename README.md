# Natasha Ritzer Portfolio

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, and React Router.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL, usually:

```text
http://127.0.0.1:5173/
```

## Available Scripts

```bash
npm run dev
```

Runs the app locally with hot module replacement.

```bash
npm run build
```

Runs TypeScript build checks and creates a production build in `dist/`.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run preview
```

Serves the production build locally for review.

## Tech Stack

- React 19
- TypeScript
- Vite 8
- React Router
- Tailwind CSS v4
- shadcn/ui
- lucide-react icons
- Instrument Sans via `@fontsource-variable/instrument-sans`

## Project Structure

```text
src/
  components/
    layout/       Shared header, footer, and page layout
    ui/           shadcn/ui components
  features/
    home/         Homepage feature module
      components/ Homepage sections and reusable home UI
      hooks/      Homepage-specific hooks
      homeContent.ts
  routes/         Router and scroll helpers
  pages/          Route-level page components
  assets/         Local assets
```

## Development Notes

- Keep pages modular. Route-level files should compose feature sections rather than contain large layouts.
- Prefer reusable components for repeated patterns such as cards, section titles, stats, skills, and project previews.
- Use `src/features/home/homeContent.ts` for homepage content that can be edited as data.
- Use shadcn/ui primitives where they fit the interface.
- Keep global CSS minimal; prefer Tailwind classes and local component-level code.
- Design for mobile, tablet, and desktop from the start.

## Responsive QA

Useful viewport widths to check:

- `320px` small mobile
- `390px` mobile
- `768px` tablet
- `1024px` tablet/desktop boundary
- desktop widths such as `1280px`

The page should avoid horizontal overflow at all supported sizes.

## Adding shadcn Components

The project uses the `@/*` alias for `src/*`.

Example:

```bash
npx shadcn@4.11.0 add card
```

Generated components should land in `src/components/ui/`.

## Agent Notes

Future coding agents should read [AGENTS.md](./AGENTS.md) before making changes. It contains the project conventions, architecture notes, and implementation guidance.

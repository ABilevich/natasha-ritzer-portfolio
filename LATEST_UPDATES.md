# Latest Updates

Date: 2026-07-06

## Footer Social Links

- Updated the homepage `ConnectSection` social icons to use local SVG assets for:
  - LinkedIn
  - Dribbble
  - Behance
- Updated the white shared footer variant to include:
  - Left navigation: About, Projects, CV
  - Right-aligned social icons grouped with the copyright
  - LinkedIn, Behance, and Dribbble icons rendered at `32x32px`
- Added the final social URLs:
  - LinkedIn: `https://www.linkedin.com/in/natasha-ritzer-ux-ui/`
  - Behance: `https://www.behance.net/natasha-ritzer-ux-ui`
  - Dribbble: `https://dribbble.com/Natiritzer27`
- Social links open in a new tab with `rel="noreferrer"`.
- Added local icon assets:
  - `src/assets/linkedin-icon.svg`
  - `src/assets/behance-icon.svg`
  - `src/assets/dribbble-icon.svg`
- Verified the white footer on desktop and `390px` mobile:
  - Icons render as actual icon shapes, not filled squares.
  - Icons measure `32x32px`.
  - No horizontal overflow.

## Validation

- `npm run build` passed.
- `npm run lint` passed.

---

Date: 2026-07-04

## Project Case Study System

- Expanded the reusable project case-study layout across all active project pages:
  - Delphi One
  - Agenda Vital
  - BNC
  - Regalalo
  - Port Salus
  - Habit Driven
- Updated the shared desktop project page width from `1216px` to `1312px`.
- Standardized the desktop case-study grid:
  - Left column: `593px`
  - Gap: `30px`
  - Right column: `689px`
  - Total width: `1312px`
- Applied the same `1312px` structure to both:
  - The title/description and project details section.
  - The project image gallery section.

## Gallery Layout Updates

- Updated all case-study gallery images to scale to fit their containers.
- Gallery images now use centered alignment on both axes.
- Replaced remaining gallery `object-cover` behavior with `object-contain` so images are not cropped.
- Kept project card thumbnails separate from case-study galleries; card thumbnails still use cover behavior where appropriate.

### 3-Image Gallery

- Used by Delphi One, BNC, and Habit Driven.
- Desktop layout:
  - Left column: `593px`
  - Right column: `689px`
  - Column gap: `30px`
- Right-column image containers now use:
  - Top image: `405px` height
  - Bottom image: `405px` height
  - Stack gap: `30px`
  - Total stack height: `840px`
- The left image stretches to match the right stack height.

### 2x2 Gallery

- Used by Agenda Vital, Regalalo, and Port Salus.
- Desktop layout:
  - Left column: `593px`
  - Right column: `689px`
  - Column gap: `30px`
  - Row gap: `30px`
- Image containers now use `369px` height on desktop.

## Additional Project Pages

- Created reusable project pages for:
  - Agenda Vital
  - BNC
  - Regalalo
  - Port Salus
  - Habit Driven
- Connected project cards and featured project references to their matching project detail routes where available.
- Organized project-specific assets into dedicated folders under `src/assets/projects/`.

## Habit Driven Case Study

- Added `/projects/habit-driven`.
- Created `src/assets/projects/habit-driven/` for Habit Driven assets.
- Updated Habit Driven project text and details:
  - Client: Habit Driven
  - Industry: Wellness / Productivity
  - Role: Product Designer / Visual Designer
  - Scope: Brand Identity, UX/UI, AI Chat, Social Media Assets, Email Marketing, Landing Pages
  - Duration: 1 Year
- Switched Habit Driven to the 3-image gallery structure.
- Added final Habit Driven gallery images:
  - Landing page overview
  - Mobile app showcase
  - Brand and app presentation

## Port Salus Case Study

- Updated Port Salus project text and details.
- Added final Port Salus 2x2 gallery images:
  - Logo construction
  - Logo exploration
  - Brand lockup
  - Brand guidelines overview

## Homepage / Projects Page Adjustments

- Removed the Delphi One Project Management card from the full Projects page gallery.
- Reintroduced Delphi One as a homepage-only shortcut under the Project Management accordion.
- Kept the full Projects page and homepage Project Management behavior separated.

## Delphi One Case Study

- Created and refined the `/projects/delphi-one` project page.
- Updated the first section with the project title, description, project details, and aligned two-column layout.
- Added the final Delphi One gallery images:
  - Outlook
  - Onboarding
  - Create Debate
- Adjusted the gallery to use the intended two-column desktop composition:
  - One tall image on the left.
  - Two stacked images on the right.
- Tuned the gallery containers so the left and right columns align visually.
- Added an optional reusable case-study text block for project notes under gallery imagery.
- Added the Delphi One gallery note under the left image:
  - Text source lives in `src/features/projects/case-studies/delphi-one/delphiOneCaseStudy.ts`.
  - Shared renderer lives in `src/features/projects/components/ProjectTextBlock.tsx`.
  - Type support lives in `src/features/projects/case-studies/types.ts` as `galleryNote`.
- Updated the Delphi One note layout so:
  - The note aligns to the bottom of the gallery row with the lower right image.
  - The image container above the note expands to fill the remaining left-column space.
  - The image fills the container with `object-cover object-top`, preserving the top of the screenshot.
  - The note text is `18px`.

## Full-Size Image Viewer

- Added click-to-open behavior for gallery images.
- Full-size images open in a screen-level viewer.
- Clicking the opened image toggles an extra zoom level.
- Moving the mouse over a zoomed image shifts the zoom focus to help inspect and read details.
- Clicking outside the image closes the viewer.
- Escape closes the viewer.
- Replaced the close button with a plain Material-style close icon at `32x32px`.
- Adjusted viewer spacing so tall images can use more of the screen height.

## Delphi One Routing

- Connected all Delphi One project entries to `/projects/delphi-one`.
- Added the Delphi One route to both:
  - UX UI Design project entry.
  - Project Management project entry.
- Updated project gallery cards so Delphi One cards navigate to the case-study page.
- Updated homepage project cards through shared project data.
- Updated the Projects page featured section:
  - Mobile featured Delphi One card links to the case-study page.
  - Desktop featured Delphi One title links to the case-study page.
  - Desktop featured preview image links to the case-study page.
  - “View project” links to the case-study page.
- Linked the homepage parallax Delphi One mockup image to `/projects/delphi-one`.

## Validation

- `npm run lint` passed.
- `npm run build` passed.
- `/projects/delphi-one` returned `200 OK` locally.

# Latest Updates

Date: 2026-06-30

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

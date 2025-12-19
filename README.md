=======
# Sai Duduru — Personal Website (Gatsby 5)

Animated personal site built with Gatsby and React to showcase experience, skills, and projects. The landing page includes a typewriter intro, animated loader, responsive timeline, and floating quick actions for LinkedIn, GitHub, and a resume download.

## Highlights
- Animated welcome screen, typewriter hero, and cursor-following background glow for a lively first impression.
- Work timeline with collapsible bullet points, responsive layouts (two-column or single-column), and an optional auto-scroll tour.
- Skills and certification grid, plus project cards linking to detailed repos and writeups.
- Floating quick-action buttons for LinkedIn, GitHub, resume download, and a contact modal with direct emails.
- Scroll-triggered motion via `aos` and `react-vertical-timeline-component` for smooth section reveals.

## Tech Stack
- Gatsby 5, React 18
- AOS for scroll animations
- react-vertical-timeline-component for the experience section
- Custom CSS in `src/styles` plus static assets in `src/components/picutres` and `static/`

## Prerequisites
- Node.js 18+ (required by Gatsby 5)
- npm or yarn

## Quick Start
```bash
npm install          # or yarn
npm run develop      # starts http://localhost:8000
# GraphiQL is available at http://localhost:8000/___graphql during development
```

## Scripts
- `npm run develop` – local dev server with hot reload.
- `npm run build` – production build to `public/`.
- `npm run serve` – serve the production build locally.
- `npm run clean` – clear Gatsby caches.
- `npm run format` – format JS/TS/JSON/MD/CSS with Prettier.

## Content & Customization
- Hero, about text, work experiences (the `experiences` array), skills, certifications, and projects live in `src/pages/index.js`.
- Contact emails are defined in `src/pages/Modal.js`.
- Resume download is served from `static/resume.pdf`; replace that file to update the floating resume button.
- Global styles: `src/styles/global.css`; loader styles: `src/styles/loading.css`; modal styles: `src/styles/modal.css`.
- Images/icons are under `src/components/picutres/`; adjust imports in `src/pages/index.js` if you rename assets.
- Site metadata and manifest live in `gatsby-config.js`. Optionally set `GATSBY_GA_MEASUREMENT_ID` to enable Google Analytics.

## Build & Deploy
```bash
npm run build
```
The static output in `public/` can be deployed to Netlify, Vercel, S3/CloudFront, or any static host. If you change the base path, update `start_url` and related paths in `gatsby-config.js`.

## Project Structure (key paths)
- `src/pages/index.js` – main landing page with all sections.
- `src/pages/Modal.js` – contact modal component.
- `src/styles/` – global, loading, and modal styling.
- `static/` – public assets (e.g., `resume.pdf`).
- `gatsby-config.js` – site metadata, manifest, and analytics wiring.
>>>>>>> bc64dbd (readme)

# CLAUDE.md

## Project overview

JOAM is Joshua Agbali's personal portfolio. The current deployable site is a static black-and-white editorial website built with plain HTML, CSS, and vanilla JavaScript.

The local folder may be named `JOA`, but the visible site brand, browser title, README, and documentation should refer to the site as `JOAM`.

## Development

- No framework, backend, package install, or build step is required for the final static site.
- Open `index.html` directly or serve the folder with any static file server.
- Keep the site lightweight and dependency-minimal.
- Do not introduce a CSS framework unless explicitly requested.
- Do not rebuild from scratch or create a nested project.

## Content conventions

- Main pages are `index.html`, `experience.html`, `projects.html`, `gear.html`, `gallery.html`, and `map.html`.
- Navigation order is Home, Experiences, Projects, Gear, Gallery, Map, CV.
- Contact and social links live in the footer. Do not add About or Contact pages unless explicitly requested.
- The Gallery page is an editorial masonry photo wall.
- The Map page uses thumbnail photo markers through Leaflet and OpenStreetMap. Edit `photoLocations` in `script.js` to refine coordinates.
- Keep language personal, concise, and professional.
- Do not invent awards, internships, publications, real links, or completed experiences.
- Preserve the minimalist JOAM style: black editorial base, thin borders, full-color photography, serif headings, generous whitespace, subtle hover color, and responsive layouts.
- Preserve accessibility, responsive layouts, and reduced-motion support.

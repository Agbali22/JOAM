# AGENTS.md

## Working in this repository

This is currently a static JOAM personal website built with plain HTML, CSS, and vanilla JavaScript.

- Build directly in this repository; do not create a nested app folder.
- The folder may be named `JOA`, but the website brand is `JOAM`.
- Preserve the static site setup unless the user explicitly asks to return to React.
- Main files are `index.html`, `experience.html`, `projects.html`, `gear.html`, `gallery.html`, `map.html`, `styles.css`, and `script.js`.
- The Vercel-ready copy is in `JOAM/`, with CSS renamed to `style.css`.
- Maintain the black editorial design system in `styles.css`.
- Navigation order is Home, Experiences, Projects, Gear, Gallery, Map, CV.
- The photo map lives in `map.html`; edit the `photoLocations` array in `script.js` to refine photo coordinates.
- Avoid making the homepage too busy.
- Do not invent achievements, awards, internships, publications, or fake links.
- Keep the design responsive, professional, and appropriate for college applications, outreach, internships, volunteering, and personal projects.
- Verify changes with static file checks. Do not require npm for the final static site.
- Do not commit `node_modules/`.

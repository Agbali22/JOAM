# JOAM Personal Website

A deploy-ready static website built with HTML, CSS, and vanilla JavaScript.

## Navigate the site

- `index.html` — Home
- `experience.html` — Experiences
- `projects.html` — Projects
- `gear.html` — Gear
- `gallery.html` — Gallery
- `map.html` — Photo map
- `Joshua_Agbali_Resume_Spaced.pdf` — Résumé

Every page includes the same primary navigation menu and links back to the home page through the Joshua Agbali wordmark.

## Deploy

No installation, dependency download, framework, build command, or output directory is required.

### Vercel

Import the repository or upload this folder. Keep the framework preset as **Other**, leave the build command empty, and use `.` as the output directory if one is requested.

### Netlify

Drag this folder into Netlify Drop, or connect the repository and leave the build command empty. Use `.` as the publish directory.

### GitHub Pages

Commit the contents of this folder to the publishing branch, then configure Pages to deploy from the repository root. The included `.nojekyll` file ensures the files are served directly.

## Local preview

The site can be opened directly from `index.html`. A static file server is recommended when checking the interactive photo map because it uses external Leaflet and OpenStreetMap resources.

## Structure

All image files live in the images folder. Pages, the resume, style.css, and script.js remain in the site root.

# JOAM

JOAM is a refined personal portfolio website for Joshua Agbali, designed as a polished digital introduction to his work, interests, and professional story. Built with plain HTML, CSS, and vanilla JavaScript, the site remains lightweight, easy to maintain, and well suited for sharing across portfolios, outreach, and academic or professional applications.

## Overview

The site presents a clear narrative through a series of thoughtfully structured pages:

- A welcoming home experience that frames the overall identity and tone
- Dedicated sections for experiences, projects, gear, and photography
- A visual system rooted in editorial design, strong typography, and generous whitespace
- A lightweight set of interactions that support navigation, content discovery, and gallery viewing

There is intentionally no standalone About or Contact page. Contact details and social links are presented in the footer so the experience stays focused and concise.

## Project structure

- [index.html](index.html) — Home page
- [experience.html](experience.html) — Professional and personal experiences
- [projects.html](projects.html) — Selected projects
- [gear.html](gear.html) — Equipment and tools
- [gallery.html](gallery.html) — Editorial photo gallery
- [map.html](map.html) — Photo map
- [style.css](style.css) — Core visual design, layout, and responsiveness
- [script.js](script.js) — Navigation, text effects, gallery behavior, content toggles, and map functionality

## Getting started

No framework, backend, or build step is required.

To view the site locally, open [index.html](index.html) directly in a browser, or serve the folder with any static file server. For example:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Assets and content

The site relies on local assets stored in the [assets](assets) directory, including imagery for experience, projects, gear, and gallery pages, along with the resume PDF.

A few content conventions are worth preserving:

- The Gear page uses local product-style imagery, grouped by use case rather than sales language.
- The Projects page uses focused visuals where they strengthen the presentation.
- The Map page uses Leaflet with OpenStreetMap tiles so the photo map works across modern browsers without an Apple developer token.
- The photo marker locations can be refined by updating the `photoLocations` array in [script.js](script.js).

## Editing guidance

- Update page content directly in the matching HTML file.
- Adjust colors, spacing, cards, and responsive behavior in [style.css](style.css).
- Change the homepage text effect in [script.js](script.js).
- Replace the resume PDF by placing a new file in [assets](assets) and updating the CV link in the navigation.
- Refine map coordinates by editing the `photoLocations` array in [script.js](script.js).

## Deployment

The site can be published as a static folder or archive. For example, it can be uploaded to Vercel as the project folder or ZIP archive without any build command.

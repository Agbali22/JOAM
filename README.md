# JOAM

A minimal black-and-white editorial personal website for Joshua Agbali, built with plain HTML, CSS, and vanilla JavaScript.

There is no framework, backend, package install, or build step. Open `index.html` directly or serve the folder with any static file server.

## Pages

- `index.html` - Home
- `experience.html` - Experiences
- `projects.html` - Projects
- `gear.html` - Gear
- `gallery.html` - Gallery
- `map.html` - Photo map
- `styles.css` - Shared styling in the source folder
- `style.css` - Shared styling in the deploy-ready folders
- `script.js` - Mobile navigation, typewriter headline, gallery lightbox, experience toggles, and photo map behavior

There is intentionally no About page and no Contact page. Contact and social links live in the footer.

## Assets

Use this structure:

```text
assets/
  experience/
    fsu-chemistry.jpg
    rickards-logo.png
    rickards-track.jpg
  gear/
    alienware-monitor.png
    asics-gel-1130.png
    beats-solo-4.png
    brooks-revel-7.png
    camelbak-velocity.png
    cerave-am-spf30.png
    cerave-daily-lotion.png
    cerave-foaming-cleanser.png
    cerave-pm-lotion.png
    garmin-running-watch.png
    invicta-pro-diver.png
    macbook-neo.png
    nikon-d7500.png
    neutrogena-gel-cleanser.png
    neutrogena-spf50.png
    new-balance-2002r.png
    organized-chaos-journal.png
    polo-quarter-zip.png
    razer-huntsman-mini.png
    razer-viper-v3-pro.png
    timex-weekender.png
    whoop-bicep-band.png
  gallery/
    alley-camera-self-portrait.jpg
    american-airlines-vintage-plane.jpg
    boarding-pass-nikon-travel.jpg
    dc-metro-smartrip-card.jpg
    featured-photo-1.jpg
    featured-photo-2.jpg
    featured-photo-3.jpg
    featured-photo-4.jpg
    featured-photo-5.jpg
    freer-gallery-exterior.jpg
    gallery-1.jpg
    gallery-2.jpg
    gallery-3.jpg
    gallery-4.jpg
    gallery-5.jpg
    hotel-lobby-tablet-work.jpg
    metro-station-overlook.jpg
    museum-women-movement-portrait.jpg
    smithsonian-castle-towers.jpg
    smithsonian-garden-red-buildings.jpg
    underground-metro-platform.jpg
    walking-dc-sidewalk-back-view.jpg
    washington-dc-avenue.jpg
    washington-monument-framed.jpg
    yellow-blue-vintage-airplane.jpg
  projects/
    crashlab.jpg
    olympiadcoach.jpg
    smartplace.jpg
  favicon.png
  apple-touch-icon.png
  Joshua_Agbali_Resume_Spaced.pdf
```

The Gear page uses local product-style images in `assets/gear/`, grouped by how the item is used. Each card links out to the matching item page, but the site intentionally avoids prices, seller language, and affiliate-style copy.

The Projects page uses intentional project screenshots in `assets/projects/` where they fit the design. CivilSense currently uses a title-card visual instead of a screenshot.

The homepage Spotify section uses an embedded playlist mini hero. If the embed is blocked by a browser, the footer and card link still point to Spotify.

The Map page uses Leaflet with OpenStreetMap tiles so the photo map works across modern browsers without an Apple developer token. The small thumbnail markers are placed near where each photo was taken. Update the `photoLocations` array in `script.js` when exact addresses or coordinates are available.

## Editing

- Change page copy directly in the matching HTML file.
- Change colors, spacing, cards, and responsive behavior in `styles.css`.
- Change typewriter text in `script.js`.
- Replace the CV by putting the new PDF in `assets/` and updating the `CV` nav link on each page.
- To update map locations, edit the `photoLocations` array in `script.js`.

## Deployment

Upload the `JOAM.zip` file to Vercel, or upload the `JOAM/` folder if your uploader accepts folders. No build command is needed.

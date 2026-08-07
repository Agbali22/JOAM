const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const typedHeadline = document.querySelector('#typed-headline');

if (typedHeadline) {
  const text = 'hello, Joshua here';
  let index = 0;

  function typeNextCharacter() {
    typedHeadline.textContent = text.slice(0, index);
    index += 1;

    if (index <= text.length) {
      window.setTimeout(typeNextCharacter, 58);
    }
  }

  window.setTimeout(typeNextCharacter, 260);
}

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('p');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  if (lightboxImage) {
    lightboxImage.src = '';
    lightboxImage.alt = '';
  }
}

if (lightbox && lightboxImage && lightboxCaption) {
  document.querySelectorAll('.gallery-card').forEach((card) => {
    card.addEventListener('click', () => {
      const image = card.querySelector('img');
      const caption = card.dataset.caption || image?.alt || 'Photo';
      const location = card.dataset.location || '';

      if (!image) return;

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = location ? `${caption} / ${location}` : caption;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  lightboxClose?.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}

document.querySelectorAll('.experience-interactive').forEach((row) => {
  const trigger = row.querySelector('.experience-toggle');
  const summary = row.querySelector('.experience-panel-summary');
  const detail = row.querySelector('.experience-panel-detail');

  if (!trigger || !summary || !detail) return;

  function toggleExperienceDetail() {
    const isOpen = row.classList.toggle('is-flipped');
    trigger.setAttribute('aria-pressed', String(isOpen));
    summary.setAttribute('aria-hidden', String(isOpen));
    detail.setAttribute('aria-hidden', String(!isOpen));
  }

  trigger.addEventListener('click', toggleExperienceDetail);
  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleExperienceDetail();
    }
  });
});

const photoMapElement = document.querySelector('#photo-map');

if (photoMapElement) {
  const mapPreview = document.querySelector('.map-preview');
  const mapPreviewImage = mapPreview?.querySelector('img');
  const mapPreviewTitle = mapPreview?.querySelector('h2');
  const mapPreviewText = mapPreview?.querySelector('p:not(.eyebrow)');
  const mapPreviewPlace = mapPreview?.querySelector('span');

  const photoLocations = [
    {
      title: 'Women and the Movement',
      place: 'National Museum of African American History and Culture, Washington, DC',
      image: './assets/gallery/museum-women-movement-portrait.jpg',
      alt: 'Joshua standing beside a Women and the Movement exhibit',
      lat: 38.891183,
      lng: -77.032752,
      tone: '#fb923c'
    },
    {
      title: 'Boarding Pass',
      place: 'Jacksonville International Airport, Florida',
      image: './assets/gallery/boarding-pass-nikon-travel.jpg',
      alt: 'Boarding pass beside a Nikon camera strap while traveling',
      lat: 30.49161,
      lng: -81.684242,
      tone: '#38bdf8'
    },
    {
      title: 'Blowout Portrait',
      place: 'Old Bainbridge Road, Tallahassee, Florida',
      image: './assets/gallery/hair-blowout-portrait-01.jpg',
      alt: 'Joshua seated with a full hair blowout in warm indoor light',
      lat: 30.476,
      lng: -84.3008,
      tone: '#fb923c'
    },
    {
      title: 'Metro Card',
      place: 'Dulles Airport Metro Station, Virginia',
      image: './assets/gallery/dc-metro-smartrip-card.jpg',
      alt: 'Washington DC SmarTrip metro card held in hand',
      lat: 38.955834,
      lng: -77.447779,
      tone: '#38bdf8'
    },
    {
      title: 'Metro Overlook',
      place: 'Foggy Bottom-GWU Metro Station, Washington, DC',
      image: './assets/gallery/metro-station-overlook.jpg',
      alt: 'View over a Washington DC metro station platform and train',
      lat: 38.90073,
      lng: -77.050117,
      tone: '#38bdf8'
    },
    {
      title: 'Dusk Portrait',
      place: 'Kleman Plaza, Tallahassee, Florida',
      image: './assets/gallery/featured-photo-1.jpg',
      alt: 'Joshua at dusk wearing a white shirt',
      lat: 30.4397882,
      lng: -84.283182,
      tone: '#fb923c'
    },
    {
      title: 'Monument Frame',
      place: 'National Museum of African American History and Culture, Washington, DC',
      image: './assets/gallery/washington-monument-framed.jpg',
      alt: 'Washington Monument framed by architecture and sky',
      lat: 38.891283,
      lng: -77.032652,
      tone: '#93c5fd'
    },
    {
      title: 'Underground Metro',
      place: 'Foggy Bottom-GWU Metro Station, Washington, DC',
      image: './assets/gallery/underground-metro-platform.jpg',
      alt: 'Washington DC underground metro train at the platform',
      lat: 38.90086,
      lng: -77.05002,
      tone: '#38bdf8'
    },
    {
      title: 'Camera Day',
      place: 'The Shops at Montebello, Montebello, California',
      image: './assets/gallery/gallery-1.jpg',
      alt: 'Joshua holding a camera outdoors',
      lat: 34.035883,
      lng: -118.087397,
      tone: '#facc15'
    },
    {
      title: 'Freer Gallery',
      place: 'Freer Gallery of Art, Washington, DC',
      image: './assets/gallery/freer-gallery-exterior.jpg',
      alt: 'Freer Gallery exterior under a blue sky',
      lat: 38.8881222,
      lng: -77.0276002,
      tone: '#4ade80'
    },
    {
      title: 'Second Blowout Portrait',
      place: 'Old Bainbridge Road, Tallahassee, Florida',
      image: './assets/gallery/hair-blowout-portrait-02.jpg',
      alt: 'Side portrait of Joshua with a full hair blowout',
      lat: 30.47613,
      lng: -84.30067,
      tone: '#fb923c'
    },
    {
      title: 'Yellow and Blue Plane',
      place: 'Smithsonian National Air and Space Museum, Washington, DC',
      image: './assets/gallery/yellow-blue-vintage-airplane.jpg',
      alt: 'Yellow and blue vintage airplane hanging in a museum',
      lat: 38.8886847,
      lng: -77.0197731,
      tone: '#facc15'
    },
    {
      title: 'Street Profile',
      place: 'South Montebello, California',
      image: './assets/gallery/featured-photo-4.jpg',
      alt: 'Joshua walking in a street with mountains behind him',
      lat: 34.0146519,
      lng: -118.1158647,
      tone: '#facc15'
    },
    {
      title: 'Smithsonian Garden',
      place: 'Smithsonian Castle, Washington, DC',
      image: './assets/gallery/smithsonian-garden-red-buildings.jpg',
      alt: 'Smithsonian garden with red buildings and summer greenery',
      lat: 38.8888469,
      lng: -77.0243202,
      tone: '#4ade80'
    },
    {
      title: 'American Airlines Plane',
      place: 'Smithsonian National Air and Space Museum, Washington, DC',
      image: './assets/gallery/american-airlines-vintage-plane.jpg',
      alt: 'Vintage American Airlines airplane inside a museum',
      lat: 38.88855,
      lng: -77.01962,
      tone: '#facc15'
    },
    {
      title: 'Sidewalk Back View',
      place: '1247 20th St NW, Washington, DC',
      image: './assets/gallery/walking-dc-sidewalk-back-view.jpg',
      alt: 'Joshua walking down a DC sidewalk in backlight with a shopping bag',
      lat: 38.90667,
      lng: -77.04492,
      tone: '#fb923c'
    },
    {
      title: 'Castle Towers',
      place: '12th St SW, Washington, DC',
      image: './assets/gallery/smithsonian-castle-towers.jpg',
      alt: 'Smithsonian Castle towers framed by trees and sky',
      lat: 38.887592,
      lng: -77.028247,
      tone: '#4ade80'
    },
    {
      title: 'Hotel Lobby Work',
      place: 'Embassy Suites by Hilton Washington DC Georgetown',
      image: './assets/gallery/hotel-lobby-tablet-work.jpg',
      alt: 'Joshua working on a tablet in a warm hotel lobby',
      lat: 38.9068492,
      lng: -77.0494454,
      tone: '#fb923c'
    },
    {
      title: 'DC Avenue',
      place: 'Washington Circle NW, Washington, DC',
      image: './assets/gallery/washington-dc-avenue.jpg',
      alt: 'Washington DC avenue seen through trees and benches',
      lat: 38.902592,
      lng: -77.05076,
      tone: '#4ade80'
    },
    {
      title: 'Alley Self Portrait',
      place: 'The Well Dressed Burrito, Washington, DC',
      image: './assets/gallery/alley-camera-self-portrait.jpg',
      alt: 'Joshua taking a camera self portrait in a city alley',
      lat: 38.9066345,
      lng: -77.0439369,
      tone: '#fb923c'
    },
    {
      title: 'Close Portrait',
      place: 'Kleman Plaza, Tallahassee, Florida',
      image: './assets/gallery/gallery-2.jpg',
      alt: 'Close portrait of Joshua at dusk',
      lat: 30.43992,
      lng: -84.28305,
      tone: '#fb923c'
    }
  ];

  const photoDescriptions = {
    'Women and the Movement': 'A museum portrait with warm light, dark walls, and a quiet documentary feel.',
    'Boarding Pass': 'A travel detail frame: Nikon strap, boarding pass, and the start of a trip.',
    'Blowout Portrait': 'A personal style frame with warm indoor light and a freshly shaped blowout.',
    'Metro Card': 'A small transit detail that turns a metro card into part of the story.',
    'Metro Overlook': 'A wide look over the Metro platform, built around lines, shadows, and movement.',
    'Dusk Portrait': 'A calm evening portrait with the city lights beginning to show behind the frame.',
    'Monument Frame': 'The Washington Monument held between architecture, sky, and negative space.',
    'Underground Metro': 'A cinematic underground platform moment with warm concrete and train light.',
    'Camera Day': 'A camera-day portrait that feels casual, reflective, and tied to the act of making images.',
    'Freer Gallery': 'A bright exterior frame with museum architecture, open sky, and summer light.',
    'Second Blowout Portrait': 'A side portrait focused on shape, texture, and the quiet confidence of the moment.',
    'Yellow and Blue Plane': 'A bold aircraft frame with museum darkness, yellow paint, and strong diagonal movement.',
    'Street Profile': 'A California street profile with mountains, road light, and a still walking moment.',
    'Smithsonian Garden': 'A garden and red-brick architecture frame with soft greenery and summer color.',
    'American Airlines Plane': 'A polished aircraft museum frame with chrome, glass, and aviation history.',
    'Sidewalk Back View': 'A back-view city walk with afternoon light, reflections, and motion through DC.',
    'Castle Towers': 'A distant view of the Smithsonian Castle towers, framed by trees and sky.',
    'Hotel Lobby Work': 'A quieter travel-night image, focused on working, writing, and warm interior light.',
    'DC Avenue': 'A wide city avenue view with benches, trees, and a calm line into the distance.',
    'Alley Self Portrait': 'A reflective alley self portrait with camera, shadow, and city texture.',
    'Close Portrait': 'A close dusk portrait with a more intimate, still mood.'
  };

  function updateMapPreview(location) {
    if (!mapPreview || !mapPreviewImage || !mapPreviewTitle || !mapPreviewText || !mapPreviewPlace) return;

    mapPreview.style.setProperty('--accent', location.tone);
    mapPreview.style.setProperty('--accent-glow', `${location.tone}30`);
    mapPreview.classList.add('is-active');
    mapPreviewImage.src = location.image;
    mapPreviewImage.alt = location.alt;
    mapPreviewTitle.textContent = location.title;
    mapPreviewText.textContent = photoDescriptions[location.title] || location.alt;
    mapPreviewPlace.textContent = location.place;
  }

  function buildPopup(location) {
    return `
      <article class="map-popup-card">
        <img src="${location.image}" alt="${location.alt}">
        <h3>${location.title}</h3>
        <p>${photoDescriptions[location.title] || location.alt}</p>
        <p>${location.place}</p>
      </article>
    `;
  }

  if (window.L) {
    const map = L.map(photoMapElement, {
      scrollWheelZoom: true,
      worldCopyJump: true,
      zoomAnimation: true,
      zoomDelta: 0.5,
      zoomSnap: 0.25,
      wheelDebounceTime: 90,
      wheelPxPerZoomLevel: 180
    }).setView([38.9, -77.03], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const markers = photoLocations.map((location) => {
      const icon = L.divIcon({
        className: '',
        html: `<button class="photo-marker" type="button" style="--accent:${location.tone};--accent-glow:${location.tone}33" aria-label="View ${location.title}"><img src="${location.image}" alt=""></button>`,
        iconSize: [58, 58],
        iconAnchor: [29, 58],
        popupAnchor: [0, -56]
      });

      const marker = L.marker([location.lat, location.lng], { icon })
        .addTo(map)
        .bindPopup(buildPopup(location), { className: 'photo-map-popup', closeButton: true });

      marker.on('click', () => {
        document.querySelectorAll('.photo-marker.is-active').forEach((markerElement) => {
          markerElement.classList.remove('is-active');
        });
        marker.getElement()?.querySelector('.photo-marker')?.classList.add('is-active');
        map.flyTo([location.lat, location.lng], Math.max(map.getZoom(), 14), { duration: 1.7 });
        updateMapPreview(location);
      });

      return marker;
    });

    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.18));
    updateMapPreview(photoLocations[0]);
  } else {
    photoMapElement.innerHTML = '<p class="map-fallback">The map library could not load. Check your internet connection and refresh.</p>';
  }
}

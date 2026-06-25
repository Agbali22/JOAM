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

document.addEventListener('DOMContentLoaded', () => {

  // 1. Renderizado Dinámico del Menú de Navegación
  const navList = document.getElementById('navList');

  if (navList && typeof NAV_MENU_DATA !== 'undefined') {
    const currentPath = window.location.pathname;

    NAV_MENU_DATA.forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = item.url;
      a.textContent = item.text;

      // Abrir enlaces externos en nueva pestaña (ej. Instagram)
      if (item.external) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }

      // Detectar enlace de la página activa actual
      const isHome = (currentPath === '/' || currentPath.endsWith('/index.html') || currentPath.endsWith('/')) && item.url === './';
      const isCurrentPage = currentPath.includes(item.url.replace('./', '')) && item.url !== './';

      if (isHome || isCurrentPage) {
        a.classList.add('active');
      }

      li.appendChild(a);
      navList.appendChild(li);
    });
  }

  // 2. Menú Móvil Responsive (Toggle)
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // 3. Renderizado Dinámico e Inicialización de Hoteles & Destinos
  const destinationsWrapper = document.getElementById('destinationsWrapper');
  const destinationsSection = document.querySelector('.destinations-section');

  if (destinationsWrapper && typeof DESTINATIONS_DATA !== 'undefined') {
    DESTINATIONS_DATA.forEach((dest) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'swiper-slide destination-card';
      slideDiv.setAttribute('data-bg', dest.image);

      slideDiv.innerHTML = `
        <a href="${dest.image}" data-fancybox="destinos" data-caption="${dest.title}" class="destination-link">
          <img src="${dest.image}" alt="${dest.title}">
          <div class="destination-overlay">
            <h4 class="destination-title">${dest.title}</h4>
          </div>
        </a>
      `;

      destinationsWrapper.appendChild(slideDiv);
    });

    // Inicialización de Fancybox v5 para la sección de Destinos
    Fancybox.bind('[data-fancybox="destinos"]', {
      Hash: false,
      Thumbs: false,
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "fullscreen", "close"],
        },
      },
    });

    // Inicialización del Carrusel Swiper de Destinos
    new Swiper('.destinationsSwiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      },
      on: {
        init: function () {
          updateSectionBackground(this);
        },
        slideChange: function () {
          updateSectionBackground(this);
        }
      }
    });
  }

  // Función para actualizar dinámicamente el fondo en diagonal de Destinos
  function updateSectionBackground(swiper) {
    if (!destinationsSection) return;

    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      const bgImage = activeSlide.getAttribute('data-bg');
      if (bgImage) {
        destinationsSection.style.backgroundImage = `
          linear-gradient(135deg, rgba(3, 169, 244, 0.75), rgba(0, 188, 212, 0.75)),
          url('${bgImage}')
        `;
      }
    }
  }

  // 4. Renderizado Dinámico del Hero Slider Principal
  const heroWrapper = document.getElementById('heroWrapper');

  if (heroWrapper && typeof HERO_SLIDES_DATA !== 'undefined') {
    HERO_SLIDES_DATA.forEach((slide) => {
      const slideDiv = document.createElement('div');

      if (slide.type === 'video') {
        slideDiv.className = 'swiper-slide slide-video';
        slideDiv.setAttribute('data-yt-id', slide.youtubeId);
        slideDiv.innerHTML = `
          <div class="video-container">
            <div id="yt-player-${slide.youtubeId}"></div>
          </div>
          <div class="slide-content">
            <span class="subtitle">${slide.subtitle}</span>
            <h2>${slide.title}</h2>
          </div>
        `;
      } else {
        slideDiv.className = 'swiper-slide';
        slideDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${slide.image}')`;
        slideDiv.innerHTML = `
          <div class="slide-content">
            <span class="subtitle">${slide.subtitle}</span>
            <h2>${slide.title}</h2>
          </div>
        `;
      }

      heroWrapper.appendChild(slideDiv);
    });

    // Inicializar Swiper Principal (Hero)
    new Swiper('.heroSwiper', {
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChangeTransitionStart: function () {
          // Pausar todos los videos de YouTube al cambiar de diapositiva
          if (typeof ytPlayers !== 'undefined') {
            Object.keys(ytPlayers).forEach((id) => {
              if (ytPlayers[id] && typeof ytPlayers[id].pauseVideo === 'function') {
                ytPlayers[id].pauseVideo();
              }
            });

            // Reproducir el video si la diapositiva activa actual es de video
            let activeSlide = this.slides[this.activeIndex];
            if (activeSlide && activeSlide.classList.contains('slide-video')) {
              let videoId = activeSlide.getAttribute('data-yt-id');
              if (ytPlayers[videoId] && typeof ytPlayers[videoId].playVideo === 'function') {
                ytPlayers[videoId].playVideo();
              }
            }
          }
        }
      }
    });
  }

  // 5. Renderizado Dinámico de Ofertas y Cuadrícula de Tours
  const toursContainer = document.getElementById('toursContainer');

  if (toursContainer && typeof TOURS_DATA !== 'undefined') {
    TOURS_DATA.forEach((tour) => {
      const tourCard = document.createElement('div');
      tourCard.className = 'tour-card-poster';

      tourCard.innerHTML = `
        ${tour.badge ? `<span class="tour-badge">${tour.badge}</span>` : ''}
        
        <div class="poster-container">
          <a href="${tour.image}" data-fancybox="tours" data-caption="${tour.title} - ${tour.dates}" class="poster-link">
            <img src="${tour.image}" alt="${tour.title}" class="poster-img">
            
            <div class="poster-overlay">
              <h4 class="poster-title">${tour.title}</h4>
              <p class="poster-dates">
                <i class="fa-solid fa-calendar-days"></i> ${tour.dates}
              </p>
              <p class="poster-price">${tour.priceText}</p>
            </div>
          </a>

          <a href="${tour.whatsappLink}" target="_blank" class="btn-reserve-inline" title="Reservar por WhatsApp">
            <i class="fa-brands fa-whatsapp"></i> Reservar
          </a>
        </div>
      `;

      toursContainer.appendChild(tourCard);
    });

    // Inicialización de Fancybox v5 para la ampliación de afiches/tours
    Fancybox.bind('[data-fancybox="tours"]', {
      Hash: false,
      Thumbs: false,
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "fullscreen", "close"],
        },
      },
    });
  }

  // 6. Formulario de Contacto hacia WhatsApp
  const waForm = document.getElementById('whatsappContactForm');

  if (waForm) {
    waForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      const phone = "18578321961"; // Número oficial de la agencia
      const text = `Hola, mi nombre es ${name}.%0A*Asunto:* ${subject}%0A*Mensaje:* ${message}`;
      
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
  }

  // 7. Carga e inicialización de la API IFrame de YouTube
  initYouTubeAPI();
});

// -------------------------------------------------------------
// Lógica Global de la API de YouTube IFrame
// -------------------------------------------------------------
let ytPlayers = {};

function initYouTubeAPI() {
  let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  if (firstScriptTag && firstScriptTag.parentNode) {
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}

function onYouTubeIframeAPIReady() {
  document.querySelectorAll('.slide-video').forEach((slide) => {
    let videoId = slide.getAttribute('data-yt-id');
    let elementId = `yt-player-${videoId}`;

    ytPlayers[videoId] = new YT.Player(elementId, {
      host: 'https://www.youtube-nocookie.com',
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        playlist: videoId,
        fs: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 1,
        mute: 1,
        enablejsapi: 1,
        origin: window.location.origin
      },
      events: {
        'onReady': (event) => {
          event.target.mute();
          let iframe = document.getElementById(elementId);
          if (iframe) {
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
          }
          if (slide.classList.contains('swiper-slide-active')) {
            event.target.playVideo();
          }
        },
        'onError': (event) => {
          console.warn(`Error ${event.data} al cargar el video ${videoId}`);
          slide.classList.add('video-fallback');
        }
      }
    });
  });
}
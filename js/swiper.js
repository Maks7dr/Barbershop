const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    // Мобильные устройства
    320: {
      slidesPerView: 1,
      spaceBetween: 10, // Отступ между слайдами
    },
    // Планшеты
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Ноутбуки и выше
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.modal-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('active');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('active');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// modal
(() => {
  const openModalBtns = document.querySelectorAll('[data-modal-open]');
  const closeModalBtns = document.querySelectorAll('[data-modal-close]');
  const modals = document.querySelectorAll('[data-modal]');

  openModalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modals[index].classList.remove('is-hidden');
      document.body.classList.add('no-scroll');
    });
  });
  closeModalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modals[index].classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
    });
  });
  modals.forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
      }
    });
  });
})();

// Button to top
document.addEventListener('DOMContentLoaded', function () {
  const scrollButton = document.querySelector('.btn-scroll-up');
  const servicesSection = document.getElementById('services');

  window.addEventListener('scroll', function () {
    const sectionTop = servicesSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight / 2) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });
});

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

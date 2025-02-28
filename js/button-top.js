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

const version = '3.1';
document.write(`<script src="app.js?v=${version}"><\/script>`);

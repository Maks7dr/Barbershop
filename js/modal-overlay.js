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

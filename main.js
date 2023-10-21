const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.buregr-close');

burgerBtn.addEventListener('click', (event) => {
  burgerMenu.classList.add('menu-show_start');
  burgerMenu.classList.add('menu-show_end');
});

burgerClose.addEventListener('click', (event) => {
  burgerMenu.classList.remove('menu-show_end');
  burgerMenu.classList.remove('menu-show_start');
});

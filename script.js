const menuOpenBtn = document.querySelector('.nav__open_icon');
const menuCloseBtn = document.querySelector('.nav__close_icon');

menuOpenBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu');
})

menuCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('show-mobile-menu');
})
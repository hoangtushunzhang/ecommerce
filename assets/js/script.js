const bar = document.querySelector('#bar');
const close = document.querySelector(".header__navbar--close");
const nav = document.querySelector('.header__navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
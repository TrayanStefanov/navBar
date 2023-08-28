const menu = document.querySelector('#mobile-menu');
const navbarButtons = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    navbarButtons.classList.toggle('active');
})
const menuBurger = document.querySelector('#menuButton');
const navMobile = document.querySelector('#navMobile');
const body = document.querySelector('body');

menuBurger.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
});


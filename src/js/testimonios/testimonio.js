import { updateBubblePositions } from "../animaciones/animaciones.js";

const menuBurger = document.querySelector('#menuButton');
const navMobile = document.querySelector('#navMobile');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {

    updateBubblePositions();

    // Repetir la ejecución de la función cada 8 segundos
    setInterval(updateBubblePositions, 10000);
});

menuBurger.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
});


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

const fondo = document.querySelectorAll("#fondo > div");
let index = 0;

function fondoGradiente() {
    if(index < fondo.length - 1) {
        setTimeout(() => {
            fondo[index].classList.add('hidden');
            index = index + 1;
            fondo[index].classList.remove('hidden');
        }, 2000);
    } else {
        setTimeout(() => {
            fondo[index].classList.add('hidden');
            index = 0;
            fondo[index].classList.remove('hidden');
        }, 2000);
    }
}

setInterval(fondoGradiente, 2200);
import { updateBubblePositions } from "../animaciones/animaciones.js";

const menuBurger = document.querySelector('#menuButton');
const navMobile = document.querySelector('#navMobile');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
    
    updateBubblePositions();
    // Repetir la ejecución de la función cada 8 segundos
    setInterval(updateBubblePositions, 8000);
});

menuBurger.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
});

const inicio = document.querySelector("#inicio");
const btnInicio = document.querySelector("#inicio > button");
const mensaje = document.querySelector("#mensaje");
const btnMensaje = document.querySelector("#mensaje > button");

btnInicio.addEventListener("click", () => {
    inicio.classList.toggle("hidden");
    mensaje.classList.toggle("hidden");
})

btnMensaje.addEventListener("click", () => {
    inicio.classList.toggle("hidden");
    mensaje.classList.toggle("hidden");
})

// Slider de testimonios
const slider = document.querySelector('#t-container');
const sliderItems = document.querySelectorAll('#t-container > div');
const sliderBtnRegresar = document.querySelector('#t-container > #btn-regresar');
const sliderBtnAvanzar = document.querySelector('#t-container > #btn-avanzar');
let indexSlider = 0;

console.log(sliderItems)

sliderBtnAvanzar.addEventListener('click', () => {
    if (indexSlider < sliderItems.length - 1) {
        sliderItems[indexSlider].classList.add('hidden');
        indexSlider++;
        sliderItems[indexSlider].classList.remove('hidden');
    } else {
        sliderItems[indexSlider].classList.add('hidden');
        indexSlider = 0;
        sliderItems[indexSlider].classList.remove('hidden');
    }
})

sliderBtnRegresar.addEventListener('click', () => {
    console.log(indexSlider)
    if (indexSlider > 0) {
        sliderItems[indexSlider].classList.add('hidden');
        indexSlider--;
        sliderItems[indexSlider].classList.remove('hidden');
    } else {
        sliderItems[indexSlider].classList.add('hidden');
        indexSlider = sliderItems.length - 1;
        sliderItems[indexSlider].classList.remove('hidden');
    }
})

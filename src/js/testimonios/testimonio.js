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
const sliderItems = document.querySelectorAll('#t-container > div');
const sliderBtnRegresar = document.querySelector('#t-container > #btn-regresar');
const sliderBtnAvanzar = document.querySelector('#t-container > #btn-avanzar');
let indexSlider = 0;

const sliderBackground = document.querySelectorAll('#t-background > div');

console.log(sliderItems)

sliderBtnAvanzar.addEventListener('click', () => {
    // Aplica la animación de salida SOLO al sliderItem actual
    sliderItems[indexSlider].classList.add('animate-fade-right', 'animate-ease-out', 'animate-reverse', 'animate-duration-500');

    // Espera que termine la animación de salida antes de ocultar y cambiar
    setTimeout(() => {
        // Oculta el sliderItem y el sliderBackground actual
        sliderItems[indexSlider].classList.add('hidden');
        sliderBackground[indexSlider].classList.add('hidden');

        // Limpia las clases de animación de salida SOLO en sliderItem
        sliderItems[indexSlider].classList.remove('animate-fade-right', 'animate-ease-out', 'animate-reverse', 'animate-duration-500');

        // Mueve el índice
        if (indexSlider < sliderItems.length - 1) {
            indexSlider++;
        } else {
            indexSlider = 0;
        }

        // Muestra el nuevo sliderItem y sliderBackground
        sliderItems[indexSlider].classList.remove('hidden');
        sliderBackground[indexSlider].classList.remove('hidden');

        // Aplica la animación de entrada SOLO al nuevo sliderItem
        sliderItems[indexSlider].classList.add('animate-fade-left', 'animate-ease-out', 'animate-duration-1000');

        // Elimina las clases de animación de entrada después de que termine
        setTimeout(() => {
            sliderItems[indexSlider].classList.remove('animate-fade-left', 'animate-ease-out', 'animate-duration-1000');
        }, 1000); // Tiempo de la animación de entrada
    }, 600); // Tiempo de la animación de salida
});

sliderBtnRegresar.addEventListener('click', () => {
    // Aplica la animación de salida al sliderItem actual
    sliderItems[indexSlider].classList.add('animate-fade-left', 'animate-ease-out', 'animate-reverse', 'animate-duration-500');

    // Espera 500 ms a que termine la animación de salida
    setTimeout(() => {
        // Oculta el sliderItem y sliderBackground actual
        sliderItems[indexSlider].classList.add('hidden');
        sliderBackground[indexSlider].classList.add('hidden');

        // Limpia las clases de animación de salida
        sliderItems[indexSlider].classList.remove('animate-fade-left', 'animate-ease-out', 'animate-reverse', 'animate-duration-500');

        // Mueve el índice hacia atrás
        if (indexSlider > 0) {
            indexSlider--;
        } else {
            indexSlider = sliderItems.length - 1;
        }

        // Muestra el nuevo sliderItem y sliderBackground
        sliderItems[indexSlider].classList.remove('hidden');
        sliderBackground[indexSlider].classList.remove('hidden');

        // Aplica la animación de entrada al nuevo sliderItem
        sliderItems[indexSlider].classList.add('animate-fade-right', 'animate-ease-out', 'animate-duration-1000');

        // Elimina la animación de entrada después de que termine
        setTimeout(() => {
            sliderItems[indexSlider].classList.remove('animate-fade-right', 'animate-ease-out', 'animate-duration-1000');
        }, 1000); // Tiempo que dura la entrada (1000ms)
    }, 600); // Tiempo que dura la salida (500ms)
});

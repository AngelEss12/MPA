import { inicio } from "./inicio/variables.js";
import { actualizarBGIMG } from "./inicio/header.js";
import { leyes } from "./inicio/leyes.js";
import { initTouchListeners } from "./inicio/touchListener.js";
import { nextVirtud, backVirtud} from './inicio/navigacion.js';

document.addEventListener("DOMContentLoaded", () => {
  leyes();
  initTouchListeners(inicio.virtudes.slider, nextVirtud, backVirtud)
});

// Función para mostrar el menú mobile
const { menuBurger, navMobile, body } = inicio.menu
menuBurger.addEventListener('click', () => {
  navMobile.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
});

// Funciones para la seccion de virtudes
// Evento para el botón "Siguiente"
inicio.virtudes.nextBtn.addEventListener('click', nextVirtud);

// Evento para el botón "Anterior"
inicio.virtudes.prevBtn.addEventListener('click',  backVirtud);

// Header
// Configurar intervalo
const { mediaQueryImg } = inicio.header;
let sliderInterval = setInterval(() => actualizarBGIMG(mediaQueryImg), 4500);

// Manejar resize correctamente
mediaQueryImg.addEventListener('change', actualizarBGIMG);

// Pausar con un boton al interactuar
// document.querySelectorAll('a, button').forEach(element => {
//     element.addEventListener('click', () => {
//         clearInterval(sliderInterval);
//         sliderInterval = setInterval(() => actualizarBGIMG(mediaQueryImg), 5000);
//     });
// });
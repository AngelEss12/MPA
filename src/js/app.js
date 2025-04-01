import { inicio } from "./inicio/variables.js";
import { actualizarBGIMG } from "./inicio/header.js";
import { leyes } from "./inicio/leyes.js";
import { initTouchListeners } from "./inicio/touchListener.js";
import { nextVirtud, backVirtud} from './inicio/navigacion.js';

document.addEventListener("DOMContentLoaded", () => {
  leyes();
  initTouchListeners(inicio.virtudes.slider, nextVirtud, backVirtud)
});

// Header
const { mediaQueryImg } = inicio.header;
let sliderInterval = setInterval(() => actualizarBGIMG(mediaQueryImg), 4500); // Configurar intervalo

// Manejar resize correctamente
mediaQueryImg.addEventListener('change', actualizarBGIMG);

// Menú mobile
const { menuBurger, navMobile, body } = inicio.menu
menuBurger.addEventListener('click', () => {
  navMobile.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
});

// Virtudes
inicio.virtudes.nextBtn.addEventListener('click', nextVirtud); // Evento para el botón "Siguiente"

inicio.virtudes.prevBtn.addEventListener('click',  backVirtud); // Evento para el botón "Anterior"

// Pausar con un boton al interactuar
// document.querySelectorAll('a, button').forEach(element => {
//     element.addEventListener('click', () => {
//         clearInterval(sliderInterval);
//         sliderInterval = setInterval(() => actualizarBGIMG(mediaQueryImg), 5000);
//     });
// });
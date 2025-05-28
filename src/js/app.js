import { inicio } from "./inicio/variables.js";
import { actualizarBGIMG } from "./inicio/header.js";
import { leyes } from "./inicio/leyes.js";
import { initTouchListeners } from "./inicio/touchListener.js";
import { nextVirtud, backVirtud} from './inicio/navigacion.js';

document.addEventListener("DOMContentLoaded", () => {
  leyes();
  initTouchListeners(inicio.virtudes.slider, nextVirtud, backVirtud);
  const imgInicio = document.querySelector('#imgInicio');
  imgInicio.src = inicio.header.allImages[0]; // Establecer la primera imagen al cargar
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
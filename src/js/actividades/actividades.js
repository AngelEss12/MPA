import { updateBubblePositions } from '../animaciones/animaciones.js';
import { actividades } from "./variables.js";
import { observerActividades, observerGallery } from "./observer.js";
import { moveleft, moveright } from "./navigacion.js";
import { mostrarImg, cerrarImg } from "./gallery.js";

document.addEventListener("DOMContentLoaded", () => {
  updateBubblePositions();

  // Repetir la ejecución de la función cada 8 segundos
  setInterval(updateBubblePositions, 10000);

  // Selecciona todas las tarjetas con la clase 'card' y comienza a observarlas
  document.querySelectorAll('.card').forEach(card => observerActividades.observe(card));
  document.querySelectorAll('.gallery').forEach(img => observerGallery.observe(img));
});

// Menú
const { body, menuBurger, navMobile } = actividades.menu;
menuBurger.addEventListener('click', () => {
  navMobile.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
});

// Seccion Actividades
const { arrowLeft, arrowRight } = actividades.activityContainer;
arrowLeft.addEventListener('click', () => {
moveleft();
})

arrowRight.addEventListener('click', () => {
moveright();
})

// Seccion de Viajes
const { galleryViajes, closeBtn, container } = actividades.viajes;

galleryViajes.forEach(img => {
  mostrarImg(img);
})

closeBtn.addEventListener('click', () => {
  container.classList.add('hidden');
});

container.addEventListener('click', (e) => {
  cerrarImg(e);
});
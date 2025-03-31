import { inicio } from "./inicio/variables.js";
import { leyes } from "./inicio/leyes.js";

const virtudes = document.querySelector('#virtudes');
const contVirtudes = document.querySelectorAll('#contendor-virtudes > div');

const menuBurger = document.querySelector('#menuButton');
const navMobile = document.querySelector('#navMobile');
const body = document.querySelector('body');

document.addEventListener("DOMContentLoaded", () => {
  leyes();
  // Función para mostrar el menú mobile

});

menuBurger.addEventListener('click', () => {
  navMobile.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
});

const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const poitns = document.querySelectorAll('.point')
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Variables para rastrear el estado actual del slider
let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;

// Inicializamos el contador
let contador = 1;

// Variables para el touch
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
const umbralTouch = 30; // Umbral mínimo para considerar un deslizamiento

// Listener para eventos touch
slider.addEventListener("touchstart", (event) => {
    // Captura la posición inicial del touch
    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;
});

slider.addEventListener("touchend", (event) => {
    // Captura la posición final del touch
    touchEndX = event.changedTouches[0].screenX;
    touchEndY = event.changedTouches[0].screenY;

    // Llama a la función para manejar el movimiento
    touchMove();
});

const touchMove = () => {
  // Calcula las diferencias entre las posiciones de inicio y fin
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  // Verifica si el deslizamiento es más horizontal que vertical y si supera el umbral
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > umbralTouch) {
      // Si el deslizamiento fue hacia la derecha
      if (deltaX < 0) {
          nextVirtud();
      }
      // Si el deslizamiento fue hacia la izquierda
      else if (deltaX > 0) {
          backVirtud();
      }
  }
};

const nextVirtud = () => {
  poitns[currentIndex].classList.remove("bg-slate-500");
  cards[currentIndex].classList.add("hidden");
  if (currentIndex < totalCards - contador) {
    currentIndex++;
    cards[currentIndex].classList.remove("hidden");
    cards[currentIndex].classList.add("flex", "fade-left", "animate-duration-700");
    updateSliderPosition();
  } else {
    currentIndex = 0;
    cards[currentIndex].classList.remove("hidden");
    cards[currentIndex].classList.add("flex", "fade-left", "animate-duration-700");
    updateSliderPosition();
  }
}

const backVirtud = () => {
  poitns[currentIndex].classList.remove("bg-slate-500");
  cards[currentIndex].classList.add("hidden");
  if (currentIndex > 0) {
    currentIndex--;
    cards[currentIndex].classList.remove("hidden");
    cards[currentIndex].classList.add("flex", "fade-right", "animate-duration-1000");
    updateSliderPosition();
  } else {
    currentIndex = totalCards - contador;
    cards[currentIndex].classList.remove("hidden");
    cards[currentIndex].classList.add("flex", "fade-right", "animate-duration-1000");
    updateSliderPosition();
  }
}

// Función para actualizar la posición del slider
const updateSliderPosition = () => {
  const slideWidth = document.querySelector('.card').offsetWidth;
  poitns[currentIndex].classList.add('bg-slate-500');
};

// Evento para el botón "Siguiente"
nextBtn.addEventListener('click', nextVirtud);

// Evento para el botón "Anterior"
prevBtn.addEventListener('click',  backVirtud);

// 1. Declara las variables GLOBALES al inicio
const srcBG = [
  '/assets/banner/Banner.jpeg',
  '/assets/banner/Banner 1 H.webp', 
  '/assets/banner/Banner 2 H.webp', 
  '/assets/banner/Banner 3 H.webp'
];

const srcBGs = [
  '/assets/banner/Banner.jpeg',
  '/assets/banner/Banner 1.webp', 
  '/assets/banner/Banner 2.webp', 
  '/assets/banner/Banner 3.webp'
];

// 2. Ahora usa estas variables en tu código
const hdText = document.querySelectorAll('.hd-body > p');
const bgInicio = document.querySelectorAll('#bgInicio > img');
let currentActive = 0;

// Precargar todas las imágenes
function preloadImages() {
    const allImages = [
        '/assets/banner/Banner.jpeg',
        '/assets/banner/Banner 1 H.webp',
        '/assets/banner/Banner 2 H.webp',
        '/assets/banner/Banner 3 H.webp',
        '/assets/banner/Banner 1.webp',
        '/assets/banner/Banner 2.webp',
        '/assets/banner/Banner 3.webp'
    ];
    
    allImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}
preloadImages();

// Función optimizada para cambiar imágenes
function actualizarBGIMG(e) {
    const isMobile = !e.matches;
    const images = isMobile ? srcBGs : srcBG;
    
    // Ocultar elemento actual
    bgInicio[currentActive].classList.remove('opacity-100');
    bgInicio[currentActive].classList.add('opacity-0');
    
    // Calcular nuevo índice
    currentActive = (currentActive + 1) % bgInicio.length;
    
    // Mostrar nuevo elemento
    bgInicio[currentActive].src = images[currentActive];
    bgInicio[currentActive].classList.remove('opacity-0');
    bgInicio[currentActive].classList.add('opacity-100');
    
    // Sincronizar textos
    hdText.forEach((text, index) => {
        text.classList.toggle('hidden', index !== currentActive);
    });
}

// Configurar intervalo
let sliderInterval = setInterval(() => actualizarBGIMG(mediaQueryImg), 5000);

// Manejar resize correctamente
const mediaQueryImg = window.matchMedia('(min-width: 640px)');
mediaQueryImg.addEventListener('change', actualizarBGIMG);

// Pausar al interactuar
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('click', () => {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(() => actualizarBGIMG(mediaQueryImg), 5000);
    });
});
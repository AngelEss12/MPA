const virtudes = document.querySelector('#virtudes');
const contVirtudes = document.querySelectorAll('#contendor-virtudes > div');

document.addEventListener("DOMContentLoaded", () => {
  leyes();
});

const leyes = () => {
  const slides = document.querySelectorAll("#leyes a, #leyOro");
  let currentIndex = 0;

  // Mostrar el primer slide al cargar
  slides[currentIndex].classList.remove("hidden");
  slides[currentIndex].classList.add("entrada");

  setInterval(() => {
    // Animar el slide actual para desaparecer (fade out)
    slides[currentIndex].classList.remove("entrada");
    slides[currentIndex].classList.add("salida");

    // Después de 1 segundo (duración de la animación fade out), ocultar el slide actual
    setTimeout(() => {
      slides[currentIndex].classList.add("hidden");
      slides[currentIndex].classList.remove("salida");

      // Pasar al siguiente slide
      currentIndex = (currentIndex + 1) % slides.length;

      // Si estamos en el slide 6 (último slide), volver al slide 1
      if (currentIndex === slides.length - 1) {
        currentIndex = 0; // Volver al slide 1 cuando llegamos al último slide
      }

      // Mostrar el siguiente slide con fade in
      slides[currentIndex].classList.remove("hidden");
      slides[currentIndex].classList.add("entrada");

    }, 700); // Tiempo de fade out (1s)
  }, 5000); // Cambiar cada 5 segundos
}

// Variables para el touch
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
const umbralTouch = 30; // Umbral mínimo para considerar un deslizamiento

addEventListener("touchstart", (event) => {
  // Captura la posición inicial del touch
  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
});

const slider = document.querySelector('.slider');
const poitns = slider.querySelectorAll('.point')
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Variables para rastrear el estado actual del slider
let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;

// Función para actualizar la posición del slider
function updateSliderPosition() {
  const slideWidth = document.querySelector('.card').offsetWidth;
  slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  poitns[currentIndex].classList.add('bg-slate-500');
}

// Evento para el botón "Siguiente"
nextBtn.addEventListener('click', function () {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateSliderPosition();
  } else {
    currentIndex = 0;
    updateSliderPosition();
  }
});

// Evento para el botón "Anterior"
prevBtn.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  } else {
    currentIndex = totalCards - 1;
    updateSliderPosition();
  }
});

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

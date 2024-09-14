const avanzar = document.querySelector('#arrow-right');
const retroceder = document.querySelector('#arrow-left');
const virtudes = document.querySelector('#virtudes');
const contVirtudes = document.querySelectorAll('#contendor-virtudes > div');

document.addEventListener("DOMContentLoaded", () => {
  avanzar.addEventListener('click', changeVirtudRight);
  leyes();
  retroceder.addEventListener('click', changeVirtudLeft);
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

    }, 1000); // Tiempo de fade out (1s)
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

virtudes.addEventListener("touchend", (event) => {
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
      // Si el deslizamiento fue hacia la izquierda
      if (deltaX < 0) {
        changeVirtudRight();
      }
      // Si el deslizamiento fue hacia la derecha
      else if (deltaX > 0) {
        changeVirtudLeft();
      }
  }
};

let index = 0;

const changeVirtudRight = () => {
  if (contVirtudes[index].classList.contains("flex")) {
    contVirtudes[index].classList.remove("flex");
    contVirtudes[index].classList.add("hidden");
    index++;
    if (index === contVirtudes.length) {
      index = 0;
      contVirtudes[index].classList.remove("hidden", "fade-left", "fade-right");
      contVirtudes[index].classList.add("flex", "fade-left");
    } else {
      contVirtudes[index].classList.remove("hidden", "fade-left", "fade-right");
      contVirtudes[index].classList.add("flex", "fade-left");
    }
  } else {
    contVirtudes[index + contVirtudes.length - 1].classList.remove("flex");
    contVirtudes[index + contVirtudes.length - 1].classList.add("hidden");
    contVirtudes[index].classList.remove("hidden", "fade-left", "fade-right");
    contVirtudes[index].classList.add("flex", "fade-left");
  }
}

const changeVirtudLeft = () => {
  if (contVirtudes[index].classList.contains("flex")) {
    contVirtudes[index].classList.remove("flex");
    contVirtudes[index].classList.add("hidden");
    index--;
    if (index < 0) {
      index = contVirtudes.length - 1;
    }
    contVirtudes[index].classList.remove("hidden", "fade-left", "fade-right");
    contVirtudes[index].classList.add("flex", "fade-right");
  } else {
    contVirtudes[index - contVirtudes.length + 1].classList.remove("flex");
    contVirtudes[index - contVirtudes.length + 1].classList.add("hidden");
    contVirtudes[index].classList.remove("hidden", "fade-left", "fade-right");
    contVirtudes[index].classList.add("flex", "fade-right");
  }
}

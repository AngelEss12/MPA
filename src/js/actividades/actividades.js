import { updateBubblePositions } from '../animaciones/animaciones.js';

const menuBurger = document.querySelector('#menuButton');
const navMobile = document.querySelector('#navMobile');
const body = document.querySelector('body');

document.addEventListener("DOMContentLoaded", () => {
  updateBubblePositions();

  // Repetir la ejecución de la función cada 8 segundos
  setInterval(updateBubblePositions, 10000);
  
  // Crear un IntersectionObserver para detectar cuándo las tarjetas entran en el viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Verifica si el elemento es visible en el viewport
      if (entry.isIntersecting) {
        // Llama a la función para animar la tarjeta visible
        moveCard(entry.target);

        // Muestra en la consola un mensaje indicando que el elemento ya es visible
        console.log('Ya es visible');
      }
    });
  });

  let options = {
    rootMargin: "0px",
    threshold: 0.25,
  };

  const observerGallery = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Verifica si el elemento es visible en el viewport
      if (entry.isIntersecting) {
        // Llama a la función para animar la tarjeta visible
        visibleImg(entry.target);

        // Muestra en la consola un mensaje indicando que el elemento ya es visible
        console.log('Ya es visible');
      }
    });
  }, options);

  // Selecciona todas las tarjetas con la clase 'card' y comienza a observarlas
  document.querySelectorAll('.card').forEach(card => observer.observe(card));
  document.querySelectorAll('.gallery').forEach(img => observerGallery.observe(img));
});

menuBurger.addEventListener('click', () => {
  navMobile.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
});

const moveTextE = () => {
  let index = 0;
  const textEsp = document.querySelectorAll('#text-E > li');
  // Mostrar la imagen inicial al cargar

  setInterval(() => {

    setTimeout(() => {
      textEsp[index].classList.add("hidden");

      index = (index + 1) % textEsp.length;
    }, 7970)
    textEsp[index].classList.remove("hidden");
  }, 8000);

}
let index = 0;
// Función que aplica la animación a la tarjeta visible
const moveCard = (visibleCard) => {
  // Selecciona todas las tarjetas con la clase 'card'
  const cards = document.querySelectorAll('.card');

  // Inicializa un retraso para las animaciones progresivas
  let delay = 0;

  // Recorre todas las tarjetas
  cards.forEach((card) => {
    // Si la tarjeta actual es la que se acaba de hacer visible
    if (card === visibleCard) {
      // Usa un setTimeout para aplicar un retraso progresivo
      setTimeout(() => {
        // Agrega la clase 'up' para activar la animación definida en CSS
        card.classList.add('up');
      }, delay * 100); // Multiplica por 1000 para convertir segundos a milisegundos

      // Usa otro setTimeout para eliminar la animación después de 2 segundos
      setTimeout(() => {
        card.classList.remove('up');
      }, (delay + 2) * 800);

      // Incrementa el retraso para la siguiente tarjeta
      delay++;
    }
  });
};

// Función que aplica la animación a la tarjeta visible
const visibleImg = (visibleCard) => {
  // Selecciona todas las tarjetas con la clase 'card'
  const gallery = document.querySelectorAll('.gallery');

  // Inicializa un retraso para las animaciones progresivas
  let delay = 0;

  // Recorre todas las tarjetas
  gallery.forEach((img) => {
    // Si la tarjeta actual es la que se acaba de hacer visible
    if (img === visibleCard) {
      // Usa un setTimeout para aplicar un retraso progresivo
      setTimeout(() => {
        // Agrega la clase 'up' para activar la animación definida en CSS
        img.classList.add('down');
      }, delay * 1000); // Multiplica por 1000 para convertir segundos a milisegundos

      // Usa otro setTimeout para eliminar la animación después de 2 segundos
      setTimeout(() => {
        img.classList.remove('down');
      }, (delay + 2) * 800);

      // Incrementa el retraso para la siguiente tarjeta
      delay += 1;
    }
  });
};

const arrowLeft = document.querySelector('#l-arrow');
const arrowRight = document.querySelector('#r-arrow');
const containerActividades = document.querySelectorAll('#container-actividades > div');

let indexAct = 0;

arrowLeft.addEventListener('click', () => {
moveleft();
})

arrowRight.addEventListener('click', () => {
moveright();
})

const moveleft = () => {
  if(indexAct === 0) {
    containerActividades[indexAct].classList.add('hidden');
    indexAct = containerActividades.length - 2;
    containerActividades[indexAct].classList.remove('hidden');
  } else {
    containerActividades[indexAct].classList.add('hidden');
    indexAct--;
    containerActividades[indexAct].classList.remove('hidden');
  }
}

const moveright = () => {
  if(indexAct < containerActividades.length - 2) {
    containerActividades[indexAct].classList.add('hidden');
    indexAct++;
    containerActividades[indexAct].classList.remove('hidden');
  } else {
    containerActividades[indexAct].classList.add('hidden');
    indexAct = 0;
    containerActividades[indexAct].classList.remove('hidden');
  }
}

const container = document.getElementById("lightbox");
const picture = document.getElementById("lightbox-img");
const galleryViajes = document.querySelectorAll('.gallery');
const closeBtn = document.getElementById("close-lightbox");

galleryViajes.forEach(img => {
  img.addEventListener('click', () => {
    body.classList.toggle('overflow-hidden');
    container.classList.remove('hidden');
    picture.src = img.src;
  })
})

closeBtn.addEventListener('click', () => {
  container.classList.add('hidden');
});

container.addEventListener('click', (e) => {
  if (e.target !== picture) {
    container.classList.add('hidden')
    body.classList.toggle('overflow-hidden');
}
});
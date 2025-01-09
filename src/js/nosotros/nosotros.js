import { nosotros } from './variables.js';
import { updateBubblePositions } from '../animaciones/animaciones.js';
import { moveLeft, moveRight } from './navegacionIdentidad.js'
import { initTouchListeners } from './touchListeners.js';
import { logoActions, himnoActions, creadorActions } from './identidad.js';
import { animacionHistory } from './historia.js'

//  Cuando el documento carga
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa los listeners touch
    initTouchListeners();

    // Ejecutar la función inmediatamente al cargar la página
    logoActions.init();
    updateBubblePositions();

    // Repetir la ejecución de la función cada 8 segundos
    setInterval(updateBubblePositions, 10000);
});

const { arrowLeft, arrowRight } = nosotros.identidad;

// Izquierda
arrowLeft.addEventListener("click", () => {
    moveLeft();
});

// Derecha
arrowRight.addEventListener("click", () => {
    moveRight();
});

// Logo
nosotros.identidad.progressDiv.addEventListener("animationend", () => {
    logoActions.updateText(); // Evento de la barra del progreso cuando termine la animacion
});

// Himno
const { back, play, next } = nosotros.himno.icons;

play.addEventListener("click", himnoActions.reproducir);
back.addEventListener("click", himnoActions.menos5sg);
next.addEventListener("click", himnoActions.mas5sg);

// Creador
const { closeBtn, container } = nosotros.creador.lightbox;

nosotros.creador.gallery.forEach(imagen => {
    imagen.addEventListener('click', () => {
        creadorActions.visualizarImg(imagen); // Función para mostrar el lightbox
    });
});

closeBtn.addEventListener('click', () => {
    creadorActions.cerrarImg(); // Función para cerrar el lightbox
});

container.addEventListener('click', (e) => {
    creadorActions.lightbox(e); // Cerrar lightbox cuando se haga clic fuera de la imagen
});

// Historia
nosotros.historia.displayHistorias.forEach(div => {
    div.addEventListener('click', () => {
        animacionHistory(div);
    });
});

// Momentos
const slider = document.querySelector('.slider');
const poitns = document.querySelectorAll('.point')
const prevBtn = document.querySelector('prevBtn');
const nextBtn = document.querySelector('nextBtn');

// Variables para rastrear el estado actual del slider
let currentIndex = 0;
let totalCards = document.querySelectorAll('.card').length;

// Creamos una media query para detectar si la pantalla es mayor o igual a 768px
const mediaQuery = window.matchMedia('(min-width: 640px)');

// Inicializamos el contador
let contador = 0;

// Función para actualizar el valor del contador según el tamaño de la pantalla
function actualizarContador(e) {
    if (e.matches) {
        contador = 2; // Si la pantalla es 768px o más, el contador es 2
    } else {
        contador = 1; // Si la pantalla es menor a 768px, el contador es 1
    }
}

// Escuchamos los cambios en el tamaño de la pantalla
mediaQuery.addListener(actualizarContador);

// Llamamos la función inmediatamente para comprobar el tamaño actual de la pantalla
actualizarContador(mediaQuery);

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
    touchMoveMoments();
});

const touchMoveMoments = () => {
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
    if (currentIndex < totalCards - contador) {
        currentIndex++;
        updateSliderPosition();
    } else {
        currentIndex = 0;
        updateSliderPosition();
    }
}

const backVirtud = () => {
    poitns[currentIndex].classList.remove("bg-slate-500");
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    } else {
        currentIndex = totalCards - contador;
        updateSliderPosition();
    }
}

// Función para actualizar la posición del slider
const updateSliderPosition = () => {
    const slideWidth = document.querySelector('.card').offsetWidth;
    slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    poitns[currentIndex].classList.add('bg-slate-500');
};

const teamSelector = document.querySelectorAll('#equipo > div');
const teamNinos = document.querySelector('#niños');
const teamAsesor = document.querySelector('#asesor');
const teamTios = document.querySelector('#tios');
const teamPapis = document.querySelector('#papis');

teamNinos.addEventListener('click', () => {
    mostarTeam(0);
});

teamAsesor.addEventListener('click', () => {
    mostarTeam(1);
});

teamTios.addEventListener('click', () => {
    mostarTeam(2);
});

teamPapis.addEventListener('click', () => {
    mostarTeam(3);
});

function mostarTeam(n) {
    teamSelector.forEach(team => team.classList.add('hidden'));
    switch (n) {
        case 0:
            teamSelector[n].classList.remove('hidden');
            break;
        case 1:
            teamSelector[n].classList.remove('hidden');
            break;
        case 2:
            teamSelector[n].classList.remove('hidden');
            break;
        case 3:
            teamSelector[n].classList.remove('hidden');
            break;
    }
}

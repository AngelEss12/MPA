import { updateBubblePositions } from '../animaciones/animaciones.js'; 
import { nosotros } from './variables.js';
import { logoActions, himnoActions, creadorActions } from './identidad.js'

// Variables para screen Nosotros
const identidadContenido = document.querySelector("#c-identidad");
const identidadTitulo = document.querySelector("#t-identidad");
const arrowLeft = document.querySelector("#l-arrow");
const arrowRight = document.querySelector("#r-arrow");

// Variables para el touch
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
const umbralTouch = 30; // Umbral mínimo para considerar un deslizamiento

// Listener para eventos touch
identidadContenido.addEventListener("touchstart", (event) => {
    // Captura la posición inicial del touch
    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;
});

identidadContenido.addEventListener("touchend", (event) => {
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
            if (identidadTitulo.textContent === "Logo") {
                identidadTitulo.innerHTML = "Himno";
                logoActions.limpiarLogo();
                himnoActions.init();
            } else if (identidadTitulo.textContent === "Himno") {
                identidadTitulo.innerHTML = "Creador";
                himnoActions.limpiarHimno();
                creadorActions.init();
            } else {
                identidadTitulo.innerHTML = "Logo";
                creadorActions.limpiarCreador();
                logoActions.init();
            }
        }
        // Si el deslizamiento fue hacia la derecha
        else if (deltaX > 0) {
            if (identidadTitulo.textContent === "Logo") {
                identidadTitulo.innerHTML = "Creador";
                logoActions.limpiarLogo();
                creadorActions.init();
            } else if (identidadTitulo.textContent === "Creador") {
                identidadTitulo.innerHTML = "Himno";
                creadorActions.limpiarCreador();
                himnoActions.init();
            } else {
                identidadTitulo.innerHTML = "Logo";
                himnoActions.limpiarHimno();
                logoActions.init();
            }
        }
    }
};

//  Cuando el documento carga
document.addEventListener("DOMContentLoaded", () => {
    // Ejecutar la función inmediatamente al cargar la página
    logoActions.init();
    updateBubblePositions();

    // Repetir la ejecución de la función cada 8 segundos
    setInterval(updateBubblePositions, 10000);
    
});

// EventListener para screen Nosotros
// Izquierda
arrowLeft.addEventListener("click", () => {
    if (identidadTitulo.textContent === "Logo") {
        identidadTitulo.innerHTML = "Creador";
        logoActions.limpiarLogo();
        creadorActions.init();
    } else if (identidadTitulo.textContent === "Creador") {
        identidadTitulo.innerHTML = "Himno";
        creadorActions.limpiarCreador();
        himnoActions.init();
    } else {
        identidadTitulo.innerHTML = "Logo";
        himnoActions.limpiarHimno();
        logoActions.init();
    }
});

// Derecha
arrowRight.addEventListener("click", () => {
    if (identidadTitulo.textContent === "Logo") {
        identidadTitulo.innerHTML = "Himno";
        logoActions.limpiarLogo();
        himnoActions.init();
    } else if (identidadTitulo.textContent === "Himno") {
        identidadTitulo.innerHTML = "Creador";
        himnoActions.limpiarHimno();
        creadorActions.init();
    } else {
        identidadTitulo.innerHTML = "Logo";
        creadorActions.limpiarCreador();
        logoActions.init();
    }
});

// Funciones para el Nosotros

// Logo
// Evento de la barra del progreso cuando termine la animacion
nosotros.identidad.progressDiv.addEventListener("animationend", () => {
    logoActions.updateText();
});

// Himno
const { back, play, next } = nosotros.himno.icons;

play.addEventListener("click", himnoActions.reproducir);
back.addEventListener("click", himnoActions.menos5sg);
next.addEventListener("click", himnoActions.mas5sg);

// Creador
const { closeBtn, container } = nosotros.creador.lightbox;

// Función para mostrar el lightbox
nosotros.creador.gallery.forEach(imagen => {
    imagen.addEventListener('click', () => {
        creadorActions.visualizarImg(imagen);
    });
});

// Función para cerrar el lightbox
closeBtn.addEventListener('click', () => {
    creadorActions.cerrarImg();
});

// Cerrar lightbox cuando se haga clic fuera de la imagen
container.addEventListener('click', (e) => {
    creadorActions.lightbox(e);
});

// Historia
nosotros.historia.displayHistorias.forEach(div => {
    div.addEventListener('click', () => {
        div.classList.add('animate-texts')
        setTimeout(() => {
            const lineaTiempo = div.querySelector('[data-history]');
            lineaTiempo.classList.toggle('hidden');
            div.classList.remove('animate-texts');
        }, 600)
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

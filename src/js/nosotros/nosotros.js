import { nosotros } from './variables.js';
import { updateBubblePositions } from '../animaciones/animaciones.js';
import { moveLeft, moveRight, nextVirtud, backVirtud } from './navegacionIdentidad.js';
import { initTouchListeners } from './touchListeners.js';
import { logoActions, himnoActions, creadorActions } from './identidad.js';
import { animacionHistory } from './historia.js';
import { actualizarContador } from './momentos.js';
import { mostarTeam } from './equipo.js';

const menuBurger = document.querySelector('#menuButton');
const navMobile = document.querySelector('#navMobile');
const body = document.querySelector('body');

//  Cuando el documento carga
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa los listeners touch de las secciones de identidad y momentos
    initTouchListeners(nosotros.identidad.contenido, moveRight, moveLeft);

    // Inicializamos los eventos para mover las cards
    initTouchListeners(nosotros.momentos.slider, nextVirtud, backVirtud);

    // Ejecutar la función inmediatamente al cargar la página
    logoActions.init();
    updateBubblePositions();

    // Repetir la ejecución de la función cada 8 segundos
    setInterval(updateBubblePositions, 12000);
});

menuBurger.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
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
// Escuchamos los cambios en el tamaño de la pantalla
const { mediaQuery } = nosotros.momentos;
mediaQuery.addListener(actualizarContador);

// Llamamos la función inmediatamente para comprobar el tamaño actual de la pantalla
actualizarContador(mediaQuery);

const { prevBtn, nextBtn } = nosotros.momentos;

prevBtn.addEventListener("click", () => {
    backVirtud();
});

nextBtn.addEventListener("click", () => {
    nextVirtud();
});

// Equipo
const { teamNinos, teamAsesor, teamTios, teamPapis } = nosotros.equipo;
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
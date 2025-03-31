// Selección de variables del DOM
export const nosotros = {
    touch: {
        // Variables para el touch
        umbralTouch: 30,
    },

    // Variables para la seccion de Identidad especificamente su contenedor e iconos de movimiento
    identidad: {
        contenido: document.querySelector("#c-identidad"),
        titulo: document.querySelector("#t-identidad"),
        arrowLeft: document.querySelector("#l-arrow"),
        arrowRight: document.querySelector("#r-arrow"),
        progressDiv: document.querySelector("#pogress-identidad"),
    },
    // Variables para la seccion de Identidad del 'Logo'
    logo: {
        textIdentidad: document.querySelectorAll("#display-logo > p"),
        displayLogo: document.querySelector("#display-logo"),
        img: document.querySelector("#img"),
    },
    // Variables para la seccion de Identidad del 'himno'
    himno: {
        himnoAudio: new Audio("/assets/audio/Himno Movimiento Pandillas De La Amistad.mp3"),
        displayHimno: document.querySelector("#display-himno"),
        icons: {
            back: document.querySelector("#backIcon"),
            play: document.querySelector("#playIcon"),
            next: document.querySelector("#nextIcon"),
        },
        progress: document.querySelector("#progresoHimno"),
        time: document.querySelector("#timeSound"),
        duration: document.querySelector("#durationSound"),
    },
    // Variables para la seccion de Identidad del 'creador'
    creador: {
        displayCreador: document.querySelector("#displayCreador"),
        gallery: document.querySelectorAll("#displayCreador img"),
        lightbox: {
            container: document.getElementById("lightbox"),
            img: document.getElementById("lightbox-img"),
            closeBtn: document.getElementById("close-lightbox"),
            description: document.createElement("p"),
        },
    },

    // Variables para la seccion de Historia
    historia: {
        displayHistorias: document.querySelectorAll('.displayHistoria'),
    },

    momentos: {
        slider: document.querySelector('.slider'),
        points: document.querySelectorAll('.point'),
        prevBtn: document.getElementById('prevBtn'),
        nextBtn: document.getElementById('nextBtn'),
        // Variables para rastrear el estado actual del slider
        currentIndex: 0,
        totalCards: document.querySelectorAll('.card').length,
        // Creamos una media query para detectar si la pantalla es mayor o igual a 768px
        mediaQuery: window.matchMedia('(min-width: 640px)'),
        contador: 0,
    },

    equipo: {
        teamSelector: document.querySelectorAll('#equipo > div'),
        teamNinos: document.querySelector('#niños'),
        teamAsesor: document.querySelector('#asesor'),
        teamTios: document.querySelector('#tios'),
        teamPapis: document.querySelector('#papis'),
    }
}
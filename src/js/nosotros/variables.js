// Selección de variables del DOM
export const nosotros = {
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
        textIdentidad: document.querySelector("#text-identidad"),
        displayLogo: document.querySelector("#display-logo"),
        img: document.querySelector("#img"),
    },
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
    }
}
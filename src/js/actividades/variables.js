export const actividades = {
    menu: {
        body: document.querySelector('body'),
        menuBurger: document.querySelector('#menuButton'),
        navMobile: document.querySelector('#navMobile')
    },

    observer: {
        cards: document.querySelectorAll('.card'), // Seleeciona todas las cards de ka seccion de Actividades
        gallery: document.querySelectorAll('.gallery'), // Selecciona todas las imagenes de la galeria
    },

    activityContainer: {
        arrowLeft: document.querySelector('#l-arrow'),
        arrowRight: document.querySelector('#r-arrow'),
        containerActividades: document.querySelectorAll('#container-actividades > div'),
    },
    
    viajes: {
        container: document.getElementById("lightbox"),
        picture: document.getElementById("lightbox-img"),
        galleryViajes: document.querySelectorAll('.gallery'),
        closeBtn: document.getElementById("close-lightbox"),
    },
}
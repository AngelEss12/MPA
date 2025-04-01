export const inicio = {
    touch: {
        // Variables para el touch
        umbralTouch: 30,
    },

    header: {
        // 1. Declara las variables GLOBALES al inicio
        mediaQueryImg: window.matchMedia('(min-width: 640px)'),
        
        srcBG: [
            '/assets/banner/Banner.jpeg',
            '/assets/banner/Banner 1 H.webp',
            '/assets/banner/Banner 2 H.webp',
            '/assets/banner/Banner 3 H.webp'
        ],

        srcBGs: [
            '/assets/banner/Banner.jpeg',
            '/assets/banner/Banner 1.webp',
            '/assets/banner/Banner 2.webp',
            '/assets/banner/Banner 3.webp'
        ],

        allImages: [
            '/assets/banner/Banner.jpeg',
            '/assets/banner/Banner 1 H.webp',
            '/assets/banner/Banner 2 H.webp',
            '/assets/banner/Banner 3 H.webp',
            '/assets/banner/Banner 1.webp',
            '/assets/banner/Banner 2.webp',
            '/assets/banner/Banner 3.webp'
        ],

        hdText: document.querySelectorAll('.hd-body > p'),
        bgInicio: document.querySelectorAll('#bgInicio > img'),
    },

    menu: {
        body: document.querySelector('body'),
        menuBurger: document.querySelector('#menuButton'),
        navMobile: document.querySelector('#navMobile')
    },

    leyes: {
        slides: document.querySelectorAll("#leyes a, #leyOro")
    },

    virtudes: {
        slider: document.querySelector('.slider'),
        cards: document.querySelectorAll('.card'),
        totalCards: document.querySelectorAll('.card').length,
        poitns: document.querySelectorAll('.point'),
        prevBtn: document.getElementById('prevBtn'),
        nextBtn: document.getElementById('nextBtn'),
    },
}
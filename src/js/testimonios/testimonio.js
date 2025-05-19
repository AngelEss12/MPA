import { updateBubblePositions } from "../animaciones/animaciones.js";

const menuBurger = document.querySelector('#menuButton');
const navMobile = document.querySelector('#navMobile');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
    
    updateBubblePositions();
    // Repetir la ejecución de la función cada 8 segundos
    setInterval(updateBubblePositions, 8000);
});

menuBurger.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
});

const inicio = document.querySelector("#inicio");
const btnInicio = document.querySelector("#inicio > button");
const mensaje = document.querySelector("#mensaje");
const btnMensaje = document.querySelector("#mensaje > button");


const mtestimonio = document.querySelector("#tMensaje");

// Testimonio completo
const testimoniosCompletos = [
    "El pertenecer a este movimiento fue algo hermoso: un mosaico de experiencias, aventuras y desafíos. Comprendí que no estoy solo; hay más personas con vivencias similares a las mías y juntos podemos alejarnos de lo malo, apoyándonos entre nosotros y, a través de Dios, de manera sana y divertida: jugando, riendo, cantando, atrayendo a más niños, niñas y adolescentes al movimiento, colaborando en las misas y, sobre todo, ayudando de vez en cuando a quien más lo necesite.\n\nTodo empezó en un retiro al que realmente quería ir; no me arrepiento de haber asistido. Fue una experiencia única que impulsó mi crecimiento espiritual, social y personal. No solo me uní a un movimiento, me encontré con una segunda familia donde me sentía seguro y feliz. Con los años dejé de ser el que vivía el retiro para convertirme en quien lo organizaba —y no en uno, sino en varios—, cada uno espectacular. En ellos seguí aprendiendo a expresarme, a abrirme con los demás y a ser servicial. Gracias a esta vivencia, ahora sé que no estoy solo cuando estoy junto a Cristo y María.",
    "Mi experiencia en el movimiento fue una de las mejores de mi vida: un cambio que nunca imaginé. Dios cambió mi vida tras la pérdida de mi hermano; en ese momento no entendía por qué pasaban las cosas, fui necia y hasta juzgué a Dios sin darme cuenta de que era el inicio de mi camino. \n\nLa Pandilla me ayudó a conocer a Dios, a respetar y amar su creación, a valorar cada etapa de mi vida y a honrar a mis padres. Descubrí que el llamado puede venir de una persona, un sueño o una idea; al servir a los demás, incluso a desconocidos, experimenté la misericordia y la gracia de Dios. \n\nGracias a la Pandilla, conocí el amor de Dios en el servicio y sentí su presencia en la Hora Santa y en cada retiro. Aprendí a perderle el miedo a hablar frente a la gente y a dar siempre lo mejor de mí, lecciones que aplico cada día en mi trabajo. Por último, comprendí el amor más grande: Jesús entregó su vida por mí y mis pecados. Aunque a veces me equivoque y me desvíe, sé que Él siempre estará conmigo.",
    "Mi experiencia en Pandillas de la Amistad ha sido lo mejor de los diez años que llevo en el movimiento. Cuando era niña no comprendía su impacto; ahora sé que Pandillas me dio herramientas para crecer, descubrir mis habilidades y fortalecer mi amor y mi fe. Siempre me sentí acompañada y, a través de Dios, fui fortaleciéndome, sintiéndome amada y segura de que jamás volveré a estar sola.",
    "Pandillas de la Amistad fue un gran formador en mi niñez y adolescencia. Siempre estuve rodeado de niños y jóvenes responsables, dedicados y amigables, con el objetivo de servir a Dios y aprender sobre nosotros mismos en el camino. Vivir esa etapa en el grupo fue de gran ayuda: muchas de las habilidades y el autoconocimiento que adquirí los aplico hoy en mi vida diaria.",
    "Durante los siete años que pertenecí a Pandillas de la Amistad, tuve el privilegio de formar parte de una comunidad increíble que me ayudó a crecer como persona y en mi vida espiritual. En este viaje descubrí la importancia de la amistad y la fe; aprendí a ser más sociable y a encontrar mi voz. Descubrí que mis opiniones valen y que puedo expresarlas con confianza. \n\nLo más importante fue darme cuenta de que no estoy sola: tengo amigos que me apoyan y un Dios que me ama y me cuida. Mi paso por la Pandilla fue una de las mejores decisiones de mi vida. Llevo conmigo recuerdos y lecciones que me inspiran cada día.",
    "Con cada encuentro fui dejando atrás el temor a mostrarme tal como soy. Entendí que Dios siempre había estado conmigo, y, él sabía que deseaba tener verdaderos amigos. Aprendí a confiar en los demás y a celebrar nuestros logros por muy pequeños que fueran. Con risas, juegos y reflexiones me ayudaron a desarrollar aquella empatía que yo tanto reprimía, fue ahí que aprendí que la responsabilidad y la seguridad de que llorar y compartir nuestros problemas no nos hace mas débiles, al contrario, demuestra la fortaleza de nuestros corazones al querer salir del sufrimiento todos juntos. \n\nY justo antes de irme, Dios me confió la tarea de guiar a mi Pandilla. Dudé, sentí pánico, pero comprendí que, la verdadera valentía nace de un corazón lleno de fe y amistad, así se puede superar cualquier adversidad.\n\nHoy, con orgullo, ofrezco esta página como testimonio de que confiar en Dios y en tus amigos transforma vidas."
];

const colores = ["bg-[#a7531a]", "bg-[#928419]", "bg-[#136628]", "bg-[#214f87]", "bg-[#702583]", "bg-[#7e1a56]"]

btnInicio.addEventListener("click", () => {
    inicio.classList.toggle("hidden");
    mensaje.classList.toggle("hidden");
})

btnMensaje.addEventListener("click", () => {
    inicio.classList.toggle("hidden");
    mensaje.classList.toggle("hidden");
})

// Slider de testimonios
const sliderItems = document.querySelectorAll('#t-container > div');
const sliderBtnRegresar = document.querySelector('#t-container > #btn-regresar');
const sliderBtnAvanzar = document.querySelector('#t-container > #btn-avanzar');
const sliderBtnTestimonio = document.querySelectorAll('.btn-testimonio');
let indexSlider = 0;

const sliderBackground = document.querySelectorAll('#t-background > div');

sliderBtnAvanzar.addEventListener('click', () => {
    // Aplica la animación de salida SOLO al sliderItem actual
    sliderItems[indexSlider].classList.add('animate-fade-right', 'animate-ease-out', 'animate-reverse', 'animate-duration-500');

    // Espera que termine la animación de salida antes de ocultar y cambiar
    setTimeout(() => {
        // Oculta el sliderItem y el sliderBackground actual
        sliderItems[indexSlider].classList.add('hidden');
        sliderBackground[indexSlider].classList.add('hidden');

        // Limpia las clases de animación de salida SOLO en sliderItem
        sliderItems[indexSlider].classList.remove('animate-fade-right', 'animate-ease-out', 'animate-reverse', 'animate-duration-500');

        // Mueve el índice
        if (indexSlider < sliderItems.length - 1) {
            indexSlider++;
        } else {
            indexSlider = 0;
        }

        // Muestra el nuevo sliderItem y sliderBackground
        sliderItems[indexSlider].classList.remove('hidden');
        sliderBackground[indexSlider].classList.remove('hidden');

        // Aplica la animación de entrada SOLO al nuevo sliderItem
        sliderItems[indexSlider].classList.add('animate-fade-left', 'animate-ease-out', 'animate-duration-1000');

        // Elimina las clases de animación de entrada después de que termine
        setTimeout(() => {
            sliderItems[indexSlider].classList.remove('animate-fade-left', 'animate-ease-out', 'animate-duration-1000');
        }, 1000); // Tiempo de la animación de entrada
    }, 600); // Tiempo de la animación de salida
});

sliderBtnRegresar.addEventListener('click', () => {
    // Aplica la animación de salida al sliderItem actual
    sliderItems[indexSlider].classList.add('animate-fade-left', 'animate-ease-out', 'animate-reverse', 'animate-duration-500');
    
    // Espera 500 ms a que termine la animación de salida
    setTimeout(() => {
        // Oculta el sliderItem y sliderBackground actual
        sliderItems[indexSlider].classList.add('hidden');
        sliderBackground[indexSlider].classList.add('hidden');

        // Limpia las clases de animación de salida
        sliderItems[indexSlider].classList.remove('animate-fade-left', 'animate-ease-out', 'animate-reverse', 'animate-duration-500');

        // Mueve el índice hacia atrás
        if (indexSlider > 0) {
            indexSlider--;
        } else {
            indexSlider = sliderItems.length - 1;
        }

        // Muestra el nuevo sliderItem y sliderBackground
        sliderItems[indexSlider].classList.remove('hidden');
        sliderBackground[indexSlider].classList.remove('hidden');
        
        // Aplica la animación de entrada al nuevo sliderItem
        sliderItems[indexSlider].classList.add('animate-fade-right', 'animate-ease-out', 'animate-duration-1000');
        
        // Elimina la animación de entrada después de que termine
        setTimeout(() => {
            sliderItems[indexSlider].classList.remove('animate-fade-right', 'animate-ease-out', 'animate-duration-1000');
        }, 1000); // Tiempo que dura la entrada (1000ms)
    }, 600); // Tiempo que dura la salida (500ms)
});

const container = document.getElementById("lightbox");
const lightboxTestimonio = document.querySelector("#lightboxTestimonio");
const lightboxTexto = document.querySelector("#lightboxTestimonio > p");
const closeBtn = document.getElementById("close-lightbox");

sliderBtnTestimonio.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Aplica la animación de salida al sliderItem actual cuando se hace click en el testimonio
        sliderItems[indexSlider].classList.add('animate-rotate-y', 'animate-ease-out');

        // Esconder botones de avanzar y regresar cuando se hace click en el testimonio
        sliderBtnAvanzar.classList.add('hidden');
        sliderBtnRegresar.classList.add('hidden');

    setTimeout(() => {
        sliderItems[indexSlider].classList.remove('animate-rotate-y', 'animate-ease-out');
        sliderBtnAvanzar.classList.remove('hidden');
        sliderBtnRegresar.classList.remove('hidden');

        console.log(colores[indexSlider]);

        // Mostrar el lightbox del testimonio
        body.classList.add('overflow-hidden');
        container.classList.remove('hidden');
        lightboxTestimonio.classList.add(colores[indexSlider]);
        lightboxTexto.textContent = testimoniosCompletos[indexSlider];
    }, 500);
    });
})

function cerrarTestimonio(e) {
    if (e.target !== lightboxTestimonio) {
        container.classList.add('hidden')
        body.classList.remove('overflow-hidden');
        lightboxTestimonio.classList.remove(colores[indexSlider]);
    }
}

closeBtn.addEventListener('click', () => {
  container.classList.add('hidden');
  lightboxTestimonio.classList.remove(colores[indexSlider]);
});

container.addEventListener('click', (e) => {
  cerrarTestimonio(e);
});
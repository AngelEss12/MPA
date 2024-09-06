// Variables para screen Nosotros
const identidadContenido = document.querySelector("#c-identidad");
const identidadTitulo = document.querySelector("#t-identidad");
const arrowLeft = document.querySelector("#l-arrow");
const arrowRight = document.querySelector("#r-arrow");
const pogressDiv = document.querySelector("#pogress-identidad");

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
                limpiarLogo();
                himnoIdentidad();
            } else if (identidadTitulo.textContent === "Himno") {
                identidadTitulo.innerHTML = "Creador";
                limpiarHimno();
                creadorIdentidad();
            } else {
                identidadTitulo.innerHTML = "Logo";
                limpiarCreador();
                logoIdentidad();
            }
        }
        // Si el deslizamiento fue hacia la derecha
        else if (deltaX > 0) {
            if (identidadTitulo.textContent === "Logo") {
                identidadTitulo.innerHTML = "Creador";
                limpiarLogo();
                creadorIdentidad();
            } else if (identidadTitulo.textContent === "Creador") {
                identidadTitulo.innerHTML = "Himno";
                limpiarCreador();
                himnoIdentidad();
            } else {
                identidadTitulo.innerHTML = "Logo";
                limpiarHimno();
                logoIdentidad();
            }
        }
    }
};

//  Cuando el documento carga
document.addEventListener("DOMContentLoaded", () => {
    // Ejecutar la función inmediatamente al cargar la página
    contenidoIdentidad();
    updateBubblePositions();

    // Repetir la ejecución de la función cada 8 segundos
    setInterval(updateBubblePositions, 8000);
});

// EventListener para screen Nosotros
// Izquierda
arrowLeft.addEventListener("click", () => {
    if (identidadTitulo.textContent === "Logo") {
        identidadTitulo.innerHTML = "Creador";
        limpiarLogo();
        creadorIdentidad();
    } else if (identidadTitulo.textContent === "Creador") {
        identidadTitulo.innerHTML = "Himno";
        limpiarCreador();
        himnoIdentidad();
    } else {
        identidadTitulo.innerHTML = "Logo";
        limpiarHimno();
        logoIdentidad();
    }
});

// Derecha
arrowRight.addEventListener("click", () => {
    if (identidadTitulo.textContent === "Logo") {
        identidadTitulo.innerHTML = "Himno";
        limpiarLogo();
        himnoIdentidad();
    } else if (identidadTitulo.textContent === "Himno") {
        identidadTitulo.innerHTML = "Creador";
        limpiarHimno();
        creadorIdentidad();
    } else {
        identidadTitulo.innerHTML = "Logo";
        limpiarCreador();
        logoIdentidad();
    }
});

// Funciones para las burbujas
// Animacion de burbujas
const updateBubblePositions = () => {
    const burbujas = document.querySelectorAll("#burbujas > div");
    const container = document.getElementById("burbujas");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    burbujas.forEach((burbuja) => {
        const burbujaSize = burbuja.offsetWidth; // Tamaño de la burbuja

        // Máximas posiciones permitidas
        const maxX = containerWidth - burbujaSize;
        const maxY = containerHeight - burbujaSize;

        // Posiciones aleatorias para bottom, left, y right
        const randomBottom = Math.floor(Math.random() * maxY);
        const randomLeftOrRight = Math.random() > 0.5 ? "left" : "right";
        const randomX = Math.floor(Math.random() * maxX);

        // Asignar las nuevas posiciones
        burbuja.style.position = "absolute";
        burbuja.style.bottom = `-${randomBottom}px`;
        burbuja.style[randomLeftOrRight] = `${randomX}px`;

        // Remover la propiedad contraria para evitar conflictos
        if (randomLeftOrRight === "left") {
            burbuja.style.right = "auto";
        } else {
            burbuja.style.left = "auto";
        }
    });
};

// Funciones para el Nosotros

// Logo
const contenidoIdentidad = () => {
    logoIdentidad();
};

// Instanciamos elementos HTML para el Logo
// Logo
const textIdentidad = document.querySelector("#text-identidad");
const iLogo = document.querySelector("#display-logo");
const img = document.querySelector("#img");

const texts = [
    "El logo del Movimiento Pandillas de la Amistad muestra un globo terráqueo con colores vivos que simbolizan la diversidad y la alegría de la unidad en la fe, reflejando la riqueza cultural de las distintas regiones del mundo.",
    "Sobre el globo, una cruz destaca como símbolo central del cristianismo, recordando que la fe es fundamental para el movimiento. Alrededor, un grupo de niños tomados de la mano representa la unión y la amistad que Pandillas de la Amistad busca fomentar en los jóvenes.",
    'El lema "Unidos Todos... Para Formar un Mundo Mejor" rodea el globo, junto al nombre "Pandillas de la Amistad". Este mensaje refleja la esencia del movimiento: un llamado a los jóvenes a unirse en amistad y fe para construir un futuro lleno de esperanza y amor.',
];

const logoIdentidad = () => {
    img.classList.add("imgLogo");
    iLogo.classList.remove("hidden");
    pogressDiv.classList.remove("hidden");
    textIdentidad.textContent = texts[0];
};

pogressDiv.addEventListener("animationend", () => {
    if (textIdentidad.textContent === texts[0]) {
        textIdentidad.textContent = texts[1];
        rebootAnimation();
    } else if (textIdentidad.textContent === texts[1]) {
        textIdentidad.textContent = texts[2];
        rebootAnimation();
    } else {
        textIdentidad.textContent = texts[0];
        rebootAnimation();
    }
});

const rebootAnimation = () => {
    pogressDiv.classList.remove("animate-load");
    void pogressDiv.offsetWidth;
    pogressDiv.classList.add("animate-load");
};

const limpiarLogo = () => {
    iLogo.classList.add("hidden");
    pogressDiv.classList.add("hidden");
};

// Himno
const himno = new Audio(
    "/assets/audio/Himno Movimiento Pandillas De La Amistad.mp3"
);
const displayHimno = document.querySelector("#display-himno");
const iconBack = document.querySelector("#backIcon");
const iconPlay = document.querySelector("#playIcon");
const iconNext = document.querySelector("#nextIcon");
const timeSound = document.querySelector("#timeSound");
const durationSound = document.querySelector("#durationSound");
const progresoHimno = document.querySelector("#progresoHimno");

const himnoIdentidad = () => {
    displayHimno.classList.remove("hidden");
    displayHimno.classList.add("flex");
    //Texto de duracion del audio
    timeSound.textContent = timeConvert(himno.currentTime);
    durationSound.textContent = timeConvert(himno.duration);
};

function timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = Math.round(num % 60);
    return hours + ":" + minutes.toString().padStart(2, "0");
}

iconPlay.addEventListener("click", reproducir);
function reproducir() {
    iniciar();
    if (himno.paused) {
        himno.play();
        iconPlay.src = "/assets/nosotros/icons/iconPause.png";
    } else {
        himno.pause();
        iconPlay.src = "/assets/nosotros/icons/iconPlay.png";
    }
}

iconBack.addEventListener("click", menos5sg);
function menos5sg() {
    himno.currentTime = himno.currentTime - 5;
}

iconNext.addEventListener("click", mas5sg);
function mas5sg() {
    himno.currentTime = himno.currentTime + 5;
    iniciar();
}

function iniciar() {
    himno.addEventListener("timeupdate", function () {
        // La currenttime especifica el tiempo de reproducción actual y lo divide por la duracion del audio

        // El himno dura 3.25 min que es igual a 205 segundo es decir que cada 2.05s es igual al 1% de la cancion del audio
        progresoHimno.style.width = (this.currentTime * 100) / this.duration + "%";
        timeSound.textContent = timeConvert(himno.currentTime);
        durationSound.textContent =
            "-" + timeConvert(himno.duration - himno.currentTime);
    });
}

const limpiarHimno = () => {
    displayHimno.classList.remove("flex");
    displayHimno.classList.add("hidden");
    himno.pause();
};

// Creador
const displayCreador = document.querySelector("#displayCreador");

const creadorIdentidad = () => {
    displayCreador.classList.remove("hidden");
    displayCreador.classList.add("flex");
};

const limpiarCreador = () => {
    displayCreador.classList.remove("flex");
    displayCreador.classList.add("hidden");
};

// Galeria Creador 
const galleryImages = document.querySelectorAll('#displayCreador img');

    // Selecciona el contenedor del lightbox y su contenido
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.getElementById('close-lightbox');
    const texLightbox = document.createElement("P");

    // Función para mostrar el lightbox
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            setTimeout(() => {
                if(img.id === "img-8") {
                    texLightbox.classList.add('text-sm', 'text-center', 'text-slate-200', 'font-cuerpos', 'px-8', 'py-2');
                    texLightbox.textContent = "Fotografía del Primer retiro del Movimiento Pandillas de la Amistad";
                    lightbox.appendChild(texLightbox);
                    lightboxImg.src = img.src;
                    document.body.style.overflow = 'hidden';
                    lightbox.classList.remove('hidden');
                } else{
                    document.body.style.overflow = 'hidden';
                    texLightbox.textContent = "";
                    lightboxImg.src = img.src;
                    lightbox.classList.remove('hidden');
                }
            }, 250)
        });
    });

    // Función para cerrar el lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.add('hidden')
        document.body.style.overflow = '';
    });

    // Cerrar lightbox cuando se haga clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.add('hidden')
            document.body.style.overflow = '';;
        }
    });

// Historia
const displayHistorias = document.querySelectorAll('.displayHistoria')

console.log(displayHistorias);
displayHistorias.forEach(div => {
    div.addEventListener('click', () => {
        div.classList.add('animate-texts')
        setTimeout(() => {
            const lineaTiempo = div.querySelector('[data-history]');
            lineaTiempo.classList.toggle('hidden');
            div.classList.remove('animate-texts');
        }, 600)
    });
    });

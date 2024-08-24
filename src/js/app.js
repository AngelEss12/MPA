// Variables para screen Nosotros
const identidadContenido = document.querySelector('#c-identidad');
const identidadTitulo = document.querySelector('#t-identidad');
const arrowLeft = document.querySelector('#l-arrow');
const arrowRight = document.querySelector('#r-arrow');
const pogressDiv = document.querySelector('#pogress-identidad');

// Variables para el touch
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

// Listener para eventos touch
identidadContenido.addEventListener('touchstart', (event) => {
    // Captura la posición inicial del touch
    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;
});

identidadContenido.addEventListener('touchend', (event) => {
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

    // Verifica si el deslizamiento es más horizontal que vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Si el deslizamiento fue hacia la izquierda
        if (deltaX < 0) {
            if (identidadTitulo.textContent === 'Logo') {
                limpiarLogo();
                identidadTitulo.innerHTML = 'Creador';
            } else if (identidadTitulo.textContent === 'Creador') {
                identidadTitulo.innerHTML = 'Himno';
                himnoIdentidad();
            } else {
                identidadTitulo.innerHTML = 'Logo';
                limpiarHimno();
                logoIdentidad();
                pogressDiv.classList.remove('hidden');
            }
        }
        // Si el deslizamiento fue hacia la derecha
        else if (deltaX > 0) {
            if (identidadTitulo.textContent === 'Logo') {
                identidadTitulo.innerHTML = 'Himno';
                limpiarLogo();
                himnoIdentidad();
            } else if (identidadTitulo.textContent === 'Himno') {
                limpiarHimno();
                identidadTitulo.innerHTML = 'Creador';
            } else {
                identidadTitulo.innerHTML = 'Logo';
                logoIdentidad();
                pogressDiv.classList.remove('hidden');
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
arrowLeft.addEventListener('click', () => {
    if (identidadTitulo.textContent === 'Logo') {
        limpiarLogo();
        identidadTitulo.innerHTML = 'Creador';
    } else if (identidadTitulo.textContent === 'Creador') {
        identidadTitulo.innerHTML = 'Himno';
        himnoIdentidad();

    } else {
        identidadTitulo.innerHTML = 'Logo';
        limpiarHimno();
        logoIdentidad();
        pogressDiv.classList.remove('hidden');
    }
})

arrowRight.addEventListener('click', () => {
    if (identidadTitulo.textContent === 'Logo') {
        identidadTitulo.innerHTML = 'Himno';
        limpiarLogo();
        himnoIdentidad();
    } else if (identidadTitulo.textContent === 'Himno') {
        limpiarHimno();
        identidadTitulo.innerHTML = 'Creador';
    } else {
        identidadTitulo.innerHTML = 'Logo';
        logoIdentidad();
        pogressDiv.classList.remove('hidden')
    }
})

// Funciones para las burbujas
// Animacion de burbujas
const updateBubblePositions = () => {
    const burbujas = document.querySelectorAll("#burbujas > div");
    const container = document.getElementById('burbujas');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    burbujas.forEach(burbuja => {
        const burbujaSize = burbuja.offsetWidth; // Tamaño de la burbuja

        // Máximas posiciones permitidas
        const maxX = containerWidth - burbujaSize;
        const maxY = containerHeight - burbujaSize;

        // Posiciones aleatorias para bottom, left, y right
        const randomBottom = Math.floor(Math.random() * maxY);
        const randomLeftOrRight = Math.random() > 0.5 ? 'left' : 'right';
        const randomX = Math.floor(Math.random() * maxX);

        // Asignar las nuevas posiciones
        burbuja.style.position = "absolute";
        burbuja.style.bottom = `-${randomBottom}px`;
        burbuja.style[randomLeftOrRight] = `${randomX}px`;

        // Remover la propiedad contraria para evitar conflictos
        if (randomLeftOrRight === 'left') {
            burbuja.style.right = 'auto';
        } else {
            burbuja.style.left = 'auto';
        }
    });
};

// Funciones para el Nosotros

// Logo
const contenidoIdentidad = () => {
    logoIdentidad();
}

// Crear elementos HTML para el Nosotros
// Logo
const textIdentidad = document.createElement('P');
textIdentidad.id = 'text-identidad';
textIdentidad.classList.add('text-sm', 'text-justify', 'pb-1', 'px-8', 'font-cuerpos', 'w-[90%]');

const img = document.createElement('img');

const texts = [
    'El logo del Movimiento Pandillas de la Amistad muestra un globo terráqueo con colores vivos que simbolizan la diversidad y la alegría de la unidad en la fe, reflejando la riqueza cultural de las distintas regiones del mundo.',
    'Sobre el globo, una cruz destaca como símbolo central del cristianismo, recordando que la fe es fundamental para el movimiento. Alrededor, un grupo de niños tomados de la mano representa la unión y la amistad que Pandillas de la Amistad busca fomentar en los jóvenes.',
    'El lema "Unidos Todos... Para Formar un Mundo Mejor" rodea el globo, junto al nombre "Pandillas de la Amistad". Este mensaje refleja la esencia del movimiento: un llamado a los jóvenes a unirse en amistad y fe para construir un futuro lleno de esperanza y amor.'
];

const logoIdentidad = () => {
    img.src = '/assets/nosotros/Logo_MPA-removebg.png';
    img.classList.add('w-[60%]', 'max-w-[350px]', 'py-4', 'rounded-[100%]');
    identidadContenido.appendChild(img);

    textIdentidad.textContent = texts[0];
    identidadContenido.appendChild(textIdentidad);
};

pogressDiv.addEventListener('animationend', () => {
    if (textIdentidad.textContent === texts[0]) {
        textIdentidad.textContent = texts[1];
        rebootAnimation();
    } else if (textIdentidad.textContent === texts[1]) {
        textIdentidad.textContent = texts[2]
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
}

const limpiarLogo = () => {
    img.className = "";
    img.remove();
    textIdentidad.remove();
    pogressDiv.classList.add('hidden');
}

// Himno
const himno = new Audio('/assets/audio/Himno Movimiento Pandillas De La Amistad.mp3');
const divReproductor = document.createElement("DIV");
const iconBack = document.createElement("IMG");
const iconPlay = document.createElement("IMG");
const iconNext = document.createElement("IMG");
const barraHimno = document.createElement("DIV");
const progresoHimno = document.createElement("DIV");
progresoHimno.id = 'progresoHimno';

const himnoIdentidad = () => {
    const displayHimno = document.createElement("DIV");
    displayHimno.id = "display-himno";
    displayHimno.classList.add("displayHimno");

    identidadContenido.appendChild(displayHimno);
    img.src = "/assets/banner/Logo MPA.jpg";
    img.classList.add('imgHimno');
    displayHimno.appendChild(img);

    const divHimno = document.createElement("DIV");
    divHimno.classList.add("divConHimno");
    displayHimno.appendChild(divHimno);

    const textHimno = document.createElement("P");
    textHimno.classList.add("textHimno");
    textHimno.textContent = "Movimiento Pandillas de la amistad";
    divHimno.appendChild(textHimno);

    const spantext = document.createElement("SPAN");
    spantext.classList.add("ml-[50%]");
    spantext.textContent = "Movimiento Pandillas de la amistad";
    textHimno.appendChild(spantext);

    barraHimno.classList.add("barraHimno");
    progresoHimno.classList.add("progresoHimno");
    barraHimno.appendChild(progresoHimno);
    divHimno.appendChild(barraHimno);

    divReproductor.classList.add("reproductorHimno");
    divHimno.appendChild(divReproductor);

    iconBack.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAZtJREFUaEPtmFFKAzEQhr++iD4LXqG0eAjB8+gV1Mda3wSPIPjgHTyEB3JHTAlx2ew2KWQmE1hKl02Yf77Jv5Nd0dlYdaYXF2yduBN2wsYy4CVtDOg/OU7YCRvLgJe0MaBuWl7SXtLzMnADyBWPr+GeXCXjGvguWSCdW6ukH4GHZPGn4b/cP3bcAc/AxbELjM1rUfAl8AHc/gVcK8bf5WotVouwiHwHriI6tWJsSvAZ8AJIGZ9q2zUjeAN8DmUsv6fcdk0IDsZ0PmFMJko6NaYpI1YveMyYTAoWY9oD9wvfqyoJ54zJFOE5xqROsLSVaRv5CmyjjmlhJR8eb7KkxwS/AeueBAtxOUCYLOlcL92VaYXNONUvqzOtHOFYkDQecvyTbmvOaNK0lggWkXL8k2NgOPOaJhyLk65rB5g/PMSic4ZmoqTTEu7qA0DO0EwSjkWnhmZecBAfDK3Jz7TdfYif00A08UzV/dGEokwQLlgDpZIYnXBJ9jTMdcIaKJXE6IRLsqdhrhPWQKkkRidckj0Nc52wBkolMXZH+Af5u0w9QC+L0gAAAABJRU5ErkJggg==";

    iconNext.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAXRJREFUaEPtmDFuAkEMRR/XyVHoqdNGVNwgSOEWqVOSi3ACSq4QJWUU5CgjBTK7Gm9WQvb8KcHs+vlbH3sWdHYWnfEi4OyKS2EpnKwCaulkgv7BkcJSOFkF1NLJBJVpqaXV0m0VuAOOwGdb+GDUtvJN7bPJr5mrpS2pJbACTpOzga/Kb+fK8fvRcz3MgB+Bd+AeeJ0IHQ64cL4ADz8F8LCHBTZIa21r8YODODSwcZqJPQG7RkMLD1zENZVbDC0NsIG3GFoq4BZDSwk8ZmhpgYcMLTVwzdDCANuU9Z+ZtxjaPtpo6ZgxLkI/gA3w3APw7//oMC1dlgePwjaF2QRmk1hZK9MCD83ZKYFtdbQV0ozq+qQCfgPWgK2OQycNcDfLQ82YxowttMJdXQCMGVMqhVuMKQ1wV9e03V3Ee0bKm8bOdRF/UwjPywXsqVbEWCkcUTVPzlLYU62IsVI4omqenKWwp1oRY6VwRNU8OUthT7Uixnan8BmtvmY9fsmkSAAAAABJRU5ErkJggg==";

    iconPlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAR1JREFUaEPtmbENAkEMBP2FI6iCgiiHgBqQJT6CCK3t0d1+Qna68QzoLY7Y7Dk24w0Dr27chm14sQk46cWEfuHYsA0vNgEnvZhQ/2ipkr5FxDMi7vRClMDXiHhExOXziWRXA5+QaTrBXzTqKuDkTNiERmVeCXzKRWXeAYzKvBMYkXk38HjmU8BjmU8Dt2dOAG7NnATckjkRuDRzKnBZ5nRgeeYG/nO7yX0410P1I38Ppxou27SIwKW7NAlYnu+v7xcBuCxfInBpviTglnwJwK35TgO35zsFPJZvN/B4vp3AiHw7gFH5VgNv9WeaeksqO0/1all2QfXBBlZPlHaeDdOMqO9jw+qJ0s6zYZoR9X1sWD1R2nk2TDOivs92ht8QgVg9ivN1VgAAAABJRU5ErkJggg==";

    iconBack.classList.add("iconosReproductor");
    iconPlay.classList.add("iconosReproductor");
    iconNext.classList.add("iconosReproductor");

    divReproductor.appendChild(iconBack);
    divReproductor.appendChild(iconPlay);
    divReproductor.appendChild(iconNext);
}

iconPlay.addEventListener("click", reproducir)
function reproducir() {
    iniciar();
    if (himno.paused) {
        himno.play()
        
    } else {
        himno.pause()
        
    }
}

iconBack.addEventListener("click", menos5sg)
function menos5sg() {
    himno.play()
    himno.currentTime = himno.currentTime - 5
}

iconNext.addEventListener("click", mas5sg)

function mas5sg() {
    himno.currentTime = himno.currentTime + 5
    himno.play()
}

function iniciar() {
    himno.addEventListener('timeupdate', function () {
        
        // La currenttime especifica el tiempo de reproducción actual y lo divide por la duracion del audio 

        // El himno dura 3.25 min que es igual a 205 segundo es decir que cada 2.05s es igual al 1% de la cancion del audio
        progresoHimno.style.width = (this.currentTime * 100 / this.duration) + '%';
    });
}

const limpiarHimno = () => {
    img.className = "";
    const pantallaHimno = document.querySelector("#display-himno");
    identidadContenido.removeChild(pantallaHimno);
    himno.pause();
}

// Creador

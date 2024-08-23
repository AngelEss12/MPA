//  Cuando el documento carga
document.addEventListener("DOMContentLoaded", () => {
    // Ejecutar la función inmediatamente al cargar la página
    contenidoIdentidad();
    updateBubblePositions();
    
    // Repetir la ejecución de la función cada 8 segundos
    setInterval(updateBubblePositions, 8000);
});

// Variables para screen Nosotros
const identidadContenido = document.querySelector('#c-identidad');
const identidadTitulo = document.querySelector('#t-identidad');
const arrowLeft = document.querySelector('#l-arrow');
const arrowRight = document.querySelector('#r-arrow');
const pogressDiv = document.querySelector('#pogress-identidad');

// EventListener para screen Nosotros

arrowLeft.addEventListener('click', () =>{
    if(identidadTitulo.textContent === 'Logo'){
        identidadTitulo.innerHTML = 'Creador';
    } else if(identidadTitulo.textContent === 'Creador') {
        identidadTitulo.innerHTML = 'Himno';
        limpiarLogo();
        himnoIdentidad();
    } else {
        identidadTitulo.innerHTML = 'Logo';
        limpiarLogo();
        logoIdentidad();
        pogressDiv.classList.add('block')
    } 
})

arrowRight.addEventListener('click', () =>{
    if(identidadTitulo.textContent === 'Logo'){
        identidadTitulo.innerHTML = 'Himno';
        limpiarLogo();
        himnoIdentidad();
    } else if(identidadTitulo.textContent === 'Himno') {
        identidadTitulo.innerHTML = 'Creador';
    } else {
        identidadTitulo.innerHTML = 'Logo';
        limpiarLogo();
        logoIdentidad();
        pogressDiv.classList.remove('hidden')
    }
})


// Funciones para el Index
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
const textIdentidad = document.createElement('P');
textIdentidad.id = 'text-identidad';
textIdentidad.classList.add('text-sm', 'text-justify', 'pb-1', 'px-4' , 'font-cuerpos', 'w-[90%]');

const img = document.createElement('img');
img.classList.add('w-[50%]','py-4','rounded-[100%]');

const texts = [
    'El logo del Movimiento Pandillas de la Amistad muestra un globo terráqueo con colores vivos que simbolizan la diversidad y la alegría de la unidad en la fe, reflejando la riqueza cultural de las distintas regiones del mundo.',
    'Sobre el globo, una cruz destaca como símbolo central del cristianismo, recordando que la fe es fundamental para el movimiento. Alrededor, un grupo de niños tomados de la mano representa la unión y la amistad que Pandillas de la Amistad busca fomentar en los jóvenes.',
    'El lema "Unidos Todos... Para Formar un Mundo Mejor" rodea el globo, junto al nombre "Pandillas de la Amistad". Este mensaje refleja la esencia del movimiento: un llamado a los jóvenes a unirse en amistad y fe para construir un futuro lleno de esperanza y amor.'
];

const logoIdentidad = () => {
    img.src = '/assets/nosotros/Logo_MPA-removebg1.png';
    identidadContenido.appendChild(img);

    textIdentidad.textContent = texts[0];
    identidadContenido.appendChild(textIdentidad);
};

pogressDiv.addEventListener('animationend', () => {
    if(textIdentidad.textContent === texts[0]) {
        textIdentidad.textContent = texts[1];
        rebootAnimation();
    } else if(textIdentidad.textContent === texts[1]){
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


const himnoIdentidad = () => {
    const displayHimno = document.createElement("DIV");
    displayHimno.classList.add("displayHimno");

    identidadContenido.appendChild(displayHimno);
    img.src = "/assets/banner/Logo MPA.jpg";
    img.classList.add("imgHimno");
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

}

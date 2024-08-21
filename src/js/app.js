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

// EventListener para screen Nosotros

arrowLeft.addEventListener('click', () =>{
    if(identidadTitulo.textContent === 'Logo'){
        identidadTitulo.innerHTML = 'Creador';
    } else if(identidadTitulo.textContent === 'Creador') {
        identidadTitulo.innerHTML = 'Himno';
    } else {
        identidadTitulo.innerHTML = 'Logo';
    } 


})

arrowRight.addEventListener('click', () =>{
    if(identidadTitulo.textContent === 'Logo'){
        identidadTitulo.innerHTML = 'Himno';
    } else if(identidadTitulo.textContent === 'Himno') {
        identidadTitulo.innerHTML = 'Creador';
    } else {
        identidadTitulo.innerHTML = 'Logo';
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
const contenidoIdentidad = (e) => {
    logoIdentidad();
}

// Crear elementos HTML para el Nosotros
let textIdentidad = document.createElement('P');
textIdentidad.id = 'text-identidad';
textIdentidad.classList.add('text-sm', 'text-justify', 'pb-1', 'px-8' , 'font-cuerpos', 'w-[90%]');

let barDiv = document.createElement('DIV');
barDiv.id = 'bar-logo';
barDiv.classList.add('w-24', 'h-1', 'bg-gray-600', 'my-2', 'rounded-lg', 'animate-load');

const logoIdentidad = () => {
    const img = document.createElement('img');
    img.src = '/assets/nosotros/Logo_MPA-removebg.png';
    img.classList.add('w-[40%]','py-4','rounded-[100%]');
    identidadContenido.appendChild(img);

    textoLogo('El logo del Movimiento Pandillas de la Amistad muestra un globo terráqueo con colores vivos que simbolizan la diversidad y la alegría de la unidad en la fe, reflejando la riqueza cultural de las distintas regiones del mundo.');
};

const textoLogo = (text) => {
    textIdentidad.textContent = text;
    identidadContenido.appendChild(textIdentidad);

    identidadContenido.appendChild(barDiv);
}

const displayLogo = () => {
    textoLogo('Sobre el globo, una cruz destaca como símbolo central del cristianismo, recordando que la fe es fundamental para el movimiento. Alrededor, un grupo de niños tomados de la mano representa la unión y la amistad que Pandillas de la Amistad busca fomentar en los jóvenes.');
};

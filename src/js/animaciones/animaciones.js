import { inicio } from "../inicio/variables.js";

// Animacion de burbujas
export const updateBubblePositions = () => {
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

// Función que aplica la animación a la tarjeta visible
export const appearLey = (visibleCard) => {

    // Inicializa un retraso para las animaciones progresivas
    let delay = 0;

    // Recorre todas las tarjetas
    inicio.leyes.card.forEach((card) => {
        // Si la tarjeta actual es la que se acaba de hacer visible
        if (card === visibleCard) {
            // Usa un setTimeout para aplicar un retraso progresivo
            setTimeout(() => {
                // Agrega la clase 'up' para activar la animación definida en CSS
                card.classList.add('up');
            }, delay * 100); // Multiplica por 1000 para convertir segundos a milisegundos

            // Usa otro setTimeout para eliminar la animación después de 2 segundos
            setTimeout(() => {
                card.classList.remove('up');
            }, (delay + 2) * 800);

            // Incrementa el retraso para la siguiente tarjeta
            delay++;
        }
    });
};
import { actividades } from "./variables.js";

// Función que aplica la animación a la tarjeta visible
export const moveCard = (visibleCard) => {

    // Inicializa un retraso para las animaciones progresivas
    let delay = 0;

    // Recorre todas las tarjetas
    actividades.observer.cards.forEach((card) => {
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

// Función que aplica la animación a la tarjeta visible
export const visibleImg = (visibleCard) => {
    // Inicializa un retraso para las animaciones progresivas
    let delay = 0;

    // Recorre todas las imagenes de la galeria
    actividades.observer.gallery.forEach((img) => {
        // Si la tarjeta actual es la que se acaba de hacer visible
        if (img === visibleCard) {
            // Usa un setTimeout para aplicar un retraso progresivo
            setTimeout(() => {
                // Agrega la clase 'up' para activar la animación definida en CSS
                img.classList.add('down');
            }, delay * 1000); // Multiplica por 1000 para convertir segundos a milisegundos

            // Usa otro setTimeout para eliminar la animación después de 2 segundos
            setTimeout(() => {
                img.classList.remove('down');
            }, (delay + 2) * 800);

            // Incrementa el retraso para la siguiente tarjeta
            delay += 1;
        }
    });
};
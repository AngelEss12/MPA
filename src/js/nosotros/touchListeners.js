// Importaciones necesarias
import { nosotros } from './variables.js';
import { moveLeft, moveRight } from './navegacionIdentidad.js';

// Función principal para configurar los listeners
export function initTouchListeners() {

    // Listener para eventos touchstart
    nosotros.identidad.contenido.addEventListener(
        "touchstart",
        (event) => {
            nosotros.touch.touchStartX = event.changedTouches[0].screenX;
            nosotros.touch.touchStartY = event.changedTouches[0].screenY;
        },
        { passive: false }
    );

    // Listener para eventos touchend
    nosotros.identidad.contenido.addEventListener(
        "touchend",
        (event) => {
            nosotros.touch.touchEndX = event.changedTouches[0].screenX;
            nosotros.touch.touchEndY = event.changedTouches[0].screenY;

            touchMove();
        },
        { passive: false }
    );

    // Listener para eventos touchmove
    nosotros.identidad.contenido.addEventListener(
        "touchmove",
        (event) => {
            event.preventDefault(); // Solo si es absolutamente necesario
        },
        { passive: false }
    );
}

// Función para manejar el movimiento del toque
function touchMove() {
    const deltaX = nosotros.touch.touchEndX - nosotros.touch.touchStartX;
    const deltaY = nosotros.touch.touchEndY - nosotros.touch.touchStartY;

    // Detecta el tipo de movimiento
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > nosotros.touch.umbralTouch) {
        if (deltaX < 0) {
            moveLeft(); // Movimiento hacia la izquierda
        } else if (deltaX > 0) {
            moveRight(); // Movimiento hacia la derecha
        }
    }
}

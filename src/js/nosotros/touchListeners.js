// Importaciones necesarias
import { nosotros } from './variables.js';
import { moveLeft, moveRight, nextVirtud, backVirtud } from './navegacionIdentidad.js';

// Función principal para configurar los listeners
export function initTouchListeners(contenedor, left, right) {

    // Listener para eventos touchstart
    contenedor.addEventListener(
        "touchstart",
        (event) => {
            nosotros.touch.touchStartX = event.changedTouches[0].screenX;
            nosotros.touch.touchStartY = event.changedTouches[0].screenY;
        },
        { passive: false }
    );

    // Listener para eventos touchend
    contenedor.addEventListener(
        "touchend",
        (event) => {
            nosotros.touch.touchEndX = event.changedTouches[0].screenX;
            nosotros.touch.touchEndY = event.changedTouches[0].screenY;

            touchMove(left, right);
        },
        { passive: false }
    );
}

// Función para manejar el movimiento del toque
function touchMove(left, right) {
    const deltaX = nosotros.touch.touchEndX - nosotros.touch.touchStartX;
    const deltaY = nosotros.touch.touchEndY - nosotros.touch.touchStartY;

    // Detecta el tipo de movimiento
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > nosotros.touch.umbralTouch) {
        if (deltaX < 0) {
            left(); // Movimiento hacia la izquierda
        } else if (deltaX > 0) {
            right(); // Movimiento hacia la derecha
        }
    }
}

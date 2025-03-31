import { nosotros } from './variables.js';

export function initTouchListeners(contenedor, left, right) {
    let touchStartX = 0;
    let touchStartY = 0;

    // Modificar el manejo de eventos touch
    contenedor.addEventListener("touchstart", function(event) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }, { passive: true }); // Añadir passive: true

    contenedor.addEventListener("touchend", function(event) {
        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > nosotros.touch.umbralTouch) {
            if (deltaX < 0) {
                left();
            } else {
                right();
            }
        }
    }, { passive: true }); // Añadir passive: true
}
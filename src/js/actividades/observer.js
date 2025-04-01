import { moveCard, visibleImg } from "./animationObserver.js";

let options = {
    rootMargin: "0px",
    threshold: 0.25,
};
// Crear un IntersectionObserver para detectar cuándo las tarjetas entran en el viewport
export const observerActividades = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Verifica si el elemento es visible en el viewport
        if (entry.isIntersecting) {
            // Llama a la función para animar la tarjeta visible
            moveCard(entry.target);
        }
    });
});


export const observerGallery = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Verifica si el elemento es visible en el viewport
        if (entry.isIntersecting) {
            // Llama a la función para animar la tarjeta visible
            visibleImg(entry.target);
        }
    });
}, options);
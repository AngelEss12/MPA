import { appearLey } from "../animaciones/animaciones.js";

let options = {
    rootMargin: "0px",
    threshold: 0,
};

// Crear un IntersectionObserver para detectar cuándo las tarjetas entran en el viewport
export const observerLeyes = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Llama a la función para animar la tarjeta visible
            appearLey(entry.target);
            
            // Deja de observar este elemento específico
            observerLeyes.unobserve(entry.target);
        }
    });
}, options);
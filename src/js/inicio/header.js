import { inicio } from "./variables.js";
let currentActive = 0;
// Función optimizada para cambiar imágenes
export function actualizarBGIMG(e) {
    const { bgInicio, srcBG, srcBGs, hdText } = inicio.header;
    const isMobile = !e.matches;
    const images = isMobile ? srcBGs : srcBG;
    
    // Ocultar elemento actual
    bgInicio[currentActive].classList.remove('opacity-100');
    bgInicio[currentActive].classList.add('opacity-0');
    
    // Calcular nuevo índice
    currentActive = (currentActive + 1) % bgInicio.length;
    
    // Mostrar nuevo elemento
    bgInicio[currentActive].src = images[currentActive];
    bgInicio[currentActive].classList.remove('opacity-0');
    bgInicio[currentActive].classList.add('opacity-100');
    
    // Sincronizar textos
    hdText.forEach((text, index) => {
        text.classList.toggle('hidden', index !== currentActive);
    });
}
import { nosotros } from './variables.js';

// Función para actualizar el valor del contador según el tamaño de la pantalla
export function actualizarContador(e) {
    if (e.matches) {
        nosotros.momentos.contador = 2; // Si la pantalla es 768px o más, el contador es 2
    } else {
        nosotros.momentos.contador = 1; // Si la pantalla es menor a 768px, el contador es 1
    }
}

// Función para actualizar la posición del slider
export const updateSliderPosition = () => {
    const slideWidth = document.querySelector('.card').offsetWidth;
    let { slider, points, currentIndex } = nosotros.momentos
    slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    points[currentIndex].classList.add('bg-slate-500');
};
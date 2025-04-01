import { actividades } from "./variables.js";

const { container, picture } = actividades.viajes;
const { body } = actividades.menu

export function mostrarImg(img) {
    img.addEventListener('click', () => {
        body.classList.toggle('overflow-hidden');
        container.classList.remove('hidden');
        picture.src = img.src;
    })
}

export function cerrarImg(evento) {
    if (evento.target !== picture) {
        container.classList.add('hidden')
        body.classList.toggle('overflow-hidden');
    }
}
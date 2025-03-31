import { nosotros } from './variables.js';
import { logoActions, himnoActions, creadorActions } from './identidad.js'
import { updateSliderPosition } from './momentos.js'

export function moveLeft() {
    const { titulo } = nosotros.identidad;
    if (titulo.textContent === "Logo") {
            titulo.innerHTML = "Creador";
            logoActions.limpiarLogo();
            creadorActions.init();
        } else if (titulo.textContent === "Creador") {
            titulo.innerHTML = "Himno";
            creadorActions.limpiarCreador();
            himnoActions.init();
        } else {
            titulo.innerHTML = "Logo";
            himnoActions.limpiarHimno();
            logoActions.init();
        }
}

export function moveRight() {
    const { titulo } = nosotros.identidad;
    if (titulo.textContent === "Logo") {
            titulo.innerHTML = "Himno";
            logoActions.limpiarLogo();
            himnoActions.init();
        } else if (titulo.textContent === "Himno") {
            titulo.innerHTML = "Creador";
            himnoActions.limpiarHimno();
            creadorActions.init();
        } else {
            titulo.innerHTML = "Logo";
            creadorActions.limpiarCreador();
            logoActions.init();
        }
}

export const nextVirtud = () => {
    
    nosotros.momentos.points[nosotros.momentos.currentIndex].classList.remove("bg-slate-500");
    if (nosotros.momentos.currentIndex < nosotros.momentos.totalCards - nosotros.momentos.contador) {
        nosotros.momentos.currentIndex++;
        updateSliderPosition();
    } else {
        nosotros.momentos.currentIndex = 0;
        updateSliderPosition();
    }
}

export const backVirtud = () => {
    
    nosotros.momentos.points[nosotros.momentos.currentIndex].classList.remove("bg-slate-500");
    if (nosotros.momentos.currentIndex > 0) {
        nosotros.momentos.currentIndex--;
        updateSliderPosition();
    } else {
        nosotros.momentos.currentIndex = nosotros.momentos.totalCards - nosotros.momentos.contador;
        updateSliderPosition();
    }
}

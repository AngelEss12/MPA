import { actividades } from "./variables.js";

const { containerActividades } = actividades.activityContainer;
let indexAct = 0;

export const moveleft = () => {
    if (indexAct === 0) {
        containerActividades[indexAct].classList.add('hidden');
        indexAct = containerActividades.length - 2;
        containerActividades[indexAct].classList.remove('hidden');
    } else {
        containerActividades[indexAct].classList.add('hidden');
        indexAct--;
        containerActividades[indexAct].classList.remove('hidden');
    }
}

export const moveright = () => {
    if (indexAct < containerActividades.length - 2) {
        containerActividades[indexAct].classList.add('hidden');
        indexAct++;
        containerActividades[indexAct].classList.remove('hidden');
    } else {
        containerActividades[indexAct].classList.add('hidden');
        indexAct = 0;
        containerActividades[indexAct].classList.remove('hidden');
    }
}
import { nosotros } from './variables.js';

export function mostarTeam(n) {
    let { teamSelector } = nosotros.equipo;
    teamSelector.forEach(team => team.classList.add('hidden'));
    switch (n) {
        case 0:
            teamSelector[n].classList.remove('hidden');
            break;
        case 1:
            teamSelector[n].classList.remove('hidden');
            break;
        case 2:
            teamSelector[n].classList.remove('hidden');
            break;
        case 3:
            teamSelector[n].classList.remove('hidden');
            break;
    }
}
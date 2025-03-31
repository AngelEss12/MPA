import { nosotros } from './variables.js';

export function animacionHistory(historia) {
    historia.classList.add('animate-texts')
        setTimeout(() => {
            const lineaTiempo = historia.querySelector('[data-history]');
            lineaTiempo.classList.toggle('hidden');
            historia.classList.remove('animate-texts');
        }, 600)
}
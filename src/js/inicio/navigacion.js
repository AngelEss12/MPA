import { inicio } from "./variables.js";
let currentIndex = 0;

export const nextVirtud = () => {
    const { poitns, cards, totalCards } = inicio.virtudes;
    poitns[currentIndex].classList.remove("bg-slate-500");
    cards[currentIndex].classList.add("hidden");
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        cards[currentIndex].classList.remove("hidden");
        cards[currentIndex].classList.add(
            "flex",
            "fade-left",
            "animate-duration-700"
        );
        updateSliderPosition();
    } else {
        currentIndex = 0;
        cards[currentIndex].classList.remove("hidden");
        cards[currentIndex].classList.add(
            "flex",
            "fade-left",
            "animate-duration-700"
        );
        updateSliderPosition();
    }
};

export const backVirtud = () => {
    const { poitns, cards, totalCards } = inicio.virtudes;
    poitns[currentIndex].classList.remove("bg-slate-500");
    cards[currentIndex].classList.add("hidden");
    if (currentIndex > 0) {
        currentIndex--;
        cards[currentIndex].classList.remove("hidden");
        cards[currentIndex].classList.add(
            "flex",
            "fade-right",
            "animate-duration-1000"
        );
        updateSliderPosition();
    } else {
        currentIndex = totalCards - 1;
        cards[currentIndex].classList.remove("hidden");
        cards[currentIndex].classList.add(
            "flex",
            "fade-right",
            "animate-duration-1000"
        );
        updateSliderPosition();
    }
};

const updateSliderPosition = () => {
    const slideWidth = document.querySelector('.card').offsetWidth;
    inicio.virtudes.poitns[currentIndex].classList.add('bg-slate-500');
  };
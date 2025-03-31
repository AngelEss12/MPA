import { inicio } from "./variables.js";

let currentIndex = 0;
export const leyes = () => {
    const { slides } = inicio.leyes;

    // Mostrar el primer slide al cargar
    slides[currentIndex].classList.remove("hidden");
    slides[currentIndex].classList.add("entrada");

    setInterval(() => {
        // Animar el slide actual para desaparecer (fade out)
        slides[currentIndex].classList.remove("entrada");
        slides[currentIndex].classList.add("salida");

        // Después de 1 segundo (duración de la animación fade out), ocultar el slide actual
        setTimeout(() => {
            slides[currentIndex].classList.add("hidden");
            slides[currentIndex].classList.remove("salida");

            // Pasar al siguiente slide
            currentIndex = (currentIndex + 1) % slides.length;

            // Si estamos en el slide 6 (último slide), volver al slide 1
            if (currentIndex === slides.length - 1) {
                currentIndex = 0; // Volver al slide 1 cuando llegamos al último slide
            }

            // Mostrar el siguiente slide con fade in
            slides[currentIndex].classList.remove("hidden");
            slides[currentIndex].classList.add("entrada");

        }, 700); // Tiempo de fade out (1s)
    }, 5000); // Cambiar cada 5 segundos
}
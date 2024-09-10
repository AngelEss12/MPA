document.addEventListener("DOMContentLoaded", () => {
  lineaEspiritual();
  leyes();
  moveTextE();

  const lineas = document.querySelector('#lineas');
  const divEsp = document.querySelector('#contenedor-lineas');
  lineas.addEventListener("click", () => {
    divEsp.classList.toggle('hidden');
    
  })
});

const leyes = () => {
  const slides = document.querySelectorAll("#leyes a, #leyOro");
  let currentIndex = 0;

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

    }, 1000); // Tiempo de fade out (1s)
  }, 5000); // Cambiar cada 5 segundos
}

const lineaEspiritual = () => {
  const divEsp = document.querySelector('#Espiritual');
  
  const imgEsp = document.querySelectorAll('#Espiritual img');
  
  let index = 0;

  
  setInterval(() => {
    let porcentaje = index * -100;
    divEsp.style.transform = 'translateX('+ porcentaje +'%)';
    if (index > imgEsp.length - 1) {
      index = 0;
      divEsp.style.transform = 'translateX(0%)';
    }
    index++;
  }, 3000);
};

const textEsp = document.querySelectorAll('#text-E > li');

const moveTextE = () => {
  let index = 0; 
  const textEsp = document.querySelectorAll('#text-E > li');
  // Mostrar la imagen inicial al cargar

  setInterval(() => {

    setTimeout(() => {
      textEsp[index].classList.add("hidden");
      
      index = (index + 1) % textEsp.length;
    }, 7970)
    textEsp[index].classList.remove("hidden"); 
  }, 8000);
  
}

document.addEventListener("DOMContentLoaded", () => {
  // Crear un IntersectionObserver para detectar cuándo las tarjetas entran en el viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Verifica si el elemento es visible en el viewport
      if (entry.isIntersecting) {
        // Llama a la función para animar la tarjeta visible
        moveCard(entry.target);

        // Muestra en la consola un mensaje indicando que el elemento ya es visible
        console.log('Ya es visible');
      }
    });
  });
  // Selecciona todas las tarjetas con la clase 'card' y comienza a observarlas
  document.querySelectorAll('.card').forEach(card => observer.observe(card));
});

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
let index = 0;
// Función que aplica la animación a la tarjeta visible
const moveCard = (visibleCard) => {
  // Selecciona todas las tarjetas con la clase 'card'
  const cards = document.querySelectorAll('.card');

  // Inicializa un retraso para las animaciones progresivas
  let delay = 0;

  // Recorre todas las tarjetas
  cards.forEach((card) => {
    // Si la tarjeta actual es la que se acaba de hacer visible
    if (card === visibleCard) {
      // Usa un setTimeout para aplicar un retraso progresivo
      setTimeout(() => {
        // Agrega la clase 'up' para activar la animación definida en CSS
        card.classList.add('up');
      }, delay * 100); // Multiplica por 1000 para convertir segundos a milisegundos

      // Usa otro setTimeout para eliminar la animación después de 2 segundos
      setTimeout(() => {
        card.classList.remove('up');
      }, (delay + 2) * 800);

      // Incrementa el retraso para la siguiente tarjeta
      delay++;
    }
  });
};
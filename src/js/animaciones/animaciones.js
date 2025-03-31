// Animacion de burbujas
export const updateBubblePositions = () => {
    const burbujas = document.querySelectorAll("#burbujas > div");
    const container = document.getElementById("burbujas");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    burbujas.forEach((burbuja) => {
        const burbujaSize = burbuja.offsetWidth; // Tamaño de la burbuja

        // Máximas posiciones permitidas
        const maxX = containerWidth - burbujaSize;
        const maxY = containerHeight - burbujaSize;

        // Posiciones aleatorias para bottom, left, y right
        const randomBottom = Math.floor(Math.random() * maxY);
        const randomLeftOrRight = Math.random() > 0.5 ? "left" : "right";
        const randomX = Math.floor(Math.random() * maxX);

        // Asignar las nuevas posiciones
        burbuja.style.position = "absolute";
        burbuja.style.bottom = `-${randomBottom}px`;
        burbuja.style[randomLeftOrRight] = `${randomX}px`;

        // Remover la propiedad contraria para evitar conflictos
        if (randomLeftOrRight === "left") {
            burbuja.style.right = "auto";
        } else {
            burbuja.style.left = "auto";
        }
    });
};

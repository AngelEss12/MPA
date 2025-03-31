import { nosotros } from './variables.js';

let currentTextIndex =  0
// Manejo de animaciones del logo
export const logoActions = {

    init() {
        nosotros.logo.img.classList.add("imgLogo");
        nosotros.logo.displayLogo.classList.remove("hidden");
        nosotros.identidad.progressDiv.classList.remove("hidden");
    },
    updateText() {
        let { textIdentidad } = nosotros.logo;
        if(currentTextIndex < textIdentidad.length - 1) {
            textIdentidad[currentTextIndex].classList.add("hidden");
            currentTextIndex++;
            textIdentidad[currentTextIndex].classList.remove("hidden");
        } else {
            textIdentidad[currentTextIndex].classList.add("hidden");
            currentTextIndex = 0;
            textIdentidad[currentTextIndex].classList.remove("hidden");
        }

        this.resetAnimation();
    },
    resetAnimation() {
        nosotros.identidad.progressDiv.classList.remove("animate-load");
        void nosotros.identidad.progressDiv.offsetWidth; // Reinicia la animación
        nosotros.identidad.progressDiv.classList.add("animate-load");
    },
    limpiarLogo() {
        nosotros.logo.displayLogo.classList.add("hidden");
        nosotros.identidad.progressDiv.classList.add("hidden");
    },
};

export const himnoActions = {
    init() {
        nosotros.himno.displayHimno.classList.remove("hidden");
        nosotros.himno.displayHimno.classList.add("flex");

        // Texto de duración del audio
        this.updateTimes();
        
        // Inicializar event listeners
        this.iniciar();
    },

    timeConvert(num) {
        const minutes = Math.floor(num / 60);
        const seconds = Math.round(num % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    },
    
    updateTimes() {
        const { himnoAudio, time, duration } = nosotros.himno;
        time.textContent = this.timeConvert(himnoAudio.currentTime);
        duration.textContent = `-${this.timeConvert(himnoAudio.duration - himnoAudio.currentTime)}`;
    },
    
    reproducir() {
        const { himnoAudio, icons } = nosotros.himno;
        
        if (himnoAudio.paused) {
            himnoAudio.play();
            icons.play.src = "/assets/nosotros/icons/iconPause.png";
        } else {
            himnoAudio.pause();
            icons.play.src = "/assets/nosotros/icons/iconPlay.png";
        }
    },
    
    iniciar() {
        const { himnoAudio, progress } = nosotros.himno;
        
        himnoAudio.addEventListener("timeupdate", () => {
            // Actualizar la barra de progreso
            progress.style.width = `${(himnoAudio.currentTime * 100) / himnoAudio.duration}%`;
            this.updateTimes();
        });
    },

    menos5sg() {
        nosotros.himno.himnoAudio.currentTime -= 5;
    },

    mas5sg() {
        nosotros.himno.himnoAudio.currentTime += 5;
    },

    limpiarHimno () {
        const { displayHimno, himnoAudio } = nosotros.himno;
        displayHimno.classList.remove("flex");
        displayHimno.classList.add("hidden");
        himnoAudio.pause();
    }
};

export const creadorActions = {
    init() {
        nosotros.creador.displayCreador.classList.remove("hidden");
        nosotros.creador.displayCreador.classList.add("flex");
    },

    visualizarImg(imagen) {
        const { description, container, img } = nosotros.creador.lightbox;
        setTimeout(() => {
            if (imagen.id === "img-8") {
                description.classList.add('text-sm', 'text-center', 'text-slate-200', 'font-cuerpos', 'px-8', 'py-2');
                description.textContent = "Fotografía del Primer retiro del Movimiento Pandillas de la Amistad";
                container.appendChild(description);
                img.src = imagen.src;
                document.body.style.overflow = 'hidden';
                container.classList.remove('hidden');
            } else {
                document.body.style.overflow = 'hidden';
                description.textContent = "";
                img.src = imagen.src;
                container.classList.remove('hidden');
            }
        }, 250)
    },

    lightbox(e) {
        const { container, img } = nosotros.creador.lightbox;
        
        if (e.target !== img) {
            container.classList.add('hidden')
            document.body.style.overflow = '';;
        }
    },

    cerrarImg() {
        nosotros.creador.lightbox.container.classList.add('hidden')
        document.body.style.overflow = '';
    },

    limpiarCreador () {
        nosotros.creador.displayCreador.classList.remove("flex");
        nosotros.creador.displayCreador.classList.add("hidden");
    }
}
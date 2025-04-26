/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./src/screen/*.{html,js}", "./*.{html,js}*"],
  theme: {
    extend: {
      fontFamily: {
        titulos: ["Dancing Script", "cursive"],
        cuerpos:["Raleway", "sans-serif"],
      },
      backgroundSize: {
        '400%': '400% 100%',
        
      },
      backgroundImage: {
        'gradiente-inicio': 'linear-gradient(to left top, #efceff, #ffcde5, #ffd7c5, #ffeab3, #ebffbf)',
        'gradiente-v1': 'linear-gradient(to bottom, #ffffff, #fafafe, #f5f5fc, #eff0fb, #e8ecfa, #d2d4e2, #bcbdca, #a7a6b3, #7d7982, #544f54, #2c292b, #000000)',
        'gradiente-t1': 'linear-gradient(to bottom, #ffffff, #faf5fb, #fbeaf2, #fddfe2, #fbd5ce, #f1c5b6, #e4b69e, #d4a885, #c08e65, #ab7446, #955b28, #7f4305)',
        'gradiente-t2': 'linear-gradient(to bottom, #ffffff, #fff7fd, #ffeef3, #ffe7df, #ffe4c9, #f4dab2, #e5d29d, #d2cb89, #bdb66b, #a9a24d, #948e2f, #7f7a05)',
        'gradiente-t3': 'linear-gradient(to bottom, #ffffff, #ebf6ff, #c5f3ff, #98f1f9, #81ecd4, #77dcb2, #75cc8e, #78ba69, #5ea050, #438737, #286f1e, #025702)',
        'gradiente-t4': 'linear-gradient(to bottom, #ffffff, #f0f1f9, #dee3f3, #c9d7ed, #b1cbe7, #9abad8, #82a9c9, #6a98ba, #527ea0, #3a6487, #214c6f, #023557)',
        'gradiente-t5': 'linear-gradient(to bottom, #ffffff, #f0ebfd, #e5d7fa, #ddc1f4, #d8abec, #cc96dc, #c081cb, #b46bba, #9c53a0, #853a87, #6e226f, #570257)',
        'gradiente-t6': 'linear-gradient(to bottom, #ffffff, #f1ebfa, #e7d7f1, #e2c1e6, #dfabd7, #d395c3, #c680af, #ba6a9b, #a15181, #883969, #6f2051, #57023a)',
        'gradiente-footer': 'linear-gradient(to right bottom, #ffd0c5, #ffd7be, #ffdfba, #f7e8b9, #ebf2be, #d6f7c8, #c1fad7, #affce9, #a2f6fc, #a8ecff, #bde1ff, #d4d5ff)',
        
      },
      keyframes: {

        heartbeat: {
          '0%': {
            transform: 'scale(1)',
            'transform-origin': 'center center',
            'animation-timing-function': 'ease-out',
          },
          '10%': {
            transform: 'scale(0.91)',
            'animation-timing-function': 'ease-in',
          },
          '17%': {
            transform: 'scale(0.98)',
            'animation-timing-function': 'ease-out',
          },
          '33%': {
            transform: 'scale(0.87)',
            'animation-timing-function': 'ease-in',
          },
          '45%': {
            transform: 'scale(1)',
            'animation-timing-function': 'ease-out',
          },
        },

        bubbleup: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-1150px) scale(1.4)' },
        },
        bubbledown: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(3600px) scale(1.1)' },
        },

        positionSwap: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100px, -100px)' }, // Esta es una posición de ejemplo
        },

        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '5%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-180%)' },
        },

        load: {
          '0%': { width: '0'}, // Escala inicial al 25%
          '100%': { width: '100%'},   // Escala final al 100%
        },

        spinright: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },

        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },

        gradienttransition: {
          '0%, 20%': { 
            backgroundImage: "linear-gradient(to top, #ffa7cc, #f9bfe5, #f4d7f5, #f5ecfd, #ffffff)" 
          },
          '25%, 45%': { 
            backgroundImage: "linear-gradient(to top, #fffca7, #ffeec3, #ffeeed, #fff7ff, #ffffff)" 
          },
          '50%, 70%': { 
            backgroundImage: "linear-gradient(to top, #bcffa7, #96ffeb, #b3ffff, #e8fdff, #ffffff)" 
          },
          '75%, 95%': { 
            backgroundImage: "linear-gradient(to top, #a7fbff, #c2faff, #dffaff, #f5fbff, #ffffff)" 
          },
          '100%': {
            backgroundImage: "linear-gradient(to top, #ffa7cc, #f9bfe5, #f4d7f5, #f5ecfd, #ffffff)"
          }
        }
      },
      animation: {
        appear: 'appear 0.1s ease-out both',  // Define la animación con la duración y timing-function que desees
        heartbeat: 'heartbeat 2s linear 1s infinite both',
        load: 'load 18s linear forwards',
        marquee: 'marquee 10s linear infinite',
        bubbleup: 'bubbleup 8s infinite',
        'bubbleup-delayed-1': 'bubbleup 8s infinite 2s',
        'bubbleup-delayed-2': 'bubbleup 8s infinite 4s',
        'bubbleup-delayed-3': 'bubbleup 8s infinite 6s',
        'bubbleup-delayed-4': 'bubbleup 8s infinite 1s',
        'bubbleup-delayed-5': 'bubbleup 8s infinite 3s',
        'bubbleup-delayed-6': 'bubbleup 8s infinite 5s',
        'bubbleup-delayed-7': 'bubbleup 8s infinite 7s',
        'position-swap': 'positionSwap 8s infinite',
        bubbledown: 'bubbledown 12s infinite',
        'bubbledown-delayed-1': 'bubbledown 12s infinite 2s',
        'bubbledown-delayed-2': 'bubbledown 12s infinite 4s',
        'bubbledown-delayed-3': 'bubbledown 12s infinite 6s',
        'bubbledown-delayed-4': 'bubbledown 12s infinite 1s',
        'bubbledown-delayed-5': 'bubbledown 12s infinite 3s',
        'bubbledown-delayed-6': 'bubbledown 12s infinite 5s',
        'bubbledown-delayed-7': 'bubbledown 12s infinite 7s',
        'position-swap': 'positionSwap 12s infinite',
        spinright: 'spinright 16s linear infinite',
        slidein: 'slideIn 1s forwards',
        slideout: 'slideOut 1s forwards',
        'gradient-x': 'gradient 5s ease infinite',
        rainbow: 'rainbow 5s infinite linear',
        typing: "typing 4s steps(40) forwards",
        gradientcycle: 'gradienttransition 16s ease-in infinite'

      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
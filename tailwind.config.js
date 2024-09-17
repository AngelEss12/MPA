/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./src/screen/*.{html,js}", "./*.{html,js}*"],
  theme: {
    extend: {
      fontFamily: {
        titulos: ["Dancing Script", "cursive"],
        cuerpos:["Raleway", "sans-serif"],
      },
      backgroundImage: {
        'gradiente-inicio': 'linear-gradient(to left top, #efceff, #ffcde5, #ffd7c5, #ffeab3, #ebffbf)',
        'gradiente-v1': 'linear-gradient(to right bottom, #cef3ff, #cef8fa, #d3fbf3, #ddfeeb, #ebffe4)',
        'gradiente-v2': 'linear-gradient(to left top, #d7f6d7, #ddf7d5, #e2f8d3, #e9f8d1, #eff9d0, #f5f5ce, #fbf2cd, #ffeecd, #ffe6d1, #ffe1dc, #ffdee8, #f9def3)',
        'gradiente-footer': 'linear-gradient(to right bottom, #ffd0c5, #ffd7be, #ffdfba, #f7e8b9, #ebf2be, #d6f7c8, #c1fad7, #affce9, #a2f6fc, #a8ecff, #bde1ff, #d4d5ff)',
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0', transform: 'scale(0.75)' }, // Escala inicial al 25%
          '100%': { opacity: '1', transform: 'scale(1)' },   // Escala final al 100%
        },

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
          '100%': { transform: 'translateY(1150px) scale(1.4)' },
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
          '100%': { width: '5rem'},   // Escala final al 100%
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
      },
      animation: {
        appear: 'appear 0.1s ease-out both',  // Define la animación con la duración y timing-function que desees
        heartbeat: 'heartbeat 2s linear 1s infinite both',
        load: 'load 10s linear forwards',
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
        bubbledown: 'bubbledown 8s infinite',
        'bubbledown-delayed-1': 'bubbledown 8s infinite 2s',
        'bubbledown-delayed-2': 'bubbledown 8s infinite 4s',
        'bubbledown-delayed-3': 'bubbledown 8s infinite 6s',
        'bubbledown-delayed-4': 'bubbledown 8s infinite 1s',
        'bubbledown-delayed-5': 'bubbledown 8s infinite 3s',
        'bubbledown-delayed-6': 'bubbledown 8s infinite 5s',
        'bubbledown-delayed-7': 'bubbledown 8s infinite 7s',
        'position-swap': 'positionSwap 8s infinite',
        spinright: 'spinright 16s linear infinite',
        slidein: 'slideIn 1s forwards',
        slideout: 'slideOut 1s forwards',
      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./src/screen/*.{html,js}", "./*.{html,js}*"],
  theme: {
    extend: {
      fontFamily: {
        titulos: ["Dancing Script", "cursive"],
        cuerpos:["Raleway", "sans-serif"],
      },

      keyframes: {
        appear: {
          '0%': { opacity: '0', transform: 'scale(0.75)' }, // Escala inicial al 25%
          '100%': { opacity: '1', transform: 'scale(1)' },   // Escala final al 100%
        },

        load: {
          '0%': { width: '0'}, // Escala inicial al 25%
          '100%': { width: '5rem'},   // Escala final al 100%
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
          '100%': { transform: 'translateY(-750px) scale(1.2)' },
        },
        positionSwap: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100px, -100px)' }, // Esta es una posición de ejemplo
        },
      },
      animation: {
        appear: 'appear 0.6s ease-in-out both',  // Define la animación con la duración y timing-function que desees
        heartbeat: 'heartbeat 2s linear 1s infinite both',
        load: 'load 7s linear forwards',
        bubbleup: 'bubbleup 8s infinite',
        'bubbleup-delayed-1': 'bubbleup 8s infinite 2s',
        'bubbleup-delayed-2': 'bubbleup 8s infinite 4s',
        'bubbleup-delayed-3': 'bubbleup 8s infinite 6s',
        'bubbleup-delayed-4': 'bubbleup 8s infinite 1s',
        'bubbleup-delayed-5': 'bubbleup 8s infinite 3s',
        'bubbleup-delayed-6': 'bubbleup 8s infinite 5s',
        'bubbleup-delayed-7': 'bubbleup 8s infinite 7s',
        'position-swap': 'positionSwap 8s infinite',
      },
      
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.animate-appear': {
          'view-timeline-name': '--image',
          'view-timeline-axis': 'block',
          'animation-timeline': '--image',
          'animation-name': 'appear',
          'animation-range': 'entry 25% cover 50%',
          'animation-fill-mode': 'both',
        },
      });
    },
    require('tailwindcss-animated')
  ],
}

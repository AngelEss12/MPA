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
          '0%': { opacity: '0', transform: 'scale(0.25)' }, // Escala inicial al 25%
          '50%': { opacity: '0.5', transform: 'scale(0.5)' }, // Escala inicial al 25%
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
      },
      animation: {
        appear: 'appear ease-in-out',  // Define la animación con la duración y timing-function que desees
        heartbeat: 'heartbeat 2s linear 1s infinite both',
      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

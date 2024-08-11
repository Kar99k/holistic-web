/** @type {import('tailwindcss').Config} */
import prelinePlugin from 'preline/plugin'

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#564AA3',
        primary15: 'rgb(86, 74, 163,0.15)',
        secondary: '#D8CCE9',
        accent: '#3C1C55',
        textColor: '#4E3876',
        textColor80: 'rgba(77, 55, 118, 0.8)',
        background: '#FEFDFE'
      }
    }
  },
  darkMode: 'class',
  plugins: [prelinePlugin]
}

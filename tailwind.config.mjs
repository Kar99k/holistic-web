/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
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
      },
      fontFamily: {
        montserrat: ['MontserratRegular', 'sans-serif'],
        montserratBold: ['MontserratBold', 'sans-serif'],
        montserratMedium: ['MontserratMedium', 'sans-serif'],
        montserratSemiBold: ['MontserratSemiBold', 'sans-serif'],
        garamondBold: ['apple_garamondbold_italic', 'serif'],
        garamond: ['apple_garamonditalic', 'serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')]
}

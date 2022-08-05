/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 400ms ease-in-out'
      }
    },
    fontFamily: {
      sans: ['Roboto-Slab', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  plugins: []
}

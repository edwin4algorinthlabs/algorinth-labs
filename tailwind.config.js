/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      'ball1': 'linear-gradient(157.28deg, rgba(148, 38, 186, 0) 41.63%, #9426BA 79.18%)',
      fontFamily: {
        "poppins": ['var(--font-poppins)'],
      },
      colors: {
        'secondary': "#D631BB",
      }
    },
  },
  plugins: [],
}

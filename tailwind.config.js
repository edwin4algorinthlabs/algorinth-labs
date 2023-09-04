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
      lineHeight: {
        'leading-12': '3rem',
        'leading-14': '3.5rem',
      },
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

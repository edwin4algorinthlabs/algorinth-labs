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
        '12': '3rem', //custom line-height values
        '14': '3.5rem',
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

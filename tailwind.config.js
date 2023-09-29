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
      fontSize: {
        'xxs': '0.5rem',
      },
      fontFamily: {
        "rubik": ['var(--font-rubik)'],
        "open-sans": ['var(--font-open-sans)'],
      },
      colors: {
        'primary': "#EA5501",
        'secondary': "#D631BB",
        'c-grey': "#525252",
        'c-grey-2': "#848794",
        "link-active": "#AD2B43"
      }
    },
  },
  plugins: [],
}

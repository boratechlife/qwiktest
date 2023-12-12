/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
   
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',

      },
      boxShadow: {
        '3xl': '0px -11px 20px 0px rgba(0, 0, 0, 0.30)',
      }
    },
    extend: {
      fontFamily: {
        'sans'  :['Roboto']
      }
    },
  },
  plugins: [],
}


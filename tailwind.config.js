/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-poppins)',
    },

    extend: {
      screens: {
        '4xl': '2560px',   // => @media (min-width: 2560px)
        '3xl': '1920px',   // => @media (min-width: 1920px)
        'xm': '828px',     // => @media (min-width: 828px)
        'ss': '464px',     // => @media (min-width: 464px)
        'xs': '376px',     // => @media (min-width: 376px)
        'xx': '320px',     // => @media (min-width: 320px)
      },

      colors: {
        primary: "#006DB7",
        secondary: "#f4af38",

        body: "#706F6F",
        heading: "#535151",
        headline: "#2E2D2C",

        freezed: "#E3E3E3",  // bordas
        ice: "#F0F0F0",
        light: "#F7F7F7",
      },

      listStyleImage: {
        "check": 'url("/img/check.jpg")',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('./img/banner-mobile.png')",
        'hero-desktop': "url('./img/banner-desktop.png')",
      },

      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      colors: {
        primary: "#2B5292",
        secondary: "#EF304F",
        third: "#FFF9F4",
        fourth: "#D62744",
        fifth: '#1F375D',

        darkGray: "#191A1B",
        mediumGray: "#292D32",
        neutralGray: "#666666",
        lighterGray: "#797C94",
        grayWhite: "#D9D9D9",
      },
      height:{
        '100': '26rem',
        '120': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        'px18': '18px',
        'px15': '15px',
        'px10': '10px',
        'px2': '2px',
      },
      backgroundColor: {
        'fundoRoxo': 'rgb(55, 22, 78, 0.7)',
        'fundoAzul': '#3b99eb',
        'verdeMarcados': '#11974d',
        'botao': '#12426b',
        'hover': '#256aa7',
      },
      height: {
        'vh70': '70vh',
      },
      fontSize: {
        'px13': '13px'
      },
      fontFamily: {
        roboto1: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        'sombraPadrao': '3px 4px 5px black',
      },
      borderColor: {
        'bodaAzul': '#3b99eb',
      },
      borderRadius: {
        'px3': '3px',
        'px4': '4px',
      },
      screens: {
        mc: '312px',
      },
    },
  },
  plugins: [],
}


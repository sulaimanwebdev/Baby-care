// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        spacing: {
          'wPanelDeskTop': '400px',
          'wPanelMobile': '70%'

        }
       },
  
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'min': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},

        'md2': {'max': '720px'},

        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},

        'sm2': {'max': '374px'},

        'sm3': {'max': '473px'},



        

      },
      maxWidth: {
        'newCutom': '1280px',
        'paragraph': '1200px',

       },
       boxShadow: {
       customShadow: '15px 0px 20px -9px rgba(0,0,0,0.55)'
       
      }
       
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
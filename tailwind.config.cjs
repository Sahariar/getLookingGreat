/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#8d46dd",
        
"secondary": "#35bbd6",
        
"accent": "#86efac",
        
"neutral": "#212530",
        
"base-100": "#F1E6F4",
        
"info": "#5168D6",
        
"success": "#169855",
        
"warning": "#F6B855",
        
"error": "#F52451",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

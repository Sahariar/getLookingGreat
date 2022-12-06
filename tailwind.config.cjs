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
          
          "primary": "#DB5A6B",
                   
          "secondary": "#dbeafe",
                   
          "accent": "#ecfccb",
                   
          "neutral": "#70ACC7",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#60a5fa",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
                   },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

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
          
          "primary": "#D15252",
                   
          "secondary": "#FFE09C",
                   
          "accent": "#a9bff9",
                   
          "neutral": "#231C31",
                   
          "base-100": "#E1E2EF",
                   
          "info": "#4D72D1",
                   
          "success": "#24DBCC",
                   
          "warning": "#AF7E0E",
                   
          "error": "#E22C38",
                   },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

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
          
          "primary": "#6E0B75",
                   
          "secondary": "#007EBD",
                   
          "accent": "#facc15",
                   
          "neutral": "#1F2937",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#e11d48",
                   },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {    
      backgroundImage: {
        'contact-bg': "url('/img/contact-bg-img.png')", // Add your image path here
      },  
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0077FF",  
        teal: "#9B30FF",   
        purple: "#FF00B3",    
      },
      animation: {
        one: "one 10s infinite",
        two: "two 10s infinite",
      },
      keyframes: {
        one: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0)", // Starting and ending positions
          },
          "25%": {
            transform: "translateX(-100px) translateY(70px)", // 25% of the animation
          },
          "50%": {
            transform: "translateX(20px) translateY(150px)", // 50% of the animation
          },
          "75%": {
            transform: "translateX(50px) translateY(100px)", // 75% of the animation
          },
        },
        two: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0)", // Starting and ending positions
          },
          "25%": {
            transform: "translateX(50px) translateY(10px)", // 25% of the animation
          },
          "50%": {
            transform: "translateX(100px) translateY(50px)", // 50% of the animation
          },
          "75%": {
            transform: "translateX(50px) translateY(100px)", // 75% of the animation
          },
        },},
    },
  },
  plugins: [],
};

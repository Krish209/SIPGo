/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        vs: "510px",
        us: "385px",
        ws: "305px",
      },
      colors: {
        // Custom colors with proper RGB values
        night: "rgb(21, 20, 20)",
        primary: "rgb(43, 41, 41)",
        crayola: "rgb(255, 128, 66)",
        mint: "rgb(0, 196, 159)",
        tomato: "rgb(246, 28, 28)",
        crimson: "rgb(220, 20, 60)",
        fireengine: "rgb(206, 32, 41)",
        cherryred: "rgb(255, 76, 76)",
        peach: "rgb(255, 218, 185)",
        skyline: "rgb(126, 200, 227)",
        lavender: "rgb(230, 230, 250)",
        teal: "rgb(0, 128, 128)",
      },
    },
  },
  plugins: [],
}
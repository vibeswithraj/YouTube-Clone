import { border, borderRadius, width } from "@mui/system";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "2px",
          scrollbarColor: "rgb(200 200 200) black",
          "&::-webkit-scrollbar": {
            width: "2px",
          },
        },
        ".no-scrollbar": {
          "&::-webkit-scrollbar": {
            width: "0px",
          },
        },
        // "&::-webkit-scrollbar-track": {
        //   background: "rgb(0 0 0) black",
        // },
        // "&::-webkit-scrollbar-thumb": {
        //   backgroundColor: "rgb(200 200 200) gray",
        //   borderRadius: "20px",
        //   border: '1px solid white'
        // },
        //},
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

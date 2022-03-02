import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import plugin from "windicss/plugin";

export default defineConfig({
  darkMode: "class",
  analyze: {
    analysis: {
      interpretUtilities: false,
    },
    // see https://github.com/unjs/listhen#options
    server: {
      port: 4444,
      open: true,
    },
  },
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
        primary: "#0060f3",
        primaryHover: "#0070f3",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      scale: {
        99: ".99",
        98: ".98",
        97: ".97",
        96: ".96",
      },
    },
  },
  shortcuts: {
    btn: "py-2 px-4 font-semibold rounded-lg transition-all m-4 border-transparent transform hover:scale-98 border border-black border-solid hover:bg-gray-100",
    "btn-primary": "text-white bg-primary hover:bg-primaryHover",

    modal:
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg w-1/2 h-1/2",
  },
});

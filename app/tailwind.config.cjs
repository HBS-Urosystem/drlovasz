const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, daisyui],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        drlovasz: {
          ...require("daisyui/src/theming/themes")["corporate"],
          "primary": "#6e9F9C",
          "secondary": "#c4b4a6",
          "accent": "#c4b4a6",
          "accent-content": "#6e9F9C",
          "neutral": "#ffffff",
          "base-100": "#ece7e3",
        },
      },
      {
        business: {
          ...require("daisyui/src/theming/themes")["business"],
          "primary": "#6e9F9C",/* cfdae5 */
          "secondary": "#6e9F9C",
          "accent": "#23282e",
          "accent-content": "#6e9F9C",
          "neutral": "#23282e",
          "base-100": "#202020",
        }
      },
      {
        kriszta: {
          ...require("daisyui/src/theming/themes")["corporate"],
          "primary": "#c4b4a6",
          "secondary": "#c4b4a6",
          "accent": "#c4b4a6",
          "neutral": "#ffffff",
          "base-100": "#ece7e3",
        },
      },
      {
        blueish: {
          ...require("daisyui/src/theming/themes")["nord"],
          "primary": "#fff1eb",
          "secondary": "#fff1eb",
          "accent": "#fff1eb",
          "neutral": "#fff1eb",
          "base-100": "#ace0f9",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "business", // name of one of the included themes for dark mode
    lightTheme: "kriszta", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};

module.exports = config;

// // import type { Config } from "tailwindcss";

// // export default {
// //   content: [
// //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
// //   ],
// //   theme: {
// //     extend: {
// //     },
// //   },
// //   plugins: [],
// // } satisfies Config;


// const svgToDataUri = require("mini-svg-data-uri");
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}", 
//     "./components/**/*.{js,ts,jsx,tsx}", 
//     "./app/**/*.{js,ts,jsx,tsx}"
//   ],
//   darkMode: "class", // Ensures dark mode is applied via a class, not by default
//   theme: {
//     extend: { 
//       keyframes: {
//         'logo-cloud': {
//           from: { transform: 'translateX(0)' },
//           to: { transform: 'translateX(calc(-100% - 4rem))' },
//         },
//       },
//       animation: {
//         'logo-cloud': 'logo-cloud 30s linear infinite', // Adjust speed as needed
//       },
// },
//   },
//   plugins: [
//     addVariablesForColors,
//     function ({ matchUtilities, theme }: any) {
//       matchUtilities(
//         {
//           "bg-dot-thick": (value: any) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
//       );
//     },],
// };

// export default config;


// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );
 
//   addBase({
//     ":root": newVars,
//   });
// }


const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // Ensures dark mode is applied via a class, not by default
  theme: {
    extend: { 
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        'logo-cloud': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 4rem))' },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        'logo-cloud': 'logo-cloud 30s linear infinite', // Adjust speed as needed
        spotlight: "spotlight 2s ease 1.75s 1 forwards",
        scroll:
        "scroll var(--animation-duration, 80s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    require("daisyui"),
  ],
};

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

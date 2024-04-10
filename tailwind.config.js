/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#724ff9",
          // secondary: "#f6d860",
          // accent: "#37cdbe",
          // neutral: "#3d4451",
          // "base-100": "#ffffff"
        },
      },
      "light", // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    ],
  },
};

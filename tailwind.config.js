import daisyui from "./node_modules/daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["autumn", "light", "dark"],
    Theme: "autumn",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};

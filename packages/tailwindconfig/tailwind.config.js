/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(254, 175, 0)",
        "orange-medium": "rgb(248, 212, 66)",
        "orange-light": "rgb(242, 234, 225)",
        "gray-dark": "rgb(108, 108, 108)",
        "gray-medium": "rgb(172, 172, 172)",
        "gray-light": "rgb(248, 248, 248)",
        "blue-light": "rgb(240, 249, 255)",
        "pink-medium": "rgb(238, 149, 197)",
        "pink-light": "rgb(254, 246, 251)",
        "yellow-light": "rgb(254, 251, 236)",
      },
    },
  },
};

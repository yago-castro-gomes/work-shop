import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      "white":"#ffffff",
      "black":"#000000",
      "purple":{
        "light":"#735Bee",
        "dark": "#02013f",
      },
      "gradient": "linear-gradient(to right, #63E5F4 0%, #735BEE 57%)",
  },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'timing': ['GoodTiming-Bold', 'sans-serif'],
        'montserrat': ['Montserrat-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;

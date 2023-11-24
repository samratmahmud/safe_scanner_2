import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {"200": "##DDDDDD26", "300": "#D7D9DC"},
        gray: {"50": "#ffffff"},
        neutral: {"400": "#97999D", "700": "#3C4043", "800": "#202124"},
        stone: {"900": "#131413"},
        red: {"400": "#FF5467"},
        green: {"300": "#76FB8E"},
        emerald: {"200": "#A7FFC2", "400": "#13FF75"},
      },
      backgroundImage: {},
    },
    fontSize: {
      xs: ["11px", {lineHeight: "1.55em", letterSpacing: "0.1em"}],
      sm: ["12px", {lineHeight: "1.33em", letterSpacing: "0.021em"}],
      md: ["13px", {lineHeight: "1.54em", letterSpacing: "0.08em"}],
      base: ["16px", {lineHeight: "1.19em", letterSpacing: "0.08em"}],
      lg: ["17px", {lineHeight: "1.53em"}],
      xl: ["20px", {lineHeight: "1.2em"}],
      "2xl": ["24px", {lineHeight: "1em"}],
      "3xl": ["28px", {lineHeight: "1.11em"}],
    },
    shadows: {
      sm: "0px 4px 6px rgba(0, 0, 0, 0.20)",
      md: "32px 32px 32px",
      lg: "0px -1px 0px rgba(0, 0, 0, 0.12)",
    },
    fontFamily: {
      "dm-sans": ["'DM Sans'", ...fontFamily.sans],
      "comic-sans-ms": ["'Comic Sans MS'", ...fontFamily.sans],
      roboto: ["'Roboto'", ...fontFamily.sans],
      "dm-mono": ["'DM Mono'", ...fontFamily.sans],
      "sf-pro-text": ["'SF Pro Text'", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#223366",
      secondary: "#00C7C7",
      light: "#F2F2F2",
      danger: "#FF0000",
      error: "#D95B43",
      warning: "#FF9900",
      precaution: "#FFF700",
      link: "#1677ff",
      dark: "#373739",
    },
    fontSize: {
      sm: "0.625rem",
      s: "0.75rem",
      md: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        regular: "0px 0px 5px 1px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;

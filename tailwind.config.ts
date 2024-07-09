import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: '#FFFFFF',
        primary: '#5954D2',
        secondary: '#000',
        disabled: '#D0CECE',
        grey: {
          50: '#F5F5F5',
          100: '#EEEEEE',
          200: '#CCCCCC',
          300: '#D0CECE',
          400: '#B5B5B5',
          500: '#9F9F9F',
          600: '#7A7A7A',
          700: '#666666',
          800: '#525252',
          900: '#3D3D3D',
          A100: '#292929',
        },
        error: {
          50: '#FBEEF0',
          100: '#F2C6CE',
          200: '#F0A8B8',
          300: '#DF768B',
          400: '#D54E69',
          500: '#CC2647',
          600: '#B82240',
          700: '#A31E39',
          800: '#8F1B32',
          900: '#7A172B',
          A100: '#661324',
          main: '#CC462B',
        },
        success: '#2E9E5E',
        warning: '#DFBC3F',
        info: '#2191FB',
        link: '#1976D2',
      },
    },
  },
  plugins: [],
};
export default config;

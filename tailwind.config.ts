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
        system : {
          purple10: "#240643",
          purple15: "#300b60",
          purble20: "#401075",
          purple30: "#5a1b19",
          purble40: "#7526e3",
          purble50: "#9050e9",
          purble60: "#ad7bee",
          purble70: "#c29ef1",
          purble80: "#d7bff2",
          purble90: "#ece1f9",
          purble95: "#f6f2fb",

          green10: "#071b12",
          green15: "#0c2912",
          green20: "#1c3326",
          green30: "#194e31",
          green40: "#396547",
          green50: "#2e844a",
          green60: "#3ba755",
          green65: "#41b658",
          green70: "#45c65a",
          green80: "#91db8b",
          green90: "#cdefc4",
          green95: "#ebf7e6",
          green100: "#202b23"
        },
      },
    },
  },
  plugins: [],
};
export default config;

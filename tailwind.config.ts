import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8CC7E4",
        olive: "#C3D9A2",
        sand: "#F5EDE0",
        ink: "#6B6B6B",
        success: "#33A06F",
        warning: "#E2B93B",
        danger: "#D64545",
        lilac: "#B9A6F5",
        coral: "#FFA07A"
      },
      boxShadow: { soft: "0 6px 24px rgba(0,0,0,0.08)" },
      borderRadius: { "2xl": "1.25rem" }
    },
  },
  plugins: [],
};

export default config;

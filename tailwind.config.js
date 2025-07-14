/* eslint-disable */

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground, 0 0 0))", // fallback
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colour scale used across globals.css
        light: {
          400: "var(--color-light-400)",
          500: "var(--color-light-500)",
          700: "var(--color-light-700)",
          800: "var(--color-light-800)",
          850: "var(--color-light-850)",
          900: "var(--color-light-900)",
        },
        dark: {
          100: "var(--color-dark-100)",
          200: "var(--color-dark-200)",
          300: "var(--color-dark-300)",
          400: "var(--color-dark-400)",
          500: "var(--color-dark-500)",
        },
        primary: {
          100: "#fff1e6",
          500: "#ff7000",
          DEFAULT: "#ff7000",
        },
        link: {
          100: "var(--color-link-100)",
        },
      },
      borderRadius: {
        "2": '8px',
        "1.5": '6px',
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      backgroundImage: {
        "auth-dark": "url('/images/auth-dark.png')",
        "auth-light": "url('/images/auth-light.png')",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

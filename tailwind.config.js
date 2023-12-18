/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "640px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontSize: {
        'sm': '0.675rem', // Equivalent to 14px
        'base': '1rem',   // Equivalent to 16px
        'lg': '1.125rem', // Equivalent to 18px
        'xl': '1.25rem',  // Equivalent to 20px
        '2xl': '1.5rem',  // Equivalent to 24px
      },
    },
  },
  plugins: [],
};

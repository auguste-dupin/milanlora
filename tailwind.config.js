
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,md,mdx}","./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent-color)',
      },
      boxShadow: {
        'accent-glow': '0 0 15px 0 var(--accent-color)',
      },
      fontFamily: { sans: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Inter","Roboto","Ubuntu","Cantarell","Noto Sans","Helvetica Neue","Arial","sans-serif"] }
    }
  },
  darkMode: "class",
  plugins: [],
}

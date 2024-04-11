/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      'spin-slow': 'spin 4s linear infinite',
      pulse: 'pulse 5s ease-in-out infinite',
      'bounce': 'bounce 1s infinite',
     }
  },
  plugins: [],
}

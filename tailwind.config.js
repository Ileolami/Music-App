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
      'ping': 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite',
      'bounce': 'bounce 1s infinite',
      
     }
  },
  plugins: [],
}

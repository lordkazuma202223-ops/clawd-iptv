/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'white/10': 'rgba(255, 255, 255, 0.1)',
        'white/20': 'rgba(255, 255, 255, 0.2)',
        'white/40': 'rgba(255, 255, 255, 0.4)',
        'white/60': 'rgba(255, 255, 255, 0.6)',
        'white/70': 'rgba(255, 255, 255, 0.7)',
        'white/80': 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
};

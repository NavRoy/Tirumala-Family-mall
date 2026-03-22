/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red:    { DEFAULT:'#CC0000', dark:'#990000', light:'#FF3333' },
        gold:   { DEFAULT:'#C98C00', light:'#F5C040', pale:'#FEF3C7' },
        cream:  { DEFAULT:'#FAF6F0', dark:'#F0E8DC', deep:'#E8D8C4' },
        ink:    { DEFAULT:'#1A0A08', mid:'#5C2E24', muted:'#8B5A52' },
        rust:   { DEFAULT:'#8B3A2A' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      screens: { xs: '480px' },
    },
  },
  plugins: [],
}

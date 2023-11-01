/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      fontSize: {
        xxs: '0.5rem',
      },
      backgroundImage: {
        'whiteSquareFrame': "url('/whiteSquareFrame.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'questrial': ['Questrial', 'sans'],
      },
      fontWeight: {
        'light': 300,
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  safelist: [
    'translate-x-0',
    '-translate-x-full',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#9CFE4F',
        heading: '#1A1A1A',
        'primary-black': '#0E0F11',
        'border-color': '#313131',
        'gray-dark': '#18191B',
        'text-color': '#9E9FA0',
      },
      spacing: {
        '13': '13px',
        '30': '30px',
        '35': '35px',
        '110': '110px',
        '130': '130px',
        '140': '140px',
        '150': '150px',
        '230': '230px',
        '261': '261px',
        '290': '290px',
        '320': '320px',
        '340': '340px',
        '360': '360px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '660': '660px',
        '760': '760px',
      },
      borderRadius: {
        '30': '30px',
        '40': '40px',
      },
      blur: {
        '70': '70px',
        '80': '80px',
        '100': '100px',
        '150': '150px',
        '200': '200px',
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
    },
  },
  plugins: [],
}
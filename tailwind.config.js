/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth: {
        'ms-card': '290px',
        'mm-card': '350px',
        'ml-card': '400px',
        'mt-card': 'auto',
        't-card': '400px',
        'l-card': '400px',
        'll-card': '500px',
        'lll-card': 'auto',
      },
      backgroundColor:{
        'card-blue': '#0940AD',
        'primary': '#5800FF',
        'secondary-one': '#0096FF',
        'secondary-two': '#00D7FF',
        'secondary-three': '#72FFFF',
        'secondary-p-1' : '#6A19FF',
        'secondary-p-2' : '#3E00B3'
      },
      textColor:{
        'secondary-one': '#0096FF',
        'secondary-two': '#00D7FF'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

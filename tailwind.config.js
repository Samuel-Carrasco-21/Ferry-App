/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx}",
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
      height: {
        'card-list': '245px'
      },
      backgroundColor:{
        'card-blue': '#0940AD'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.ts',
    './resources/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        dinPro: ['DIN Pro', 'sans-serif'],
      },
      colors: {
        'primary': '#3c324c',
        'primary-light': '#8775a4',
        'secondary': '#ed2e38',
      },
      textColor: {
        'success': '#16a34a',
        'error': '#db2626',
        'warn': '#ea580c',
        'base': '#4b5563',
      },
      backgroundImage: {
        'anime': 'url(/images/anim-bg.png)',
      },
    },
  },
  plugins: [],
};

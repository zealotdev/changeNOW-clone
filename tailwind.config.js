module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { left: '-200rem' },
          '50%': { left: '-200rem' },
          '100%': { left: '-2rem' },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};

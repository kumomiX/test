module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        50: 'rgb(255 255 255 / 85%)',
        100: '#ffffff',
        200: '#fafafb',
        300: '#f3f3f4',
        400: '#DBDADE',
        500: '#9E9EA7',
        600: '#6E6D7A',
        700: '#3D3D4E',
        800: '#333333',
        900: '#0D0C22',
      },
      primary: {
        main: '#18A0FB',
        contrast: '#ffffff',
      },
      secondary: {
        main: '#FF3D71',
        contrast: '#ffffff',
      },
      tertiary: {
        main: '#FFD600',
        contrast: '#ffffff',
      },
      success: {
        main: '#0FBA81',
        contrast: '#ffffff',
      },
    },
    fontFamily: {
      primary:
        'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      secondary:
        'Futura PT, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
    extend: {
      boxShadow: {
        input: '0 0 0 4px rgba(24, 160, 251, 0.15)',
        popover: '0px 10px 50px rgb(0 0 0 / 10%)',
        menu: '0px 3px 5px rgb(0 0 0 / 5%)',
      },
    },
  },
  variants: {},
  plugins: [],
}

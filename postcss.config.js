export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        '> 0.5%',
        'last 2 versions',
        'Firefox ESR',
        'not dead',
        'ie >= 11',
        'iOS >= 8',
        'Android >= 4.4',
      ],
    },
  },
};

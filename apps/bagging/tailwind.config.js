const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

// default config - https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  presets: [require('../../tailwind.config')],
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    join(__dirname, '../../libs/**/*.{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};

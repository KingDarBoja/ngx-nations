const { addTailwindPlugin } = require('@ngneat/tailwind');
const tailwindConfig = require('./tailwind.js');

module.exports = (config) => {
  addTailwindPlugin({
    webpackConfig: config,
    tailwindConfig,
  });
  return config;
};

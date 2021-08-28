module.exports = {
  name: 'cozy-nest-icon',
  inputDir: './src/icons',
  outputDir: './src/assets/fonts',
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['scss'],
  fontsUrl: '../fonts',
  prefix: 'icon',
  tag: 'i',
  pathOptions: {
    scss: './src/assets/styles/_icons.scss',
  },
  formatOptions: {
    css: {
      indent: 2,
    },
  },
};

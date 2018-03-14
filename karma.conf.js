module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    reporters: ['mocha'],

    browsers: ['Chrome'],

    files: [
      { pattern: 'test/index.js', watched: false }
    ],

    preprocessors: {
      'test/index.js': ['webpack']
    },

    webpack: require('./webpack.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack'
    ]
  });
};
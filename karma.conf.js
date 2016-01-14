'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage'
    ],
      preprocessors:	{
          'src/**/*.js':   ['coverage']
      },
      reporters: ['progress', 'coverage'],
      coverageReporter: {
          type:   'lcov',
          dir:	'reports',
          subdir: 'coverage'
      },

    colors: true
  });
};

'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

var paths = gulp.paths;

function runTests (singleRun, done) {
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
      paths.src + '/js/poler.js',
      paths.src + '/**/*.js',
      paths.unit +'/**/*.js'
  ]);

  gulp.src(testFiles)
      //.pipe($.angularFilesort())
      .on('end', function () {

      })
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: (singleRun)? 'run': 'watch'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
}

gulp.task('test', ['clean'], function (done) { runTests(true /* singleRun */, done) });
gulp.task('test:auto', function (done) { runTests(false /* singleRun */, done) });

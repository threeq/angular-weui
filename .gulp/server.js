'use strict';

var gulp = require('gulp');

var opn = require('opn');

var paths = gulp.paths;

var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
  // browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === paths.src || (util.isArray(baseDir) && baseDir.indexOf(paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components',
      '/test/serve': paths.test_server
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      middleware: middleware,
      routes: routes
    },
    port: 3000,
    open: false,
     browser: browser
  }, function(){
    var homepage = 'http://localhost:3000/test.html';
    if(browser){
      //opn(homepage, {app: browser})
    }else{
      opn(homepage)
    }
  });
}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    paths.tmp + '/serve',
    paths.src
  ], [
    paths.tmp + '/serve/{app,lib,components}/**/*.css',
    paths.src + '/{app,lib,components}/**/*.js',
    paths.src + 'src/assets/images/**/*',
    paths.tmp + '/serve/*.html',
    paths.tmp + '/serve/{app,lib,components,common}/**/*.html',
    paths.src + '/{app,lib,components,common}/**/*.html'
  ]);
});

gulp.task('serve:test', ['watch'], function () {
    browserSyncInit([paths.tmp + '/serve', paths.src], [
        paths.tmp + '/**/*',
        paths.tmp + '/*',
        paths.src + '/**/*',
        paths.src + '/*',
        paths.test_server + '/**/*',
        paths.test_server + '/*'
    ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([paths.tmp + '/serve', paths.src], null, []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(paths.dist, null, []);
});


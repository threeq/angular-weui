'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject'], function () {
    gulp.watch([
        paths.src + '/*',
        paths.src + '/**/*.js',
        paths.src + '/**/*.html',
        paths.src + '/**/*.css',
        paths.src + '/**/*.less',
        paths.src + '/**/*.scss',
        paths.src + '/**/*.styl',
        paths.test_server + '/*',
        paths.test_server + '/**/*.html',
        paths.test_server + '/**/*.js',
        paths.test_server + '/**/*.css',
        'bower.json'
    ], ['inject']);
});

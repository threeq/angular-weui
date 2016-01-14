/**
 * Created by three on 15/9/9.
 */

'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('docs', ['clean'], function () {
    gulp.src([
        paths.src + '/js/**/*.js'
    ])
        .pipe($.jsdoc.parser())
        .pipe($.jsdoc.generator('./docs'));
        //.pipe($.jsdoc('./docs'));
});

gulp.task('lintHTML', function () {
    gulp.src([
        paths.src + '/**/*.html'
    ])
        .pipe($.jshint.extract('auto|always|never'))
        .pipe($.jshint())
        .pipe($.jshint.reporter('default', { verbose: true }))
});

gulp.task('lint', function () {
    gulp.src([
        paths.src + '/js/**/*.js'
    ])
        .pipe($.jshint.extract('auto|always|never'))
        .pipe($.jshint())
        .pipe($.jshint.reporter('default', { verbose: true }))
        .pipe($.jshint.reporter('fail'))
});
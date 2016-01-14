'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

gulp.task('inject', ['styles'], function () {

    var injectStyles = gulp.src([
        paths.tmp + '/serve/{app,css}/**/*.css',
        paths.test_server + '/**/*.css'
    ], {read: false});

    var injectScripts = gulp.src([
        paths.src + '/**/*.js',
        paths.test_server + '/**/*.js'
    ]).pipe($.plumber({errorHandler: function handleError(err) {
        console.error(err.toString());
        //this.emit('end');
    }})).pipe($.angularFilesort());

    var injectOptions = {
        ignorePath: [paths.src, paths.tmp + '/serve'],
        addRootSlash: false
    };

    var wiredepOptions = {
        directory: 'bower_components',
        exclude: []// /bootstrap\.js/, /bootstrap\.css/, /bootstrap\.css/, /foundation\.css/
    };


    return gulp.src(paths.test_server + '/*.html')
        .pipe($.plumber({errorHandler: function handleError(err) {
            console.error(err.toString());
            //this.emit('end');
        }}))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep(wiredepOptions))
        .pipe(gulp.dest(paths.tmp + '/serve'));

});

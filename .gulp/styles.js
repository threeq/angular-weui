'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('css', function() {
    gulp.src([
        paths.src + '/**/*.css'
    ]).pipe($.plumber({errorHandler: function handleError(err) {
        console.error(err.toString());
        //this.emit('end');
    }}))
        .pipe($.autoprefixer())
        .pipe(gulp.dest(paths.tmp + '/serve/app/'));
});

gulp.task('sass', function() {
    gulp.src([
        paths.src + '/css/sass/app.scss'
    ]).pipe($.plumber({errorHandler: function handleError(err) {
        console.error(err.toString());
        //this.emit('end');
    }}))
        .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe(gulp.dest(paths.tmp + '/serve/app/'));
});

gulp.task('styles', ['css'], function () {

    var lessOptions = {
        paths: [
            'bower_components',
            paths.src + '/app',
            paths.src + '/components'
        ]
    };

    var injectFiles = gulp.src([
        paths.src + '/{app,components}/**/*.less',
        '!' + paths.src + '/css/index.less',
        '!' + paths.src + '/css/vendor.less'
    ], {read: false});

    var injectOptions = {
        transform: function (filePath) {
            filePath = filePath.replace(paths.src + '/app/', '');
            filePath = filePath.replace(paths.src + '/components/', '../components/');
            return '@import \'' + filePath + '\';';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };

    var indexFilter = $.filter('index.less');

    return gulp.src([
        paths.src + '/css/**/*.less'

    ]).pipe($.plumber({errorHandler: function handleError(err) {
        console.error(err.toString());
        //this.emit('end');
    }}))
        //.pipe(indexFilter)
        .pipe($.inject(injectFiles, injectOptions))
        //.pipe(indexFilter.restore())
        .pipe($.less())
        .pipe($.autoprefixer())
        .on('error', function handleError(err) {
            console.error(err.toString());
            //this.emit('end');
        })
        .pipe(gulp.dest(paths.tmp + '/serve/app/'));
});


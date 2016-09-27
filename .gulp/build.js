'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
  return gulp.src([
    paths.src + '/**/*.html'
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: gulp.moduleName
    }))
    .pipe(gulp.dest(paths.tmp + '/partials/'));
});

gulp.task('js',['partials'], function () {
    gulp.src([
        paths.src + '/js/**/*.js',
        paths.tmp + '/partials/**/*.js'
    ])
        .pipe($.angularFilesort())
        .pipe($.concat(gulp.appName+'.js'))    //合并所有js到gulp.appName + .js
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(paths.dist + '/'))    //输出gulp.appName + .js到文件夹
        .pipe($.rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe($.uglify({preserveComments: $.uglifySaveLicense}))   //压缩
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe($.size({ title: paths.dist + '/', showFiles: true }));
});

gulp.task('styles:dest', function () {

    return gulp.src([
        paths.src + '/css/**/*.less'

    ]).pipe($.plumber({errorHandler: function handleError(err) {
        console.error(err.toString());
    }}))
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe($.concat(gulp.appName+'.css'))    //合并所有js到gulp.appName + .css
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(paths.dist + '/'))    //输出gulp.appName + .css到文件夹
        .pipe($.rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe($.minifyCss())   //压缩
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe($.size({ title: paths.dist + '/', showFiles: true }));
});

gulp.task('images', function () {
  return gulp.src(paths.src + '/images/**/*')
    .pipe(gulp.dest(paths.dist + '/images/'));
});

gulp.task('fonts', function () {
  return gulp.src(paths.src + '/fonts/**/*')
    .pipe(gulp.dest(paths.dist + '/fonts/'));
});

gulp.task('misc', function () {
  return gulp.src(paths.src + '/**/*.ico')
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('langs', function () {
  return gulp.src([
    paths.src + '/langs/*.json'
  ])
      .pipe(gulp.dest(paths.dist + '/langs/'));
});

gulp.task('clean', function (done) {
  $.del([paths.dist + '/', paths.tmp + '/', paths.reports + '/'], done);
});

gulp.task('build', ['js', 'styles:dest', 'images', 'fonts', 'misc','langs']);

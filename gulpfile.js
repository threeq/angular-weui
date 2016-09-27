'use strict';

var gulp = require('gulp');
gulp.appName = 'angular-weui';
gulp.moduleName = 'ng.weui';
gulp.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'test/e2e',
    unit: 'test/unit',
    test_server:'test/serve',
    docs: 'docs/api',
    demo: 'docs',
    reports: 'reports'
};

require('require-dir')('./.gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

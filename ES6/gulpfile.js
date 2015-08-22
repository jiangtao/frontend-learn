'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");
var BUILD = 'build/**/*.js';
gulp.task('babel', function () {
    return gulp.src(BUILD)
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});
gulp.task('default', function(){
	gulp.watch(BUILD,['babel'] )
});

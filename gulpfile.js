var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    cssmin= require('gulp-minify-css'),
    rename = require('gulp-rename');


    gulp.task('stylus',function(){
       return gulp.src('./client/recruit-funnel.styl')
            .pipe(stylus())
            .pipe(cssmin())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('./www/styles'));
    });
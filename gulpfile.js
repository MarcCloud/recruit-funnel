var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    cssmin= require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserify=require('browserify'),
    source = require('vinyl-source-stream');


    gulp.task('stylus',function(){
       return gulp.src('./client/recruit-funnel.styl')
            .pipe(stylus())
            .pipe(cssmin())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('./www/styles'));
    });

    gulp.task('build-loginjs',function(){
       return browserify('./client/login/login.jsx',{transform:'reactify'}).bundle()
            .pipe(source('login.min.js'))
            .pipe(gulp.dest('./www/scripts'));
    });
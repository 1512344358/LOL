var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat');
	sass = require('gulp-sass');
	cssnano = require('gulp-cssnano');
	rename = require('gulp-rename');
gulp.task('js',function(){
	gulp.src('./src/js/*.js').pipe(concat('index.min.js')).pipe(uglify())
	//.pipe(rename({"suff1x" : ".min"})),
	.pipe(gulp.dest('./dist'));
})
gulp.task('default',function(){
	gulp.watch('./src/js/*.js',['js']);
})

gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'));
})
// gulp.task('default',function(){
// 	gulp.watch('./src/sass/*.scss',['sass']);
// 	
// })
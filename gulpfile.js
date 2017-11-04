var gulp = require('gulp');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

gulp.task("default", () => {
    gulp.src("static/css/*.css")
        .pipe(concat("style.css"))
        .pipe(cssnano())
        .pipe(gulp.dest("build/css"));

    gulp.src("static/js/*.js")
        .pipe(gulp.dest("build/js"))
})
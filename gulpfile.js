var gulp = require('gulp');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

var browserSync = require('browser-sync').create();

// Server for browser sync
gulp.task('browser-sync', function() {
    browserSync.init(['*.html', "build/css/*.css"], {
        server: ['./', 'build']
    });
});

/* Reload task */
gulp.task('bs-reload', function() {
    browserSync.reload();
});

// Gulp task which watches for changes in html and css file
gulp.task("watch", ['browser-sync'], () => {
    gulp.watch(["*.html"], ["bs-reload"]);
    gulp.watch(["static/css/*.css"], ["build", "bs-reload"]);
})

// Build the css and js files
gulp.task("build", () => {
    gulp.src("static/css/*.css")
        .pipe(concat("style.css"))
        .pipe(cssnano())
        .pipe(gulp.dest("build/css"));

    gulp.src("static/js/*.js")
        .pipe(gulp.dest("build/js"))
})
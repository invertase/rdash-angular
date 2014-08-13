var gulp      = require('gulp');
var less      = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename    = require('gulp-rename');

/**
 * Compile dashboard
 */
gulp.task('compile-dashboard', function() {
    return gulp.src('less/dashboard.less')
        .pipe(less())
        .pipe(gulp.dest('css/dashboard'));
});

/**
 * Minify CSS
 */
gulp.task('minify-css', function() {
    return gulp.src('css/dashboard/dashboard.css')
      .pipe(rename({ suffix: '.min' }))
      .pipe(minifyCSS())
      .pipe(gulp.dest('css/dashboard'));
});

/**
 * Watch for changes
 */
gulp.task('watch', function() {
    gulp.watch('./less/**/*.less', ['compile-dashboard', 'minify-css']);
});

gulp.task('default', ['compile-dashboard', 'minify-css', 'watch']);

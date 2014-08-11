var gulp      = require('gulp');
var less      = require('gulp-less');

/**
 * Compile dashboard
 */
gulp.task('compile-dashboard', function(){
    return gulp.src('less/dashboard.less')
        .pipe(less())
        .pipe(gulp.dest('css/dashboard'));
});

gulp.task('default', function() {
    gulp.run('compile-dashboard');

    gulp.watch('less/dashboard/**/*.less', function() {
        gulp.run('compile-dashboard');
    });
});
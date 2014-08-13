var gulp      = require('gulp');
var less      = require('gulp-less');

/**
 * Compile less
 */
gulp.task('compile-less', function(){
    return gulp.src('src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', function() {
    gulp.run('compile-less');

    gulp.watch('src/less/**/*.less', function() {
        gulp.run('compile-less');
    });
});
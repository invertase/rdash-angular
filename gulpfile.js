var gulp      = require('gulp');
var less      = require('gulp-less');

/**
 * Compile dashboard
 */
gulp.task('compile-dashboard', function(){
  gulp.src('less/dashboard.less')
      .pipe(less())
      .pipe(gulp.dest('css/dashboard'));
});

gulp.task('watch', function() {
  gulp.watch('./less/**/*.less', ['compile-dashboard']);
});

gulp.task('default', ['compile-dashboard', 'watch']);
var gulp      = require('gulp'), 
  less      = require('gulp-less');

var paths = {
  js: 'src/js/**/*.*',
  fonts: 'src/fonts/**/*.*',
  images: 'src/img/**/*.*',
  styles: 'src/less/**/*.less',
  index: 'src/index.html',
  bower_components: 'src/bower_components/**/*.*'
};


/**
 * Copy assets
 */
gulp.task('copy-assets', ['copy-index', 'copy-fonts', 'copy-images', 'copy-bower_components', 'copy-js']);

gulp.task('copy-index', function(){
  return gulp.src(paths.index)
    .pipe(gulp.dest('dist'));
});
gulp.task('copy-fonts', function(){
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('dist/fonts'));
});
gulp.task('copy-images', function(){
  return gulp.src(paths.images)
    .pipe(gulp.dest('dist/img'));
});
gulp.task('copy-bower_components', function(){
  return gulp.src(paths.bower_components)
    .pipe(gulp.dest('dist/lib'));
});
gulp.task('copy-js', function(){
  return gulp.src(paths.js)
    .pipe(gulp.dest('dist/js'));
});

/**
 * Compile less
 */
gulp.task('compile-less', function(){
  return gulp.src(paths.styles)
      .pipe(less())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['compile-less', 'copy-assets']);
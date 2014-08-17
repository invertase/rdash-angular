var gulp    = require('gulp'),
  less      = require('gulp-less'),
  usemin    = require('gulp-usemin'),
  wrap      = require('gulp-wrap'),
  connect   = require('gulp-connect'),
  watch     = require('gulp-watch'),
  gulpkss   = require('gulp-kss'),
  concat    = require('gulp-concat'),
  addSrc    = require('gulp-add-src');

var paths = {
  js: 'src/js/**/*.*',
  fonts: 'src/fonts/**.*',
  images: 'src/img/**/*.*',
  styles: 'src/less/**/*.less',
  index: 'src/index.html',
  bower_fonts: 'src/bower_components/**/*.{ttf,woff,eof,svg}',
  bower_components: 'src/bower_components/**/*.*',
};


gulp.task('usemin', function() {
  return gulp.src(paths.index)
    .pipe(usemin({
      less: [less(), 'concat'],
      js: ['concat', wrap('(function(){ \n<%= contents %>\n})();')],
    }))
    .pipe(gulp.dest('dist/'));
});

/**
 * Copy assets
 */
gulp.task('copy-assets', ['copy-images', 'copy-fonts', 'copy-bower_fonts']);

gulp.task('copy-images', function(){
  return gulp.src(paths.images)
    .pipe(gulp.dest('dist/img'));
});

gulp.task('copy-fonts', function(){
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-bower_fonts', function(){
  return gulp.src(paths.bower_fonts)
    .pipe(gulp.dest('dist/lib'));
});

/**
 * Watch src
 */
gulp.task('watch', function () {
  gulp.watch([paths.styles, paths.index, paths.js], ['usemin']);
  gulp.watch([paths.images], ['copy-images']);
  gulp.watch([paths.fonts], ['copy-fonts']);
  gulp.watch([paths.bower_fonts], ['copy-bower_fonts']);
});

gulp.task('webserver', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('livereload', function() {
  gulp.src(['dist/**/*.*'])
    .pipe(watch())
    .pipe(connect.reload());
});

/**
 * Compile less
 */
gulp.task('compile-less', function(){
  return gulp.src(paths.styles)
      .pipe(less())
      .pipe(gulp.dest('dist/css'));
});

/**
 * Watch less
 */
gulp.task('watch-less', function() {
  gulp.watch(paths.watch_path, ['compile-less']);
});

gulp.task('style-guide', function() {
  gulp.src([paths.styles])
    .pipe(gulpkss({
      overview:  './README.md'
    }))
    .pipe(gulp.dest('docs/styleguide/'));

// Concat and compile all your styles for correct rendering of the styleguide.
  gulp.src(paths.styles)
    .pipe(less())
    .pipe(addSrc(['' +
      'src/bower_components/bootstrap/dist/css/bootstrap.min.css',
      'src/bower_components/font-awesome/css/font-awesome.min.css'
    ]))
    .pipe(concat('public/style.css'))
    .pipe(gulp.dest('docs/styleguide/fonts'));

  //copy fonts
  gulp.src([
    'src/bower_components/font-awesome/fonts/*.*'
  ]).pipe(gulp.dest('docs/styleguide/fonts'));

  gulp.src([
    'src/fonts/*.*'
  ]).pipe(gulp.dest('docs/fonts'));

});

gulp.task('build', ['usemin', 'copy-assets']);
gulp.task('default', ['build', 'webserver', 'livereload', 'watch']);

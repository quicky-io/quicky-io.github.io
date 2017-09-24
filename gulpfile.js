var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();


gulp.task('js', function () {
       return gulp.src('js/*.js')
          .pipe(plugins.jshint())
          .pipe(plugins.jshint.reporter('default'))
          .pipe(plugins.uglify())
          .pipe(plugins.concat('app.js'))
          .pipe(gulp.dest('build'));
});

gulp.task('go', function () {
   var files = [
      '*.html',
      'assets/css/**/*.css',
      'assets/img/**/*.png',
      'assets/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});

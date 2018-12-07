var gulp = require('gulp'); //
var watch = require('gulp-watch'); //watch all the task in action
var browserSync = require('browser-sync').create(); //browser sync and updates

//watch pluggin
gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server:{
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
      browserSync.reload();
    });


    watch('./app/assets/styles/**/*.css', function(){
      gulp.start('cssInject');
    });
    // js files
    watch('./app/assets/js/**/*.js', function(){
    gulp.start('jsDev');
  });

});


// styles files
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

// js files
gulp.task('jsDev', function(){
  return gulp.src('./app/assets/js/menuBar.js')
    .pipe(browserSync.stream());
});

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');


//gulp sass
function buildStyles() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/stylesheets'))
      .pipe(browserSync.stream());
  };
//gulp minify
function style_min() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(concat('style_main.min.css'))
      .pipe(gulp.dest('./public/stylesheets'));
  };
  


function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./scss/**/*.scss', buildStyles);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.buildStyles = buildStyles;
exports.style_min = style_min;
exports.watch = watch;
/*exports.watch = function () {
  gulp.watch('./noolvidarponeraqui lo correcto.scss', ['scss']);
};*/

// gul basic function
gulp.task('hello', function(){
    console.log('Hello ');
});


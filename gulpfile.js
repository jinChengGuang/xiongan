const gulp = require('gulp')
const eslint = require('gulp-eslint')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const cssMinify = require('gulp-minify-css')

// sass
gulp.task('sass', () => {
  return gulp.src(['assets/sass/index.scss'])
    .pipe(sass({outputStyle:'compressed'}))
    // .pipe(cssMinify())
    .pipe(concat('style.min.css'))
    // .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('assets'))
})

// lint
gulp.task('lint', () => {
  return gulp.src(['**/*.js', '**/*.html']).pipe(eslint()).pipe(eslint.format())
})

// watch
gulp.task('watch', () => {
  gulp.watch('assets/sass/*.scss', ['sass'])
})

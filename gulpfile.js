/**
 * Created at 15/9/28.
 * @Author Ling.
 * @Email i@zeroling.com
 */
var gulp = require('gulp'),
    amTransportGulp = require('gulp-am-transport'),
    concat = require('gulp-concat'),
    //rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('build', function () {
    gulp.src('./src/**/*.js')
        .pipe(amTransportGulp({family:"RU"}))
        .pipe(concat('ru.js'))
        .pipe(gulp.dest('./examples/lib'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('doc', function () {
    gulp.src('./doc/*.md')
        .pipe(concat('ru-doc.md'))
        .pipe(gulp.dest('./doc/build/'))
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build']);
// Less configuration
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel');

var lessLocation = 'app/styles/*.less';
var cssLocation = 'app/styles/*.css';
var destination = 'app/dist/';
var jsToCompilePath = 'app/libs/internal/*.js';
var jsToConcatPath = 'app/libs/internal/compiled/*.js'
var viewsPath = 'app/views/*.js';

gulp.task('less', function () {
    gulp.src(lessLocation)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))

});

gulp.task('css', function () {
    gulp.src(cssLocation)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(destination))
});

gulp.task('babel-app-global', function () {
    gulp.src(jsToCompilePath)
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(function (f) {
            return f.base + '/compiled';
        }))
});

gulp.task('js-global', function () {
    gulp.src([jsToConcatPath])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(destination))
});


// gulp.task('traceur-views', function () {
//     gulp.src(viewsPath)
//         .pipe(plumber())
//         .pipe(traceur({ blockBinding: true ,
//               modules:'commonjs' }))
//         .pipe(gulp.dest(function (f) {
//             return f.base +'/compiled';
//         }))
// });

gulp.task('default', function () {
    gulp.watch(lessLocation, ['less']);
    gulp.watch(cssLocation, ['css']);
    gulp.watch(jsToCompilePath, ['babel-app-global']);
    // gulp.watch(viewsPath, ['traceur-views']);
    gulp.watch(jsToConcatPath, ['js-global']);
})
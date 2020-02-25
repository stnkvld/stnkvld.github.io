const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const del = require('del');

const cssFiles = [
    'node_modules/swiper/css/swiper.min.css',
    'css/main.css',
];

const jsFiles = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/swiper/js/swiper.min.js',
    'js/modernizr.js',
    'js/main.js',
];

function minifyStyles() {
    return gulp.src(cssFiles)
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('css'));
}

function minifyScripts() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource: true,
            mangle: false,
            compress: false
        }))
        .pipe(gulp.dest('js'));
}

function clean() {
    return del(['dest/*']);
}

function watch() {
    gulp.watch(cssFiles, minifyStyles);
    gulp.watch(jsFiles, minifyScripts);
}

gulp.task('minifyStyles', minifyStyles);
gulp.task('minifyScripts', minifyScripts);
gulp.task('clean', clean);
gulp.task('watch', watch);

gulp.task('build', gulp.series('clean',
    gulp.parallel('minifyStyles', 'minifyScripts')
));
gulp.task('dev', gulp.series('build', 'watch'));
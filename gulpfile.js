// Подключение плагинов
const gulp = require('gulp');
const size = require('gulp-size');
const concat = require('gulp-concat');
const sourceMaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const del = require('del');

const cleanCSS = require('gulp-clean-css');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

const htmlmin = require('gulp-htmlmin');


const paths = {
    html: {
        src: 'src/*.html',
        dest: 'docs'
    },
    styles: {
        src: ['src/blocks/**/*.css'],
        dest: 'docs/css/'
    },
    scripts: {
        src: 'src/blocks/**/*.js',
        dest: 'docs/js/'
    },
    images: {
        src: 'src/img/**',
        dest: 'docs/img/'
    }
}

function clean() {
    return del(['docs/*', '!docs/img']);
}

function html() {
    return gulp.src(paths.html.src)
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(size({
        showFiles: true
      }))
      .pipe(gulp.dest(paths.html.dest))
      .pipe(browserSync.stream());
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourceMaps.init())
        .pipe(concat('main.min.css'))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourceMaps.write('.'))
        .pipe(size({
            showFiles: true
          }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(sourceMaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourceMaps.write('.'))
    .pipe(size({
        showFiles: true
      }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

function minImg() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin({
        progressive: true
        }))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.images.dest))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./docs/"
        }
    });
    gulp.watch(paths.html.dest).on('change', browserSync.reload);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, minImg);
}

const build = gulp.series(clean, html, gulp.parallel(styles, scripts, minImg), watch);

exports.clean = clean;
exports.html = html
exports.minImg = minImg;
exports.styles = styles;
exports.scripts = scripts
exports.watch = watch;
exports.build = build;
exports.default = build;
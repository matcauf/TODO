// Load plugins
var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    connect = require('gulp-connect'),
    order = require('gulp-order'),
    del = require('del'),
    concat = require('gulp-concat'),
    gulpFilter = require('gulp-filter');


gulp.task('connectBuild', function () {
    connect.server({
        root: './build/',
        port: 8000,
        livereload: true
    });
});

// css
gulp.task('css', function() {
    return gulp.src('src/app/assets/css/**/*.css')
        .pipe(gulp.dest('build/assets/css'))
        .pipe(connect.reload());
});

//img
gulp.task('img', function() {
    return gulp.src('src/app/assets/img/**/*')
        .pipe(gulp.dest('build/assets/img/'))
        .pipe(connect.reload());
});

//js
gulp.task('js', function() {
    return gulp.src('src/app/assets/js/**/*.js')
        .pipe(gulp.dest('build/assets/js'))
        .pipe(connect.reload());
});

//HTML
gulp.task('html', function() {
    return gulp.src('src/app/**/*.html')
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

// Clean
gulp.task('clean', function() {
    del(['build/**']);
});

//ts compile
gulp.task('ts-compile', function () {
    return gulp.src('src/app/components/**/*.ts')
        .pipe(tsc({
            noImplicitAny: true,
            out: 'output.js'
        }))
        .pipe(gulp.dest('build/assets/js'))
        .pipe(connect.reload());
});

var filter = gulpFilter(['**/dist/**/*','**/release/**/*',
    '**/angular/**/*.js', '**/angular/**/*.css', '!**/*.min.*', '!**/external/**/*']);


//mainBower
gulp.task('bower', function(){
    return gulp.src('bower_components/**/*')
        .pipe(filter)
        .pipe(gulp.dest('build/assets/libs'));
});

//bowerBundle
// gulp.task('build', function(){
//      gulp.run('clean');
//      gulp.run('3rdpartybundle');
//      gulp.run('ts-compile');
//      gulp.run('html');
//      gulp.run('img');
//      gulp.run('js');
//      gulp.run('css');
//
// });

gulp.task('watchFiles',function () {
    gulp.watch('src/app/*.html',['html']);
    gulp.watch('src/app/assets/js/**/*.js',['js']);
    gulp.watch('src/app/assets/css/**/*.css',['css']);
    gulp.watch('src/app/assets/img/**/*.css',['img']);
    gulp.watch('src/app/components/**/*.ts',['ts-compile']);
});

gulp.task('build', ['bower', 'ts-compile', 'html', 'img', 'js', 'css']);

gulp.task('watch', ['build', 'watchFiles']);

gulp.task('startServer', ['connectBuild', 'watch']);


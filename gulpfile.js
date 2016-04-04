var gulp = require('gulp');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');

var tsProject = ts.createProject('tsconfig.json', { typescript: require('typescript') });

gulp.task('build-system', function () {
    return gulp.src([
            './node_modules/es6-shim/es6-shim.min.js',
            './public/jspm/system-polyfills.js',
            './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
            './node_modules/angular2/bundles/angular2-polyfills.js',
            './public/jspm/system.src.js'
        ])
        .pipe(concat('system.js'))
        .pipe(gulp.dest('./public/dist/'));
});

gulp.task('build-app-for-testing', function() {
    return gulp.src('app/**/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest('tmp'));
})

gulp.task('test', ['build-app-for-testing'],  function () {
    return gulp.src('tmp/**/*.test.js')
        .pipe(mocha());
});

gulp.task('start', function () {
    nodemon({
        script: 'server.js', ext: 'js html', env: { 'NODE_ENV': 'development' }
    })
});
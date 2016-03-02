var gulp = require('gulp');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

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

gulp.task('start', function () {
    nodemon({
        script: 'server.js', ext: 'js html', env: { 'NODE_ENV': 'development' }
    })
});
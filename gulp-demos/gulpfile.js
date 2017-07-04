const gulp = require('gulp');

const mocha = require('gulp-mocha');

const stylus = require('gulp-stylus');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

// works with streams 
// get this files
// then make one or more 
gulp.task('clean', () => {
    return gulp.src('./build', { read: false })
        .pipe(clean());
})
gulp.task('compile:stylus', () => {
    // in app foleder => styl, search files which contain '.styl'
    // after you get this files, 
    // 
    return gulp.src('./app/styl/**/*.styl')
        // styl files
        .pipe(stylus())
        // temporaty css files
        .pipe(gulp.dest('./build/css'));
});

gulp.task('compile:es2017', () => {
    return gulp.src('./app/es2017/**/*.js')
        .pipe(babel({
            presets: ['es2017']
        }))
        .pipe(gulp.dest('./build/es2017'));
});

gulp.task('compile', ['clean'],
    () => {
        ['compile:es2017', 'compile:stylus']
        .forEach((task) => gulp.start(task));
    });
// run with gulp 
gulp.task('default', () => {
    console.log('Default');
});

// unit test 
gulp.task('test:unit', () => {
    gulp.src('./test/unit/**/*.js')
        .pipe(mocha({
            reporter: 'nyan'
        }));
});

gulp.task('test', ['test:unit']);
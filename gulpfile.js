var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var postcssImport = require('postcss-import');

gulp.task('default', function () {
	return gulp.src('styles/bundles/bundle.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([postcssImport()]))
		.pipe(sourcemaps.write('.', {
			includeContent: false,
			sourceRoot: '/styles/'
		}))
		.pipe(gulp.dest('build/'));
});
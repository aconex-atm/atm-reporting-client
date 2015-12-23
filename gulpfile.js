var browserSync = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('serve', function() {
    var server = {
        baseDir: 'webapp'
    };

    browserSync.init({
        server: server,
        port: 9000
    });
});

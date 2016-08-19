var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./navigation-1/"
        }
    });

    gulp.watch("./navigation-1/*.html").on('change', browserSync.reload);	
});
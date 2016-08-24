var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./2-header/header-sticky/"
        }
    });

    gulp.watch("./2-header/header-sticky/*.html").on('change', browserSync.reload);	
});
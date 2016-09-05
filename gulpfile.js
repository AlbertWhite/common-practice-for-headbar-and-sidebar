var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./2-header/header-dropdown"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);	
});
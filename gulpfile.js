var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./2-header/header-dropdown/"
        }
    });

    gulp.watch("./2-header/header-dropdown/*.html").on('change', browserSync.reload);	
});
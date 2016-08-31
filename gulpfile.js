var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./1-sidebar/sidebar-bootstrap-pill"
        }
    });

    gulp.watch("./1-sidebar/sidebar-bootstrap-pill/*.html").on('change', browserSync.reload);	
});
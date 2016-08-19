var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./1-sidebar/sidebar-collapse-animation/"
        }
    });

    gulp.watch("./1-sidebar/sidebar-collapse-animation/*.html").on('change', browserSync.reload);	
});
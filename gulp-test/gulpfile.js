var gulp = require("gulp");
var livereload = require("gulp-livereload");
var webserver = require("gulp-webserver");


gulp.task("webserver",function () {
    livereload.listen({start:true});
    gulp.src("./")
        .pipe(webserver({

            port:80,
            open:true
        }));
});
// gulp.task("livereload",function () {
//     gulp.src("./")
//     .pipe(live_reload());
// });


// gulp.task("watch",function () {
//     gulp.watch("*.html",["html"]);
// });

// gulp.task("default",["webserver","watch"]);var gulp = require('gulp'),
// uglify = require('gulp-uglify');
//
// gulp.task('jsmin', function () {
//     gulp.src(['src/index.js','src/detail.js']) //多个文件以数组形式传入
//         .pipe(uglify())
//         .pipe(gulp.dest('build/'));
// });


gulp.task("default",["webserver"]);

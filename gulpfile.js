const gulp = require('gulp');

/* TOP LEVLE FUNCS
    gulp.task - define tasks
    gulp.src - Point to files to use
    gulp.dest - Points to folder to output
    gulp.watch - watch files and folders for changes
*/

//logs message
gulp.task('message', () => {
    return console.log('gulp is running...');
});
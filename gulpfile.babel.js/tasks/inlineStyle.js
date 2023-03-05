import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";
import gulpif from "gulp-if";

// Plugins
import InlineCss from "gulp-inline-css";

export default () => {
    return gulp.src(`${path.html.dest}/**/*.html`)
        .pipe(gulpif(app.isEmail, InlineCss()))
        .pipe(gulp.dest(path.html.dest));
}
import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import loadPlugins from "gulp-load-plugins";
import gulpif from "gulp-if";
const gp = loadPlugins();

export default () => {
   return gulp.src(path.img.src)
      .pipe(gp.plumber({
         errorHandler: gp.notify.onError(error => ({
            title: "Images",
            message: error.message
         }))
      }))
      .pipe(gp.size({title: "Before images compressed"}))
      .pipe(gp.newer(path.img.dest))
      .pipe(gp.webp())
      .pipe(gulp.dest(path.img.dest))
      .pipe(gulp.src(path.img.src))
      .pipe(gp.newer(path.img.dest))
      .pipe(gulpif(app.isProd, gp.imagemin(app.imagemin)))
      .pipe(gulp.dest(path.img.dest))
      .pipe(gp.size({title: "After images compressed"}));
}
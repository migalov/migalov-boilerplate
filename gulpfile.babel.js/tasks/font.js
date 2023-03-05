import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

export default () => {
   return gulp.src(path.font.src)
      .pipe(gp.plumber({
         errorHandler: gp.notify.onError(error => ({
            title: "Fonts",
            message: error.message
         }))
      }))
      .pipe(gp.newer(path.font.dest))
      .pipe(gp.fonter(app.fonter))
      .pipe(gulp.dest(path.font.dest))
      .pipe(gp.ttf2woff2())
      .pipe(gulp.dest(path.font.dest));
}
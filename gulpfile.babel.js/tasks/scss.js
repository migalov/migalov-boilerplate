import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import loadPlugins from "gulp-load-plugins";
const sass = require('gulp-sass')(require('sass'));
const gp = loadPlugins();

export default () => {
   return gulp.src(path.scss.src, {sourcemaps: app.isDev})
      .pipe(gp.plumber({
         errorHandler: gp.notify.onError(error => ({
            title: "SCSS",
            message: error.message
         }))
      }))
      .pipe(gp.sassGlob())
      .pipe(sass())
      .pipe(gp.webpCss())
      .pipe(gp.autoprefixer())
      .pipe(gp.shorthand())
      .pipe(gp.groupCssMediaQueries())
      .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
      .pipe(gp.size({
         title: "main.css"
      }))
      .pipe(gp.rename({ suffix: ".min" }))
      .pipe(gp.csso())
      .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
      .pipe(gp.size({
         title: "main.min.css"
      }));
}
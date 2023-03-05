import browserSync from 'browser-sync';
import path from "../config/path.js";

export default () => {
   browserSync.init({
      server: {
         baseDir: path.root
      },
      online: true,
      open: "tunnel"
   });
}
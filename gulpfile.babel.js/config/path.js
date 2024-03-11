const pathSrc = `./src`,
      pathDest = `./public`;

export default {
   root: pathDest,
   html: {
      src:  `${pathSrc}/html/*.html`,
      watch: `${pathSrc}/html/**/*.html`,
      dest: pathDest
   },
   twig: {
      src: [`${pathSrc}/views/**/*.twig`, `${pathSrc}/views/!parts/**/*.twig`, `${pathSrc}/!layout*.twig`],
      watch: `${pathSrc}/views/**/*.twig`,
      dest: pathDest
   },
   scss: {
      src: [`${pathSrc}/styles/*.{scss,sass}`, `${pathSrc}/!src/styles/_*.*`, `${pathSrc}/!src/styles/components/_*.*`],
      watch: `${pathSrc}/styles/**/*.{scss,sass}`,
      dest: `${pathDest}/css`
   },
   js: {
      src: `${pathSrc}/js/*.js`,
      watch: `${pathSrc}/js/**/*.js`,
      dest: `${pathDest}/js`
   },
   img: {
      src: `${pathSrc}/img/**/*.{jpg,jpeg,png,gif,svg}`,
      watch: `${pathSrc}/img/**/*.{jpg,jpeg,png,gif,svg}`,
      dest: `${pathDest}/img/`
   },
   font: {
      src: `${pathSrc}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
      watch: `${pathSrc}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
      dest: `/fonts`
   },
   data: {
      src: `${pathSrc}/data/**/*.json`,
      watch: `${pathSrc}/data/**/*.json`
   }
}
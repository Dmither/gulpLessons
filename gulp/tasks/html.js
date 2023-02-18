/* Збір та обробка html-файлів:
 * дозволяє поєднувати кілька файлів в один,
 * відображає помилки обробки в сповіщеннях
 *  1. В структуру шляхів додати вихідні, цільові та прослуховувані
 *  2. Встановити плагін для об'єднання "gulp-file-include"
 *  3. Встановити плагін для заміни "gulp-replace"
 * 
 * (додати перетворення зображень в формат webp [37:01 - 38:55])
 * (додати заборону кешування js та css [38:56 - 42:10])
 * (додати сповіщення помилок помпіляції [42:10 - 44:04])
 */

import fileinclude from "gulp-file-include";

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(fileinclude())  // поєднує файли
    .pipe(app.plugins.replace(/\.\.\//g, '')) // "../" => ""
    .pipe(app.gulp.dest(app.path.build.html)) // вписує
    .pipe(app.plugins.browserSync.stream())
}
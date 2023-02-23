/* Компілює scss до css в реальному часі, стискає до min-версії,
 * додає префікси, групує медіа-запити
 *
 * Для роботи імпортуємо плагіни "sass", "gulp-sass",
 * "gulp-rename", "gulp-clean-css", "gulp-group-css-media-queries"
 * (опціонально "gulp-autoprefixer", "gulp-webpcss")
 * в змінну передаємо виклик плагіну
 * (опціонально можна додати обробку помилок та заміну шляхів)
 */

import dartSass from 'sass'; // сам препроцесор
import gulpSass from 'gulp-sass'; // плагін для його запуска
import rename from 'gulp-rename'; // зміна назви файлу
import GulpCleanCss from 'gulp-clean-css'; // стиснення css

// import webpcss from "gulp-webpcss";
// import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
// групування медіазапитів

const sass = gulpSass(dartSass);

export const scss = () => {
	return (
		app.gulp
			.src(app.path.src.scss, { sourcemaps: true })
			.pipe(
				sass({
					outputStyle: 'expanded', // стиснений
				})
			)
			.pipe(groupCssMediaQueries())
			// розкоментувати при відсутності розширення (on save)
			/*.pipe(
        autoPrefixer({
          grid: true,
          overrideBrowserlist: ['last 3 version'],
          cascade: true,
        })
      )*/
			// розкоментувати при необхідності нестисненого дулбя
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(GulpCleanCss())
			.pipe(
				rename({
					extname: '.min.css',
				})
			)
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(app.plugins.browserSync.stream())
	);
};

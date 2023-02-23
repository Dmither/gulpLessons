/* Збирає за допомогою webpack та мініфікує файли
 *
 * Встановити "webpack", "webpack-stream"
 */

import webpackStream from 'webpack-stream';

export const js = () => {
	return app.gulp
		.src(app.path.src.js, { sourcemaps: true })
		.pipe(
			webpackStream({
				mode: 'development',
				output: {
					filename: 'app.min.js',
				},
			})
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream());
};

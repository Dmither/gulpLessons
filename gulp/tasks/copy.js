/* В константу передаємо стрілкову функцію копіювання:
 * - повертає дію
 * - метод gulp.src() отримує доступ до файлів та папок за шляхом
 * - .pipe прикруте дію до результату
 * - метод gulp.dest() вказує шлях призначення
 */ 
export const copy = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}
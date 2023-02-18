/* Для роботи встановлюємо "browser-sync"
 * додаємо його в глобальні змінні
 * встановлюємо паралельне виконання зі слухачем
 * підключаємо до виконання html (browserSync.stream())
 */

export const server = (done) => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    notify: false,
    port: 3000,
  });
}
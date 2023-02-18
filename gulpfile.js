// імпортуємо gulp, path, plugins
import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// передаємо значення в глобальну змінну
// global - глобальна змінна node.js (як window в браузері)
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { server } from "./gulp/tasks/server.js";


/* Спостерігач за змінами (gulp.watch(path, func))
 * нескінченно зчитує будь-які зміни цільових файлів
 * дозволяє постійно спостерігати за змінами у вказаних файлах
 * та виконувати вказану функцію
 */
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
}


/* побудова сценаріїв виконання завдань дозволяє виконати декілька
 * parralel - задачі виконуються одночасно
 * series - задачі виконуються послідовно
 */
const mainTasks = gulp.parallel(html, scss, js, copy)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))


// задача за умовчуванням (виконується при старті)
gulp.task('default', dev);
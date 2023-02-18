/* Плагіни, які імпортуються глобально для кількох завдань */

import replace from "gulp-replace"; // пошук і заміна
import gulpPlumber from "gulp-plumber"; // обробка помилок
import notify from "gulp-notify"; // сповіщення
import browserSync from "browser-sync"; // оновлення браузера

export const plugins = {
  replace: replace,
  plumber: gulpPlumber,
  notify: notify,
  browserSync: browserSync,
}
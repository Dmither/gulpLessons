// Отримаємо ім'я папки проекта (імпортуємо із модуля 'path')
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Константи шляху вихідної папки та результату зборки
const buildFolder = `./dist`;  // створиться автоматично
const srcFolder = `./src`;

/* Загальний об'єкт, що зберігає шляхи файлів і папок 
 * Із папки src зчитуються файли, після обробки записуються в build
 * За папкою watch встановлюється прослуховувач на будь-які зміни
 */
export const path = {   // export для можливості імпортувати змінні
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
  },
  src: {
    // src/files/всі_вкладені_папки/всі_файли.всі_розширення
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
}
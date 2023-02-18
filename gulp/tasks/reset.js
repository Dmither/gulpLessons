/* Перед використанням встановити плагін "del" [npm i del -D]
 * видаляє папку з результатом
 */
import { deleteAsync } from "del";
export const reset = () => {
  return deleteAsync(app.path.clean);
}
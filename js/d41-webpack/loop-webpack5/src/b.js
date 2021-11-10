/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-10-21 22:27:27
 * @LastEditTime: 2021-10-21 23:13:54
 */
console.log("in b.js");
import { done as aDone } from "./a.js";
let done = false;
console.log(`in b.js aDone=${aDone}`);
done = true;
export { done };
export default "b";
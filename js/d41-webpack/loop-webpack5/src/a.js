/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-10-21 22:27:27
 * @LastEditTime: 2021-10-21 23:10:00
 */
console.log("in a.js");
import { done as bDone } from "./b.js";
let done = false;
console.log(`in a.js bDone=${bDone}`);
done = true;
export { done };
export default 'a'

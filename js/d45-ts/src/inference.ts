// inference 类型推断
// This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.
/**
 * 1. 初始化变量和成员
 * 2. 设置参数默认值
 * 3. 确定函数的返回类型
 */

// Best common type
// 
let inferenceX1 = 3;
let inferenceX2 = [0, 1, null];




// Contextual Typing
window.onmousedown = function (mouseEvent: any) {
  console.log(mouseEvent.button); //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};

window.onscroll = function (uiEvent: any) {
  console.log(uiEvent.button); //<- Now, no error is given
};
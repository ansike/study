// 条件表达式/带三元运算符的条件表达式
type toDeclareType<T> = T extends (args: any) => PromiseLike<infer R> ? R : never;

// type toDeclareType = Omit<App>;
// type toDeclareType<T> = {
//   [key in keyof T]: Omit<T[key], '_id'>
// };


// ==========================带三元运算符的条件表达式 (IfExpression with ternary operator)
type TypeOfWhatPromiseReturn<T> = T extends (args: any) => PromiseLike<infer R> ? R : never;
// 其中 T extends (args: any) => PromiseLike<infer R> 就相当条件判断，R : never 就相当于为真时的表达式和为假时的表达式。
// infer R 标识带推断的函数参数

// 利用三元拓展一下ReturnType
async function Hello(name: string): Promise<string> {
  return Promise.resolve(name)
}
async function Hello2(name: string): Promise<Promise<string>> {
  return Promise.resolve(name)
}

type SelfReturnType<T extends (...args) => any> = T extends (...args) => PromiseLike<infer R> ? R : T;

function Fn1(str: string): SelfReturnType<typeof Hello> { return str }

type t1 = SelfReturnType<typeof Hello2>
function Fn2(str: string): t1 { return Promise.resolve(str) }

// ================================函数定义

// ================================循环相关表达式
// Ts没有完整的循环相关语法，只能通过递归来实现
/**
 type IntSeq<N, S extends any[] = []> =
 S["length"] extends N ? S :
 IntSeq<N, [...S, S["length"]]>;
 */
// 对象遍历
type demoProps = {
  a: string;
  b: string;
  c: string;
}

type SelfOptional2<T> = {
  [key in keyof T]?: T[key];
}
type optionalDemoProps = SelfOptional2<demoProps>;

// 数组遍历--------// TODO 没懂啥意思
const arr = ['123', 1, {}];
type aProps = typeof arr;
type SelfMap<T> = {
  [key in keyof T]: T[key] extends (...agrs) => any ? 0 : 1;
}
type C = SelfMap<aProps>;
type D = C[0];
type E = C[4];


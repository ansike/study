// 成员表达式读取：如js中的a.b.c
function hello(a: any, b: number) {
  return b
}
type getPramasType<T> = T extends (a: any, b: infer U) => any ? U : never;
// 此时就能拿到该函数第二个参数的类型了
type HelloSecondTypes = getPramasType<typeof hello>;
// 其中 T extends (a: any, b: infer U) => any 就是在表示结构，并拿其中某个部分。

type AM = {
  a: string;
  b: string;
}
type BM = [string, string, boolean, undefined]
type C2 = AM['a'];
type D2 = BM[2];
type E2 = BM[number];
// 获取数组的最后一个类型
type getArrLastType<T extends any[]> = T extends [...infer _, infer U] ? U : never;
type lastType = getArrLastType<BM>;
// 常见的数据结构和操作符 Common Datastructures and Operations

// Set ============================================可以使用union代替
// Add
type S = '1' | 2 | boolean;

// Remove //TODO 去除对象
type R = Exclude<S, '1'>
const a3: R = 2;

// Has
type isInSet = 'S' extends S ? true : false;

// Intersection- 提取SA中和SB中类型相同的属性- 交集
type SA = '1' | 2
type SB = 2 | 3 | 4
type SC = Extract<SA, SB>;

// Diff - 去掉SA中和SB相同的类型  SA-SB
type SD = Exclude<SA, SB>;

// Symmetric Diff  交集取反
type SSD = Exclude<SA, SB> | Exclude<SB, SA>

// ToIntersectionType                    - 并集
type A3 = {
  a: string;
  b: string;
};
type B3 = {
  b: string;
  c: string;
};
// TODO 不懂这个到底做了什么操作
type ToIntersectionType<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;

type D33 = A3 | B3;
type D3 = ToIntersectionType<A3 | B3>;
type D32 = A3 & B3;

// ToArray - 这个用递归实现数组遍历的操作有问题，不推荐
type Input = 1 | 2;
type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;
// type ToArray<T> = UnionToIntersection<(T extends any ? (t: T) => T : never)> extends (_: any) => infer W
//   ? [...ToArray<Exclude<T, W>>, W]
//   : [];
// type Output = ToArray<Input>;

// Map/Object =====================================================

// merge Object assign
type C3 = A3 & B3;

// Intersection

type A3O = {
  a?: string;
  b: string;
  c: string;
}
type B3O = {
  b: string;
  c: number;
  d: boolean;
}

type SelfIntersection<T, U> = {
  [k in Extract<keyof T, keyof U>]: T[k] | U[k];
}

type BInter = SelfIntersection<A3O, B3O>;

// Filter
// 过滤出只有boolean型的key
type filterKeys<T, V> = {
  [k in keyof T]: T[k] extends V ? k : never;
}[keyof T]

type FilterBoolean<T> = {
  [k in filterKeys<T, boolean>]: T[k];
}
type newA30 = FilterBoolean<B3O>

// ============================================================== Array
// 成员访问和member中的一样

type A3A = [number, string];
// Append
type selfAppend<T extends any[], v> = [...T, v];
type appendA3A = selfAppend<A3A, boolean>;

// Pop
type selfPop<T extends any[]> = T extends [...infer I, infer _] ? I : never;
type popA3A = selfPop<A3A>;

// Dequeue
type selfDequeue<T extends any[]> = T extends [infer _, ...infer I] ? I : never;
type dequeueA3A = selfDequeue<A3A>;

// Unshift
type selfUnshift<T extends any[], V> = [V, ...T];
type unshiftA3A = selfUnshift<A3A, boolean>;

// Concat
type selfConcat<T extends any[], V extends any[]> = [...T, ...V];
type concatA3A = selfConcat<A3A, [boolean]>;

// Filter
// Slice

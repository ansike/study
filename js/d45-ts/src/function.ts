type B<T> = T & {
  attrB: 'aa';
};

class CCC { }
type DDD = {};

type AnotherType = B<CCC>;
type yetAnotherType = B<DDD>;

type admin = {
  id: number;
  name?: string;
  desc?: string;
};

// ======================将所有属性变成可选的
type SelfOptional<T> = { [key in keyof T]?: T[key] };

type opAdmin = SelfOptional<admin>;

// ======================将某些属性变成必选的
// TODO 第二个参数实现为数组的形式
type SelfRequire<T, K extends keyof T> = T & {
  [key in K]-?: T[key];
}

type requireAdmin = SelfRequire<admin, 'name'>;

const a: requireAdmin = {
  id: 1,
  name: '2ss'
}


type selfReadOnly<T, K extends keyof T> = T & {
  readonly [k in K]: T[k];
}
type adminOnly = selfReadOnly<admin, 'id'>
const adminConst: adminOnly = {
  id: 1,
  name: '2'
}
// adminConst.id = 3; // error
adminConst.name = '112'
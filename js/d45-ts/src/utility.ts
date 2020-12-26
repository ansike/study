type PageInfo = {
  title: string;
  name: string;
  id?: number;
}

type Page = undefined | "home" | "about" | "contact" | null | never;

// Record<Keys,Type>
const nav: Record<Page, PageInfo> = {
  about: { title: "about", name: 'hi' },
  contact: { title: "contact", name: 'hi' },
  home: { title: "home", name: 'hi' },
};
nav.about;

// Readonly<Type>
type readonlyPageInfo = Readonly<PageInfo>;

// Partial<Type>
type partialPageInfo = Partial<PageInfo>;

// Required<Type>
type requiredPageInfo = Required<PageInfo>;

// Pick<Type, Keys>
type pickPageInfo = Pick<PageInfo, 'name' | 'id'>

// Omit<Type, Keys>
type omitPageInfo = Omit<PageInfo, 'title' | 'id'>;

// Extract<Type, Union>
type extractPageInfo = Extract<Page, 'home' | 'about'>;

// Exclude<Type, Union>
type excludePageInfo = Exclude<Page, 'home' | 'about'>;

// NonNullable<Type> // 好像现在默认就是这个
type nonNullablePage = NonNullable<Page | null>;

// Parameters<Type>
declare function fn(a: string, b: number): { a: number; b: string };
type parametersType1 = Parameters<typeof fn>;
type parametersType2 = Parameters<() => string>;
type parametersType3 = Parameters<(a: string, b: boolean) => string>;

// ConstructorParameters<Type>
type constructorParameters1 = ConstructorParameters<ErrorConstructor>
type constructorParameters2 = ConstructorParameters<FunctionConstructor>
type constructorParameters3 = ConstructorParameters<RegExpConstructor>

// ReturnType<Type>
type returnType = ReturnType<typeof fn>

// InstanceType<Type>
class CClass {
  x = 0;
  y = 0;
}
type instanceType = InstanceType<typeof CClass>

// ThisParameterType<Type>
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// OmitThisParameter<Type>
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());

// ThisType<Type>
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
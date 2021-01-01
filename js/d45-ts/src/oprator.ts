// interface 除了声明合并外，所有的功能都可以实现

// Exclude
type oA = 1 | true | "" | undefined;
type exOa = Exclude<oA, true | undefined>

// 
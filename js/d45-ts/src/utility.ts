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

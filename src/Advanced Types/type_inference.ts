type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;
type T0 = Unpacked<string>;

type Foo<T> = T extends {a: infer U; b: infer U} ? U : never;
type T10 = Foo<{a: string; b: string}>;
type T11 = Foo<{a: string; b: number}>;

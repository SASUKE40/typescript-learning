type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>;

type T10 = TypeName<string | (() => void)>;

type BoxedValue<T> = {value: T};
type BoxedArray<T> = {array: T[]};
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;
type T20 = Boxed<string>;
type T21 = Boxed<number[]>;
type T22 = Boxed<string | number[]>;
type T23 = string[][number];

type Diff<T, U> = T extends U ? never : T;
type Filter<T, U> = T extends U ? T : never;

type T30 = Diff<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;
type T31 = Filter<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;
type T32 = Diff<string | number | (() => void), Function>;
type T33 = Filter<string | number | (() => void), Function>;

type NonNullable<T> = Diff<T, null | undefined>;

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;
type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type T40 = FunctionPropertyNames<Part>;
type T41 = NonFunctionPropertyNames<Part>;
type T42 = FunctionProperties<Part>;
type T43 = NonFunctionProperties<Part>;

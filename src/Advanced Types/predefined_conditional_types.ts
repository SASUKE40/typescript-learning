type T00 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;
type T01 = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;

type T02 = Exclude<string | number | (() => void), Function>;
type T03 = Extract<string | number | (() => void), Function>;

type T04 = NonNullable<string | number | undefined>;
type T05 = NonNullable<(() => string) | string[] | null | undefined>;

function f1(s: string) {
  return {a: 1, b: s};
}

class C {
  x = 0;
  y = 0;
}

type T10 = ReturnType<() => string>;
type T11 = ReturnType<(s: string) => void>;
type T12 = ReturnType<<T>() => T>;
type T13 = ReturnType<<T extends U, U extends number[]>() => T>;
type T14 = ReturnType<typeof f1>;
type T15 = ReturnType<any>;
type T16 = ReturnType<never>;
type T17 = ReturnType<string>;
type T18 = ReturnType<Function>;

type T20 = InstanceType<typeof C>;
type T21 = InstanceType<any>;
type T22 = InstanceType<never>;
type T23 = InstanceType<string>;
type T24 = InstanceType<Function>;

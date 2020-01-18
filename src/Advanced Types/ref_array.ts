interface Ref<T> {}
type F<T> = {
  [P in keyof T]: Ref<T[P]>;
};
type A = F<[number, string, boolean]>;

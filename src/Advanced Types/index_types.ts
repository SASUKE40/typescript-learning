interface Dictionary<T> {
  [key: string]: T;
}

let keys: keyof Dictionary<number>;
let value: Dictionary<number>['foo'];

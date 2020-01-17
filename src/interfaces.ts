interface Person {
  readonly id?: number;
  name: string;
  age?: number;
  gender?: string;
  [propName: string]: any;
}
let tom: Person = {
  name: 'Tom',
  age: 25,
};

let petter: Person = {
  name: 'Petter',
};

let tonny: Person = {
  name: 'Tonny',
  age: 18,
  gender: 'male',
};

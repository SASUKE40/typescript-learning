class Animal {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
  get name() {
    return 'Jack';
  }
  set name(value) {
    console.log('setter: ' + value);
  }
  static isAnimal(a) {
    return a instanceof Animal;
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  sayHi() {
    return 'Meow, ' + super.sayHi();
  }
}

abstract class IAnimal {
  public name: string;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Dog extends IAnimal {
  public sayHi() {
    throw new Error('Method not implemented.');
  }
}

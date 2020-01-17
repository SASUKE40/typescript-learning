let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

interface NumberArray {
  [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

function sum() {
  let args: number[] = arguments;
  let args2: {
    [index: number]: number;
    lenght: number;
    calleee: Function;
  } = arguments;
  let args3: IArguments = arguments;
}

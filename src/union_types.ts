let myFavoriteNumber: string | number;

myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

function getLength(something: string | number): number {
  return something.length;
}

function getString(something: string | number): string {
  return something.toString();
}

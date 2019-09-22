/*type Conversion = (xs: string) => string;

var x: number = 5;

var greet: Conversion = name => "Hello " + name;

var upper: Conversion = xs => xs.toUpperCase();

console.log(greet("ddddddd>>>>"));*/

export var add = (x: number, y: number) => x + y;
export var double = (x: number) => x * 2;
export var isOdd = (x: number) => x % 2 != 0;
export var toUpperCase = (x: string) => x.toUpperCase();
export var greaterThanThree = (x: string) => x.length > 3;
export var accumulator = (x: number, y: number): number => x += y;

export var longest = (x: number, y: string): number => {
  if(y.length > x) {
    x = y.length;
  }
  return x;
}

export var longestString = (x: string, y: string): string => {
  if(y.length > x.length) {
    x = y;
  }
  return x;
}
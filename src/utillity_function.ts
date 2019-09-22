/*type Conversion = (xs: string) => string;

var x: number = 5;

var greet: Conversion = name => "Hello " + name;

var upper: Conversion = xs => xs.toUpperCase();

console.log(greet("ddddddd>>>>"));*/

 var add = (x: number, y: number) => x + y;
 var double = (x: number) => x * 2;
 var isOdd = (x: number) => x % 2 != 0;
 var toUpperCase = (x: string) => x.toUpperCase();
 var greaterThanThree = (x: string) => x.length > 3;
 var accumulator = (x: number, y: number): number => x += y;

 var longest = (x: number, y: string): number => {
  if(y.length > x) {
    x = y.length;
  }
  return x;
}

 var longestString = (x: string, y: string): string => {
  if(y.length > x.length) {
    x = y;
  }
  return x;
}

var pair = (x: number, y: number): number[] => {
  var array = [];
  array.push(x,y);
  return array;
}

export { add, double, isOdd, toUpperCase, greaterThanThree, accumulator, longest, longestString, pair};
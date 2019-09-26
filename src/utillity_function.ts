import { curry } from "ramda";

var add = curry(function(x: number, y: number) {
  return x + y;
});
 //var add = (x: number, y: number) => x + y;
 // export var inc = (x: number) => add(1)(x);
export var inc = add(1); // point free style version
 var double = (x: number) => x * 2;
 var isOdd = (x: number) => x % 2 != 0;
 var toUpperCase = (x: string) => x.toUpperCase();
 var greaterThanThree = (x: string) => x.length > 3;
 var accumulator = (x: number, y: number): number => x += y;
 var max = (x: number, y: number) => (x > y ? x : y);
 var min = (x: number, y: number) => (x < y ? x : y);

/*export var maxLengthString = (limit: number, xs: string) =>
  limit > xs.length ? limit : xs.length;

export var maxString = (maxXs: string[], xs: string): string[] => {
  if (maxXs.length === 0 || xs.length > maxXs[0].length) {
    return [xs];
  } else if (xs.length == maxXs[0].length) {
    return [...maxXs, xs];
  }
  return maxXs;
};

export var pair = <T, R>(x: T, y: R): [T, R] => [x, y];*/

var longest = (x: number, y: string): number => {
  if(y.length > x) {
    x = y.length;
  }
  return x;
};

var longestString = (x: string, y: string): string => {
  if(y.length > x.length) {
    x = y;
  }
  return x;
};

var pair = (x: number, y: number): number[] => {
  var array = [];
  array.push(x,y);
  return array;
};

var flip = function<X, Y, Z>(f: (x: X, y: Y) => Z): (y: Y, x: X) => Z {
  return function(x, y) {
    return f(y, x);
  }
};

var minus = (x: number, y: number) => x - y;

var append = (x: string, y: string): string => y + x;
var repeat = (x: number, y: string): string => (x == 1) ? y : y + repeat(--x, y);
var capitalize = (x: string): string => x[0];
var split = (xs: string): string[] => {
  var regex = /[^. ,;:!?]+/g;
  var result = xs.match(regex);
  return (result == null) ? [""] : result;
};

export { accumulator, add, append, capitalize, double, flip, greaterThanThree,
  isOdd, longest, longestString, max, min, minus, pair, repeat, split, toUpperCase};

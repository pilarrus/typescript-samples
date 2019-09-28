import { curry } from "ramda";
import { T } from "ts-toolbelt";
import { INVALID_WORDS } from "./data";

var add = curry(function(x: number, y: number) {
  return x + y;
});
//var add = (x: number, y: number) => x + y;

var append = (suffix: string) =>(xs: string) => xs + suffix;

//var append = (xs: string, ys: string): string => ys + xs;

var capitalize = (xs: string): string => xs[0];

var double = (x: number) => x * 2;

var flip = function<X, Y, Z>(f: (x: X, y: Y) => Z): (y: Y, x: X) => Z {
  return function(x, y) {
    return f(y, x);
  }
};

var greaterThanThree = (xs: string) => xs.length > 3;

var inc = add(1); // point free style version
// export var inc = (x: number) => add(1)(x);

var id = (x: any) => x;

var initial = (xs: string): string => xs[0];

var isOdd = (x: number) => x % 2 != 0;

var isValidWord = (word: string) => !INVALID_WORDS.includes(word.toLowerCase());

var max = (x: number, y: number) => (x > y ? x : y);

var maxLengthString = (limit: number, xs: string) =>
  limit > xs.length ? limit : xs.length;

var maxString = (maxXs: string[], xs: string): string[] => {
  if (maxXs.length === 0 || xs.length > maxXs[0].length) {
    return [xs];
  } else if (xs.length == maxXs[0].length) {
    return [...maxXs, xs];
  }
  return maxXs;
};

var min = (x: number, y: number) => (x < y ? x : y);

var minus = (x: number, y: number) => x - y;

var not = <T>(f: (x: T) => boolean) => (x: T) => !f(x); // Currificada en ES&

/*var not = <T>(f: (x: T) => boolean) => {
  return function(x: T) {
    return !f(x);
  }
}*/ // Currificada en ES5

//var not = <T>(f: any, x: T) => !f(x);


var pair = <T, R>(x: T, y: R): [T, R] => [x, y];
/*var pair = <T, R>(x: T, y: R): [T, R] => {
  var array = [];
  array.push(x,y);
  return array;
};*/

var repeat = (times: number) => (xs: string): string =>
  times === 0 ? "" : xs + repeat(times - 1)(xs); // Currificada con ES6

  /*var repeat = function(times: number) {
  return function(xs: string): string {
    return times === 0 ? "" : xs + repeat(--times)(xs);
  };
};*/ //Currificada con ES5

/*var repeat = (times: number, xs: string): string =>
 (times == 1) ? xs : xs + repeat(--times, xs);*/

var unWords = (xs: string[]): string => xs.join("");

var words = (xs: string): string[] => {
  var result = xs.match(/[^. ,;:!?]+/g);
  return (result == null) ? [] : result;
};

var toUpperCase = (xs: string) => xs.toUpperCase();

export { add, append, capitalize, double, flip, greaterThanThree, id, initial, inc,
  isOdd, isValidWord, max, maxLengthString, maxString, min, minus, not, pair,
  repeat, toUpperCase, unWords, words};

import reduce from "./reduce";

var mapReducer = function<T, R>(f: (x: T) => R) {
  return function reducer(acc: R[], x: T): R[] {
    return acc.concat(f(x));
  };
};

export default function map<T, R>(f: (x: T) => R, xs: T[]): R[] {
  return reduce(mapReducer(f), xs, []);
}

/*export default function map<T, R>(f: (x: T) => R, xs: T[]) {
    var ys = [];
    for (var i = 0; i < xs.length; i++) {
      ys.push(f(xs[i]));
    }
    return ys;
  }
*/

/*
// Recursivo
export default function map<T, R>(f: (x: T) => R, xs: T[]): R[] {
  if (xs.length === 0) {
    return [];
  } else {
    return [f(xs[0])].concat(map(f, xs.slice(1)));
  }*/
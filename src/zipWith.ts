import { min } from "./utillity_function";

var zipWith = <T, R, S>(f: (x: T, y: R) => S, xs: T[], ys: R[]): S[] => {
  var result: S[] = [];
  for (var i = 0, m = min(xs.length, ys.length); i < m; i++) {
    result.push(f(xs[i], ys[i]));
  }
  return result;
};

export default zipWith;
/*export default function zipWith(f: (x: number, y: number) => number | number[], xs: number[], ys: number[]){
    var zs = [];
    var minlength = Math.min(xs.length, ys.length);
    for(var i = 0; i < minlength; i++){
      zs.push(f(xs[i], ys[i]));
    }
    return zs;
  }*/
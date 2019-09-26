export default function filter<T>(f: (x: T) => boolean, xs: T[]): T[] {
  if(xs.length == 0) {
    return []
  } else {
    return (f(xs[0])) ? [xs[0]].concat(filter(f, xs.slice(1))) : filter(f, xs.slice(1));
  }
}

/*export default function filter<T>(f: (x: T) => boolean, xs: T[]): T[] {
    var ys = [];
    for (var i = 0; i < xs.length; i++) {
      if (f(xs[i])) {
        ys[ys.length] = xs[i];
      }
    }
    return ys;
  }*/
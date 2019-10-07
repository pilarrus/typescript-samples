import { map } from 'ramda';
import { id } from './utillity_function';
import compose from 'ramda/es/compose';
var product2 = (xs: number[], ys: string[]) => {
  var zs = [];
  var minlength = Math.min(xs.length, ys.length);
  for(var i = 0; i < minlength; i++){
    for(var j = 0; j < minlength; j++){
      zs.push([xs[i], ys[i]]);
    }
  }
  return zs;
}

export var product = <T,R>(xs: T[], ys: R[]) => {
  compose(
    map(item)
  )(xs);
};

function item<T>(xs: T[]) {
  var item = xs[0];
  xs.slice(1);
  return item;
}

console.log(product([1,2,3], ["a", "b", "c"]));

/*var product = (xs: number[], ys: string[]) => {
  var zs = [];
    var minlength = Math.min(xs.length, ys.length);
    for(var i = 0; i < minlength; i++){
      for(var j = 0; j < minlength; j++){
        zs.push(xs[i] + ys[i]);
      }
    }
    return zs;
};*/

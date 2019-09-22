export default function zipwith(f: (x: number, y: number) => number | number[], xs: number[], ys: number[]){
    var zs = [];
    var minlength = Math.min(xs.length, ys.length);
    for(var i = 0; i < minlength; i++){
      zs.push(f(xs[i], ys[i]));
    }
    return zs;
  }
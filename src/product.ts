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

var product = (xs: number[], ys: string[]) => {
    var zs = [];
      var minlength = Math.min(xs.length, ys.length);
      for(var i = 0; i < minlength; i++){
        for(var j = 0; j < minlength; j++){
          zs.push([xs[i], ys[i]]);
        }
      }
      return zs;
  }
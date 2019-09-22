export default function reduce<T, R>(f: (x: T, y: any) => T, 
xs: T[] | R[] , initial?: any): T {
  var x = (typeof initial === 'undefined') ? 0 : initial;
  for(var i = 0; i < xs.length; i++) {
    x = f(x, xs[i]);
  }
  return x;
}
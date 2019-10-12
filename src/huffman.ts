const count = (x: string) => (xs: string): number => {
  let counter = 0;
  for(let i = 0; i < xs.length; i++) {
    if(xs[i] == x) {
      counter++;
    }
  }
  return counter;
};

const searchLastPosition = (x: string) => (xs: string): number => {
  let pos = -1;
  for(let i = xs.length-1; i >= 0; i--) {
    if (xs[i] === x) {
      pos = i;
      break;
    }
  }
  return pos;
};

const deleteChar = (pos: number) => (xs: string): string =>{
  let ys = "";
  for(let i = 0; i < xs.length; i++) {
    if(i != pos) {
      ys += (xs[i]);
    }
  }
  return ys;
};

const joinLetterCounter = (xs: string): (string | number)[][] => {
  let ys = [];
  for(let i = 0; i < xs.length; i++) {
    let x = xs[i];
    let counter = count(x)(xs);
    if(counter > 1) {
      let n = counter - 1;
      for(let j = 0; j < n; j++) {
        let pos = searchLastPosition(x)(xs);
        xs = deleteChar(pos)(xs);
      }
    }
    ys.push([x, counter]);
  }
  return ys;
};

const bubble = (xs: (string | number)[][]): (string | number)[][] => {
  for(let times = xs.length; times > 0; times--) {
    for(let i = 0; i < xs.length-1; i++) {
      let j = i + 1;
      if(xs[j][1] < xs[i][1]) {
        let aux = xs[i];
        xs[i] = xs[j];
        xs[j] = aux;
      }
    }
  }
  return xs;
};

const add = (x: number) => (y: number): number => x + y;

const createTree = (xs: (string | number)[][]) => {
  let x, y, left, rigth, ys;
  while(xs.length > 1) {
    // @ts-ignore
    (xs[0][0][1] == undefined) ? x = xs[0][1] : x = xs[0][0][1];
    // @ts-ignore
    (xs[1][0][1] == undefined) ? y = xs[1][1] : y = xs[1][0][1];
    left = xs.splice(0,1);
    rigth = xs.splice(0,1);
    ys = [[null, add(x)(y)], ...left, ...rigth];
    // @ts-ignore
    xs.push(ys);
  }
  return xs;
};

const searchInTree = (x: string) => (xs: any): string | number | undefined => {
  for(let i = 0; i < xs.length; i++) {
    if(xs[i] === x) {
      return i;
    } else if(Array.isArray(xs[i])) {
      let pos = searchInTree(x)(xs[i]);
      if(typeof pos !== 'undefined') {
        let result: string = i + "," + pos;
        //return [i, pos];
        return result;
      }
    } 
  }
};

const replaceDirection = (xs: string): string => {
  if(xs.length > 2) {
    let ys = [[/^0/g, ""], [/0$/g, ""], [/1/g, 0], [/2/g, 1], [/,/g, ""]];
    for(let i = 0; i < ys.length; i++) {
      // @ts-ignore
      let regex: RegExp = ys[i][0];
      // @ts-ignore
      let x: string | number = ys[i][1];
      // @ts-ignore
      xs = xs.replace(regex, x);
    }
  }
  return xs;
};

const searchLettersInTree = (xs: string) => (tree: any) => {
  let ys = [];
  for(let i = 0; i < xs.length; i++) {
    let x = xs[i];
    // @ts-ignore
    let dir = replaceDirection(searchInTree(x)(tree));
    ys.push([x, dir]);
  }
  return ys;
};

const huffmanCode = (xs: string[][]): string => {
  let ys = "";
  for(let i = 0; i < xs.length; i++) {
    ys += xs[i][1];
  }
  return ys;
};

let word = "Laptop";
console.log(word);
//console.log(joinLetterCounter(word));
//console.log(bubble(joinLetterCounter(word)));
//console.log(createTree(bubble(joinLetterCounter(word))));
//console.log(searchLettersInTree(word)(createTree(bubble(joinLetterCounter(word)))));
//console.log(huffmanCode(searchLettersInTree(word)(createTree(bubble(joinLetterCounter(word))))));

export { add, bubble, count, createTree, deleteChar, huffmanCode, joinLetterCounter, replaceDirection, searchInTree, searchLastPosition, searchLettersInTree };
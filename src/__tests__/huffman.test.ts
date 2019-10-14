import {
  add,
  bubbleSort,
  count,
  createTree,
  deleteChar,
  huffman,
  huffmanCode,
  joinLetterCounter,
  replaceDirection,
  searchInTree,
  searchLastPosition,
  searchLettersInTree
} from "../huffman";

describe("Huffman", function() {

  it("Cuenta las veces que se repite un caracter", function() {
    expect(count("p")("Laptop")).toEqual(2);
  });

  it("Busca la última posición de un caracter", function() {
    expect(searchLastPosition("p")("Laptop")).toEqual(5);
  });
  
  it("Borra el caracter de la posición indicada", function() {
    expect(deleteChar(5)("Laptop")).toEqual("Lapto");
  });
  
  it("Crea un array con arrays de letra y veces que se repite esa letra", function() {
    expect(joinLetterCounter("Laptop")).toEqual([
      ["L", 1],
      ["a", 1],
      ["p", 2],
      ["t", 1],
      ["o", 1]
    ]);
  });
  
  it("Ordena de menor a mayor los arrays que hay dentro del array según las veces que se repite la letra", function() {
    expect(bubbleSort([["L", 1], ["a", 1], ["p", 2], ["t", 1], ["o", 1]])).toEqual([
      ["L", 1],
      ["a", 1],
      ["t", 1],
      ["o", 1],
      ["p", 2]
    ]);
  });
  
  it("Suma", function() {
    expect(add(2)(3)).toEqual(5);
  });
  
  it("Crea una estructura de 'árbol' con arrays de arrays hasta que el array principal solo tenga un único array", function() {
    expect(
      createTree([["L", 1], ["a", 1], ["t", 1], ["o", 1], ["p", 2]])
    ).toEqual([
      [
        [null, 6],
        [[null, 2], ["t", 1], ["o", 1]],
        [[null, 4], ["p", 2], [[null, 2], ["L", 1], ["a", 1]]]
      ]
    ]);
  });
  
  it("Busca un único caracter dentro del 'árbol' y devuelve el 'camino' que ha recorrido hasta llegar a él", function() {
    expect(
      searchInTree("L")([
        [
          [null, 6],
          [[null, 2], ["t", 1], ["o", 1]],
          [[null, 4], ["p", 2], [[null, 2], ["L", 1], ["a", 1]]]
        ]
      ])
    ).toEqual("0,2,2,1,0");
  });
  
  it("Elimina el primer y último cero porque siempre van a estar presentes, cambia los 1 por 0(izq) y los 2 por 1(der)", function() {
    expect(replaceDirection("0,2,2,1,0")).toEqual("110");
  });
  
  it("Busca todos los caracteres y su 'dirección' y lo guarda en un array", function() {
    expect(
      searchLettersInTree("Laptop")([
        [
          [null, 6],
          [[null, 2], ["t", 1], ["o", 1]],
          [[null, 4], ["p", 2], [[null, 2], ["L", 1], ["a", 1]]]
        ]
      ])
    ).toEqual([
      ["L", "110"],
      ["a", "111"],
      ["p", "10"],
      ["t", "00"],
      ["o", "01"],
      ["p", "10"]
    ]);
  });
  
  it("Transforma a código Huffman el array con las letras y sus 'caminos'", function() {
    expect(
      huffmanCode([
        ["L", "110"],
        ["a", "111"],
        ["p", "10"],
        ["t", "00"],
        ["o", "01"],
        ["p", "10"]
      ])
    ).toEqual("11011110000110");
  });

  it("HuffmanCode", function() {
    expect(huffmanCode(searchLettersInTree("Laptop")(createTree(bubbleSort(joinLetterCounter("Laptop")))))).toEqual("11011110000110");
  });

  it("HuffmanCode", function() {
    expect(huffmanCode(searchLettersInTree("Hello")(createTree(bubbleSort(joinLetterCounter("Hello")))))).toEqual("0001111110");
  });

  let word = "Laptop";
  let arraySorted = [["L", 1], ["a", 1], ["t", 1], ["o", 1], ["p", 2]];
  let tree = [
    [
      [null, 6],
      [[null, 2], ["t", 1], ["o", 1]],
      [[null, 4], ["p", 2], [[null, 2], ["L", 1], ["a", 1]]]
    ]
  ];
  let lettersDirections = [ 
    [ 'L', '110' ],
    [ 'a', '111' ],
    [ 'p', '10' ],
    [ 't', '00' ],
    [ 'o', '01' ],
    [ 'p', '10' ]
  ];
  let huffmanWord = "11011110000110";

  it("Compose", function() {
    expect(huffman(word)).toEqual(huffmanWord);
  });

  it("Compose", function() {
    expect(huffman("Elefantitos")).toEqual("1100110111101111000001101010101011100");
  });

});

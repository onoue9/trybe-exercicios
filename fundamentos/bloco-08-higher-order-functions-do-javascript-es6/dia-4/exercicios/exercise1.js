const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

//1- Dada uma matriz, transforme em um array.

function flatten() {
  // escreva seu código aqui
  const array = arrays.reduce((acc, cur) => acc.concat(cur)); // .concat() 'concat cria um novo array unindo todos os elementos que foram passados como parâmetro' ; 'concat não altera a si mesmo ou a qualquer um dos argumentos passados, apenas providencia um novo array contendo uma cópia de si mesmo e dos argumentos passados'
  /* arrays.map((element) => element.map((item) => array.push(item))); */  
  return array;
  //return arrays.reduce((acc, cur) => acc.concat(cur), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
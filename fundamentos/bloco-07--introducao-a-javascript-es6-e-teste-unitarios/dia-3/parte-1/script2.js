const assert = require('assert');
const exp = require('constants');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

//A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
//1- Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
let expected = myRemove([1, 2, 3, 4], 3);

assert.deepStrictEqual(expected, [1, 2, 4], 'item 3 removido!');
//2- Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'item 3 não removido!');
//3- Verifique se o array passado por parâmetro não sofreu alterações
assert.deepStrictEqual(expected, [1, 2, 4], 'item 3 removido!');
//4- Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
expected = myRemove([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected, [1, 2, 3, 4], 'item 5 não existe!');

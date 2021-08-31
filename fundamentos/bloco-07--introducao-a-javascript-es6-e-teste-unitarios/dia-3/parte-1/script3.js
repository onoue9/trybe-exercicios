const assert = require('assert');
const exp = require('constants');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

//A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
//1- Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
let expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);

assert.deepStrictEqual(expected, [1, 2, 4], 'item 3 removido');
//2- Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'item 3 removido');
//3- Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
expected = myRemoveWithoutCopy([1, 2, 3, 4], 1);

assert.deepStrictEqual(expected, [2, 3, 4], 'item 1 removido');
//4- Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
expected = myRemoveWithoutCopy([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected, [1, 2, 3, 4], 'item 5 não existe');

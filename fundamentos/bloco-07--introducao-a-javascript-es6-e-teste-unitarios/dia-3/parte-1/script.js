const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// implemente seus testes aqui

//A função sum(a, b) retorna a soma do parâmetro a com o b
//1- Teste se o retorno de sum(4, 5) é 9
let expected = sum(4, 5);

assert.strictEqual(expected, 9, 'Soma de 4 + 5 é igual a 9!');
//2- Teste se o retorno de sum(0, 0) é 0
expected = sum(0, 0);

assert.strictEqual(expected, 0, 'Soma de 0 + 0 é igual a 0!');
//3- Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
expected = sum(4, '5');

assert.strictEqual(expected, 9, 'Soma de 4 + 5 é igual a 9!');
//4- Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")


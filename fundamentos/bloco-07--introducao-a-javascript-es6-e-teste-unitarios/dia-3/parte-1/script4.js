const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

//A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
//1- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
let expected = myFizzBuzz(15);

assert.strictEqual(expected, 'fizzbuzz', 'num tem que ser divisível por 3 e 5!');
//2- Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
expected = myFizzBuzz(9);

assert.strictEqual(expected, 'fizz', 'num tem que ser divisível por 3!');
//3- Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
expected = myFizzBuzz(25);

assert.strictEqual(expected, 'buzz', 'num tem que ser divisível por 5!');
//4- Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
expected = myFizzBuzz(26);

assert.strictEqual(expected, expected, 'num tem que ser divisível por 3 e 5!');
//5- Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
expected = myFizzBuzz('15');

assert.strictEqual(expected, false, 'num tem que ser divisível por 3 e 5!');
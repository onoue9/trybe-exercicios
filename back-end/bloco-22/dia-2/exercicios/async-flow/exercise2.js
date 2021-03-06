/* 1- Escreva um código para consumir a função construída no exercício anterior.
    a. Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
    b. Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
    c. Utilize then e catch para manipular a Promise retornada pela função:
      1- Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
      2- Caso a Promise seja resolvida, escreva na tela o resultado do cálculo. */

const calc = require('./exercise1');

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

calc(num1, num2, num3)
  .then(result => console.log(`Sucesso: ${result}`))
  .catch(err => console.log(`Erro: ${err.message}`));


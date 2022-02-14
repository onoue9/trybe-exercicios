/* 1- Crie uma função que recebe três parâmetros retorna uma Promise .
    a. Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
    b. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
    c. Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
    d. Caso o resultado seja maior que 50, resolva a Promise com o valor obtido. */

function calc(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error('Informe apenas número'));

    const result = ((num1 + num2) * num3);

    if(result < 50) reject(new Error('Valor muito baixo'));

    resolve(result)
  });

  return promise;
}

/* calc(2, 9, 10)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((err) => console.log(`erro: ${err}`)); */

module.exports = (calc);

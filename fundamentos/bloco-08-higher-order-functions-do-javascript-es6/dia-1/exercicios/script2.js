//2- Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const draw = () => { 
  return Math.ceil(Math.random() * 5);  
};

const checkResult = (num, func) => {
  const result = func();
  console.log(result);
  return (result === num) ? `Parabéns você ganhou` : `Tente novamente`;
};
  
console.log(checkResult(4, draw));
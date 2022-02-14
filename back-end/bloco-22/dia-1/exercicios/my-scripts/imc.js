const imc = () => {

  const { questionFloat, questionInt } = require('readline-sync');

  const peso = questionFloat('Qual é o seu peso? ');
  const altura = questionInt('Qual é a sua altura(metros)? ');

  const IMC = (peso / altura) * 2;

  if(IMC < 18.5) console.log(`Abaixo do peso (magreza) ${IMC}`);
  if(IMC >= 18.5 && IMC < 25) console.log(`Peso normal ${IMC}`);
  if(IMC >= 25 && IMC < 30) console.log(`Acima do peso (sobrepeso) ${IMC}`);
  if(IMC >= 30 && IMC < 35) console.log(`Obesidade grau I ${IMC}`);
  if(IMC >= 35 && IMC < 40) console.log(`Obesidade grau II ${IMC}`);
  if(IMC >= 40) console.log(`Obesidade graus III e IV ${IMC}`);

}

module.exports = imc;
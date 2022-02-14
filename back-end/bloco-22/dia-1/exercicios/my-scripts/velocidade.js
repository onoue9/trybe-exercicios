const velocidade = () => {
  const { questionInt } = require('readline-sync');

  const distancia = questionInt('Distancia: ');
  const tempo = questionInt('Tempo: ');

  const vm = distancia / tempo;

  return console.log(`A velocidade média é: ${vm}`);
}

module.exports = velocidade;
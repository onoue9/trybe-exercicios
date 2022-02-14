const sorteio = () => {

  const { questionInt } = require('readline-sync');

  const num = questionInt('Adivinha o número(0 a 10): ');

  const randomNum = Math.floor(Math.random() * 11);

  if(num === randomNum) { 
    return console.log('Você acertou! ')
  } else {
    return console.log(`Você errou! ${randomNum}`);
  };

}

module.exports = sorteio;

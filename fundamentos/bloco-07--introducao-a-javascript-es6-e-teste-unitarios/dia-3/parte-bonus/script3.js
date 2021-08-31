//Escreva a função removeMiddle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função removeMiddle aqui

const removeMiddle = words => {
  const index = (words.length - 1) / 2;
  const word = [];
  word.push(words[index]);
  words.splice(index, 1); // .splice(indice, quantidade a ser removida/adicionada) (remove/adiciona elementos no array original e também retorna os elementos removidos)
  return word;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
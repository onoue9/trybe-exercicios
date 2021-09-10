const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui
  let aCount = 0;
  const namesToLowerCase = names.reduce((acc, cur) => acc.concat(cur), '').toLowerCase();
  for (let index = 0 ; index < namesToLowerCase.length; index += 1) {
    namesToLowerCase[index] === 'a' ? aCount += 1 : aCount;
  }
  return aCount;
}

assert.deepStrictEqual(containsA(), 20);

/* const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20); */
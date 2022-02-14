//6.1 - Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
//Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

//6.2 - Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = async (age) => {
  const animals = Animals.find((animal) => animal.age === age);
  if (animals) return animals;
  throw 'Nenhum animal com essa idade!';
}

const findAnimalByName = async (name) => {
  // Adicione o código aqui.
  const animal = Animals.find((animal) => animal.name === name);
  if (animal) return animal;
  throw 'Nenhum animal com esse nome!';
};

const getAnimal = (name) => {
  // Adicione o código aqui.
  if (typeof name === 'string') return findAnimalByName(name);
  return findAnimalByAge(name);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });  
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne um array de objetos dos animais', () => {
      expect.assertions(1);
      return getAnimal(2).then(animal => {
        expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(10).catch(error => 
        expect(error).toEqual('Nenhum animal com essa idade!'));
    });
  });
});
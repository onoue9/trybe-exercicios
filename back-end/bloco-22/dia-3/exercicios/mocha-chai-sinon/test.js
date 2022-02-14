/* const { expect } = require('chai');

const positiveNegative = require('./positiveNegative');

const typeNumber = 'o valor deve ser um número';

describe('Função que irá dizer se um número é "positivo", "negativo" ou "neutro".', () => {
  it('se for maior que 0', () => {
    const num = positiveNegative(9);

    expect(num).to.be.equals('positivo');
  });

  it('se for menor que 0', () => {
    const num = positiveNegative(-9);

    expect(num).to.be.equals('negativo');
  });

  it('se for igual a 0', () => {
    const num = positiveNegative(0);

    expect(num).to.be.equals('neutro');
  });
  
  it('se o parâmetro não é do tipo "number"', () => {
    const num = positiveNegative('a');

    expect(num).to.be.equals(typeNumber);
  });
   
}); */

const { expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');

const write = require('./writeFile');

describe('Função que cria e escreve um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').returns('ok');
  });

  after(() => {
    fs.writeFile.restore();
  })

  it('verifica se conseguiu escrever o arquivo', () => {
    const response = write('teste.txt', 'testando');
    expect(response).to.be.equals('ok');
  });

  it('verifica se o retorno é tipo string', () => {
    const response = write('teste.txt', 'testando');
    expect(response).to.be.a('string');
  })
});

const math = require('./math');

//1 -Faça o mock da funcão subtrair e teste sua chamada.

test('Fazendo mock da função subtrair e testando a chamada', () => {
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalled();
})

//2- Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

test('Fazendo mock da função multiplicar e testando a chamada e retorno', () => {
  math.somar = jest.fn().mockImplementation((a, b) => a * b).mockReturnValue(10);

  math.somar(5, 2);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar(5, 2)).toBe(10);
})
//3- Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test('Fazendo mock da função somar e testando a chamada, o retorno e os parametros passados', () => {
  math.somar = jest.fn().mockImplementation((a, b) => a + b);

  math.somar(5, 1)
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar(5, 1)).toBe(6);
  expect(math.somar).toHaveBeenCalledWith(5, 1);
})

//4- Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test('Fazendo mock da função dividir e testando a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada', () => {
  math.somar = jest.fn().mockImplementation((a, b) => a/b).mockReturnValue(15);

  math.somar(2, 5);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar(2, 5)).toBe(15);
  expect(math.somar).toHaveBeenCalledWith(2, 5);
  expect(math.somar).toHaveBeenCalledTimes(2);
})

//5- Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
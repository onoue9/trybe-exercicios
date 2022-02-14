const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('trybe', console.log);

//1- Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

test('uppercase(), transforma as letras de uma palavra em letras MAIÚSCULAS', (done) => {
  uppercase('trybe', (str) => {
    try {
      expect(str).toMatch('TRYBE');
      done();
    } catch(error) {
      done(error)
    }
  })
  });
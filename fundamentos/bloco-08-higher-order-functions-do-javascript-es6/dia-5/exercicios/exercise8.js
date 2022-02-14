const assert = require('assert');

//8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
//Dica: use default params .

// escreva greet abaixo
const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
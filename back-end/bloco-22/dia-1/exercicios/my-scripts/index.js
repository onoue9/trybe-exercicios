const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const { questionInt } = require('readline-sync');

const script = questionInt(`Qual script você deseja executar?
1 - IMC,
2 - Velocidade Média,
3 - Descubra o número.
`);

if(script === 1) imc();
if(script === 2) velocidade();
if(script === 3) sorteio();

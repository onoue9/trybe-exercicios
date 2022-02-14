//Vamos praticar com os seguintes exercícios:
//1 - Crie uma função que retorne a string 'Acordando!!' ;

const wakeUp = () => 'Acordando!!';

//2 - Crie outra função que retorne a string 'Bora tomar café!!' ;

const breakFast = () => 'Bora tomar Café!!';

//3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;

const goSleep = () => 'Partiu dormir!!';

//4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(breakFast);
doingThings(goSleep);


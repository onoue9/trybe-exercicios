//exercício 9
let numeros = [];
let divisao = [];

for(let index = 1; index < 26; index += 1){
  numeros.push(index);
}

for(let indexDiv = 0; indexDiv < numeros.length; indexDiv += 1){
  divisao.push(numeros[indexDiv] / 2);
}

console.log(numeros);
console.log();
console.log(divisao);

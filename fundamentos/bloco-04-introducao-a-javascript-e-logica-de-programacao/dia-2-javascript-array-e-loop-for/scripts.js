//exercício 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor=3;

for(let index = 0; index < numbers.length; index += 1){
  let valor = numbers[index];
  for(let indexMenor = 0; indexMenor < numbers.length; indexMenor += 1){
    if(valor < numbers[indexMenor]){
      let valorMenor = valor;

    if(valorMenor < menorValor){
      menorValor = valorMenor;
      }
    }
  }
}  


console.log(menorValor);

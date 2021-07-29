//exercício 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for(let index = 0; index < numbers.length; index += 1){
  let valor = numbers[index];
  for(let indexValor = 0; indexValor < numbers.length; indexValor += 1){
    if(valor > numbers[indexValor]){
      let valorMaior = valor;
    
    if(valorMaior > maiorValor){
      maiorValor = valorMaior;
    }
  }
  }
}

console.log(maiorValor);

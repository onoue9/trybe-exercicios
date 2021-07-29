//exercício 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresImpares = [];

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index]%2!=0){
    valoresImpares.push(numbers[index]);
  }  
}

console.log(valoresImpares);

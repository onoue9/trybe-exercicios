//exercício 6
let number = 23;
let primo = [];

for(let index = 0; index <= number; index += 1){
  if(number%index == 0){
    primo.push(number);
  }
}
if(primo.length <= 2){
  console.log("É primo.")
}else{
  console.log("Não é primo.")
}

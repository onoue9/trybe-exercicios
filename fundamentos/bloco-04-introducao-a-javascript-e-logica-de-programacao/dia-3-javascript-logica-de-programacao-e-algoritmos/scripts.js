//exercício 1
let size = 5;
let quadrado = "";

for(let indexLinha = 0; indexLinha < size; indexLinha += 1){  
  for(let indexColuna = 0; indexColuna < size; indexColuna += 1){
    quadrado += "*";
  }
  console.log(quadrado);
  quadrado = "";
}

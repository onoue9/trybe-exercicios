//exercício 1

function palindromo(word){ 
  let pali = [];
  for(let index = 0; index < word.length; index += 1){
    pali.push(word[index]);
  }
  if(pali[0] == pali[pali.length-1]){
    return console.log(true);
  }else{
    return console.log(false);
  }
}

palindromo("desenvolvimento");
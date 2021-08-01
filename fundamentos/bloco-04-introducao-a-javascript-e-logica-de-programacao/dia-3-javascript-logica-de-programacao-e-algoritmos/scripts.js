//exercício 5
let n = 21;
let symbol = "*";
let inputLine = "";
let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;
let controlMidRight = midOfMatrix;
let controlMidLeft = midOfMatrix;

for(let lineIndex = 0; lineIndex < midOfMatrix; lineIndex += 1){
  for(let columnIndex = 0; columnIndex <= n; columnIndex += 1){
    if(columnIndex == controlLeft || columnIndex == controlRight || lineIndex == midOfMatrix - 1 && columnIndex > 0){
      inputLine = inputLine + symbol;
    }else {
      inputLine = inputLine + " ";
    }
  }
  console.log(inputLine);
  inputLine = "";
  controlRight += 1;
  controlLeft -= 1;
  controlMidRight += 1;
  controlMidLeft -= 1;
}
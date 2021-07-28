//exercício 5
let a = 90;
let b = 55;
let c = 35;

if(a < 0 || b < 0 || c < 0){
  console.log("erro");
}
else if(a+b+c!==180){
  console.log(false);
}
else if(a+b+c===180){
  console.log(true);
}
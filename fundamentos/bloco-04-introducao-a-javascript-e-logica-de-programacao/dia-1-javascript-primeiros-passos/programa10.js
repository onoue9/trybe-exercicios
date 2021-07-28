//exercício 6
let peca = "RaInHa".toLowerCase();

switch (peca) {
  case "peao":
    console.log("ande 1 casa a frente!");
    break;
  
  case "torre":
    console.log("ande quantas casas der na vertical ou horizontal!");
    break;

  case "cavalo":
    console.log("ande em L!");
    break;
  
  case "bispo":
    console.log("ande quantas casas der na diagonal!");
    break;

  case "rainha":
    console.log("ande quantas casas der na vertical, horizontal ou diagonal!")
    break;

  case "rei":
    console.log("ande 1 casa na vertical, horizontal ou diagonal!")
    break;

  default:
    console.log("peça não existe!")
    break;
}
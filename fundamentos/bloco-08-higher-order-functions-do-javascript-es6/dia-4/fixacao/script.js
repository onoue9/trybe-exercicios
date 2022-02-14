//Faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const even = numbers.filter((num) => num % 2 === 0);

const sum = (result, number) => result + number;

const sumNumber = even.reduce(sum);

console.log(sumNumber);
/* // apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      let joke = document.querySelector('#jokeContainer');
      return joke.innerHTML = data.joke;
  });    
};

window.onload = () => fetchJoke(); */

//Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
//Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
//Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const promise = new Promise((resolve, reject) => {
  const array = [];
  for (let index = 0; index < 10; index += 1) {
    array.push(Math.floor(Math.random() * 1000) * 2);
  };
  const number = array.reduce((acc, cur) => acc + cur)
  if (number < 8000) {
    return resolve(new Promise((resolve, reject) => {
      return resolve();
    }))
    .then(() => array.reduce((acc, cur) => acc + cur));
  };
  reject(number);
})
.then(number => {
  const array = [2, 3, 5, 10];
  const result = []
  array.forEach((item) => result.push(Math.floor(number / item)));
  return 
})
.then(msg => console.log(msg))
.catch(number => console.log(`"É mais de oito mil! Essa promise deve estar quebrada!", ${number}`));
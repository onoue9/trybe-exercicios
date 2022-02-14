const simpson = require('./simpson.json');
/* 
function requestJson() {
  simpson.map((char) => console.log(`${char.id} - ${char.name}`))
}

requestJson(); */

function filterCharacterId(id) {
  const idToString = id.toString();
  const promise = new Promise((resolve, reject) => {
    if(simpson.filter((char) => char.id === idToString).length === 0) reject(new Error('id não encontrado'));

    resolve(simpson.filter((char) => char.id === idToString).map((char) => `${char.id} - ${char.name}`));
  });

  return promise;
}

filterCharacterId(1)
  .then(result => console.log(`Success: ${result}`))
  .catch(err => console.log(`Error: ${err.message}`));
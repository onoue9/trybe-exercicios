const estudantes = [
  {
    nome: 'Henrique Baêta',
    projeto: 'Trybewarts',
    status: 88,
  },
  {
    nome: 'Rodrigo da Rosa',
    projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Gabrielle Martines',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Isaac Batista',
    projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Ana Duarte',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Jéssica Lopes',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald Lima',
    projeto: 'Trybewarts',
    status: 75,
  },
]

const arr = [];
estudantes.forEach(element => {
  arr.push(element);
  arr.sort((a, b) => {
    if (a.nome > b.nome) {
      return 1;
    } else if (a.nome < b.nome) {
      return -1;
    } else {
      return 0
    }
  });
});
console.log(arr);

const numbers = [19, 21, 30, 3, 45, 22, 15];

const test = () => { 
  numbers.find((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      console.log(`${element}`);
    }
  });
};

console.log(test());
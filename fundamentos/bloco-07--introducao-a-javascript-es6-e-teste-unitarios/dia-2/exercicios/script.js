/* Agora você vai fazer alguns exercícios de fixação. */
// PARTE 1
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/* 1- Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função. */

const customerInfo = (order) => {
  let info = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
  return info;
}

console.log(customerInfo(order));

/* 2- Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00. */

const orderModifier = (order) => {  
  const newCostumer = {
    name: 'Luiz Silva',
    total: 50
  }
  Object.assign(order, newCostumer);
  let info = `Olá ${order.name}, o total do seu pedido de marguerita, peperone e Coca-Cola Zero é R$${order.payment.total},00.`
  return info;
}

console.log(orderModifier(order));

//PARTE 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1- Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurn = (obj, key, value) => obj[key] = value;

addTurn(lesson2, 'turno', 'manhã');

console.log(lesson2);

// 2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. 

const listKeys = obj => Object.keys(obj);

console.log(listKeys(lesson3));

// 3- Crie uma função para mostrar o tamanho de um objeto.

const objSize = obj => Object.keys(obj).length;

console.log(objSize(lesson1));

// 4- Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = obj => Object.values(obj);

console.log(listValues(lesson2));

// 5- Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: 

/* 
console.log(allLessons);

{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//const assignObj = obj => Object.assign(allLessons, lesson1, lesson2, lesson3);

console.log(allLessons);

//6- Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = obj => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};

console.log(totalStudents(allLessons));

//7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const valueKey = (obj, key) => {
  const value = Object.values(obj);
  return value[key];
}

console.log(valueKey(lesson1, 0));

//8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
//console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verifyPair = (obj, key, value) => {
  const arrayKeys = Object.keys(obj);
  const arrayValues = Object.values(obj);

  //for (let index of arrayKeys) {
    const verify1 = arrayKeys.indexOf(key) ? true : false;
  //}

  //for (let index of arrayValues) {
    const verify2 = arrayValues.indexOf(value) ? true : false;
  //}

  const result = verify1 === true && verify2 === true ? true : false;
  
  return result
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

//Bônus
//1- Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática'){
    total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudentsMath(allLessons));

//2- Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
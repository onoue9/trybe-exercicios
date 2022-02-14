const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
//Dica: Utilize o try/catch para o caso de erro.

describe('O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName .', () => {
  it('Verifique o resultado da função getUserName para o caso em que o usuário é encontrado', async () => {
    await expect(getUserName(1)).resolves.toEqual('Mark');
  });

  it('Teste para o caso em que o usuário não é encontrado', async () => {
    await expect(getUserName(3)).rejects.toEqual((new Error(`User with 3 not found.`)));
  });
});
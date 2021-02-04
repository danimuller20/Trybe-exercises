//* Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função
//* getUserName para o caso em que o usuário é encontrado, e também um teste para o caso
//* em que o usuário não é encontrado.
//* Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável
//* users, para saber quais IDs existem.
const getUserName = require('./exercise2&3.js');

describe('Verifica retorno da função getUserName usando promises', () => {
  it('deve retornar um nome de usuário', () => {
    return expect(getUserName(4)).resolves.toEqual('Mark');
  });
  it('deve retornar um erro', () => {
    return expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' });
  });
});

//* Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
//* Dica: Utilize o try/catch para o caso de erro.

describe('Verifica retorno da função getUsername usando async/await', () => {
  it('deve retornar um nome de usuário', async () => {
    const name = await getUserName(5);
    expect(name).toEqual('Paul');
  });
  it('deve retornar um erro', async () => {
    try {
      await getUserName(8);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 8 not found.' })
    }
  });
});
//* Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função
//* que deverá passar no teste abaixo.
//* Dica: use o código do exemplo dado para criar uma nova função,
//* analise os testes antes de iniciar.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.name === name);
  
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals.reduce((acc, cur) => {
          acc = cur;
          return acc;
        }, {}));
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = (name) => (
  findAnimalByName(name).then(list => list)
);
console.log(getAnimal('Soneca'))
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error => {
        expect(error).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});

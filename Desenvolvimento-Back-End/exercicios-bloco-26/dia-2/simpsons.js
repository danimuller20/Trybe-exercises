const fs = require('fs/promises');

const file = './simpsons.json'

//? Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson.
async function simpsonsIdAndName() {
  const simpsons = await fs
  .readFile(file, 'utf8')
    .then((data) => JSON.parse(data))
    simpsons.map((simpson) => console.log(simpson.id, simpson.name));
}
simpsonsIdAndName();

async function simpsonId(id) {
  const simpsons = await fs.readFile(file, 'utf8')
    .then((data) => JSON.parse(data))
    .then((result) => result.find((simpson) => Number(simpson.id) === id));
    console.log(simpsons === undefined ? new Error('id não encontrado') : simpsons);
}
simpsonId(4);



const getRepos  = require('./exercise4.js');

test('Verifica se inclui: sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', async () => {
  const list = await getRepos('https://api.github.com/orgs/tryber/repos');
  console.log(list)
  expect(list.includes('sd-01-week4-5-project-todo-list')).toBeTruthy();
  expect(list.includes('sd-01-week4-5-project-meme-generator')).toBeTruthy();
});
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  const paragraph = document.createElement('p');
  paragraph.innerText = joke;
  jokeContainer.appendChild(paragraph)
}


const fetchJoke = () => {
  // Adicionar lógica aqui!
  const param = { method: 'GET', headers: {'Accept': 'application/json'}};
  fetch(API_URL, param)
    .then(response => {
      response.json()
    .then(data => {
      const joke = data.joke;
      appendJoke(joke);
    });
  });
}


window.onload = () => fetchJoke();
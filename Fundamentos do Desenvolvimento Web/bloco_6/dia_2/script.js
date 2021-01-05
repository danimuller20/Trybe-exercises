const statesOfBrazil = ['Selecione seu estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function selectState(states) {
  const selectStates = document.querySelector('#select-estado');
  for (let index = 0; index < states.length; index += 1) {
    const options = document.createElement('option');
    options.setAttribute('required', 'required');
    options.setAttribute('name', 'estado');
    options.innerHTML = states[index];
    selectStates.appendChild(options)
  }
}
selectState(statesOfBrazil);

function checkEmail() {
  const email = document.querySelector('#input-email').value;
  let emails = email.split(',');
  const regexCode = /^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/;
  for (let index = 0; index < emails.length; index += 1) {
    if (emails[index] != '' && regexCode.test(emails[index])) {
      return true;
    }
    alert('Digite um e-mail válido!')
  }
  console.log(emails);
}

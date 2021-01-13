const require = ("promise-polyfill");

const statesOfBrazil = ['Selecione seu estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function selectState(states) {
  const selectStates = document.querySelector('#select-estado');
  for (let index = 0; index < states.length; index += 1) {
    const options = document.createElement('option');
    options.setAttribute('data-validate-field', 'state');
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

// function checkCPF() {
//   let append = document.querySelector('#cpf');
//   const div = document.createElement('div');
//   let input = document.querySelector('#input-cpf')
//   input.addEventListener('input', function () {
//     let cpf = document.querySelector('#input-cpf').value;
//     cpf = parseInt(cpf);
//     if (isNaN(cpf)) {
//       div.innerHTML = 'Enter a valid CPF. Only numbers';
//       div.style.color = '#B81111';
//     } else {
//       div.innerHTML = '';
//     }
//     append.appendChild(div);
//   });
// }
// checkCPF();

  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D MMM YYYY',
    onSelect: function() {
      this.getMoment().format('Do MMMM YYYY');
    }
  });

  new JustValidate('.js-form', {
    rules: {
      cpf: {
        required: true,
        minLength: 11,
        maxLength: 11
      },
      address: {
        required: true,
        maxLength: 300
      },
      city: {
        required: true,
        maxLength: 28
      },
      state: {
        required: true
      },
      myField: {
        required: true
      },
      text: {
        required: true,
        maxLength: 1000
      },
      job: {
        required: true,
        maxLength: 40
      },
      description: {
        required: true,
        maxLength:500
      },
      date: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        strength: {
          default: true,
        }
    },
    messages: {
      name: {
        minLength: 'My custom message about only minLength rule'
      },
      cpf: {
        minLength: 'My custom message about only minLength rule',
        maxLength: 'My custom message about only maxLength rule',
      },
      address: {
        maxLength: 'My custom message about only minLength rule'
        },
      city: {
        maxLength: 'My custom message about only minLength rule'
        },
      text: {
        maxLength: 'My custom message about only minLength rule'
        },
      job: {
        maxLength: 'My custom message about only minLength rule'
        },
      description: {
        maxLength: 'My custom message about only minLength rule'
        },
      email: 'My custom message about error (one error message for all rules)'
    },

    submitHandler: function (form, values, ajax) {

      ajax({
        url: 'https://just-validate-api.herokuapp.com/submit',
        method: 'POST',
        data: values,
        async: true,
        callback: function(response)  {
          console.log(response)
        }
      });
    },
  },
});

// function getInputs() {
//   let allInputs = document.querySelectorAll('.text');
//   let inputs = [];
//   for (let index = 0; index < allInputs.length; index += 1) {
//     if (allInputs[index].checked) {
//       inputs.push(allInputs[index].checked)
//     }else if (allInputs[index].getAttribute('type', 'text'))
//     inputs.push(allInputs[index].value);
//   }
//   return inputs;
// }

let nameInput = document.querySelector('#input-nome');
let emailInput = document.querySelector('#input-email');
let cpfInput = document.querySelector('#input-cpf');
let addressInput = document.querySelector('#input-endereco');
let cityInput = document.querySelector('#input-cidade');
let optionInput = document.querySelector('#select-estado')
let textareaInput = document.querySelector('.textarea');
let jobInput = document.querySelector('#input-cargo');
let descriptionInput = document.querySelector('#input-descricao');
let dateinput = document.querySelector('#datepicker');

function getInputValues(inpuType) {
  return inpuType.value
}

function getRadioInputValue() {
  let checked = document.querySelector('input[name="complemento"]:checked');
  if (checked !== null) {
    return checked.value;
  }
}

function appendData(event) {
  event.preventDefault()
  const div = document.querySelector('#result-data');
  while (div.hasChildNodes()) {
    div.removeChild(div.lastChild);
  }
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Currículo';
  h1.className = 'title is-1 label content has-text-centered';
  div.appendChild(h1);  
  let data = new Map();
  data.set('Nome: ', getInputValues(nameInput));
  data.set('E-mail: ', getInputValues(emailInput));
  data.set('CPF: ', getInputValues(cpfInput));
  data.set('Endereço: ', getInputValues(addressInput));
  data.set('Cidade: ', getInputValues(cityInput));
  data.set('Estado: ', getInputValues(optionInput));
  data.set('Complemento: ', getRadioInputValue());
  data.set('Resumo do Currículo: ', getInputValues(textareaInput));
  data.set('Cargo: ', getInputValues(jobInput));
  data.set('Descrição: ', getInputValues(descriptionInput));
  data.set('Data de Início: ', getInputValues(dateinput)); 
  document.getElementById("myForm").action = "/action_page.php";
  
  for (var [key, value] of data) {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = (`${key} ${value}`);
     div.appendChild(paragraph);
  }
}

const button = document.querySelector('#button-send');
button.addEventListener('click', appendData);

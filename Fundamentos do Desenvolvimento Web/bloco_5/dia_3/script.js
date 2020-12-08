function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.className = 'days-of-week';
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function daysOfCalendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysOfMonth = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const listOfDays = document.createElement('li');

    if (days === 24 || days === 31) {
      listOfDays.className = 'day holiday';
      listOfDays.innerHTML = days;
      daysOfMonth.appendChild(listOfDays);
    } else if (days === 25) {
      listOfDays.className = 'day holiday friday';
      listOfDays.innerHTML = days;
      daysOfMonth.appendChild(listOfDays);
    } else if (days === 4 || days === 11 || days === 18) {
      listOfDays.className = 'day friday';
      listOfDays.innerHTML = days;
      daysOfMonth.appendChild(listOfDays);
    }else {
      listOfDays.className = 'day';
      listOfDays.innerHTML = days;
      daysOfMonth.appendChild(listOfDays);
    }
  }
}
daysOfCalendar();

function holidayButton(feriados) {
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = feriados;

  let divButton = document.querySelector('.buttons-container')
  divButton.appendChild(button);
}
holidayButton('Feriados');

// function changeColorHoliday() {
//   let button = document.querySelector('#btn-holiday');
//   button.addEventListener('click', changeColor);
// }
// changeColorHoliday()

// function changeColor() {
//   let holiday = document.querySelectorAll('.holiday');
//   let newColor = 'rgb(250,240,130)';
//   let originalColor = 'rgb(238,238,238)' 

//   for (let index = 0; index < holiday.length; index += 1) {
//     let holidayStyle = holiday[index];
//     if (holidayStyle.style.backgroundColor === newColor) {
//       holidayStyle.style.backgroundColor = originalColor;
//     } else {
//       holidayStyle.style.backgroundColor = newColor;
//     }
//   }
// }

function changeColorHoliday() {
  let button = document.querySelector('#btn-holiday');
  let holiday = document.querySelectorAll('.holiday');
  let newColor = 'rgb(247, 255, 46)';
  let originalColor = '#eee';

  button.addEventListener('click', function() {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === newColor) {
        holiday[index].style.backgroundColor = originalColor;
      } else {
        holiday[index].style.backgroundColor = newColor;   
      }
    }
  })
};
changeColorHoliday();
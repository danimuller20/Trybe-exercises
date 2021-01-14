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

// exercise 1
let addTurno = (lesson2, turno, manha) => lesson2[turno] = manha;
addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

//exercise 2
let keysOfObject = lesson => Object.keys(lesson);
console.log(keysOfObject(lesson3));

//Exercise 3
let lengthOfObject = (lesson) => Object.keys(lesson).length;
console.log(lengthOfObject(lesson2));

//exercise 4
let valueOfObject = (lesson) => Object.values(lesson);
console.log(valueOfObject(lesson1));

//exercise 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//Exercise 6
const numberStudents = (allLessons) => {
  let result = 0;
  const list = Object.keys(allLessons);
  for (let inex in list) {
    result += allLessons[list[inex]].numeroEstudantes;
  }
  return result;
}
console.log(numberStudents(allLessons));

//Exercise 7
const positionOfValue = (lesson, number) => Object.values(lesson)[number];
console.log(positionOfValue(lesson1, 1));

// Exercise 8
const IfExist = (lesson, key, value) => {
  let list = Object.entries(lesson);
  let result = false;
  for (let index in list) {
    if (list[index][0] === key && list[index][1] === value) {
      result = true;
    }
  }
  return result;
};
console.log(IfExist(lesson2,'professor','Carlos'));

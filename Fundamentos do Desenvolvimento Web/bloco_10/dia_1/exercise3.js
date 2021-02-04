function techList(technologies, name) {
  technologies.sort();
  let newList = [];
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < technologies.length; index += 1) {
    let objectTech = { tech: '', name: name };
    objectTech.tech = technologies[index];
    newList.push(objectTech);
  }
  return newList;
}
let arrayTechnologies = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']
let studentName = 'Daniela'
console.log(techList(arrayTechnologies, studentName));

module.exports = techList;
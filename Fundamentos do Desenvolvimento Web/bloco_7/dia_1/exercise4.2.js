const skills = ['SoftSkills', 'GitHub', 'HTML', 'CSS', 'JavaScript'];

function tryber(string) {
  const firstFunction = text => (`Tryber ${text} aqui!
  
  Tudo bem?
  `);
  let phrase = `${firstFunction(string)}
  
  Minhas cinco principai habilidades são:`;

  skills.forEach(item => {
    let allSkills = `• ${item}`;
    phrase = `${phrase}
    
    ${allSkills}`;
  });
  return phrase;
}
console.log(tryber('Daniela'));

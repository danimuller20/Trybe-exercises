// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

let porcentagem = 52;
let seVerdade = true;

switch (seVerdade) {
  case porcentagem < 0 || porcentagem > 100:
    console.log('Opa! valor incorreto. Escolha um número de 0 a 100')
    break;
  case porcentagem >= 90:
    console.log('A');
    break;
  case porcentagem >= 80:
    console.log('B');
    break;
  case porcentagem >= 70:
    console.log('C');
    break;
  case porcentagem >= 60:
    console.log('D');
    break;
  case porcentagem >= 50:
    console.log('F');
}
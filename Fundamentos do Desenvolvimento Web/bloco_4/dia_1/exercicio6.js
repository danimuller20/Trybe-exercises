//Programa que ao selecionar a peça de xadrez ele mostra o movimento da peça escolhida. 

let pecaXadrez = 'RainHa';

switch (pecaXadrez.toLowerCase()) { // toLowerCase() -. função que transforma todas as letras dessa variável para minusculas
  case 'peão':
    console.log('Peão -> Se move somente para frente');
    break;
  case 'bispo':
    console.log('Bispo -> Se move somente na diagonal');
    break;
  case 'torre':
    console.log('Torre -> Se move em linha reta ou horizontal');
    break;
  case 'cavalo':
    console.log('Cavalo -> Se move em L');
    break;
  case 'rainha':
    console.log('Rainha -> Se move para qualquer casa em linha reta');
    break;
  case 'rei':
    console.log('Rei -> Se move uma casa para qualquer direção');
    break;
  default:
    console.log('[ERRO] - Opa! Peça inválida!')
}
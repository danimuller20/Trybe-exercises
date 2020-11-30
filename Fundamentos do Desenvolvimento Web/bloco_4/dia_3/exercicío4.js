let n = 5;
let asterisc = '*';
let output = '';

let midOfPyramid = (n + 1) / 2;
let pyramidLeft = midOfPyramid; // vale 3 ganhou 1 = 4 + 1 = 5 + 1 = 6
let pyramidRight = midOfPyramid; // vale 3 perdeu 1 = 2 - 1 = 1 - 1 = 0


for(let linha = 0; linha <= midOfPyramid; linha += 1 ) {
  for (let colunm = 1; colunm <= n; colunm += 1) {
    if(colunm < pyramidRight && colunm > pyramidLeft) {
      output += asterisc;
    } else {
      output += '-';
    }
  }
  console.log(output);
  
  pyramidRight += 1;
  pyramidLeft -= 1;
  output = '';

}
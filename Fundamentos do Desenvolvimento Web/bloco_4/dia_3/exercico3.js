let n = 5;
let asterisc = '*'
let output = '';
let positionN = n;

for (let line = 0; line < n; line += 1){
  for (let colun = 0; colun <= n; colun += 1){
    if(colun < positionN) {
      output += ' ';
    } else {
      output += asterisc;
    }
  }
  console.log(output);
  output = '';
  positionN -= 1;
};
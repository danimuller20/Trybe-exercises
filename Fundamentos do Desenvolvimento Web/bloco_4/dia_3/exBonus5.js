let n = 11;
let asterisc = '*';
let empty = '';

let middlePyramid = (n + 1) / 2; 
let leftSide = middlePyramid;
let rigthSide = middlePyramid;

for(let pyramidRow = 1; pyramidRow <= middlePyramid; pyramidRow += 1){
  for(let pyramidColunm = 1; pyramidColunm <= n; pyramidColunm += 1) {
    if(pyramidColunm === leftSide) {
      empty += 'cl';
    } else if(pyramidColunm === rigthSide) {
      empty += 'cr';
    } else if (pyramidRow === middlePyramid) {
      empty += 'm';
    } else{
      empty += '-'
    }
    
  }
  console.log(empty);
  empty = ''
  leftSide -= 1;
  rigthSide += 1;
}

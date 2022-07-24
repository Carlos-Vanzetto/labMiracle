/* Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones: 
    Write a switch statement that tests val and establishes answer value according to the following conditions
*/
function sequentialSizes(val) {
  let answer = '';
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'high';
      break;
    default:
      break;
  }
  return answer;
}
for (i = 1; i < 10; i++) {
  console.log(sequentialSizes(i));
}

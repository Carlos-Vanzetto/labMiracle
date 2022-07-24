/*  9. Convierte la lógica de la siguiente función para usar sentencias else if 
    Replace this next function's conditional statement with an else if one
*/

function testElseIf(val) {
  if (val > 10) {
    return 'Greater than 10';
  } else if (val < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 5 and 10';
  }
}
console.log(testElseIf(7));
console.log(testElseIf(4));
console.log(testElseIf(11));

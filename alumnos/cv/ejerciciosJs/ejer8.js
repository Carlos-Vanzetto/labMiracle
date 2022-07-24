/*  8. Cambie el orden logico en la función de manera que retorne de forma correcta en todos los casos
    Change logic in function so that it returns correctly in every case 
*/
function orderMyLogic(val) {
  if (val < 5) {
    return 'Less than 5';
  } else if (val < 10) {
    return 'Less than 10';
  } else {
    return 'Greater than or equal to 10';
  }
}
console.log(orderMyLogic(7));
console.log(orderMyLogic(3));
console.log(orderMyLogic(10));

// 16. Crear una función que reciba como argumentos dos números y una operación (su nombre
//     como cadena) y que devuelva el resultado de aplicar dicha operación a los dos números proporcionados
function calculadora(num1, num2, operador) {
  let result = 0;
  switch (operador) {
    case 'suma':
      result = num1 + num2;
      break;
    case 'resta':
      result = num1 - num2;
      break;
    case 'producto':
    case 'multiplicacion':
      result = num1 * num2;
      break;
    case 'division':
    case 'cociente':
      result = num1 / num2;
      break;
    default:
      result = 'operacion invalida';
      break;
  }
  return result;
}

console.log(
  calculadora(2, 2, 'suma'),
  calculadora(2, 2, 'resta'),
  calculadora(2, 2, 'producto'),
  calculadora(2, 2, 'cociente')
);

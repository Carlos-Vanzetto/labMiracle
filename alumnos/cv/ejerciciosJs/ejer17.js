// 17. Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible
// por divisor menor que limite. Ambos valores serán siempre enteros positivos.
function maximoDivisible(divisor, limite) {
  let maxdivis = 0;
  for (let i = limite; i > 0; i--) {
    if (i % divisor == 0) {
      maxdivis = i;
      break;
    }
  }
  return maxdivis;
}

console.log(maximoDivisible(4, 35));

// 14. Crear una función que reciba un arreglo de números enteros positivos desordenados y
// devuelva otro arreglo con los números ordenados.
let arrayDesordenado = [5, 4, 10, 8, 20];
function ordenarArray(arr) {
  let arrayOrdenado = arr.sort((a, b) => a - b);
  return arrayOrdenado;
}

console.log(ordenarArray(arrayDesordenado));

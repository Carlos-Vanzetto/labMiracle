// 26. Crea una función que reciba una cadena y lo devuelva con todas las palabras con su primera letra mayúscula
function primeraMayuscula(str) {
  let strArray = str.split(' ');
  let strArrayCap = strArray.map((element) => {
    return (element =
      element.charAt(0).toUpperCase() + element.slice(1));
  });
  return strArrayCap.join(' ');
}

console.assert(
  primeraMayuscula('En un lugar de la Mancha') ===
    'En Un Lugar De La Mancha'
);

//  25. Crea una función que reciba una frase como cadena y devuelva la palabra más larga:
function palabraMasLarga(str) {
  let strArray = str.split(' ');
  let palabraMasLarga = '';
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > palabraMasLarga.length) {
      palabraMasLarga = strArray[i];
    }
  }
  return palabraMasLarga;
}
console.assert(
  palabraMasLarga('Erase una vez que se era') === 'Erase'
);

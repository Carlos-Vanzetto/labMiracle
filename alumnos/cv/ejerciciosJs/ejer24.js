// 24. Crea una función que reciba una cadena y un número n y devuelva la cadena repetida n veces:
function repite(str, n) {
  let repiteString = '';
  for (let i = 0; i < n; i++) {
    repiteString += str + ' ';
  }
  return repiteString;
}

console.assert(repite('Batman', 3) === 'Batman Batman Batman ');

//32
// import { sumarNArgumentos } from './ejer31.js';

function sumarNArgumentos(...args) {
  return [...args].reduce((a, b) => a + b, 0);
}
function sumarSoloNum(...args) {
  let numberArgs = [...args].filter(
    (argument) => typeof argument === 'number'
  );
  return sumarNArgumentos(...numberArgs);
}

console.log(sumarSoloNum(1, 'beatriz', 2, 'h1n1', 3));

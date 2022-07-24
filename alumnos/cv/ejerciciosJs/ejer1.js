//Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones
// Write a switch statement that tests val and establishes answer value according to the following conditions
function caseInSwitch(val) {
  let answer = '';
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
      break;
  }
  return answer;
}
console.assert(
  caseInSwitch('a') === 'apple',
  'switch statement fails in a'
);
console.assert(
  caseInSwitch('b') === 'bird',
  'switch statement fails in b'
);
console.assert(
  caseInSwitch('c') === 'cat',
  'switch statement fails in c'
);
console.assert(
  caseInSwitch('lalala') === 'stuff',
  'switch statement fails in defalut'
);

(function ejer3a() {
    function add(x, y) {
        return x + y;
    }
    function sumArray(numbers) {
        return numbers.reduce(add, 0);
    }
    var someSum = sumArray([3, 6, 9]);
    console.log('[Ejercicio 3.1]', "3 + 6 + 9 === ".concat(someSum));
})();
// Agregue tipos explícitos a los parámetros y el tipo de retorno
// Solucione cualquier error resultante de tipos inválidos

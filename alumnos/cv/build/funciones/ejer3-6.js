(function ejer3f() {
    var multiply;
    var capitalize;
    capitalize = function (value) {
        return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
    };
    multiply = function (x, y) {
        return x * y;
    };
    console.log('[Ejercicio 3.6]', capitalize("habil ".concat(multiply(5, 10))));
})();

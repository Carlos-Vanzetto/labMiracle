(function ejer2c() {
    function padLeft(value, padding) {
        if (typeof padding === "number") {
            return "".concat(Array(padding + 1).join(' ')).concat(value);
        }
        else {
            return padding + value;
        }
    }
    console.log('[Ejercicio 2.3]', "\n         ".concat(padLeft('', 0), "\n         ").concat(padLeft('hola', ''), "\n         ").concat(padLeft('que tal?', ''), "\n         ").concat(padLeft('chau', ''), "\n         ").concat(padLeft('', ''), "\n         "));
})();

(function ejer3d() {
    function greet(greeting) {
        if (greeting === void 0) { greeting = "Hola"; }
        return greeting.toUpperCase();
    }
    var defaultGreeting = greet();
    var portugueseGreeting = greet('Oi como vai!');
    console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
})();

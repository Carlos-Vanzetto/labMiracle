// 4.2
// Añadir tipos de parámetros explícitos al constructor
// Agregue parámetros con tipos para almacenar valores
(function ejer4b() {
    var Person = /** @class */ (function () {
        function Person(name, age, weight) {
            this.name = name;
            this.age = age;
            this.weight = weight;
        }
        return Person;
    }());
    var jane = new Person("Juan", 31, 80);
    console.log("[Ejercicio 5.2]", "El nombre de la nueva persona es ".concat(jane.name, " y su peso es: ").concat(jane.weight, " kg."));
})();

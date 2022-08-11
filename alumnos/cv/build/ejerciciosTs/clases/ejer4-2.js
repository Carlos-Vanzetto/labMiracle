"use strict";
// 4.2
// Añadir tipos de parámetros explícitos al constructor
// Agregue parámetros con tipos para almacenar valores
(function ejer4b() {
	class Person {
		constructor(name, age, weight) {
			this.name = name;
			this.age = age;
			this.weight = weight;
		}
	}
	const jane = new Person("Juan", 31, 80);
	console.log("[Ejercicio 5.2]", `El nombre de la nueva persona es ${jane.name} y su peso es: ${jane.weight} kg.`);
})();

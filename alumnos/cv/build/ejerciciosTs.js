"use strict";
(function ejer1a() {
	let pi = 3.14159;
	let tau = pi * 2;
	console.log("[Ejercicio 1.1]", `${tau} es ${pi} veces el dos.`);
})();
(function ejer1b() {
	var torta;
	torta = "arandanos";
	console.log("[Ejercicio 1.2]", `Me gusta comer torta con sabor a ${torta}.`);
})();
(function ejer1c() {
	let esPablo;
	esPablo = true;
	console.log("[Ejercicio 1.3]", esPablo ? "Oh, hola Pablo" : "Quien sos vos?");
})();
(function ejer1d() {
	const entero = 6;
	const decimal = 6.66;
	const hexadecimal = 0xf00d;
	const binario = 0b1010011010;
	const octal = 0o744;
	const ceroNegativo = -0;
	const enRealiadadNumero = NaN;
	const mayorNumero = Number.MAX_VALUE;
	const elNumeroMasGrande = Infinity;
	const miembros = [entero, decimal, hexadecimal, binario, octal, ceroNegativo, enRealiadadNumero, mayorNumero, elNumeroMasGrande];
	miembros[0] = 12345;
	console.log("[Ejercicio 1.4]", miembros);
});
// Array.from(Array(10).keys());
(function ejer1e() {
	const secuencia = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const animales = ["pinguino", "oso hormiguero", "zorro", "jirafa"];
	const cadenasYNumeros = [1, "uno", 2, "dos", 3, "tres"];
	const todosMisArreglos = [secuencia, animales, cadenasYNumeros];
	console.log("Ejercicio 1.5", todosMisArreglos);
})();
(function ejer1f() {
	const elementoInventario = ["tuerca", 11];
	// despues lo desestructuramos
	const [nombre, cantidad] = elementoInventario;
	const mensaje = agregarInventario(nombre, cantidad);
	console.log("[Ejercicio 1.6]", mensaje);
	function agregarInventario(nombre, cantidad) {
		return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
	}
})();
(function ejer2a() {
	function doStuff(value) {
		if (typeof value === "string") {
			console.log(value.toUpperCase().split("").join(" "));
		} else if (typeof value === "number") {
			console.log(value.toPrecision(5));
		}
		value; // coloque el cursor sobre `valor` aqui
	}
	console.log("[Ejercicio 2.1]");
	doStuff(2);
	doStuff(22);
	doStuff(222);
	doStuff("hello");
	// doStuff(true);
	// doStuff({});
})();
// 2.2 y 2.5
(function ejer2b() {
	class Bird {
		constructor(species) {
			this.species = species;
		}
		layEggs() {
			console.log("Poniendo huevos de aves.");
		}
		fly(height) {
			console.log(`Volando a la altura de ${height} metros.`);
		}
	}
	class Fish {
		constructor(species) {
			this.species = species;
		}
		layEggs() {
			console.log("Poniendo huevos de pescado.");
		}
		swim(depth) {
			console.log(`Nadando a una profundidad de ${depth} metros.`);
		}
	}
	function getRandomAnimal() {
		const animals = [new Bird("puffin"), new Bird("kittiwake"), new Fish("sea robin"), new Fish("leafy seadragon")];
		return animals[Math.floor(Math.random() * animals.length)];
	}
	function interrogateAnimal(animal = getRandomAnimal()) {
		animal instanceof Fish ? animal.swim(10) : animal.fly(10); // se llama solo si es un pez
		// se llama solo si es un pajaro
		return animal.species;
	}
	console.log("[Ejercicio 2.2]", `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
})();
(function ejer2c() {
	function padLeft(value, padding) {
		if (typeof padding === "number") {
			return `${Array(padding + 1).join(" ")}${value}`;
		} else {
			return padding + value;
		}
	}
	console.log(
		"[Ejercicio 2.3]",
		`
         ${padLeft("", 0)}
         ${padLeft("hola", "")}
         ${padLeft("que tal?", "")}
         ${padLeft("chau", "")}
         ${padLeft("", "")}
         `
	);
})();
(function ejer2d() {
	const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
	const arrStrings = ["abc", "dfj", ["hij", "klm"], "nop"];
	function flatten(array) {
		let flattened = [];
		for (const element of array) {
			if (Array.isArray(element)) {
				flattened.push(...element);
			} else {
				flattened.push(element);
			}
		}
		return flattened;
	}
	const flattenedNumbers = flatten(numbers);
	const flattenedStrings = flatten(arrStrings);
	console.log("[Ejercicio 4.3]", flattenedNumbers, flattenedStrings);
	// Añadir anotaciones de tipo (‘any‘ excluido)
	// Inspeccione el tipo de ‘element‘ en diferentes ramas de código
	// Bonificación: convertir ‘flatten‘ en una función genérica
})();

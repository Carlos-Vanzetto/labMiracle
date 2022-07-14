(function ejer1a() {
	let pi: number = 3.14159;
	let tau = pi * 2;

	console.log("[Ejercicio 1.1]", `${tau} es ${pi} veces el dos.`);
})();

(function ejer1b() {
	var torta: string;
	torta = "arandanos";

	console.log("[Ejercicio 1.2]", `Me gusta comer torta con sabor a ${torta}.`);
})();

(function ejer1c() {
	let esPablo: boolean;
	esPablo = true;

	console.log("[Ejercicio 1.3]", esPablo ? "Oh, hola Pablo" : "Quien sos vos?");
})();
(function ejer1d() {
	const entero: number = 6;
	const decimal: number = 6.66;
	const hexadecimal: number = 0xf00d;
	const binario: number = 0b1010011010;
	const octal: number = 0o744;
	const ceroNegativo: number = -0;
	const enRealiadadNumero: number = NaN;
	const mayorNumero: number = Number.MAX_VALUE;
	const elNumeroMasGrande: number = Infinity;

	const miembros: number[] = [entero, decimal, hexadecimal, binario, octal, ceroNegativo, enRealiadadNumero, mayorNumero, elNumeroMasGrande];

	miembros[0] = 12345;

	console.log("[Ejercicio 1.4]", miembros);
});
// Array.from(Array(10).keys());
(function ejer1e() {
	const secuencia: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const animales: string[] = ["pinguino", "oso hormiguero", "zorro", "jirafa"];
	const cadenasYNumeros: (number | string)[] = [1, "uno", 2, "dos", 3, "tres"];
	const todosMisArreglos: (number | string)[][] = [secuencia, animales, cadenasYNumeros];

	console.log("Ejercicio 1.5", todosMisArreglos);
})();

(function ejer1f() {
	const elementoInventario: [string, number] = ["tuerca", 11];

	// despues lo desestructuramos
	const [nombre, cantidad] = elementoInventario;

	const mensaje = agregarInventario(nombre, cantidad);

	console.log("[Ejercicio 1.6]", mensaje);

	function agregarInventario(nombre: string, cantidad: number): string {
		return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
	}
})();
(function ejer2a() {
	function doStuff(value: string | number): void {
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
	// agregar alias de tipo(s) aqui
	interface BirdLike {
		layEggs(): void;
		fly(height: number): void;
	}
	interface FishLike {
		layEggs(): void;
		swim(depth: number): void;
	}
	class Bird implements BirdLike {
		constructor(public species: string) {}

		layEggs(): void {
			console.log("Poniendo huevos de aves.");
		}

		fly(height: number): void {
			console.log(`Volando a la altura de ${height} metros.`);
		}
	}

	class Fish implements FishLike {
		constructor(public species: string) {}

		layEggs(): void {
			console.log("Poniendo huevos de pescado.");
		}

		swim(depth: number): void {
			console.log(`Nadando a una profundidad de ${depth} metros.`);
		}
	}
	function getRandomAnimal() {
		const animals = [new Bird("puffin"), new Bird("kittiwake"), new Fish("sea robin"), new Fish("leafy seadragon")];

		return animals[Math.floor(Math.random() * animals.length)];
	}

	function interrogateAnimal(animal: Bird | Fish = getRandomAnimal()): string {
		animal instanceof Fish ? animal.swim(10) : animal.fly(10); // se llama solo si es un pez
		// se llama solo si es un pajaro

		return animal.species;
	}

	console.log("[Ejercicio 2.2]", `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
})();
(function ejer2c() {
	function padLeft(value: string, padding: number | string): string {
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
	const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
	const arrStrings: (string | string[])[] = ["abc", "dfj", ["hij", "klm"], "nop"];

	function flatten<T>(array: (T | T[])[]): T[] {
		let flattened: T[] = [];

		for (const element of array) {
			if (Array.isArray(element)) {
				flattened.push(...element);
			} else {
				flattened.push(element);
			}
		}
		return flattened;
	}

	const flattenedNumbers = flatten<number>(numbers);
	const flattenedStrings = flatten<string>(arrStrings);

	console.log("[Ejercicio 4.3]", flattenedNumbers, flattenedStrings);

	// Añadir anotaciones de tipo (‘any‘ excluido)
	// Inspeccione el tipo de ‘element‘ en diferentes ramas de código
	// Bonificación: convertir ‘flatten‘ en una función genérica
})();

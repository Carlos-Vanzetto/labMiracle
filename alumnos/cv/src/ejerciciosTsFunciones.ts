(function ejer3a() {
	function add(x: number, y: number): number {
		return x + y;
	}

	function sumArray(numbers: number[]): number {
		return numbers.reduce(add, 0);
	}

	const someSum = sumArray([3, 6, 9]);

	console.log("[Ejercicio 3.1]", `3 + 6 + 9 === ${someSum}`);
})();
// Agregue tipos explícitos a los parámetros y el tipo de retorno
// Solucione cualquier error resultante de tipos inválidos

(function ejer3b() {
	const bankAccount = {
		money: 0,
		deposit(value: number, message?: string): void {
			this.money += value;
			if (message) {
				console.log(message);
			}
		},
	};

	bankAccount.deposit(20);
	bankAccount.deposit(10, "Deposit received");

	console.log("[Exercise 3.2]", `Account value: $${bankAccount.money}`);
})();

(function ejer3c() {
	function computeScore(word: string): number {
		const letters: string[] = word.toUpperCase().split("");
		return letters.reduce((accum: number, curr: string) => (accum += getPointsFor(curr)), 0);
	}

	function getPointsFor(letter: string): number {
		const lettersAndPoints: [string, number][] = [
			["AEOIULNRST", 1],
			["DG", 2],
			["BCMP", 3],
			["FHVWY", 4],
			["K", 5],
			["JX", 8],
			["QZ", 10],
		];

		return lettersAndPoints.reduce((computedScore: number, pointsTuple: [string, number]) => {
			const [letters, score] = pointsTuple;
			if (letters.split("").find(item => item === letter)) {
				return (computedScore += score);
			}
			return computedScore;
		}, 0);
	}

	console.log("[Ejercicio 3.3]", `zoologico vale ${computeScore("zoo")} puntos.`);
	// Añadir anotaciones de tipo siempre que sea posible
})();

(function ejer3d() {
	function greet(greeting = "Hola"): string {
		return greeting.toUpperCase();
	}
	const defaultGreeting = greet();
	const portugueseGreeting = greet("Oi como vai!");

	console.log("[Ejercicio 3.4]", defaultGreeting, portugueseGreeting);
})();

(function ejer3e() {
	function layEggs(quantity: number, color: string): void {
		console.log(`[Ejercicio 3.5] Acabas de poner ${quantity} huevos de color ${color}. Buen trabajo!`);
	}

	layEggs(2, "rojo");
})();

(function ejer3f() {
	let multiply: (val1: number, val2: number) => number;
	let capitalize: (val: string) => string;

	capitalize = function (value: string): string {
		return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
	};

	multiply = function (x: number, y: number): number {
		return x * y;
	};

	console.log("[Ejercicio 3.6]", capitalize(`habil ${multiply(5, 10)}`));
})();

(function ejer3g() {
	const numberCollection: number[] = [];
	const stringCollection: string[] = [];
	const booleanCollection: boolean[] = [];
	const arrayCollection: [][] = [];

	function pushToCollection<t>(item: t, collection: t[] = []) {
		collection.push(item);
		return collection;
	}

	// Anadir algunas cosas a las colecciones
	pushToCollection<boolean>(false, booleanCollection);
	pushToCollection<string>("hi", stringCollection);
	pushToCollection<[]>([], arrayCollection);

	pushToCollection<number>(1, numberCollection);
	pushToCollection<number>(2, numberCollection);
	pushToCollection<number>(3, numberCollection);

	const incrementedByTwo = numberCollection.map(num => num + 2);

	console.log("[Ejercicio 3.7]", `[${incrementedByTwo}] debe ser igual a [3,4,5]`);
})();

//   **** 2.2 y 2.5  ***

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

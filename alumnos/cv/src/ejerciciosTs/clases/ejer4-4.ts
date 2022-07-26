// 4.4
(function ejer4d() {
	abstract class Animal {
		constructor(private name: string) {
			this.name = name;
		}
		move(meters: number) {
			console.log(`${this.name} se movio ${meters}m.`);
		}
		public getName(): string {
			return this.name;
		}
	}

	class Snake extends Animal {
		constructor(name: string) {
			super(name);
		}
		move(meters: number = 5) {
			super.move(meters);
			// debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
			// de 5 metros
		}
		getName(): string {
			return super.getName();
		}
	}

	class Pony extends Animal {
		move(meters: number = 60) {
			super.move(meters);

			// debe invocar al metodo `move` del padre con un galope predeterminado
			// de 60 metros
		}
		getName(): string {
			return super.getName();
		}
	}

	// La clase Animal no debe ser instanciable.
	// Eliminar o comentar una vez que se logra el error deseado.
	//const andrew = new Animal("Andrew el Animal");
	// andrew.move(5);

	const sammy = new Snake("Sammy la serpiente");
	sammy.move();
	console.log(sammy.getName); // (ya no) debe devolver error

	const pokey = new Pony("Pokey el pony");
	pokey.move(34);
	console.log(pokey.getName); // (ya no) debe devolver error
})();

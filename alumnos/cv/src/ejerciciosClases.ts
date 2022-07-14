// 4.1
(function ejer4a() {
	class MC {
		greet(event: string = "party"): string {
			return `Bienvenido al ${event}`;
		}
	}
	const mc = new MC();
	console.log("ejercicios 4-1", mc.greet("espectaculo"));
})();
// 4.2
// Añadir tipos de parámetros explícitos al constructor
// Agregue parámetros con tipos para almacenar valores
(function ejer4b() {
	class Person {
		name;
		age;
		weight;
		constructor(name: string, age: number, weight: number) {
			this.name = name;
			this.age = age;
			this.weight = weight;
		}
	}

	const jane = new Person("Juan", 31, 80);

	console.log("[Ejercicio 5.2]", `El nombre de la nueva persona es ${jane.name} y su peso es: ${jane.weight} kg.`);
})();

//4.3
//Hacer que las propiedades de title y salary estén explícitamente disponibles públicamente
//Reduzca la clase a tres líneas de código manteniendo la funcionalidad
(function ejer4c() {
	class Employee {
		constructor(public title: string, public salary: number) {
			this.title = title;
			this.salary = salary;
		}
	}

	const employee = new Employee("Ingeniero", 100000);

	console.log(
		"[Ejercicio 5.3]",
		`El titulo del nuevo empleado es  ${employee.title} 
  y gana $ ${employee.salary}`
	);
})();

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
//4.5
// Hacer que solo las clases Desk y Chair puedan ver el miembro del fabricante
(function ejer4e() {
	class Furniture {
		constructor(protected manufacturer: string = "IKEA") {}
	}

	class Desk extends Furniture {
		kind() {
			console.log("[Ejercicio 5.5]", `Este es un escritorio hecho por ${this.manufacturer}`);
		}
	}

	class Chair extends Furniture {
		kind() {
			console.log("[Ejercicio 5.5]", `Esta es una silla hecha por ${this.manufacturer}`);
		}
	}

	const desk = new Desk();
	desk.kind();
	//	desk.manufacturer;  debe devolver error

	const chair = new Chair();
	chair.kind();
	//	chair.manufacturer;  debe devolver error
})();
//4.6
//Elimine el error sin cambiar las referencias a ‘Student.school‘
(function ejer4f() {
	class Student {
		public static school: string = "Harry Herpson High School";
		constructor(private name: string) {}
		introduction() {
			console.log("[Ejercicio 5.6]", `Hola, mi nombre es ${this.name} y asisto a ${Student.school}`);
		}
	}

	const student = new Student("Morty");
	console.log(Student.school);
	student.introduction();
})();

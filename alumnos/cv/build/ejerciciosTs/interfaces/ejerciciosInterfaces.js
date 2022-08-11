"use strict";
//Ejercicio 5.1
function agregarAlCarro(item) {
	console.log("[Ejercicio 2.1]", `Agregando "${item.titulo}" al carro de compras.`);
}
agregarAlCarro({ id: 1, titulo: "Zapatos de cuero" });
class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
}
const juan = new Persona("Juan", 31);
console.log("[Ejercicio 2.2]", `${juan.nombre} tiene ${juan.edad} anios.`);
// Cree e implemente una interfaz en ‘Persona‘ para asegurarse de que siempre tenga acceso
//a las propiedades miembros ‘nombre‘ y ‘edad‘  ?? si las propiedades son publicas por qué haria falta?

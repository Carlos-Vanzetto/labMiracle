//Ejercicio 5.1

interface CarItem {
    id:number;
    titulo: string;
    idVariante?:number;
}
 function agregarAlCarro(item: CarItem) {
 console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
 }

 agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero'});
// Crea una interfaz ‘CartItem‘ y reemplaza el tipo de parametros con ella
// Hacer idVariante opcional

// Ejercicio 5.2
interface Persona {
    nombre:string;
    edad: number;
}
 class Persona implements Persona {
 constructor(public nombre: string, public edad: number) { }
 }

 const juan = new Persona('Juan',31);

 console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);
// Cree e implemente una interfaz en ‘Persona‘ para asegurarse de que siempre tenga acceso
//a las propiedades miembros ‘nombre‘ y ‘edad‘  ?? si las propiedades son publicas por qué haria falta?


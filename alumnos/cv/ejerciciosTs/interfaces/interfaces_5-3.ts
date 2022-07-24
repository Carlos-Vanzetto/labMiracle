// [no editar] (pretender que esto proviene de una version externa de la
 // biblioteca `foo.d.ts`)
 interface Ciudad {
 nombre: string;
 }
 // [/no editar]
interface Coords extends Ciudad{
    latitud:number;
    longitud:number;
}
 const montreal:Coords = {
 
 latitud: 42.332,
 longitud: -73.324,
 nombre: 'Montreal',
 };

 const tampa: Coords = {
 
 latitud: 27.9478,
 longitud: -82.4584,
 nombre: 'Tampa',
 };

 function informacionCiudad(ciudad: Coords) {
 const coords =
 `(${ciudad.latitud.toFixed(3)}, ${ciudad.longitud.toFixed(3)})`;
 return `${ciudad.nombre.toUpperCase()} se encuentra en ${coords}.`;
 }

 console.log('[Ejercicio 2.3]',
 `${informacionCiudad(montreal)} \n\n ${informacionCiudad(tampa)}`);
/*  Cree una interfaz ‘Coords‘ que tenga las propiedades numéricas ‘latitud‘ y ‘longitud‘
 Extienda la interfaz existente ‘Ciudad‘ (sin modificarla en línea) agregando una propiedad
‘coords‘ de tipo ‘Coords‘
 Corregir lo que está mal con ‘tampa‘ */
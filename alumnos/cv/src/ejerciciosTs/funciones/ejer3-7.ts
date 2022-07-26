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

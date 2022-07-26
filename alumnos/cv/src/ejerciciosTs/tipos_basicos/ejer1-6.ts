(function ejer1f() {
	const elementoInventario: [string, number] = ["tuerca", 11];

	const [nombre, cantidad] = elementoInventario;

	const mensaje = agregarInventario(nombre, cantidad);

	console.log("[Ejercicio 1.6]", mensaje);

	function agregarInventario(nombre: string, cantidad: number): string {
		return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
	}
})();

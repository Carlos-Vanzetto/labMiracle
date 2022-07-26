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

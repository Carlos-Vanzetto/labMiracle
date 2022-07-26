// 10. Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos del arreglo arr
let arreglo = [1, 2, 3, 4, 5, 6];
function sum(arr, n) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(sum(arreglo, 3));

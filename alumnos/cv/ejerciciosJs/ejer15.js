// 15. Crear una función que reciba un número entero positivo y devuelva true si dicho número
// es par o false en caso contrario.
function esPar(numero) {
	if (numero % 2 == 0) {
		return true;
	} else {
		return false;
	}
}
console.log(esPar(4), esPar(5));

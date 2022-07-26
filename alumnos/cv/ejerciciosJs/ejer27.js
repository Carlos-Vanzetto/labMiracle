// 27 Crea una función que reciba una cadena y la devuelva en camelCase
function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
		if (+match === 0) return "";
		return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");

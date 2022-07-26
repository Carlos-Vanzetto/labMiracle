// 28 Crea una función que reciba un número y devuelva una cadena con formato ordinal inglés.

function formaToIngles(num) {
	let strNum = num.toString();
	let ultimoDigit = strNum.slice(-1);
	switch (ultimoDigit) {
		case "1":
			strNum += "st";
			break;
		case "2":
			strNum += "nd";
			break;
		case "3":
			strNum += "rd";
			break;

		default:
			strNum += "th";
			break;
	}
	return strNum;
}

console.log(formaToIngles(2024));

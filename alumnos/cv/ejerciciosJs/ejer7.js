/* Escribe una estructura if/else if para cumplir con las siguientes condiciones
• num < 5 - return "Tiny"
• num < 10 - return "Small"
• num < 15 - return "Medium"
• num < 20 - return "Large"
• num >= 20 - return "Huge"
 */

function testSize(num) {
	if (num >= 20) return "Huge";
	else if (num < 5) return "Tiny";
	else if (num < 10) return "Small";
	else if (num < 15) return "Medium";
	else if (num < 20) return "Large";
}
console.log(testSize(11), testSize(21), testSize(4));

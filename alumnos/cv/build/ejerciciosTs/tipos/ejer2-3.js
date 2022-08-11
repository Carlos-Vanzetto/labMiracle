"use strict";
(function ejer2c() {
	function padLeft(value, padding) {
		if (typeof padding === "number") {
			return `${Array(padding + 1).join(" ")}${value}`;
		} else {
			return padding + value;
		}
	}
	console.log(
		"[Ejercicio 2.3]",
		`
         ${padLeft("", 0)}
         ${padLeft("hola", "")}
         ${padLeft("que tal?", "")}
         ${padLeft("chau", "")}
         ${padLeft("", "")}
         `
	);
})();

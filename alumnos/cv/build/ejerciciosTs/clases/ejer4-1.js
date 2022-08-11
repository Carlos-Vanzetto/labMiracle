"use strict";
(function ejer4a() {
	class MC {
		greet(event = "party") {
			return `Bienvenido al ${event}`;
		}
	}
	const mc = new MC();
	console.log("ejercicios 4-1", mc.greet("espectaculo"));
})();

(function ejer4a() {
	class MC {
		greet(event: string = "party"): string {
			return `Bienvenido al ${event}`;
		}
	}
	const mc = new MC();
	console.log("ejercicios 4-1", mc.greet("espectaculo"));
})();

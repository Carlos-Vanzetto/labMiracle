(function ejer2a() {
	function doStuff(value: string | number): void {
		if (typeof value === "string") {
			console.log(value.toUpperCase().split("").join(" "));
		} else if (typeof value === "number") {
			console.log(value.toPrecision(5));
		}

		value; // coloque el cursor sobre `valor` aqui
	}
	console.log("[Ejercicio 2.1]");
	doStuff(2);
	doStuff(22);
	doStuff(222);
	doStuff("hello");
	// doStuff(true);
	// doStuff({});
})();

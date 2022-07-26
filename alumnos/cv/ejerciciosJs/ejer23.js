// 23. simular 100 tiradas de 2 dados y contar las veces que entre ambos sumaron 10

function azarDados() {
	let d1 = 0;
	let d2 = 0;
	let contador = 0;
	for (let i = 0; i < 100; i++) {
		d1 = Math.round(Math.random() * 6);
		d2 = Math.round(Math.random() * 6);
		if (d1 + d2 === 10) {
			contador++;
		}
	}
	return contador;
}

console.log(azarDados());

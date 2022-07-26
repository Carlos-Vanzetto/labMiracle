// 22. lanzarMoneda

function lanzarMoneda() {
	return Math.random() < 0.5 ? "Cara" : "cruz";
}
console.log(lanzarMoneda());

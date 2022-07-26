// 31

export default function sumarNArgumentos(...args) {
	return [...args].reduce((a, b) => a + b, 0);
}

console.log(sumarNArgumentos(1, 2, 3, 4, 5), sumarNArgumentos(1, 2, 3));

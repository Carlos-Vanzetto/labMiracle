(function practicaAdicional() {
	let arrNum = [3, 4, 2, 1, 15, -4, -8, 13];

	function nearestValue(arr, num) {
		arr.push(num);
		let completeArrOrd = arr.sort((a, b) => a - b);
		let numIndex = completeArrOrd.indexOf(num);
		let prevNum = completeArrOrd[numIndex - 1];
		let nextNum = completeArrOrd[numIndex + 1];

		if (numIndex == 0) {
			return completeArrOrd[1];
		} else if (numIndex == completeArrOrd.length - 1) {
			return completeArrOrd[completeArrOrd.length - 2];
		} else if (Math.abs(prevNum - num) < Math.abs(nextNum - num) || Math.abs(prevNum - num) == Math.abs(nextNum - num)) {
			return prevNum;
		} else {
			return nextNum;
		}
	}
	console.log(nearestValue(arrNum, 16));
	console.log(nearestValue(arrNum, -9));
	console.log(nearestValue(arrNum, 14));
	console.log(nearestValue(arrNum, -6));
})();

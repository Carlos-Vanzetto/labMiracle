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

// Exercise II

function difSim(arr1, arr2) {
	let a1 = arr1.filter(el => !arr2.includes(el));
	let a2 = arr2.filter(el => !arr1.includes(el));
	let arrFiltered = [...new Set([...a1, ...a2])];
	return arrFiltered;
}
function sym(...args) {
	let result = [...args].reduce((currentValue,nextValue)=>difSim(currentValue,nextValue));
	return result.sort((a,b)=>a-b);
	
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); //debe devolver [3, 4, 5]

let result = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
console.log(result); //debe devolver [1, 4, 5]
result = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //debe contener solo cinco elementos
console.log(result);
result = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8],
	[1])// debe devolver [1, 2, 4, 5, 6, 7, 8, 9]
console.log(result);	


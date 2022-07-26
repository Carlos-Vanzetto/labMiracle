(function exer1() {
	function rmDuplicates(arr1, arr2) {
		return [...new Set([...arr1, ...arr2])];
	}
	console.log(rmDuplicates([1, 2, 3, 4], [3, 4, 5, 6]));
})();

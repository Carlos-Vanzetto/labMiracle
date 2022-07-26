//35.
function onlyUniques(...args) {
	return [...new Set([...args])];
}

console.log(onlyUniques(1, 1, 3, 4, 4, 5, "ana", "ana", "pedro"));

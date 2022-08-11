import characters from "./characters.js";

// 1
let firstSort = characters.sort((a, b) => {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
});

console.log("exercise one ", firstSort);

// 2
let secondSort = characters.sort((a, b) => {
	if (parseInt(a.mass) < parseInt(b.mass)) {
		return -1;
	}
	if (parseInt(a.mass) > parseInt(b.mass)) {
		return 1;
	}
	return 0;
});

console.log("exercise two", secondSort);

// 3
let thirdSort = characters.sort((a, b) => {
	if (parseInt(a.height) < parseInt(b.height)) {
		return -1;
	}
	if (parseInt(a.height) > parseInt(b.height)) {
		return 1;
	}
	return 0;
});

console.log("exercise three", thirdSort);

// 4
let fourthSort = characters.sort((a, b) => {
	if (a.gender < b.gender) {
		return -1;
	}
	if (a.gender > b.gender) {
		return 1;
	}
	return 0;
});
console.log("exercise four", fourthSort);

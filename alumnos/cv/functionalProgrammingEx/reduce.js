import characters from "./characters.js";

// 1
let initialMass = 0;
let totalMass = characters.reduce((totalMass, { mass }) => {
	totalMass = totalMass + parseInt(mass);
	return totalMass;
}, initialMass);
console.log(totalMass);

// 2
let initialHeight = 0;
let totalHeight = characters.reduce((totalHeight, { height }) => {
	totalHeight = totalHeight + parseInt(height);
	return totalHeight;
}, initialHeight);
console.log(totalHeight);

// 3
let initNumberOfLetters = 0;
let totalNumberOfLetters = characters.reduce((totalNumberOfLetters, { name }) => {
	let trimmedName = name.replace(/\s/g, "");
	totalNumberOfLetters = totalNumberOfLetters + trimmedName.length;
	return totalNumberOfLetters;
}, initNumberOfLetters);
console.log(totalNumberOfLetters);

// 4 Total number of letters per each name ordered by eye colour

let mapLengthEyeColour = characters.map(x => {
	let nameLength = x.name.replace(/\s/g, "").length;
	let eyeColor = x.eye_color;
	return {
		nameLength,
		eyeColor,
	};
});

console.log(mapLengthEyeColour);

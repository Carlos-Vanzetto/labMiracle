import characters from "../characters.js";

Array.prototype.myFind = function (callback, thisArg) {
	let match;
	if (thisArg) {
		callback.bind(thisArg);
	}
	for (let index = 0; index < this.length; index++) {
		if (callback(this[index])) {
			match = this[index];
			return match;
		}
	}
	return match;
};

console.log(characters.myFind(element => element.name === "Darth Vader"));
console.log(characters.myFind(element => element.name === "Jorge Vader"));

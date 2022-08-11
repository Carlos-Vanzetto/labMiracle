import characters from "../characters.js";

Array.prototype.myFilter = function (callback, thisArg) {
	let filteredArr = [];
	if (thisArg) {
		callback.bind(thisArg);
	}
	for (let index = 0; index < this.length; index++) {
		if (callback(this[index])) {
			filteredArr.push(this[index]);
		}
	}
	return filteredArr;
};

console.log(
	"Filtering males... ",
	characters.myFilter(element => element.gender === "male")
);
console.log(
	"Filtering females... ",
	characters.myFilter(element => element.gender === "female")
);

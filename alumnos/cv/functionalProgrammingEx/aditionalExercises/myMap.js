import characters from "../characters.js";

Array.prototype.MyMap = function (callback) {
	let mapResult = [];
	for (let index = 0; index < this.length; index++) {
		mapResult.push(callback(this[index], index, this));
	}
	return mapResult;
};
let myMapTest = characters.MyMap(element => {
	let { name, mass } = element;
	let halfMass = parseFloat(mass) / 2;
	return {
		name,
		halfMass,
	};
});
console.log(myMapTest);

import characters from "./characters.js";
// 1
let namesArr = characters.map(x => x.name);
console.log(namesArr);
// 2
let heightArr = characters.map(x => x.height + " cm");
console.log(heightArr);
// 3
let nameAndHeight = characters.map(({ name, height }) => {
	return { name, height };
});
console.log(nameAndHeight);

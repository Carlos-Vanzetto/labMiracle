import characters from "./characters.js";

//1
let firstEx = characters.every(element => {
	return element.eye_color === "blue";
});
console.log("Exercise one", firstEx);

// 2 mass > 40

let secondEx = characters.every(element => element.mass > 40);
console.log("Exercise two ", secondEx);

// 3 height < 200
let thirdEx = characters.every(element => element.height < 200);
console.log("Exercise three ", thirdEx);

// 4 gender === male
let fourthEx = characters.every(element => element.gender === "male");
console.log("Exercise four", fourthEx);

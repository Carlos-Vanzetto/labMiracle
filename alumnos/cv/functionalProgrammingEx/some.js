import characters from "./characters.js";

//1 at least 1 male
let firstExSome = characters.some(element => element.gender === "male");
console.log("Exercise one ", firstExSome);

// 2 at least 1 blue-eyed char
let secondExSome = characters.some(element => element.eye_color === "blue");
console.log("Exercise two ", secondExSome);

// 3 at least 1 char taller than 200
let thirdExSome = characters.some(element => parseInt(element.height) > 200);
console.log("Exercise three ", thirdExSome);

// 4 at least 1 mass below 50
let fourthExSome = characters.some(element => parseInt(element.mass) < 50);
console.log("Exercise four ", fourthExSome);

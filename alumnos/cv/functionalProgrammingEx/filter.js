import characters from "./characters.js";

// 1
let firstFilter = characters.filter(x => x.mass > 100);
console.log(firstFilter);

// 2
let secondFilter = characters.filter(x => x.height < 200);
console.log("second exercise", secondFilter);

// 3
let thirdFilter = characters.filter(x => x.gender === "male");
console.log("third exercise", thirdFilter);

// 4
let fourthFilter = characters.filter(x => x.gender !== "male");
console.log("fourth exercise ", fourthFilter);

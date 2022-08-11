const users = [
	{
		firstName: "Bradley",
		lastName: "Bouley",
		role: "Full Stack Resident",
	},
	{
		firstName: "Chloe",
		lastName: "Alnaji",
		role: "Full Stack Resident",
	},
	{
		firstName: "Jonathan",
		lastName: "Baughn",
		role: "Enterprise Instructor",
	},
	{
		firstName: "Michael",
		lastName: "Herman",
		role: "Lead Instructor",
	},
	{
		firstName: "Robert",
		lastName: "Hajek",
		role: "Full Stack Resident",
	},
	{ firstName: "Wes", lastName: "Reid", role: "Instructor" },
	{ firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1 Transform element into strings
let elemTostring = users.map(element => {
	return `${element.firstName} - ${element.lastName}: ${element.role} `;
});
console.log(elemTostring);

// 2 filter fullstack resident users

let filterFullstack = users.filter(element => {
	return element.role === "Full Stack Resident";
});
console.log(filterFullstack);

// reduce array into object with every role as a key and an array of users of each role as value

let objFromArray = users.reduce((previousValue, currentValue) => {
	let { firstName, lastName, role } = currentValue;
	return {
		...previousValue,
		[role]: [...(previousValue[role] || []), currentValue],
	};
}, {});
console.log("Exercise 3 ", objFromArray);

// find function

const searchByUserName = (location, searchTerm) => {
	let result = location.find(function (element) {
		return element.firstName === searchTerm || element.lastName === searchTerm;
	}, searchTerm);
	return result;
};
console.log("Function find by username", searchByUserName(users, "Robert"));

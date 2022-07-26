// 5 Golf

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
	let result = "";
	if (strokes == 1) {
		result = names[0];
	} else if (strokes <= par - 2) {
		result = names[1];
	} else if (strokes == par - 1) {
		result = names[2];
	} else if (strokes == par) {
		result = names[3];
	} else if (strokes == par + 1) {
		result = names[4];
	} else if (strokes == par + 2) {
		result = names[5];
	} else {
		result = names[6];
	}
	return result;
}

for (i = 1; i <= 8; i++) {
	console.log(golfScore(5, i));
}

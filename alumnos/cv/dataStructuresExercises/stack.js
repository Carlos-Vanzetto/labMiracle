class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		if (this.isEmpty()) {
			return "underflow";
		}
		return this.items.pop();
	}
	isEmpty() {
		return this.items.length == 0;
	}
	peek() {
		return this.items[this.items.length - 1];
	}

	printStack() {
		if (this.isEmpty()) {
			return "underflow";
		}
		var str = "";
		for (var i = 0; i < this.items.length; i++) {
			str += this.items[i] + " ";
		}

		return str;
	}
	printAndEmpty() {
		if (this.isEmpty()) {
			return "underflow";
		}
		let str = "";
		let i = 0;
		while (i < this.items.length) {
			str += this.pop() + " ";
		}
		return str;
	}
	decToBin(decimal, base) {
		if (base < 2 || base > 36) {
			console.log("Base cannot be smaller than 2 or greater than 36");
			return;
		}
		while (decimal != 0) {
			this.push(decimal % base);
			decimal = Math.floor(decimal / base);
		}
		return this.printAndEmpty();
	}
}

let myStack = new Stack();
console.log(myStack.decToBin(16, 36));
console.log(myStack.printStack());

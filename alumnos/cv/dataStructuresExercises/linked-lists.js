class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}
class LinkedList {
	constructor(head = null) {
		this.head = head;
		this.size = this.getSize();
	}
	insert(data) {
		let node = new Node(data);
		let current;
		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}
	remove(value) {
		let current = this.head;
		if (!current) {
			return;
		}
		let previous;
		while (current && current.data != value) {
			previous = current;
			current = current.next;
		}
		if (!current) {
			return;
		}
		if (!previous) {
			this.head = current.next;
		} else {
			previous.next = current.next;
		}
		this.size--;
	}
	clearList() {
		this.head = null;
		this.size = 0;
	}
	getSize() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}
	increaseSize() {
		this.size++;
	}
	decreaseSize() {
		this.size--;
	}
	find(value) {
		let current = this.head;
		if (!current) {
			return;
		}
		while (current && current.data != value) {
			current = current.next;
		}
		if (!current) {
			return false;
		}
		return current;
	}
	getLast() {
		let current = this.head;
		if (!current) {
			return;
		}
		while (current.next) {
			current = current.next;
		}
		return current;
	}
	// Ejercicio 2
	invert() {
		let current = this.head;
		if (!current) {
			return;
		}
		let previous = null;
		let next = null;
		while (current) {
			next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}
		this.head = previous;
		return this.head;
	}
	deleteDups() {
		let current = this.head;
		if (!current) {
			return;
		}
		let arrData = [];
		while (current) {
			arrData.push(current.data);
			current = current.next;
		}
		let noDupArrData = [...new Set(arrData)];
		this.clearList();
		let i = 0;
		while (noDupArrData[i]) {
			this.insert(arrData[i]);
			i++;
		}
	}
}

// Ejercicio 3
class DoubleLinkedList extends LinkedList {
	constructor(head = null) {
		super(head);
	}
}
class DoubleNode extends Node {
	constructor(data, next = null, prev = null) {
		super(data, next);
		this.prev = prev;
	}
}
// Tests ejercicios 1 y 2
let node1 = new Node(2);
let node2 = new Node(4);
let node3 = new Node(6);
node1.next = node2;
node2.next = node3;

let testLinkedList = new LinkedList(node1);
testLinkedList.insert(8);
testLinkedList.insert(10);
console.log(testLinkedList.getSize());
testLinkedList.remove(2);
console.log(testLinkedList.find(2));
console.log(testLinkedList.find(4));
console.log(`Size of testLinkedList is: ${testLinkedList.getSize()}`);
console.log(`testLinkedList's last node is: `, testLinkedList.getLast());
let invertedList = new LinkedList(testLinkedList.invert());
invertedList.size = invertedList.getSize();
console.log(invertedList);
console.log(`invertedList's last node is: `, invertedList.getLast());

// test ejercicios 3

let dNode1 = new DoubleNode(1);
let dNode3 = new DoubleNode(3);
let dNode2 = new DoubleNode(2, dNode3, dNode1);
dNode1.next = dNode2;
dNode3.prev = dNode2;

let testDoubleLinkedList = new DoubleLinkedList(dNode1);
console.log("Ejercicio double linked list ", testDoubleLinkedList);
console.log("se agregan 3 nodos, un valor repetido");
testDoubleLinkedList.insert(3);
testDoubleLinkedList.insert(4);
testDoubleLinkedList.insert(5);
console.log(testDoubleLinkedList);
console.log("se agregan 3 nodos , 3 repetidos");
testDoubleLinkedList.insert(5);
testDoubleLinkedList.insert(5);
testDoubleLinkedList.insert(4);
console.log("ejecutando deleteDup");
testDoubleLinkedList.deleteDups();
console.log(testDoubleLinkedList);

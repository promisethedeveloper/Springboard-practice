const ol = {};

ol["name"] = "Oloye";

ol.sayHi = function () {
	return "Hi!";
};
const x = Object.keys(ol);
console.log(x);
const y = Object.values(ol);
console.log(y);
const z = Object.entries(ol);
console.log(z);

//POJO
function getTriangleArea(a, b) {
	return (a * b) / 2;
}

function getTriangleHypotenuse(a, b) {
	return Math.sqrt(a * a + b * b);
}

let smallTriangle = {
	a: 3,
	b: 4,
	getArea: function (a, b) {
		return (this.a * this.b) / 2;
	},
	getHypotenuse: function (a, b) {
		return Math.sqrt(this.a * this.a + this.b * this.b);
	},
};

// CLASSES
class Triangle {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	getArea() {
		return (this.a * this.b) / 2;
	}

	getHypotenuse() {
		return Math.sqrt(this.a * this.a + this.b * this.b);
	}
}

let myTri = new Triangle();
myTri.a = 3;
myTri.b = 4;
myTri.getArea();
myTri.getHypotenuse();

const color = "red";
const yo = {};
yo["color"] = "blue";
// yo.color = "blue";

console.log(yo);

const add = function (a, b) {
	return a + b;
};

const mult = function (a, b) {
	return a * b;
};

const subtract = function (a, b) {
	return b - a;
};
// You can create an empty variable, then use dot notations to add key-value pairs
// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;
// myMath.subtract = subtract;

// You can create an empty object and put in the functions directly
// const myMath = { add, mult, subtract };

// You can also create the object of functions, which are called methods, all at once
// const myMath = {
// 	add: function (a, b) {
// 		return a + b;
// 	},
// 	mult: function (a, b) {
// 		return a * b;
// 	},
// 	subtract: function (a, b) {
// 		return b - a;
// 	},
// };

// USING ES6 SYNTAX
const myMath = {
	add(a, b) {
		return a + b;
	},
	mult(a, b) {
		return a * b;
	},
	subtract(a, b) {
		return b - a;
	},
};

console.log(myMath.add(5, 10));

function Mathematics(a, b) {
	this.a = a;
	this.b = b;
	this.getArea = function () {
		return (this.a * this.b) / 2;
	};
	this.getHypotenuse = function () {
		return Math.sqrt(this.a * this.a + this.b * this.b);
	};
}

class Salutation {
	greet() {
		console.log("Hello from triangle");
	}
	display() {
		console.log(`Triangle with sides of ${this.a} and ${this.b}`);
	}
}

class Geometry {
	// this constructor method is automatically run
	constructor(a, b, c) {
		for (let side of [a, b, c]) {
			if (!Number.isFinite(side) || side <= 0) {
				throw new Error("Not a valid number");
			}
		}
		this.a = a;
		this.b = b;
		this.side = c;
	}
	getArea() {
		return this.a * this.b * this.side;
	}
	getAddittion() {
		return this.a + this.b + this.side;
	}
	greet() {
		return `Hello from Geometry`;
	}
	// you can call a method, inside another method
	isBig() {
		return this.getArea() > 50;
	}
}

class anotherTriangle extends Geometry {
	constructor(a, b, c) {
		if (a * a + b * b !== c * c) {
			throw new Error("Invalid hypotenuse");
		}
		super(a, b, c);
		this.koko = c;
	}
	yo() {
		return `I changed the parameter to ${this.koko}`;
	}
	greet() {
		// console.log(`Hello from inside the anotherTriangle class`);
		return "Right " + super.greet();
	}
}

const miniTriangle = new anotherTriangle(3, 4, 5);
console.log(miniTriangle.getArea());
console.log(miniTriangle.greet());

const k = new anotherTriangle(3, 4, 5);
console.log(k.yo());

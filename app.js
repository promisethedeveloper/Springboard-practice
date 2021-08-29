// ADVANCED ARRAY METHODS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
}

function countZeros(arr) {
	let total = 0;
	arr.forEach((el) => {
		if (el === 0) {
			total++;
		}
	});
	return total;
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function doMath(a, b, func) {
	return func(a, b);
}

console.log(doMath(5, 6, add));

doMath(3, 4, function (a, b) {
	console.log(a ** b);
});

const mathFunc = [add, multiply, subtract, divide];

function doAllMath(a, b, func) {
	for (const x of func) {
		let values = x(a, b);
		console.log(values);
	}
}

doAllMath(20, 20, mathFunc);

numbers.forEach((el) => console.log(el));

const colors = ["blue", "red", "purple", "cyan", "brown"];
colors.forEach((el) => {
	console.log(el.toUpperCase());
});

// personal forEach method
const friends = ["Ugo", "Jo", "Jack", "Abel"];

function myForEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i);
	}
}

function callBackFunc(value, position) {
	console.log(
		`${value} is a great guy! His current position is at index: ${position}`
	);
	// return undefined;
}

myForEach(friends, callBackFunc);

// regular forEach method
friends.forEach((el, i) => {
	console.log(`${el} is a great guy! His current position is at index: ${i}`);
});

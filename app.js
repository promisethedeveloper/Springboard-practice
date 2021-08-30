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
const friends = ["Kele", "Ugo", "Jo", "Emy", "Jack", "Abel"];

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

console.log(`================`);

// regular forEach method
friends.forEach((el, i) => {
	console.log(`${el} is a great guy! His current position is at index: ${i}`);
});

console.log(`================`);

// personal map

function myMap(arr, callback) {
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		newArray.push(callback(arr[i], i, arr));
	}
	return newArray;
}

function prayer(el, i, arr) {
	console.log(`${el}, at index ${i} will be great in life!`);
}

myMap(friends, prayer);

const todos = [
	{
		id: 1,
		text: "Walk the dog",
		priority: "high",
	},
	{
		id: 2,
		text: "Walk the chickens",
		priority: "medium",
	},
	{
		id: 3,
		text: "feed the cats",
		priority: "low",
	},
	{
		id: 4,
		text: "put out the fire in my garage",
		priority: "very high",
	},
];

const todoText = todos.map(function (el) {
	return el.text;
});
// console.log(todoText);

const links = document.querySelectorAll("a");

// console.log(links);
const linksArray = Array.from(links);
// const linksArray = [...links];

const z = linksArray.map(function (a) {
	return a.getAttribute("href");
});
// console.log(z);

// filter
const words = [
	"antimonographicationalism",
	"Supercalifragilisticexpialidocious",
	"Pseudopseudohypoparathyroidism",
	"Pneumonoultramicroscopicsilicovolcanoconiosis",
	"Floccinaucinihilipilification",
	"Antidisestablishmentarianism",
	"Honorificabilitudinitatibus",
	"Thyroparathyroidectomized",
	"Incomprehensibilities",
	"Factual",
	"Secret",
	"Success",
	"crypt",
	"cypst",
	"tsktsk",
];

const longWords = words.filter(function (el) {
	return el.length <= 20;
});
console.log(longWords);

const startWith = words.filter(function (el) {
	return el.startsWith("P") || el.startsWith("F");
});
console.log(startWith);

// Checks if a letter is a vowel
// const isVowel = function (char) {
// 	return "aeiou".indexOf(char) !== -1;
// };

// const containsVowel = function (word) {
// 	for (let char of word) {
// 		if (isVowel(char)) return true;
// 	}
// 	return false;
// };

// const hasVowels = words.filter(containsVowel);
// const noVowels = words.filter(function (el) {
// 	return !containsVowel(el);
// });

function isVowel(letter) {
	return "aeiou".indexOf(letter) !== -1;
}

function containsVowel(sentence) {
	for (let i = 0; i < sentence.length; i++) {
		if (isVowel(sentence[i])) {
			return true;
		}
	}
	return false;
}

const hasVowels = words.filter(containsVowel);
const noVowels = words.filter(function (el) {
	return !containsVowel(el);
});

// const checkBox = document.querySelectorAll("input[type='checkbox']");
const allCheckBoxes = document.querySelectorAll("input[type='checkbox']");
const allCheckBoxesArray = [...allCheckBoxes];
const checked = allCheckBoxesArray.filter((el) => {
	return el.checked;
});

const textOfBoxes = checked.map((el) => {
	return el.parentElement.innerText;
});

// creating a function and chaining filter and map methods
function completedTodos() {
	const allCheckBoxesArray = [...allCheckBoxes];
	return allCheckBoxesArray
		.filter((el) => {
			return el.checked;
		})
		.map((el) => {
			return el.parentElement.innerText;
		});
}

function myFilter(arr, callback) {
	const filteredArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			filteredArray.push(arr[i]);
		}
	}
	return filteredArray;
}

const shorties = myFilter(words, function (words) {
	return words.length <= 10;
});
console.log(shorties);

const n = [0, 2, 4, 5, 6, 7, 8];
const evens = myFilter(n, function (n) {
	return n % 2 === 0;
});

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

// SOME

let digits = [1, 2, 3];

const a = digits.some(function (value, index, array) {
	return value < 3;
});
console.log(a);

function some(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === true) {
			return true;
		}
	}
	return false;
}

function hasAdmin(arr) {
	return arr.some((el) => {
		return el.admin;
	});
}

console.log(
	hasAdmin([
		{ name: "Colt", admin: true },
		{ name: "Poppy", admin: false },
	])
);

console.log(hasAdmin([{ name: "Colt" }, { name: "Poppy", admin: false }]));

function hasQuestionMark(str) {
	return str.split("").some((el) => {
		return el === "?";
	});
}

console.log(hasQuestionMark("How are you feeling"));
console.log(hasQuestionMark("How are you feeling now?"));

let xyz = [1, 2, 3, 4, 5];
const yz = xyz.every((el) => {
	return el >= 1;
});
console.log(yz);

function myEvery(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === false) {
			return false;
		}
	}
	return true;
}

function allVowels(str) {
	return str.split("").every(function (el) {
		return "aeiou".includes(el);
	});
}

function isInteger(arr) {
	return arr.every((el) => {
		return Number.isInteger(el);
	});
}
console.log(isInteger([1, 2, 3, 4, 5, 2.5]), "answer");

const someResult = function (arr) {
	return arr.some((el) => {
		// return el.includes("thyroid");
		return el.indexOf("thyroid") !== -1;
	});
};

console.log(someResult(words), "some");

const lengthOfTheWordsArray = function (arr) {
	return arr.every((el) => {
		return el.length >= 5;
	});
};

console.log(lengthOfTheWordsArray(words), "every");

const everyElementAString = (arr) => arr.every((el) => typeof el === "string");

console.log(everyElementAString(words), "every");

const allInputs = document.querySelectorAll("#terms input");
const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
	const allCheckedBoxes = [...allInputs].every((el) => {
		return el.checked;
	});
	if (!allCheckedBoxes) {
		alert("Please agree to everything");
	}
	console.log(allCheckedBoxes);
});

const mySome = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return true;
		}
	}
	return false;
};

console.log(
	mySome([1, 2, 3, 4, 5], function (el) {
		return el > 2;
	})
);

const anotherSum = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === false) {
			return false;
		}
	}
	return true;
};

console.log(
	anotherSum([1, 2, 3, 4, 5], function (el) {
		return el >= 1;
	})
);

const things = [1, 2, 3, 4, 5, 6];

function theFind(arr) {
	return arr.find((el) => {
		return el > 2;
	});
}

console.log(theFind(things), "find");

function myFind(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === true) {
			return arr[i];
		}
	}
	return undefined;
}

function findOddNumber(arr) {
	return arr.find(function (el) {
		return el % 2 !== 0;
	});
}

const b = (arr) => {
	return arr.findIndex((el) => {
		return el > 5;
	});
};

console.log(b(things));

function myFindIndex(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return i;
		}
	}
	return -1;
}

const findPositionOfBoolean = (arr) => {
	return arr.findIndex((el) => {
		return typeof el === "boolean";
	});
};
console.log(findPositionOfBoolean([1, 3, false, true]));
console.log(findPositionOfBoolean(["no booleans", "around", "these parts"]));

const scores = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 75, 78, 90, 99, 46, 66, 37, 79, 77,
];

const xx = (arr) => arr.find((score) => score > 75);

const firstEvenScore = (arr) => arr.find((el) => el % 2 === 0 && el !== 0);

console.log(xx(scores));
console.log(firstEvenScore(scores));

const getAllEvenScores = (arr) => arr.filter((el) => el % 2 === 0 && el !== 0);

console.log(getAllEvenScores(scores));

const indexOfFirstEvenNum = (arr) =>
	arr.findIndex((el) => el % 2 === 0 && el !== 0);

console.log(indexOfFirstEvenNum(scores));

function partition(arr, pivot) {
	const pivotIndex = arr.findIndex((el) => {
		return el > pivot;
	});
	const left = arr.slice(0, pivotIndex);
	const right = arr.slice(pivotIndex);
	return [left, right];
}

console.log(partition(scores, 0));

const partitionArrow = (arr, pivot) => {
	const pivotIndex = arr.findIndex((el) => el > pivot);
	const left = arr.slice(0, pivotIndex);
	const right = arr.slice(pivotIndex);
	return [left, right];
};

console.log(partitionArrow(scores, 75));

function latestMyFind(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return arr[i];
		}
	}
	return undefined;
}

console.log(
	latestMyFind(scores, function (el) {
		return el > 0;
	})
);

function latestMyFindIndex(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return i;
		}
	}
	return -1;
}

console.log(
	latestMyFindIndex(scores, function (el) {
		return el > 0;
	})
);

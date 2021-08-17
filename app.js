// OLD WAYS OF DOING THINGS
function max() {
	console.log(arguments);
}

max(2, 3, 4);

function max() {
	const arr = Array.from(arguments);
	return arr.reduce((acc, curValue) => {
		return curValue > acc ? curValue : acc;
		// if (curValue > acc) {
		// 	return curValue;
		// } else {
		// 	return acc;
		// }
		// return acc;
	});
}

console.log(max(2, 3, 5, 894));

// NEW WAYS OF DOING THINGS
function makeFamily(parent1, parent2, ...children) {
	// console.log(parent1, parent2, children);
	const familyObj = {};
	familyObj.mother = parent1;
	familyObj.father = parent2;
	familyObj.kids = children;
	return familyObj;
}
console.log(makeFamily("cindy", "john", "cody", "carly"));
console.log(makeFamily("cindy", "john"));

function takesFour(one, two, three, four) {
	console.log(one);
	console.log(two);
	console.log(three);
	console.log(four);
}

const names = ["Mary", "Colt", "Angela", "Abe"];
takesFour(...names);

// Slice method does not change the array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const anotherNums = nums.slice(3);
console.log(anotherNums);
console.log(nums);

// Splice changes the array
const numsTwo = [9, 10, 11, 12, 13, 14, 15];
const anotherNumsTwo = numsTwo.splice(3);
console.log(anotherNumsTwo);
console.log(numsTwo);

const vowels = "aeiou";
const oldVowelArr = vowels.split("");
const newVowelAarr = [...vowels];

const car = {
	brand: "Mercedes",
	year: 2020,
	color: "blue",
};

const carArr = ["Mercedes", 2020, "blue"];

const carObject = { ...car };
const carArray = { ...carArr };

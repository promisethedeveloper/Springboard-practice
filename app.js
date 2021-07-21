// Returning an anonymous function as a value of another function
function greet(greeting) {
	return function (name) {
		return `${greeting}, ${name}.`;
	};
}

//This method is basically capturing the return value (i.e another function) in a variable
// const firstCall = greet("Hello");
// console.log(firstCall("Promise"));
// This other method is calling both functions at once
console.log(greet("Hello")("Onyeka"));

console.log(`=====================`);

function markWahlberg(animal, callback) {
	console.log(`Hey ${animal}, how you doin'?`);
	callback();
}

function marksCallback() {
	console.log(`Say hi to your mother for me, alright?`);
}

markWahlberg("dog", marksCallback);

function doMath(a, b, callback) {
	return callback(a, b);
}

const output = doMath(4, 3, function (firstParameter, secondParameter) {
	return firstParameter + secondParameter;
});

console.log(output);

function greetILoveYou() {
	console.log(`Hi, I love you!`);
}

function diss() {
	console.log(`You are the worse`);
}

// Putting functions inside an array and destructuring the array
let [funcs1, funcs2] = [greetILoveYou, diss];
funcs1();
funcs2();

function repeatThreeTimes(func) {
	func();
	func();
	func();
}

console.log(repeatThreeTimes(greetILoveYou));

// RETURNING FUNCTION FROM A ANOTHER FUCNTION AND CALLING THEM
function giveBirth() {
	console.log("GIVING BIRTH");
	return function cry() {
		return "WAAAAAAHHH";
	};
}

// You can call both functions like this
console.log(giveBirth()());

// or you can store the output in a variable and call them
const theFirstCall = giveBirth();
console.log(theFirstCall());

greetILoveYou();
console.log(setTimeout(diss, 3000));
console.log(setInterval(diss, 3000));
console.log(setTimeout(diss, 3000));

greetILoveYou();

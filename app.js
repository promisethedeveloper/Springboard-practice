// "use strict";

// const cat = {
// 	name: "Blue",
// 	breed: "Scottish Fold",
// 	dance(typeOfDance) {
// 		console.log(`The this keyword here is ${this}`);
// 		console.log(this);
// 		return `Meow, I am ${this.name} and I like to ${typeOfDance}.`;
// 	},
// };

// const BluesDance = cat.dance;

class Cat {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
	}
	dance(typeOfDance) {
		console.log(`The this keyword here is ${this}`);
		console.log(this);
		return `Meow, I am ${this.name} and I like to ${typeOfDance}.`;
	}
}

let smallCat = new Cat("fluffy", "African star");
console.log(smallCat.dance("makossa"));

// THE CALL METHOD
const trophies = {
	name: "Chelsea",
	nameOfTrophy: "Champions league",
	noOfTimes: 2,
	statement: function (year) {
		console.log(this);
		return `${this.name} have won the ${this.nameOfTrophy} ${this.noOfTimes} times in less than ${year} years.`;
	},
};

// You can use .call() method to temporarily change the this keyword

// trophies.statement(8);
const club = {
	name: "Real Nadrid",
	nameOfTrophy: "Champions league",
	noOfTimes: 3,
};

// Calling the method this way sets the this keyword to the object calling the method
// trophies.statement();
// Calling the method this way, when not using the "use strict" mode sets the this keyword to the window object
// const trophiesOtherCall = trophies.statement;
// trophiesOtherCall;
// The this object can be temporarily changed using the call keyword
// trophies.statement.call(club, 20);

// Using bind permanantly sets the this keyword to the object passed as an argument into it
const bindCalls = trophies.statement.bind(club);

const wins = {
	name: "Bayern Munich",
	nameOfTrophy: "Champions league",
	noOfTimes: 2,
	statement: bindCalls,
};

function applySalesTax(taxRate, price) {
	return price + price * taxRate;
}

const applySalesMarylandTax = applySalesTax.bind(null, 0.0725);
const applySalesTexasTax = applySalesTax.bind(null, 0.0625);

console.log(applySalesMarylandTax(1000));
console.log(applySalesTexasTax(1000));

const bobsMembership = {
	name: "Bob",
	total: 250,
};

const jillsMembership = {
	name: "Jill",
	total: 899,
};

function collectMonthlyFee(fee) {
	const remaining = this.total - fee;
	this.total = remaining;
	return `${this.name} remaining balance: ${remaining}`;
}

const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5);
const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 35);

const dog = {
	name: "Jack",
	breed: "German Shepherd",
	dance: function (danceStyle) {
		console.log(`${this.name} is a ${this.breed} that loves to ${danceStyle}`);
	},
	play(...toys) {
		for (let toy of toys) {
			console.log(`${this.name} plays with ${toy}`);
		}
	},
	greet() {
		alert(`${this.name} says MEOW`);
	},
};

// Using bind in eventListeners
const btn = document.querySelector("#btn-1");
btn.addEventListener("click", dog.greet.bind(dog));

const btnA = document.querySelector("#a");
const btnB = document.querySelector("#b");
const btnC = document.querySelector("#c");

function popUp(msg) {
	alert(`Secret message is ${msg}`);
}

// btnA.addEventListener("click", function () {
// 	popUp("BUTTON A SAYS HI!");
// });

// btnB.addEventListener("click", function () {
// 	popUp("BUTTON B SAYS HI!");
// });
// btnC.addEventListener("click", function () {
// 	popUp("BUTTON C SAYS HI!");
// });

btnA.addEventListener("click", popUp.bind(null, "BUTTON A SAYS HI!"));
btnB.addEventListener("click", popUp.bind(null, "BUTTON B SAYS HI!"));
btnC.addEventListener("click", popUp.bind(null, "BUTTON C SAYS HI!"));

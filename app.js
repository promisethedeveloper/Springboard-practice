try {
	functionThatDoesNotExist();
} catch (err) {
	console.log("Something went wrong!", err);
}

// console.log("Did we make it?");

// console.log("======================");

// const myself = {
// 	firstName: "Promise",
// 	lastName: "Morka",
// };

const displayInitials = function (user) {
	let firstName;
	let lastName;
	try {
		firstName = user.firstName[0].toUpperCase();
		lastName = user.lastName[0].toUpperCase();
	} catch (err) {
		console.log("Something went wrong", err);
	}
	return `Hello ${firstName}${lastName}`;
};
console.log(displayInitials());

console.log("an error is coming...");
try {
	throw "Oh no!";
} catch (err) {
	console.log("What happened?", err);
}

console.log("an error is coming...");
try {
	// This creates a new Error object that has inbuilt properties
	throw new Error("Oh noo!!!");
} catch (err) {
	console.log("What kind of error?", err.name);
	console.log("What is the message?", err.message);
	console.log("Where did it happen?", err.stack);
	console.dir(err);
}

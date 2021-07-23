// function to make color
function makeColor(color) {
	document.body.style.backgroundColor = color;
}

const redBtn = document.querySelector("#orangered");
// Added the first event listener to the button
redBtn.addEventListener("click", function () {
	makeColor("orangered");
});

// Added the second event listener to the button
const h1 = document.querySelector("h1");
redBtn.addEventListener("click", function () {
	h1.style.color = "yellow";
});

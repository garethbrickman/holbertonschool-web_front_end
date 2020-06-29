function changeMode(size, weight, transform, background, color) {
	document.documentElement.style["font-size"] = size;
	document.documentElement.style["font-weight"] = weight;
	document.documentElement.style["text-transform"] = transform;
	document.documentElement.style["background-color"] = background;
	document.documentElement.style["color"] = color;
}

let spooky = function() {changeMode(9, "bold", "uppercase", "pink", "green")};
let darkMode = function() {changeMode(12, "bold", "capitalize", "black", "white")};
let screamMode = function() {changeMode(12, "normal", "lowercase", "white", "black")};

function main() {
	// base mode
	let body = document.body;
	let paragraph = document.createElement("P");
	let text = document.createTextNode("Welcome Holberton");
	paragraph.appendChild(text);
	body.appendChild(paragraph);

	// spooky mode 
	let spookyButton = document.createElement("BUTTON");
	let spookyText = document.createTextNode("Spooky");
	spookyButton.setAttribute("onClick", "spooky()");
	spookyButton.appendChild(spookyText);
	body.appendChild(spookyButton);

	// dark mode 
	let darkButton = document.createElement("BUTTON");
	let darkText = document.createTextNode("Dark mode");
	darkButton.setAttribute("onClick", "darkMode()");
	darkButton.appendChild(darkText);
	body.appendChild(darkButton);

	// scream mode 
	let screamButton = document.createElement("BUTTON");
	let screamText = document.createTextNode("Scream mode");
	screamButton.setAttribute("onClick", "screamMode()");
	screamButton.appendChild(screamText);
	body.appendChild(screamButton);
}

window.onload = main;
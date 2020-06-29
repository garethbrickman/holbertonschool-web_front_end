function createElement(data) {
	let body = document.body;
	let paragraph = document.createElement("P");
	let content = document.createTextNode(data);
	paragraph.appendChild(content);
	body.appendChild(paragraph);
}

function queryWikipedia(callback) {
	let request = new XMLHttpRequest();
	request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow", true);
	request.setRequestHeader("Origin", "*");
	request.onload = (payload) => (callback(payload.extract));
	request.onerror = () => callback(new Error);
	request.send();
}

queryWikipedia(createElement);
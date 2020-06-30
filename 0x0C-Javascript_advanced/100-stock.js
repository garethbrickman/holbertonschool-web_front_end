let stock = {
	macbook: 2, 
	iphone: 4
};

function processPayment(itemName) {
	stock[itemName] = stock[itemName] - 1;
	console.log("Payment is being processed for item " + itemName);
}

function processError(itemName) {
	console.log("No more " + itemName + " in stock");
	console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
	console.log("Verifying the stock of " + itemName);
	// if enough stock
	if (stock[itemName] > 0) {
		callbackPayment(itemName);
	}
	// if not enough stock
	else {
		callbackError(itemName);
	}
}

let userInput = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
processOrder(userInput, processPayment, processError);
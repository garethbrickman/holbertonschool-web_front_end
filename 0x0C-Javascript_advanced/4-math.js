function divideBy(firstNumber, secondNumber) {
	return function(secondNumber) {
		return secondNumber / firstNumber;
	}
}

function addBy(firstNumber, secondNumber) {
	return function(secondNumber) {
		return firstNumber + secondNumber;
	}
}

let addBy100 = function (x) {return addBy(100, x)};
let addBy1000 = function (x) {return addBy(1000, x)};
let divideBy10 = function (x) {return divideBy(10, x)}
let divideBy100 = function (x) {return divideBy(100, x)}
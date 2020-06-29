function countPrimeNumbers() {
	return 25
}

let startTime = window.performance.now();
countPrimeNumbers();
let endTime = window.performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (endTime - startTime) + " milliseconds.");
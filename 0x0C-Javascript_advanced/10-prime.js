function countPrimeNumbers() {
	return 25
}

let startTime = window.performance.now();
for (let i = 0; i < 100; i++) {
	countPrimeNumbers();
}
let endTime = window.performance.now();

console.log("Execution time of calculating prime numbers 100 times was " + (endTime - startTime));
/**
  * @description - 10. Execution stack & timing execution
  * @function countPrimeNumbers - Count the number of primes from 2 to 100 100 times
  * @returns {Number} number of primes
  */

 function countPrimeNumbers() {
    /**
     * @var {Boolean} numberPrime - define True if number is prime or false if not
     * @varprimeCount - counter of primes
     * @var {Number} iterator - iterator
     * @var {Number} end - limit of the check
     * @var {Number} mod - mod of a number
     */
    let numberPrime;
    let primeCount = 0; 
	for (let iterator = 2; iterator <= 100; iterator++)
	{
		numberPrime = true;
		let end = Math.round(Math.sqrt(iterator)); 
		for (let mod = 2; mod <= end; mod++) {
			if (iterator%mod == 0) {
				numberPrime = false;
				break; 
			}
		}
		if (numberPrime) {
			primeCount = primeCount + 1; }

	}
	console.log(primeCount);
	return primeCount;
}
    /**
     * API to measure the time 100 Times
     * @var {Number} startCountPrimeNumbers - define start time before execution
     * @var {Number} endCountPrimeNumbers - define end time after execution
     * @var {Number} j - Iterator
     */
let startCountPrimeNumbers = window.performance.now();
for (let j = 1; j < 101; j++){
    countPrimeNumbers();
}
let endCountPrimeNumbers = window.performance.now();

console.log("Execution time of calculating prime numbers 100 times was " + (endCountPrimeNumbers - startCountPrimeNumbers) + " milliseconds.");
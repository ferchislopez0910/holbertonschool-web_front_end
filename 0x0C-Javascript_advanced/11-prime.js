/**
  * @description - 11. Changing stack order using setTimeout
  * @function countPrimeNumbers - Count the number of primes from 2 to 100 100 times
  * @returns {Number} number primes
  */


 function countPrimeNumbers() {
    /**
     * @var {Boolean} numberPrime - define True if number is prime or false if not
     * @var {Number} primeCount - counter of primes
     * @var {Number} i - iterator
     * @var {Number} end - limit
     * @var {Number} mod - mod of a number
     */
    let numberPrime;
    let primeCount=0; 
	for (let iterator = 2; iterator <= 100; iterator++)
	{
		numberPrime = true;
		let end = Math.round(Math.sqrt(i)); 
		for (let mod = 2; mod <= end; mod++) {
			if (i%mod == 0) {
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
     * @var {Number} beginCountPrimeNumbers - define start time before execution
     * @var {Number} finalCountPrimeNumbers - define end time after execution
     * @var {Number} iter - iterator
     */
let beginCountPrimeNumbers = window.performance.now();
for (let iter = 1; iter < 101; iter++){
    countPrimeNumbers();
}
let finalCountPrimeNumbers = window.performance.now();

    /**
     * Changing stack order using setTimeout
     */
setTimeout (function() { 
    console.log("Execution time of calculating prime numbers 100 times was " + (finalCountPrimeNumbers - beginCountPrimeNumbers) + " milliseconds.");}, 0);
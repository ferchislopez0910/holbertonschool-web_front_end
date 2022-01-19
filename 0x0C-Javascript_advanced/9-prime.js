/**
  * @description - 9. Prime numbers & timing execution
  * @function countPrimeNumbers - Count the number of primes from 2 to 100
  * @returns {Number} number of primes
  */


function countPrimeNumbers() {
    /**
     * @var {Boolean} primeNumber - define True if number is prime or false if not
     * @var {Number} primeCount - counter of primes
     * @var {Number} iterator
     * @var {Number} end - limit of the check
     * @var {Number} mod - mod of a number
     */
    let primeNumber;
    let primeCount=0; 
	for (let iterator = 2; iterator <= 100; iterator++)
	{
		primeNumber = true;
		let end = Math.round(Math.sqrt(i)); 
		for (let mod = 2; mod <= end; mod++) {
			if (iterator%mod == 0) {
				primeNumber = false;
				break; 
			}
		}
		if (primeNumber) {
			primeCount = primeCount + 1; }

	}
	console.log(primeCount);
	return primeCount;
}
    /**
     * API to measure the time
     * @var {Number} beginCountPrimeNumbers - start time before execution
     * @var {Number} finalCountPrimeNumbers - end time after execution
     */
begin = window.performance.now();
countPrimeNumbers();
lefinal = window.performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (endCountPrimeNumberbegin) + " milliseconds.");

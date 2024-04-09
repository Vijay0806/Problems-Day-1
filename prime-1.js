// 1)1.	 Explain the concept of prime numbers and write a function to check if a given number is prime.

// Prime numbers are integers greater than 1 that have no positive divisors other than 1 and themselves. In other words, 
// a prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. 
// For example, 2, 3, 5, 7, 11, 13, etc., are prime numbers.

function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }
    
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible, not a prime number
        }
    }
    
    return true; // If not divisible, it's a prime number
}

// Test the function

// console.log(isPrime(10)); // Output: false
let number = 107;
isPrime(number) ? console.log(`${(number)}:The given Number is PrimeNumber `) : console.log(`${(number)}:The given Number is Not PrimeNumber `);
console.log(isPrime(number));

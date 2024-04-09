// 5)Write a function to calculate the factorial of a number using iteration.

function calculateFactorial(n) {
    if (n < 0) {
        return null; // Return null for negative numbers
    }

    let factorial = 1;

    // Iterate from 1 to n, multiplying each number to calculate the factorial
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}


const n=5;
const factorialNumber=calculateFactorial(n);
console.log(`The Given Number ${n} and the factorialNumber is:`,factorialNumber);


// 4)Write a function to find the nth Fibonacci number using iteration.

function findNthFibonacci(n) {
    if (n <= 0) {
        return null; // Return null for non-positive values of n
    }

    let fibPrev = 1;
    let fibCurr = 1;

    // If n is 1 or 2, the Fibonacci number is directly fibCurr
    if (n === 1 || n === 2) {
        return fibCurr;
    }

    // Iterate to calculate the nth Fibonacci number
    for (let i = 3; i <= n; i++) {
        let nextFib = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = nextFib;
    }

    return fibCurr;
}

const n=10;
const FibonacciNumber=findNthFibonacci(n);
console.log(`The ${n}th Fibonacci number is:`,FibonacciNumber);
// console.log(FibonacciNumber)
// Test the function
// console.log(findNthFibonacci(1)); // Output: 1
// console.log(findNthFibonacci(5)); // Output: 5
// console.log(findNthFibonacci(10)); // Output: 55
// console.log(findNthFibonacci(15)); // Output: 610
// console.log(findNthFibonacci(20)); // Output: 6765

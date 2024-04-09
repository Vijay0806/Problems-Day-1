// 2)Write a function to find the largest element in an array.

function findLargestElement(array) {
    if (array.length === 0) {
        return null; // If the array is empty, return null
    }
    
    let largest = array[0]; // Assume the first element is the largest
    
    // Iterate through the array to find the largest element
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]; // Update the largest element if a larger one is found
        }
    }
    
    return largest; // Return the largest element
}

// Test the function
const array1 = [20,30,404,505,1010,120,11];
const largestElement=findLargestElement(array1);
console.log("The Largest element in the array is:", largestElement);


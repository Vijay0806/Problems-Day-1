// 3)Write a function to find the second largest element in an array.

function findSecondLargestElement(array) {
    if (array.length < 2) {
        return null; // If the array has less than 2 elements, return null
    }

    let largest = array[0];
    let secondLargest = null;

    // Find the largest element
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        } else if (array[i] !== largest && (secondLargest === null || array[i] > secondLargest)) {
            secondLargest = array[i];
        }
    }

    return secondLargest;
}

const array2 = [30, 70, 20, 90, 50];
const secondLargest=findSecondLargestElement(array2)
// Test the function
console.log(`The SecondLargest Element is:${secondLargest}`); // Output: 7


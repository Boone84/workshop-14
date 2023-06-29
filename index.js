// Input array
const numbers = [2, 4, 6, 8, 11, 20, 15, 22];
// Initialize an empty array to store odd numbers
const oddNumbers = [];
// Loop through the input array
for (let i = 0; i < numbers.length; i++) {
// Check if the current number is odd
if (numbers[i] % 2 !== 0) {
// Add the odd number to the oddNumbers array
    oddNumbers.push(numbers[i]);
  }
}



// Input string
const word = "hello";

// Variables to keep track of the number of consonants and vowels
let consonantCount = 0;
let vowelCount = 0;

// Loop through each character in the word
for (let i = 0; i < word.length; i++) {
  // Get the current character
  const character = word[i];

  // Check if the character is a vowel
  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    vowelCount++;
  } else {
    consonantCount++;
  }
}

// Print the result
console.log(word + " has " + consonantCount + " consonants and " + vowelCount + " vowels");





// Input array
const inputArray = [1, 2, 3];

// Create a new array to store the reversed elements
const reversedArray = [];

// Iterate over the input array in reverse order using a for loop
for (var i = inputArray.length - 1; i >= 0; i--) {
// Add each element to the reversedArray
  reversedArray.push(inputArray[i]);
}

// Output the reversedArray
console.log(reversedArray);






// Iterate from 1 to 100
for (let i = 1; i <= 100; i++) {
// Check if the number is a multiple of both 3 and 5
if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
}
// Check if the number is a multiple of 3
else if (i % 3 === 0) {
    console.log("Fizz");
}
// Check if the number is a multiple of 5
else if (i % 5 === 0) {
    console.log("Buzz");
}
// If none of the above conditions are met, print the number itself
else {
    console.log(i);
}
  }
  
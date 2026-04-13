/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Original Code
// let result = "5" - 2;
// console.log("The result is: " + result); // The result is 3

// let isValid = Boolean("false");
// if (isValid) {
//     console.log("This is valid!"); // This is valid!
// }

// let age = "25";
// let totalAge = age + 5;
// console.log("Total Age: " + totalAge); // Total Age: 255


// PART 1
// Change to number for clarity.
let result = Number("5") - 2;
console.log("The result is: " + result);

// Assuming this is suppose to be false? Converting with Boolean() just gave a value so it was true.
let isValid = false;
if (isValid) {
    console.log("This is valid!");
}

// Change to number for clarity. A string concatenated to a number will just add the number at the end of a string.
let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge); // Total Age: 25

// PART 2
// Implicit example
let total = "5" * 2;
console.log(total); // 10

// Explicit example
let myAge = "25";
console.log(myAge) // "25"
let convertedAge = Number(myAge);
console.log(convertedAge) // 25

// Edge Case
let notANumber = "Hello";
let convertedNum = Number(notANumber);
console.log(convertedNum) // NaN
console.log(typeof(convertedNum)) // number

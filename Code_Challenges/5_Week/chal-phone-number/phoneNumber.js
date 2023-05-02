/**
 * Create a Phone Number
 * Difficulty: Medium
 * 
 * Concepts: General, Loops
 * 
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 * 
 * Example:
 * 
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 * The returned format must be correct in order to complete this challenge.
 * 
 * Don’t forget the space after the closing parentheses!
 */


/**
 * 
 * @param {Integer Array} arrNum - The integer array parameter pass to createPhoneNumber()
 * @returns {string} phoneString - the US formatted string for phone numbers
 */
function createPhoneNumber(arrNum) {
    let phoneString = '';
    phoneString = `(${arrNum.slice(0,3).join('').toString()}) ${arrNum.slice(3,6).join('').toString()}-${arrNum.slice(6).join('').toString()}`
    return phoneString
}

// Better Alternative solution
// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";

//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }

//     return format;
//   }



//brute force below
// function createPhoneNumber(numbers){
// return"(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9]
// }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) ;
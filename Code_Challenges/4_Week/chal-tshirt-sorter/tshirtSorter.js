/**
 * T-Shirt Sorter
 * Difficulty : Medium
 * 
 * Concepts : Loops, Conditionals
 * 
 * Write a function that will take in a string containing only s, m, and l characters. Ex: 
 * 
 * This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this 
 * pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.
 * 
 * The given string will never include characters outside of the lowercase s, m, and l. The string will also 
 * never contain any spaces.
 * 
 * >>> tshirtSorter('lms')
 * // sml
 * 
 * >>> tshirtSorter('smllms')
 * // ssmmll
 */


function tshirtSorter(str){
    let sortedStr =[];
    for (let i=0; i<str.length; i++){
        sortedStr.push(str[i])
        sortedStr.sort().reverse();
    }
    return String (sortedStr.join(''))
}

console.log(tshirtSorter('smllms'));

console.log(tshirtSorter('lms'));
// sml

console.log(tshirtSorter('slsmmsllsmsmlmsls'));
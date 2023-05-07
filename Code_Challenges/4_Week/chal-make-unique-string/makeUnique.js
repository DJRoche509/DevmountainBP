/*
 * Make Unique String
 * Difficulty: Medium
 * 
 * Concepts: Loops, Conditionals, String Methods
 * 
 * Write a function to remove all duplciate letters from a provided string. The string will only 
 * contail lowercase letters between a - z. The string will not contain spaces.
 * 
 * For example: 
 * >>> makeUnique('helloworld')
 * // helowrd
 * 
 * >>> makeUnique('iwanttoclimbamountain')
 * // iwantoclmbu
 */

function makeUnique(wordString){
    let result = '';
    for (let i = 0; i < wordString.length; i++){
        if (!result.includes(wordString[i])){
            result += wordString[i];
        }
    }
    return result;
}

console.log(makeUnique('helloworld'));
// helowrd

console.log(makeUnique('iwanttoclimbamountain'));
// iwantoclmbu


/**
 *       Solution 2:
 * function makeUnique(wordString) {
 *      let strSet = new Set(wordString.split(''))
 *      return [...strSet].join('')
 * }
 */
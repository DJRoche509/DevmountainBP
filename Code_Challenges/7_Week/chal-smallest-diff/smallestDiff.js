/**
 * Smallest Difference
 * 
 * Difficulty: Harder
 * 
 * Concepts: Algorithms, Runtime
 *  
 * Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.
 * 
 * This is a short-length challenge, but requires some clever thinking.
 * 
 * Given two lists, find the smallest difference (subtraction) between any two nums.
 * 
 * For example, given the arrays:
 * 
 * [10, 20, 14, 16, 18]
 * [30, 23, 54, 33, 96]
 * The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.
 * 
 * Write a function that determines the smallest difference.
 */


/** 
 * @param {number[]} x - An array of integers.
 * @param {number[]} y - An array of integers.
 * @returns {function} - minimum() fucntion takes an array of int and returns its smallest int element. 
 */
function smallestDiff(x,y){
    smallDiff=[];
    for (let i = 0; i<x.length; i++){
        for(let j = 0;j<y.length;j++){
            smallDiff.push(y[i]-x[j])
        }
    } 
    return minimum(smallDiff);
}

/**
 * @param {number[]} arr - The arr array, all its element are of type integers.
 * @returns {number} min - The smallest integer element found in the array passed in. 
 */
const minimum = arr => {
    let min = arr[0];
    for (let s = 0; s < (arr.length - 1); s++){
        min = min > arr[s+1]  ? arr[s+1] : min
    }
    return min
}

console.log(smallestDiff([10, 20, 14, 16, 18],[30, 23, 54, 33, 96]));






/**
 *  SOLUTION 2
 * 
 * const smallestDiff = (x, y) =>{
 *   const diffArr = []
 *   x.forEach((el, i) => {
 *      diffArr.push(y[i] -= el)
 *   })
 *   diffArr.sort((a, b) => a-b)
 *   return diffArr[0]
}
 */
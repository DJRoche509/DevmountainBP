/**
 * SORT BY PRODUCT
 * 
 * Difficulty: Medium
 * 
 * Concepts: Loops, Math
 * 
 * Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.
 * 
 * For sorting the index starts at 1, NOT at 0!
 * 
 * The sorting has to be ascending. The array will never be null and will always contain numbers.
 * 
 * Example:
 * 
 * Input: 23, 2, 3, 4, 5
 * 
 * Product of value and index:
 * 
 * 23 => 23 * 1 = 23 -> Output-Pos 4
 * 
 * 2 => 2 * 2 = 4 -> Output-Pos 1
 * 
 * 3 => 3 * 3 = 9 -> Output-Pos 2
 * 
 * 4 => 4 * 4 = 16 -> Output-Pos 3
 * 
 * 5 => 5 * 5 = 25 -> Output-Pos 5
 * 
 * Output: 2, 3, 4, 23, 5
 */

/**
 * 
 * @param {number[]} - arr. The integer array passed in as argument.
 * @returns {number[]} - sortedArr.  The returned integer arrray sorted by the product of index and value of arr.
 */
const sortProduct = (arr) => {
    //map the values to an array of objects containing value, index, and product
    const mapArr = arr.map((value, index) => {
        return {value, index, product: value * (index +1)}
    })
    //sort the mapped array by produc in acending order
    mapArr.sort((a,b) => a.product - b.product)
    //map the sorted array back to an array of values only 
    const sortedArr = mapArr.map(obj => obj.value)
    return sortedArr
}

/**
 *   SOLUTION 2
 * 
 * @param {number[]} - arrNum 
 * @returns {number[]} 
 *
 * function sortProduct(arrNum) {
 *     let newArrNum = [];
 * 
 *     for(let i=0; i<arrNum.length; i++){
 *         let product = arrNum[i] * (i + 1)
 *         let value = arrNum[i]
 *         newArrNum.push({product, i, value}); 
 *     }
 *     newArrNum.sort((a, b) => a.product - b.product);
 *     return newArrNum.map(el => el.value)
 * }
 * 
 */


console.log(sortProduct([23, 2, 3, 4, 5]));
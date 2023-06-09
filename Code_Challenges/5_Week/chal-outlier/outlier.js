/*
 *  Find the Outlier
 *  Difficulty: Medium    
 *  Concepts: Math, Logic, Conditionals
 *
 *  You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.
 *
 *  Examples:
 *
 *  [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)
 *
 *  [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
 */


// if (arr[0]%2 ===0 and arr[1]%2 ===0)
// for loop ---> i =0  arr[i]%2 ===1

/**
 * 
 * @param {int} arr 
 * @returns {int} 
 */
function outlier(arr){
    let num ;
    let num1 =arr[0],  num2=arr[1], num3=arr[2] ;
    if (num1 % 2 === 0 && (num2 % 2 === 0 || num3%2 ===0)){
        num = arr.filter(ans=>ans%2 ===1)
        }
    else{
       num = arr.filter(ans =>ans%2 ===0)
    }
    return num[0]
}

console.log(outlier([160, 3, 1719, 19, 11, 13, -21]));
// Should return: 160 (the only even number)

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// Should return: 11 (the only odd number)
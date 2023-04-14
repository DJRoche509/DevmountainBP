//                                 Is PALINDROME

/* Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.
 *
 * For example:
 *
 * isPalindrome("a")
 * // returns true
 *
 * isPalindrome("noon")
 * // returns true
 *
 * isPalindrome("hello")
 * // returns false
 * 
 *  Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:
 *
 */



//   OPTION 1: USING STRAIGHT REVERSE --  
//
// function usingReverse(s){
//     let reversedString = s.split("").reverse().join("");
//     return s === s.split("").reverse().join("");
// }



//    OPTION 2: Copy a new string to avr WrdStrCopy, add each element using forLoop and in reverser
//
// const isPalindrome = wrdStr => {
//     let wrdStrCopy = '';
//     for (let c = wrdStr.length-1; c >= 0; c--){
//         wrdStrCopy += wrdStr[c] ;
//     }
//     return wrdStr === wrdStrCopy ;
// }




//   Option 3: Using POINTERS -- Front|Back
function isPalindrome(wrdStr){
    let bool, front, back ;
    
    for (let i =0; i<wrdStr.length; i++){
        front = i ;
        back = wrdStr.length-1-i;
        bool =
        wrdStr[front] === wrdStr[back]
            ? true
            : false ;
    }
    return bool;
}

//logic behind this

/*  f                       b
    r   o   t   a   t   o   r
    
    the front pointer would keep pushing forward until it reaches the end of the string word;
    while the back pointer would keep pushing backward till the begining
        f               b
    r   o   t   a   t   o   r
            f       b
    r   o   t   a   t   o   r
        b               f
    r   o   t   a   t   o   r
    it compares each iteration and increments/decrements according to what ptr it is
 */


console.log('\nRacecar');
console.log(isPalindrome("Racecar"))
// returns false

console.log('\nracecar');   
console.log(isPalindrome("racecar"))
// returns true

console.log('\na');   
console.log(isPalindrome("a"))
   // returns true

console.log('\nnoon');
console.log(isPalindrome("noon"))
   // returns true

console.log('\nhello');
console.log(isPalindrome("hello"))
   // returns false


/*logic behind this 
    Stacks store from first in is the last out FILO
    Queues store from first in is the first out FIFO
    so when storing the string in the data structure, 
        create an array for each struture
            the array would push according to the stucture:
                stack would 
*/ /*
function isItPalindrome(str) {
    let stack = [];
    let queue = [];
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    for (let j = str.length-1; j >= 0; j--) {
        queue.push(str[j]);
    }
    if(stack.toString() === queue.toString()){
        return true;
    }
    else{
        return false;
    }

}
 */
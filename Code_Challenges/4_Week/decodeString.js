/*
 * Decode String
 * Difficulty:  Medium
 * Concepts :  Loops 
 * 
 * In this challenge, you’ll write a decoder.
 * 
 * Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm
 * 
 * The number in the string represents how many characters each letter should shift. For example:
 * 
 * >>> "1a" // "b"
 * >>> "3ce" // "fh"
 * >>> "2fcjjm" // "hello"
 */

function decoder(str){
    const codeShift = parseInt(str[0]) ;
    let codeToStrResult ='';
    // Loop thru the string while string at index zero is reserved for the countcharacters shift
    for (let i= 1; i<str.length;i++){ 
        let fromCharCode = str[i].charCodeAt()+ codeShift;
        // Turning back from ASCII to regular new string 
        codeToStrResult += String.fromCharCode(fromCharCode); 
    }
    return codeToStrResult;
}

console.log(decoder('2fcjjm')); 
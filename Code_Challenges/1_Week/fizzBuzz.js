
/* 
 * Write a program that counts from 1 to 50 in fizzbuzz fashion.
 
 * To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If 
 * the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. 
 * Otherwise, say the number. let result = (n % 15 ===0)? (n % 3 ===0 ? 'fizz' : 'fizzbuzz') (n % 5 === 0 ? 'buzz'  : n ) : n;
*/

function fizzBuzz (number) {
    let result;
    for ( let n = 1; n <= number ; n++){
        result = (n % 15 === 0)? 'fizzbuzz' : (n % 3 === 0) ?  'fizz' : (n % 5 === 0) ? 'buzz'  : n;  
        console.log(result) ;
    }
}
fizzBuzz(50);


/*
 * A much clearer inner for-loop would be like:
 *     result = 
            n % 15 ===0 
                ? 'fizzbuzz'
                : n % 3 === 0 
                ? 'fizz'
                : n% 5 === 0
                ? 'buzz'
                : n;
                console.log (result);  
*/
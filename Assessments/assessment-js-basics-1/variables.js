//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
const myName = "David" ;
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
const faveNum = 23 ;
//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
let lovesCode = true ;
//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log(). 
  If it's not, console.log('').
*/

//CODE HERE
faveNum === 13 
? console.log('lucky 13!')
: console.log('not lucky 13');


//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE
for (let n of Array(5).keys()){
  n++
  console.log(`${faveNum} - ${n} time(s)` );
}


/*
 * One easy way to iterate thru a range of number is to use:
 * Array(num).keys()--best recommended Or Array(num).fill(0) 
 * 
 * 
 * This is your best bet as far as array-comprehensions are used for just this purpose. You can even write a range function to 
 * go along with this:
 * 
 * var range = (u, l = 0) => [ for( i of Array(u - l).keys() ) i + l ]
 * 
 * Then you can do:
 * 
 * [for (i of range(5)) i*i] // 0, 1, 4, 9, 16, 25
 * [for (i of range(5,3)) i*i] // 9, 16, 25
 * 
*/

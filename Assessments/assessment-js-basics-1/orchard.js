///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55


// Format prices to USD using the locale, style, and currency.
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// Declare totalAcres and concatenatedAcres variables with null value
let totalAcres = 0
let concatenatedAcres = [];

//console.log('\n'.repeat(2));
console.log('The concatenatedAcres array has the following elements: ');

// store all three arrays, (fujiAcres, galaAcres,and pinkAcres) into a one array called concatenatedAcres 
concatenatedAcres = fujiAcres.concat(galaAcres,pinkAcres);
console.log(concatenatedAcres);

// Prints a line string 
console.log('\n'+ '-'.repeat(75)+'\n');

/* Use a forEach loop to loop over each element in concatenatedAcres array*/
concatenatedAcres.forEach(element => {
    // Add each element found in the loop and store the sum to the totalAcres variable
    totalAcres += element    
});
console.log(`The total number of acres picked for the entire week is "${totalAcres}" acres\n`);

// Prints a line string 
console.log('-'.repeat(75)+'\n');

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
const averageDailyAcres = totalAcres / concatenatedAcres.length; // Use the length method to find the number of elements contained in the concatenatedAcres array.
console.log(`${averageDailyAcres} is the average number of acres picked per day\n`);                                  // Log out the average number of acres picked per day to the `averageDailyAcres` variable.


// Prints a line string 
console.log('-'.repeat(75)+'\n');

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while(acresLeft > 0 ){
    days++ ;                            // add the days up by 1 each time the loop runs.
    acresLeft -= averageDailyAcres ;    // substract the value of `averageDailyAcres` off the acresLeft each the while loop runs.
}
console.log(`It will take "${days}" work days to pick the the remaining apples over the 174 acres left.\n`);

// Prints a line string 
console.log('-'.repeat(75)+'\n');


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// Create and Initialize the array variables:
let fujiTons = []
let galaTons =[]
let pinkTons =[]

/*  
 *  Create a respective copy for each Acre types' arrays (fujiAcres, galaAcres, & pinkAcres), store their elements' values in the 
 *  respective Tons-type array variable using a forEach loop.
 */
fujiAcres.slice().forEach(e =>{ 
                                e *= 6.5;               // Multiply each element by 6.5 to convert the amount each acre produces in tons.
                                fujiTons.push(e)        // push or append each converted element to the fujiTons array
                            });

galaAcres.slice().forEach(el =>{ 
                                el *= 6.5;               // Multiply each element by 6.5 to convert the amount each acre produces in tons.
                                galaTons.push(el)        // push or append each converted element to the galaTons array
                            });

pinkAcres.slice().forEach(e =>{ 
                                e *= 6.5;               // Multiply each element by 6.5 to convert the amount each acre produces in tons.
                                pinkTons.push(e)        // push or append each converted element to the pinkTons array
                            });

// Log out the value of fujiTons
console.log(`fujiTons array contains the following values:\n`);                           
console.log(fujiTons);
// Prints a line string 
console.log('-'.repeat(75)+'\n');

// Log out the value of galaTons
console.log(`galaTons array contains the following values:\n`);                           
console.log(galaTons);
// Prints a line string 
console.log('-'.repeat(75)+'\n');

// Log out the value of pinkTons
console.log(`pinkTons array contains the following values:\n`);                           
console.log(pinkTons);
// Prints a line string 
console.log('-'.repeat(75)+'\n');

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// Create and Initialize the following variables.  
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

// Create a sum function, which takes in one parameter "arr", to loop through an array and return the sum of the total integer elements 
function sumArr(arr){
    let sum = 0;
    for (let i =0; i<arr.length; i++){
        sum += arr[i] ;
    }
    return sum ; 
}

/* Pass the values of each variety-Tons as a parameter to the sumArr function, convert the return total in pounds by multiplying 
 * it by 2000 ( 1Ton ---> 2000 Pounds) and store the results in their respective variables
 */
fujiPounds = sumArr(fujiTons) * 2000 ;
galaPounds = sumArr(galaTons) * 2000 ;
pinkPounds = sumArr(pinkTons) * 2000 ;


console.log('The total fujiPounds are:');
console.log(fujiPounds);                        // Log out the value of fujiPounds

// Prints a line string 
console.log('-'.repeat(75)+'\n');
console.log('The total galaPounds are:');
console.log(galaPounds);                        // Log out the value of galaPounds

// Prints a line string 
console.log('-'.repeat(75)+'\n');
console.log('The total pinkPounds are:');
console.log(pinkPounds);                        // Log out the value of pinkPounds



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

/* 
 * Calculate the profits made for each apple types multiplying each types by their respective price, Then divide by 100 
 * to convert cents in dollar amounts.
 */
let fujiProfit = fujiPounds * fujiPrice / 100 ;
let galaProfit = galaPounds * galaPrice /100 ;
let pinkProfit = pinkPounds * pinkPrice / 100

// Prints a line string 
console.log('-'.repeat(75)+'\n');
console.log(`Total profits of fuji apple are: ${USDollar.format(fujiProfit)}\n`);       // Log out the price of fuji apples in USD format.

// Prints a line string 
console.log('-'.repeat(75)+'\n');
console.log(`Total profits of fuji apple are: ${USDollar.format(galaProfit)}\n`);       // Log out the price of gala apples in USD format.

// Prints a line string 
console.log('-'.repeat(75)+'\n');
console.log(`Total profits of fuji apple are: ${USDollar.format(pinkProfit)}\n`);       // Log out the price of pink apples in USD format.



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// Prints a line string 
console.log('-'.repeat(75)+'\n');
const totalProfit = fujiProfit + galaProfit + pinkProfit ;                              // Add all three profit variables and store them in totalProfit
console.log(`Total profit of all three varieties are: ${USDollar.format( totalProfit)}\n`); //Log out totalProfit in USD format.

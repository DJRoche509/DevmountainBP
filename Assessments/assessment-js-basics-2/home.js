///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/

console.log('\n////////// PROBLEM 1 //////////\n');
//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE
const greetUser = username => `Welcome back, ${username}!`;
console.log(greetUser('Coolyo')) ;



console.log('\n////////// PROBLEM 2 //////////\n');
//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

//CODE HERE
const canWeDeliver = zipCode => 
    deliveryAreaZipCodes.includes(zipCode)
    ? `Your package with area code: "${zipCode}" is eligible for delivery.`
    : `Sorry, we can't deliver to that address with area code: "${zipCode}".`;

console.log(canWeDeliver(85202));

//Prints a line for separation purpose
console.log('\n'+'-'.repeat(50)+'\n');
/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE
// we define the function `canWeDeliverTwo` and pass in the argument `zipCod`
const canWeDeliverTwo = zipCod => {
   // Create a variable `delivery` which holds the string "Sorry, we can't deliver to that address" by default
    let delivery = `Sorry, we can't deliver to that address with area code: "${zipCod}".`;
    // Use the `forEach` method to loop thru each element in the `delivAreaZipcodes` array
    deliveryAreaZipCodes.forEach( code => 
        // Check if the current `code` is equal to the `zipCod` Inside the `forEach` loop
        delivery = code === zipCod 
        //If a match is found, update the `delivery` variable to hold the string "Your package with area code [ZIPCODE] is elegible for delivery."
        ? `Your package with area code: "${zipCod}" is elegible for delivery.`
        :delivery); 
    // Return the value of the `delivery` variable at last
    return delivery; 
    }
// invoke canWeDeliverTwo passing in a zipcode as argument and Log out the the result  
console.log(canWeDeliverTwo(85204));



//Prints a line for separation purpose
console.log('\n'+'-'.repeat(50)+'\n');



console.log('\n////////// PROBLEM 3 //////////\n');
//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE
const firstDealTitle = deals[0].title.replace('15% Off!', '10% Off!')
console.log(firstDealTitle);




//Prints a line for separation purpose
console.log('\n'+'-'.repeat(50)+'\n');

/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE
const secondDealDesc = deals[1].desc.replace('March', 'April').trim();
console.log(secondDealDesc);

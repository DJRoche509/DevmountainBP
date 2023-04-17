///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

console.log('\n////////// PROBLEM 1 //////////');
//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total, curr) => total+curr.price,0);
console.log(summedPrice);


console.log('\n////////// PROBLEM 2 //////////');
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal,couponValue,tax ){
    cartTotal = cartTotal * (1 + tax) - couponValue ;
    return +cartTotal.toFixed(2) ;
}

console.log(calcFinalPrice(101,13,.075));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    customers = ( name, favorite meal, favorite drink, eating place, order quantity) 
    
    In regards to customers, I imagine a restaurant should be concern about the following properties whenit comes to customers. 
    first, their names --of string type, because each customer should be address by their names when taking or calling to pick-up orders. 
    Maybe, their favorite meals or regular meals --of type: string-- they would like to place in order. Same goes for their drinks. For instance, it could be 
    coffee, tea, soda or a soft drink.
    Next, the location --of type: string-- they would like to consume their orders. It could be a to-go or dine-in type of order.
    At last, not least, the quantity --of type: Integer--  of their orders. It could be a meal for one person or several meals that one customer might like to order at once.  

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
customers = [
    {
        name : 'Juliette',
        favMeal : 'croissant' ,
        favDrink : 'Hot Choco' , 
        eatPlace : 'To-go',
        quantity : 2
    },
    {
        name : 'Romeo',
        favMeal : 'omelette' ,
        favDrink : 'coffee' , 
        eatPlace : 'dine-in',
        quantity : 3
    },
    {
        name : 'Marie',
        favMeal : 'hashbrown' ,
        favDrink : 'tea' , 
        eatPlace : 'To-go',
        quantity : 1
    },
    {
        name : 'Robocop',
        favMeal : 'donut' ,
        favDrink : 'water' , 
        eatPlace : 'dine-in',
        quantity : 1
    }
]
///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/

console.log('\n////////// PROBLEM 1 //////////\n');
//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like '' or
    ''
*/

//CODE HERE
const pizza = {
    name : 'Blackened-Piz' ,
    price : 10.99,
    category : 'appetizer' ,
    popularity : 4.1 ,
    rating : 4.5 ,
    tags : ['gluten-free', 'kids', 'hot', 'mild', 'vegan']
 }
 console.log('"Pizza Properties" =' ,pizza);


 console.log('\n////////// PROBLEM 2 //////////');
//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(`Pizza has the popularity of: ${pizza.popularity}`);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/


//Prints a line for separation purpose
console.log('\n'+'-'.repeat(50)+'\n');

//CODE HERE
console.log(`"${pizza.tags[1]}" is the second tag in pizza.`);

//Prints a line for separation purpose
console.log('\n'+'-'.repeat(50)+'\n');


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
pizza.price = 7.99 ;
console.log(pizza);


//Prints a line for separation purpose
console.log('\n'+'-'.repeat(50)+'\n');

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
pizza['category'] = 'entree' ;
console.log(pizza);

//Prints a line for separation purpose
console.log('\n'+'-'.repeat(50)+'\n');


console.log('\n////////// PROBLEM 3 //////////');
//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
const foodArr = [
    {
        name : 'Blackened-Piz' ,
        price : 10.99,
        category : 'appetizer' ,
        popularity : 4.6 ,
        rating : 4.9 ,
        tags : ['gluten-free', 'mild', 'vegan', 'medium-carb', 'high-protein']
    }, 
    {
        name : 'Hawaian-Piz' ,
        price : 9.79,
        category : 'entree' ,
        popularity : 4.1 ,
        rating : 4.5 ,
        tags : ['kids', 'hot', 'sweet', 'high-carb']
    }, 
    {
        name : 'GreenHouzz-Piz' ,
        price : 7.59,
        category : 'appetizer' ,
        popularity : 3.6 ,
        rating : 3.4 ,
        tags : ['gluten-free', 'kids', 'mild', 'vegan', 'low-carb']
     },
     {
        name : 'Polemo-Piz' ,
        price : 11.49,
        category : 'entree' ,
        popularity : 3.3 ,
        rating : 4.1 ,
        tags : ['gluten-free', 'kids', 'mild', 'low-protein']
     },
     {
        name : 'Yellow-Thunder-Piz' ,
        price : 12.99,
        category : 'entree' ,
        popularity : 4.9 ,
        rating : 4.7 ,
        tags : ['hot', 'high-protein', 'italian', 'high-carb']
     }
]
 

console.log('\n////////// PROBLEM 4 //////////');
//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(wMild => wMild.tags.includes('mild')) ;
console.log(filteredFood);


console.log('\n////////// PROBLEM 5 //////////\n');
//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
function filterByProperty(property, number, type){
    let filteredFoodArr= [] ;
    filteredFoodArr = 
        type === 'above'  //Check if type is 'above'
            ? foodArr.filter(food => +food[property] > number)
            // if not 'above', it returns properties that are less than the number pass in
            : foodArr.filter( food => +food[property] < number )  ;
    return filteredFoodArr ;   
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
const checkFilteredProperty1 = filterByProperty('rating', 4.5, 'above');
const checkFilteredProperty2 = filterByProperty('rating', 4.3, 'below');

console.log(checkFilteredProperty1);

//Prints a line for separation purposes
console.log('\n'+'-'.repeat(50)+'\n');

console.log(checkFilteredProperty2);

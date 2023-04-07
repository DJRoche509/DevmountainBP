/* 
Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
instruments.unshift(`guitar`);

/* 
Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
instruments.splice(2, 1, `glockenspiel`);
// let replacedVal = instruments.splice(2,1,'glockenspiel')
console.log(instruments);

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
if (num % 2 === 0) {
  console.log(num);
} else {
  console.log(`${num} is not an even number`);
}

// !!! Don't edit the code below !!! //
let score = 70;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
if (score <= 10) {
  console.log("Failed");
} else if (score > 10 && score < 41) {
  console.log(`the grade is C`);
} else if (score > 40 && score < 71) {
  console.log(`the grade is B`);
} else {
  console.log(`the grade is A`);
}

// switch (true) {
//   case (score <= 10):
//     console.log("Falied");
//     break;
//   case (score > 10 && score < 41):
//     console.log(`the grade is C`);
//     break;
//   case (score > 40 && score < 71):
//     console.log(`the grade is B`);
//     break;
//   default:
//     console.log(`the grade is A`);
// }
// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let total = 0
for(let i = 0;i < price.length;i++){
     total += price[i] 
}
let average = total/price.length
console.log(average)


/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

// !!! Don't edit the code below !!! //
let colors = ["red", "green", "yellow", "red", "green",'purple'];
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for(let i = 0;i < colors.length;i++){
    if(colors[i] === 'red'){
        console.log('apple')
    } else if(colors[i] === 'green'){
        console.log('melon')
    } else if(colors[i] === 'yellow'){
        console.log('banana')
    } else {
        console.log(`no fruit`)
    }
}

// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        -- github
        -- git init
        -- git clone
        -- git status
        -- git add
        -- git commit
        -- git push
    - How to push git to github
*/
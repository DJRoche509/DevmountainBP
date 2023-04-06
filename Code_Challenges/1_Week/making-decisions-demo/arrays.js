/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];
let belt = [];

backpack.push('sword') ;
backpack.push('torch') ;
backpack.push('food') ;
backpack.push('kleenex') ;
backpack.push('shield') ;
backpack.push('clorox') ;
backpack.push('sweater') ;

let sword = backpack.splice(3,1) ;
belt.push(sword) ;

backpack.push('furcoat') ;

// remove the first item (sword)
// belt.push(backpack.splice(0,1)[0]) ;
// console.log('Backpack:', backpack); 
// console.log('Belt:' , belt);

backpack.pop()

backpack.push('flint', 'blanket', 'knife', 'toothbrush', 'cellphone');
let itemCount = backpack.length;

console.log(`Item Count: ${itemCount}`) ;


let backpack2 = backpack.splice(6,3);

console.log('Backpack:');
for (let item in backpack){
    console.log(backpack[item]) ;
}


// What is the final value of guessMe?
let guessMe = 54;

while (guessMe < 100) {
    console.log('-----------------');
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('guessMe is divisible by 4 or 5. Added 25.');
        guessMe += 25;
    } else if (guessMe % 3 === 0) {
        console.log('guessMe is divisible by 3. substracted 27.');
        guessMe -= 27;
    } else {
        console.log('Added 3.');
        guessMe += 3;
    }
    guessMe += 22;
    // As final value, it should print out: 119
    console.log(`added 22. guessMe is now ${guessMe}`);
}
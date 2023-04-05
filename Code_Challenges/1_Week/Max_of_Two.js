// Max of Two
// Difficulty
// Easy

// Concepts
// Mathematical Operators, Conditionals


// Given the starting code of:

// x = 1
// y = 2
// Write a block of code that will print out the largest value.

// Using the given values as an example, your code should print out 2.

// To verify your code is working properly, try and change the values of x and y.

// As an additional challenge, print out The values are identical. if x and y have the same value.

function Max_of_two(num_1, num_2) {
    if (num_1 > num_2){
        return num_1;
    }
    else {
        return num_2;
    }
}

console.log(Max_of_two(21,25))

const { default: expect } = require('expect');
const {returnTwo,greeting,add} = require('./functions.js') ;

//basic test
test('ReturnTwo test', () =>{
    expect(returnTwo()).toBe(2);
}); 

test('Greeting test', () => {
    expect(greeting('James')).toBe('Hello, James.');
    expect(greeting('Jill')).toBe('Hello, Jill.');
})


test('Addition test', () => {
    expect(add(8,5)).toBe(13);
    expect(add(21,9)).toBe(30);
})


// Extra Challenge solution
let extraFunctions = require('./functions') //Instead of destructuring, we could require function componenent as such
describe("Math Challenge!", () => {
   test("Subtract", () => {
        expect(extraFunctions.subtract(21, 17)).toBe(4)
    })
    test("Multiply", () => {
        expect(extraFunctions.multiply(9, 7)).toBe(63)
    })
    test("Divide", () => {
        expect(extraFunctions.divide(72, 8)).toBe(9)
    })
})
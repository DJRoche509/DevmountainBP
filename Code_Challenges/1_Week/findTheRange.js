// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let smallest = array[0] ;
let largest = array[0] ;

for (var i=1; i<array.length; i++){
    if (array[i] < smallest){
        smallest= array[i] ;
    }
    if (array[i]>largest){
        largest = array[i] ;
    }
}
console.log(`Array has the following values: [ ${array} ]`)
console.log('--------------------------------')
console.log(`The smallest is: ${smallest}. The largest: ${largest} `);
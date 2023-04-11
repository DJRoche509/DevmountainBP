
//                                FIND LUCKY NUMBERS

/*
 * Given a number, n, return an array containing n unique random numbers between 1-10, inclusive.(That is, do not repeat any numbers 
 * in the returned list.) You can trust that this function will never be called with n < 0 or n > 10.
 *
 * For example: 
 * 
 * luckyNumbers(2)  ---> returns (3, 7)
 * luckyNumbers(6)  ---> returns (1, 7, 9, 6, 5, 2)
 * 
 */


// Write your code below this line.

function luckyNumbers(n){
    let possibleNumbs = [1,2,3,4,5,6,7,8,9,10];
    let luckyArrNum= [] ;
    for (let i=1; i<=n; i++ ){
        let indx = Math.floor(Math.random()*possibleNumbs.length) ;
        luckyArrNum.push(possibleNumbs[indx]);
        possibleNumbs.splice(indx,1)
    }
    return luckyArrNum;
}

//  // INITIALIZE THE FUNCTION
//  function generateRandomNumbers(n) {
//     // DECLARE EMPTY ARRAY VARIABLE
//     let luckyArray = [];
  
//     // LOOP TO MEET THE LENGTH OF N
//     while (luckyArray.length < n) {
//       // MATH.RANDOM Generates Random Float Numbers
//       // MATH.FLOOR Rounds Down The Float to an Integer
//       // +1 TO Increase The "0 - 9" To Meet The Range "1 To 10" 
//       let randomNumber = Math.floor(Math.random() * 10) + 1;
  
//       // PUSH METHOD TO ADD THE RANDOM NUMBER IF IT IS NOT ALREADY PRESENT IN THE ARRAY
//       if (!luckyArray.includes(randomNumber)) {
//         luckyArray.push(randomNumber);
//       }
//     }
//     return luckyArray;
//   }  
//   console.log(generateRandomNumbers(6));
  
console.log(luckyNumbers(2)) ;
console.log(luckyNumbers(6)) ;
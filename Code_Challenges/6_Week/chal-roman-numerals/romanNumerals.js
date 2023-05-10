/**
 * Roman Numerals
 * 
 * Difficulty: Medium
 * 
 * Concepts: General, Math
 * 
 * Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.
 * 
 * For reference, these are the building blocks for how we encode numbers with Roman numerals:
 * 
 * Decimal Roman
 *  
 * 1             I
 * 5             V
 * 10            X 
 * 50            L
 * 100           C 
 * 500           D
 * 1,000         M
 * 
 * For example:
 * 
 * toRoman(5)
 * 'V'
 * 
 * toRoman(267)
 * 'CCLXVII'
 * 
 * Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).
 * 
 * For example:
 * 
 * toRoman(99)
 * 'LXXXXVIIII'
 */

/**
 * 
 * @param {Integer} decimal 
 * @returns {string}
 */
function toRoman(decimal) {
    let romanStr = '';
    let decimalRoman = {
        1: 'I',
        5: 'V',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M'
    }

    while (decimal > 0){
        if (decimal ===1000){
            romanStr = decimalRoman['1000'];
            decimal -=1000;
        } else if (decimal >= 500){
            romanStr += decimalRoman['500'];
            decimal-=500;
        } else if (decimal >= 100){
            romanStr += decimalRoman['100'];
            decimal-=100;
        } else if (decimal >= 50){
            romanStr += decimalRoman['50'];
            decimal-=50;
        } else if (decimal >= 10){
            romanStr += decimalRoman['10'];
            decimal-=10;
        } else if (decimal >= 5){
            romanStr += decimalRoman['5'];
            decimal-=5;
        } else {
            romanStr += decimalRoman['1'];
            decimal-=1;
        } 
    }
    return romanStr;
}



// This Solution methods converts to modern Roman numerals, where substraction is used. Ex: 4 = 'IV" --but NOT 'IIII' 
// function toRoman(decimal) {
//     let romanStr = '';
//     while (decimal > 0){
//         if (decimal === 1000){
//             romanStr = decimalRoman['1000']; decimal-=1000
//         }else if (decimal>=500){
//             if (decimal > 899){
//                 romanStr += decimalRoman['100']+decimalRoman['1000'] ; decimal -=900
//             } else { romanStr += decimalRoman['500']; decimal-=500 }
//         } else if(decimal >= 100){
//             if (decimal > 399){
//                 romanStr += decimalRoman['100']+decimalRoman['500']; decimal -= 400
//             } else { romanStr += decimalRoman['100']; decimal -=100  }
//         } else if (decimal >= 50){
//             if (decimal > 89){
//                 romanStr += decimalRoman['10']+decimalRoman['100']; decimal -= 90
//             } else {  romanStr += decimalRoman['50']; decimal -=50 }
//         } else if (decimal >= 10){
//             if (decimal > 39){
//                 romanStr += decimalRoman['10']+decimalRoman['50']; decimal -= 40
//             } else { romanStr += decimalRoman['10']; decimal-=10 }
//         }else if (decimal >= 5){
//             if (decimal > 8){
//                 romanStr += decimalRoman['1']+decimalRoman['10']; decimal -= 9
//             }else{ romanStr += decimalRoman['5']; decimal -=5 }
//         }else {
//             if (decimal>3){ romanStr += decimalRoman['1']+decimalRoman['5']; decimal -=4 }
//             else { romanStr += decimalRoman['1']; decimal-=1}
//         }
//    }return romanStr;
// }

console.log(toRoman(99));
// 'LXXXXVIIII'

console.log(toRoman(267));
// 'CCLXVII'
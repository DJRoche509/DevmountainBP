// Has Unique Characters

/*
 * Given a word, return true if that word contains only unique characters. Return false otherwise.  
 * For example:
 *
 * hasUniqueChars("Monday")
 * // returns true
 * 
 * hasUniqueChars("Moonday")
 * // returns false
 * 
 * 
 * Uppercase and lowercase letters should be considered separately:
 * 
 * hasUniqueChars("Bob")
 * // returns true
 * 
 */


const checkUniqString = wordStr => {
    const strSets= new Set(wordStr);
    // console.log(strSets.keys());
    if (wordStr.length === strSets.size ) {
        return true;
    }  
    return false;
}

/*      Alternatively, we could do:

const checkUniqString = (wordStr) => {
    const strSets= new Set([]);
    for (let i = 0; i < wordStr.length; i++){
        strSets.add(wordStr[i]) ;
    }
    return strSets.size === wordStr.length;
}
 */

console.log(checkUniqString("Monday"));
console.log(checkUniqString("Moonday"));
// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

function addToZero(arr){
    // Create two variables m and n.
    let m , n ; 
    for (n=0; n<arr.length; n++){
        m = 0 ;
        while (m < n) {
            if (arr[m] + arr[n]=== 0){
                console.log(arr[m], arr[n]); 
                console.log(true);
                console.log(`${'-'.repeat(30)}\n`);
                return ;
            }   else{
                m++ ;
            } 
        }    
    }
    console.log(!true) ;
    console.log(`${'-'.repeat(30)}\n`);
}


addToZero(array);                       // Should log "true"
addToZero([0, 1, 2, 3, 4, 5]) ;         // Should log "false"
addToZero([1, 4, 11, 2, 37, -4]);       // Should log "true"
addToZero([0, 21, 33, 6, 0, -9]);       // Should log "true"

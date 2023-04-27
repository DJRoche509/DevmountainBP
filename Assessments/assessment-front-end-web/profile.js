
// Create buttons variable and assign a list of buttons using "buttons" class
let buttons = document.getElementsByClassName("buttons");
// console.log(buttons);

/**
 * 
 * @param {*} event 
 * @returns {string} function value from SendAlert that will be displayed on screen.
 */
const checkClickedButtons = event=>{
    event.preventDefault();
    // const checkedButtons = event.target.nodeName === 'BUTTON' ;
    let element = document.getElementById(event.target.id);
    // if (!checkedButtons ){
        // return;
    // }
    if (!element.classList.contains("styled_buttons")){
        element.classList.add("styled_buttons");
        // Send alert only if button doesn't contain class
        SendAlert (event.target.id) ;
    } 
    else {
        // Second click on button to desactivate orange big button
        element.classList.remove("styled_buttons");
    }
}

/**
 * 
 * @param {string} idName - The id value recieved  from event.target.id, checkClickedButtons()
 * @returns {string} alertResult - The resulted value from the if/else ternary statement 
 */
function SendAlert(idName){
    let alertResult ='';
    alertResult =
        idName === 'color'
        ? alert('My favorite color is blue') 
        : idName === 'place'
        ? alert('My favorite place is by the beach')
        : alert(`My favorite ritual is having 'Hot chocolate' with buttered bread at night with family`);
    return alertResult ;
}

// Addd eventlistenr to each button in the buttons  array
for (let i =0; i<buttons.length; i++){
    buttons[i].addEventListener('click', checkClickedButtons) ;
}


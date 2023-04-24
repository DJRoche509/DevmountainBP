console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('The form has been submitted successfully') ;
}

const mouseOverImage = evt =>{
	evt.preventDefault();
	// alert(`I'm hovering on the pic`);
	let listems = document.getElementById('compliments').getElementsByTagName('li'); 
	let i = Math.floor(Math.random()*listems.length) ;
	alert(listems[i].innerText );
	
}

let form = document.querySelector('#contact');
let pictureOnForm = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
pictureOnForm.addEventListener('mouseover', mouseOverImage);

console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
let rubberDuckImg = document.querySelector('img')

function compliments(){
	alert("how you doooinn")
}


rubberDuckImg.addEventListener('mouseover', compliments)

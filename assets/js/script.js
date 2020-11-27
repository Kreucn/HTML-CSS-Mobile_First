// JS by Kristoffer Egholm Wendelboe
// UCN MMD 2020

// This is NOT something we are familiar with by now, but needed to make it abit more functional 

// setup variables for things that are used more than once
let elmBody = document.querySelector('body');
const strActive = 'nav-active';

// Add class "nav-active" to <body> when #menu-btn is clicked
document.querySelector('#menu-btn').addEventListener('click', function(event){
	event.preventDefault(); // stops the element from doing its usual stuff
	elmBody.classList.add(strActive); // add the content of strActive to the class attribute on <body>
});

// remove class "nav-active" from <body> when #menu-btn-close is clicked
document.querySelector('#menu-btn-close').addEventListener('click', function(event){
	event.preventDefault(); // stops the element from doing its usual stuff
	elmBody.classList.remove(strActive); // remove the content of strActive to the class attribute on <body>
});
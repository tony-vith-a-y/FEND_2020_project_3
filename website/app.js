/* Global Variables */
const apiKey = '17abb78f40689b5be365cfb6123d4cd7';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;

// Global Variables
const button = document.getElementById('generate');
const getText = document.getElementById('feelings');
const displayText = document.getElementById('content');
const displayDate = document.getElementById('date');
const displayTemp = document.getElementById('temp');

// When clicking on the Generate Button
const buttonClicked = (e) => {
	console.log(e.target);
	console.log('button has been clicked');
	console.log(newDate);
	displayDate.innerText = newDate;
	displayText.innerText = getText.value;
};
button.addEventListener('click', buttonClicked);

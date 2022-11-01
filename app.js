/* Imports */

/* Get DOM Elements */
const buttonOne = document.getElementById('button1');
const buttonTwo = document.getElementById('button2');
const buttonThree = document.getElementById('button3');
const imgOne = document.getElementById('img1');
const imgTwo = document.getElementById('img2');
const imgThree = document.getElementById('img3');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const total = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;

function resetImg() {
    imgOne.src = './assets/cup.png';
    imgTwo.src = './assets/cup.png';
    imgThree.src = './assets/cup.png';
}

function displayScores() {
    wins.textContent = wins;
    losses.textContent = total - wins;
    total.textContent = total;
}

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

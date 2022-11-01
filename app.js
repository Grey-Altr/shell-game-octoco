/* Imports */

/* Get DOM Elements */
const buttonOne = document.getElementById('button1');
const buttonTwo = document.getElementById('button2');
const buttonThree = document.getElementById('button3');
const imgOne = document.getElementById('img1');
const imgTwo = document.getElementById('img2');
const imgThree = document.getElementById('img3');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;

/* Events */
buttonOne.addEventListener('click', () => {
    resetImg();
    total++;
    const genRandCup = Math.floor(Math.random() * 3);
    if (genRandCup === 0) {
        wins++;
        imgOne.src = './assets/correct-cup.png';
    } else if (genRandCup === 1) {
        imgTwo.src = './assets/correct-cup.png';
    } else {
        imgThree.src = './assets/correct-cup.png';
    }
    displayScores();
});

buttonTwo.addEventListener('click', () => {
    resetImg();
    total++;
    const genRandCup = Math.floor(Math.random() * 3);
    if (genRandCup === 0) {
        imgOne.src = './assets/correct-cup.png';
    } else if (genRandCup === 1) {
        imgTwo.src = './assets/correct-cup.png';
        wins++;
    } else {
        imgThree.src = './assets/correct-cup.png';
    }
    displayScores();
});

buttonThree.addEventListener('click', () => {
    resetImg();
    total++;
    const genRandCup = Math.floor(Math.random() * 3);
    if (genRandCup === 0) {
        imgOne.src = './assets/correct-cup.png';
    } else if (genRandCup === 1) {
        imgTwo.src = './assets/correct-cup.png';
    } else {
        imgThree.src = './assets/correct-cup.png';
        wins++;
    }
    displayScores();
});
/* Display Functions */
function resetImg() {
    imgOne.src = './assets/cup.png';
    imgTwo.src = './assets/cup.png';
    imgThree.src = './assets/cup.png';
}

function displayScores() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

// (don't forget to call any display functions you want to run on page load!)

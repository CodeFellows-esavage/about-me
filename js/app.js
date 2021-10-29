'use strict';
let firstName = "";
let answer1, answer2, answer3, answer4, answer5;
let score = 0;
let secretNum = Math.trunc((Math.random()* 10)) + 1;


function getName() {
    firstName = prompt("Enter your first name!", "First Name...");
    document.querySelector('h2').textContent = `Welcome to my website ${firstName}!`;
   }

/*

functions question();, nIsCorrect();, yIsCorrect; replaced by quiz();

function question(ask){
    let answer = prompt(ask, "Y or N");
    console.log(answer);
    while (answer.toUpperCase() !== "Y" && answer.toUpperCase() !== "N"){
        answer = prompt(ask, "Try again... Y or N");
    }
    return answer.toUpperCase();
};

function nIsCorrect (answer) {
    if (answer === "Y") {
        // console.log("⛔️ wrong answer ⛔️");
        alert("⛔️ wrong answer ⛔️");
        } else {
            // console.log("🎉 correct! 🎉");
            alert("🎉 correct! 🎉");
            score++;
        }
}

function yIsCorrect (answer){
    if (answer === "Y") {
        // console.log("🎉 correct! 🎉");
        alert("🎉 correct! 🎉");
        score++;
    } else {
        // console.log("⛔️ wrong answer ⛔️");
        alert("⛔️ wrong answer ⛔️");
    }
}
*/

//Array of quiz questions and the answers [question, answer]
const quizArray = [
    ['Erik lives in Seatac Washington.', 'N'],
    ['Erik has two (2) childeren.', 'Y'],
    ['Erik graduated from WWU with a Mechanical Engineering Degree', 'N'],
    ['Erik helped manufacture components of the Valve Index VR system', 'Y'],
    ['Erik is trying to become a full stack Java software developer', 'N'],
];

function quiz(){
    for (let i = 0; i < quizArray.length; i += 1){
        let answer = prompt(quizArray[i][0], 'Y or N').toUpperCase();
        while (answer !== "Y" && answer !== "N"){
            answer = prompt(quizArray[i][0], "Try again... Y or N").toUpperCase();
        }
        if (answer === quizArray[i][1]){
            alert("🎉 correct! 🎉");
            score++; 
        } else {
            alert("⛔️ wrong answer ⛔️");
        }
    }
};

function numGame () {
    let numGuess = prompt("Guess a number between 1 - 10")
    console.log(secretNum);

    for (let i = 1; i <= 4; i++){
        while (numGuess < 1 || numGuess > 10) { //Daniel Jackson helped with this
            // console.log(typeof(numGuess));
            numGuess = prompt("Try again... a number");
        }
        if (Number(numGuess) === secretNum){
            alert("🎉 Correct! 🎉");
            score ++;
            break;
        } else if (i === 4) {
            alert(`Sorry the correct number was ${secretNum}`);
        } else if (numGuess > secretNum) {
            numGuess = prompt(`⬆️ ${numGuess} Was Too High ⬆️ Guess Again!`, `${4 - i} guesses left`);
        } else {
            numGuess = prompt(`⬇️ ${numGuess} Was Too Low ⬇️ Guess Again!`, `${4 - i} guesses left`);
        }
    }
}

// Guess the name of one of my cats:
// Chloe, Poncho are right
// Grits, Mr. Bitey, Chloe, Miso, Bob, Oliver, Poncho Alice, Dickens, Tater

// positions, 2 & 6 are correct, all others are wrong
// prompt for cat name, then check if cat name entered is on list, if so check if the right name, if not, prompt again, for a total of 6 trys.

const catNames = ['Grits', 'Mr. Bitey', 'Chloe', 'Miso', 'Bob', 'Oliver', 'Poncho', 'Alice', 'Dickens', 'Tater'];
console.log(catNames);
let cat; 
let validCat = false;
let cancel = false;

// check for cat name is on list
function catGame() {
    for(let attempt = 1; attempt <= 6; attempt++){
        validCat = false;
        cancel = false;
        while(validCat === false && cancel === false){
            for (let i = 0; i < catNames.length; i++){
                if(cat.toUpperCase() === catNames[i].toUpperCase()){
                    console.log(`${cat} is in the list`);
                    validCat = true;
                    break;
                } else if (cat === null){
                    cancel = true;
                    console.log('canceling');
                    break;
                } else if (i === catNames.length - 1){
                    console.log(cat, '🙀 Not on List...');
                    cat = prompt('🙀 Not on List... Grits, Mr. Bitey, Chloe, Miso, Bob, Oliver, Poncho, Alice, Dickens, Tater', 'Guess Again!');
                }
            }
        }
        if(cat.toUpperCase() === catNames[2].toUpperCase() || cat.toUpperCase() === catNames[6].toUpperCase()){
            alert("🎉 Correct! 🎉");
            score++;
            break;
        } else if (attempt === 6) {
            alert(`All attempts were wrong... we were looking for ${catNames[2]} or ${catNames[6]}!`);
        } else {
            console.log(attempt);
            cat = prompt('🙀 Wrong, Try Again! ... Grits, Mr. Bitey, Chloe, Miso, Bob, Oliver, Poncho, Alice, Dickens, Tater', 'Guess Again!');
        }
    }
}
// Execution Order
getName();
document.querySelector('#test').addEventListener('click', function(){
    score = 0;
    quiz();
    /* 
    commented code below was replaced by quiz();

    // answer1 = question("Erik lives in Seatac Washington.");
    // // N is correct, Y is wrong
    // nIsCorrect(answer1);
    
    // answer2 = question("Erik has two (2) childeren.");
    // // Y is correct, N is wrong
    // yIsCorrect(answer2);
    
    // answer3 = question("Erik graduated from WWU with a Mechanical Engineering Degree");
    // // N is correct, Y is wrong
    // nIsCorrect(answer3);
    
    // answer4 = question("Erik helped manufacture components of the Valve Index VR system");
    // // Y is correct, N is wrong
    // yIsCorrect(answer4);
    
    // answer5 = question("Erik is trying to become a full stack Java software developer");
    // // N is correct, Y is wrong
    // nIsCorrect(answer5);
    */
    
    numGame();
    cat = prompt("One of my cats is named... Grits, Mr. Bitey, Chloe, Miso, Bob, Oliver, Poncho, Alice, Dickens, Tater", "Guess a valid name...");
    catGame();
    alert(`Congrats ${firstName} you got ${score}/7 Correct!`);
    
    document.querySelector('#score').textContent = `Score: ${score}/7`
});
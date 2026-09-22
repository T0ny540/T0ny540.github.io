console.log("Whoa");

//make a variable called answer with a value of 48
//set aside a space named answer that has 48 in it
function getRandomNumber() {
    return Math.floor(Math.random() *99) + 1;
}

let answer = getRandomNumber();

const guesses = [];

let triesLeft = 7;
let wins = 0;
let losses = 0;


const winMessage = "Congratulations you guessed it";


//look up an element with an id of guessMessage (#guessMessage)
//and bind it to a variable named guessMessage
let guessMessage = document.querySelector("#guessMessage");
let resetButton = document.querySelector("#resetButton");
let winsDisplay = document.querySelector("#wins");
let lossesDisplay = document.querySelector("#losses");

resetButton.style.display = "none"; 

//making a function sets aside the code so you can run it later
//it's a named block of code, it starts and ends with curly braces
function showWin() {
    //equals (=) in javascript means change the value
    //change the text inside an element
    guessMessage.textContent = winMessage;

    //the style object in any element lets you change CSS stuff
    //change the color of the font to green
    guessMessage.style.color = "green";
}

//a function name with parentheses after it,
//makes the funciton happen immediately
//showWin();

function finishGame(message, color) {
    guessMessage.textContent = message;
    guessMessage.style.color = color;

    guessButton.style.display = "none";
    resetButton.style.display = "inline-block";
}




let guessButton = document.querySelector("#guessButton");
//this makes it so when you click on guess button, the function showWin happens
//guessButton.addEventListener("click", showWin);


//shorthand
guessButton.addEventListener('click', function () {

    //this changes the variable's value so it's one less than it used to be
    triesLeft -= 1; //-=, +=, /=, *=

    console.log(triesLeft);


    if (guessInput.value === "" || +guessInput.value < 1 || +guessInput.value > 99) {
        guessMessage.textContent = "Please enter a number from 1 to 99.";
        guessMessage.style.color = "red";
        triesLeft += 1;
        return;
    }

    guesses.push(+guessInput.value);
    guessesDisplay.textContent = guesses;

    //This makes it so "You won" only shows up in the console if the input you typed matches the correct answer
    if (+guessInput.value === answer) {
        //what happens if the value you typed matches the answer
        console.log("You won!");
        wins += 1;
        winsDisplay.textContent = wins;

        guessMessage.textContent = winMessage;
        guessMessage.style.color = "green";

        guessButton.style.display = "none";
        resetButton.style.display = "inline-block";

    } else if (+guessInput.value > answer) {
        //what happens if the guess is too high
        console.log("Too high!");

        if (triesLeft === 0) {
            losses += 1;
            lossesDisplay.textContent = losses;

            finishGame("You lost! The number was " + answer + ".", "red");
        } else {
            guessMessage.textContent = "Too high! " + triesLeft + " tries left";
            guessMessage.style.color = "red";
        }

    } else if (+guessInput.value < answer) {
        //what happens if the guess is too low
        console.log("Too low!");

        if (triesLeft === 0) {
            losses += 1;
            lossesDisplay.textContent = losses;

            finishGame("You lost! The number was " + answer + ".", "red");
        } else {
            guessMessage.textContent = "Too low! " + triesLeft + " tries left";
            guessMessage.style.color = "red";
        }
    }

});


let guessInput = document.querySelector("#guessInput");
let guessesDisplay = document.querySelector("#guesses");

resetButton.addEventListener("click", function () {
    answer = getRandomNumber();
    guesses.length = 0;
    triesLeft = 7;

    guessesDisplay.textContent = "";
    guessMessage.textContent = "Message goes here";
    guessMessage.style.color = "black";
    guessInput.value = "";

    guessButton.style.display = "inline-block";
    resetButton.style.display = "none";
});

//Question operators
// == match - the left and right have to match values for the answer to be yes
// != not match - the left and right have to be different for the answer to be yes
// === strict match - the left right have to have the same value and type for the answer to be yes

//the + converts the text in the input box to a number
// we compare to the answer to see if they match



//if statement:
// if (question) {
//     if answer is yes, do this
// }
// else {
//     otherwise, do this
// }


//stacked if statement
//if (question 1) {
    // if answer is yes, do this
//} else if (question 2) {
    //if answer is yes, do this
//} else if (question 3) {
    //if answer is yes, do this
//}
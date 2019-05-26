var Word = require("./word");
var inquirer = require("inquirer");
var color = require("cli-color");
//* Randomly selects a word and uses the `Word` constructor to store it
var words = ['Rocket', "Train", "Machine", "Helium", "Zeppelin"];

var word = new Word(
    words[Math.floor(Math.random() * 5)]
);


//* Prompts the user for each guess and keeps track of the user's remaining guesses
async function game(){
    var guesses = 10;
    // while user hasnt won or run out of guesses
    console.log(word.wordString());
    while (!word.checkIfGuessed() && guesses > 0){
        // ask user for a guess
        let answer = await inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Please guess a letter"
            }
        ])
        // check guess in word
        let wasGuessed = word.callGuess(answer.letter);
        // if its correct
        if (wasGuessed) {
            // print, correct
            console.log(color.green("Correct!"));
            
        }
        // if not
        else {
            // print incorrect
            console.log(color.red("Incorrect!, Try again!"))
            // subtract one guess
            guesses--;
        }
        console.log(word.wordString());
    }
}
game();
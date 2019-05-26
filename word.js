var Letter = require("./Letter");

// Constructor for making each letter an object
var Word = function (wordToGuess) {
    // An array of`new` Letter objects representing the letters of the underlying word      
    this.lettersToGuess = []
    for(let letter of wordToGuess){
        this.lettersToGuess.push(
            new Letter(letter)
        );
    }
    // A function that returns a string representing the word.This should call the function on each letter object(the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.wordString = function(){
        var wordString = '';
        for(let letter of this.lettersToGuess){
            // call value function and concatenate to result
            wordString += letter.returnSymbol()+' ';
        }
        return wordString;
    }
    // A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in `Letter.js`)
    this.callGuess = function(character) {
        var aLetterWasGuessed = false;
        for (let letter of this.lettersToGuess) {
            let isGuessed = letter.checkCharacter(character);
            if(isGuessed){
                aLetterWasGuessed = true;
            }
        }
        return aLetterWasGuessed;
    }

    //Check if all the letters have been guessed
    this.checkIfGuessed = function() {
        
        for (let letter of this.lettersToGuess) {

            if (!letter.guessedAlready) {
                return false;
            }

        }
        return true;
    }
}
module.exports = Word;
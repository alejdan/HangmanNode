var Letter = function (letter) {
    this.letter = letter;
    this.guessedAlready = false;
    this.returnSymbol = function () {
        return this.guessedAlready ? letter : '_';
        /*
        if (this.guessedAlready) {
            return letter;
        } else {
            return "_";
        }
        */
    }
    this.checkCharacter = function (input) {
        if (input.toLowerCase() === this.letter.toLowerCase()) {
            this.guessedAlready = true;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Letter;
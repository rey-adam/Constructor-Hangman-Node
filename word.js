// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

var letter = require('./letter.js');

var Word = function(GuessWord) {
    this.GuessWord = GuessWord;
    
}


module.exports = Word;
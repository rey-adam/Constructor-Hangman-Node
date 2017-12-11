// Letter: Used for each letter in the current word. 
// Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
//  This should contain letter specific logic and data.

var UserLetter = function(letter) {
    this.letter = letter;
    this.appear = false;
    this.letterRender = function (){
        return !(this.appear) ? "_" : this.letter;
        console.log(this.appear);
    };
};

// exporting the UserLetter constructor
module.exports = UserLetter;

/* 
* **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character
 or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means 
 e constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder 
  * (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored
  *  boolean value to true if it was guessed correctly
 */

function Letter(input) {
    this.char = input;
    this.guessed = false;
    
    this.returns = function(){
        if (this.guessed == true){
            return this.char;
        } else{
            return "_";
        }
    };
    
    this.check = function(check){
        if (this.char == check){
            this.guessed = true;
            return 1;
        } else{
            return 0;
            // this.guessed = false;
        }
    };
  
    this.printStats = function() {
        console.log("Char: "+ this.char + " Guessed: " + this.guessed);
    };
};

// var letter = new Letter("A");
// if (letter.check("A")){
//     var test = letter.returns();
//     // console.log(test);
// }

// letter.printStats();

module.exports = Letter;
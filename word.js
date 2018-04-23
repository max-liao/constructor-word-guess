/* 
*
* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object 
representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object 
  * (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those 
  * together.

  * A function that takes a character as an argument and calls the guess function on each letter object 
  * (the second function defined in `Letter.js`)
 */
var Letter = require("./letter");

function Word() {
    this.letterstr = [];
    this.display = [];
    this.letterarr = [];
    this.word = "";
    
    this.writeword = function(input) {
        for (i = 0; i<input.length; i++){
            var temp = new Letter(input[i]);
            this.letterarr[i] = temp;
            this.letterstr[i] = temp.char;
            this.display[i] = "_";
        }
        // console.log(this.letterstr);
      };
    
    this.fill = function(guess){
        for (i=0;i<this.letterstr.length;i++){
            if (this.letterarr[i].check(guess) == 1){
                var temp = this.letterarr[i].returns();
                // console.log("Correct on index:", i, temp);
                this.display[i] = temp;
            }
        }
    };
  
    this.printWord = function() {
        this.word = "" + this.display;
        for (i=0;i<this.word.length;i++){
            this.word = this.word.replace(",","");
        };
        console.log(this.word);
        return this.word;
    };
};


module.exports = Word;
/* 
var newword = new Word();
newword.writeword("Hello");
newword.fill("l");
// newword.fill("H");
newword.printWord();
// console.log(newword.);
 */
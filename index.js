/* * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically 
whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

* Remember to include a `package.json` file containing your project dependencies in your Github repo!
 */


var Word = require("./word");

var inquirer = require("inquirer");

const words = ["Hi", "Hello", "How are you", "Hola", "Como estas"]

var guesses;

function init() {
    var rand = Math.floor(Math.random()*words.length);
    // console.log(words[rand]);
    var newword = new Word();
    newword.writeword(words[rand]);
    newword.fill(" ");
    // newword.fill("H");
    newword.printWord();
    guesses = 12;
    return newword;
};

function ask(newword){
    inquirer.prompt([{
        name: "guess",
        message: "Guess a letter:"
        }]
    ).then(function(answers) {
        newword.fill(answers.guess);
        newword.printWord();
        guesses--;
        console.log("Guesses remaining", guesses);
        var letterstr = newword.letterstr + "";
        
        // this.word = this.word
        for (i=0;i<letterstr.length;i++){
            letterstr = letterstr.replace(",","");
        };
        // console.log(letterstr);
        // console.log(newword.word);
        if (letterstr == newword.word){
            console.log("Winner!");
            playagain();
        } else if (guesses > 0){
            ask(newword);
        } else {
            console.log("Out of Guesses!");
            playagain();
        }
    });
}

function playagain(){
    inquirer.prompt([
        {
        name: "again",
        message: "Play Again? [y/n]"
        }
    ]).then(function(answers) {
        if (answers.again == 'y'){
            var temp = init();
            ask(temp);
        } else {
            console.log("Thanks for playing!");
        }
    })
}

var temp = init();
ask(temp);
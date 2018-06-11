// make variables
var wins = 0,
    loss = 0,
    clicks = 10,
    guessesMade = [],
    letterGuess = document.querySelector("#guesses");

// make an array with all the letters in alphabet
letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//make a way to get a random letter
function startGame() {
    var computerGuess = letterArr[[Math.floor(Math.random() * letterArr.length)]];
    wins = 0;
    loss = 0;
    clicks = 10;
    guessesMade = [];

    //make a way to guess a letter
    document.onkeyup = function (letter) {

        letter = event.key;
        //if (userGuess.indexOf(letter)== -1){
        for (var i = 0; i < computerGuess.length; i++) {
            if (letter !== computerGuess) {
                clicks--;
           

                guessesMade.push(letter);
            letterGuess.textContent = guessesMade.join(" ");
                console.log(clicks);
                document.querySelector("#clicks").textContent = clicks;


            }
         
              if(guessesMade === letterGuess){
              alert("You've already guessed this letter!");
              click++;
          }

        }


        if (computerGuess === letter) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;

            alert("You have won! The letter was " + computerGuess);
            startGame();
        }
        //make a way to win/lose
    
        if (clicks < 1) {
            loss++;
            document.querySelector("#losses").innerHTML = loss;

            alert("Sorry you lost :( The letter was  " + computerGuess + "   Click a new letter to restart!")
            startGame();
        }
    }
}



startGame();
//make a way to reset if you run out of clicks
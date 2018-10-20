//global varialbes to use
var ListWords = ["Fargo", "Titanic", "GoodFellas","Pulp Fiction","Lion King","Forrest Gump","The Big Lebowski","The Matrix"];
var listLetters = [];
var AnswerArray = [];
var guessedLetters = [];
var RandomMovie, count, WordLength;
var wins = 0, losses = 0;
var found = false;

$(document).ready(function () {
  newGame();
});

function newGame() {
  // empty arrays to use in game
  //retrieves random word from array
  //resets count

  guessedLetters = [];
  AnswerArray = [];
  count = 10;
  RandomMovie = ListWords[Math.floor(Math.random() * ListWords.length)].toLowerCase();
  WordLength = RandomMovie.length;
  //if there is a white space within movie title, then I remove 1 in length in of word
  if(hasWhiteSpace(RandomMovie)){
  WordLength--;
  }

  // loop to display random movie length to the user
  for (var i = 0; i < RandomMovie.length; i++) {
    AnswerArray[i] = "_";
  };

  display();
  console.log(RandomMovie);
}

function display() {
  // display Arrays for the user
  document.getElementById("answer").innerHTML = AnswerArray.join(" ");
  document.getElementById("guessed").innerHTML = guessedLetters.join(",");
  document.getElementById("guessLeft").innerHTML = count;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
}

function contain(Letter) {
  //checks array whether user has already guessed that letter
  for (var i = 0; i < guessedLetters.length; i++) {
    if (Letter === guessedLetters[i]) {
      //return false if the letter has already been used
      return false;
    }
  }
  //the letter has yet to be used and is valid
  return true;
}
//check if there is are any spaces within movie title
function hasWhiteSpace(s) {
  if(s.indexOf(' ') >= 0){
    return true;
  }else{
    return false;
  }
}

//////////////////////////////////
//when the user presses a key
////////////////////////////
document.onkeyup = function (event) {
  //if user presses letter
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    // get user key input
    var userGuess = event.key;
    found = false;
    //if user guesses a different letter
    if (contain(userGuess)) {
      //place letter within array
      guessedLetters.push(userGuess);

      //loop through array of the word checking each index
      for (var i = 0; i < RandomMovie.length; i++) {
        if (userGuess === RandomMovie[i]) {
          //if user answer is correct place that letter in that arrays index
          found = true;
          AnswerArray[i] = userGuess;
          //counter to determine once the word has been completely guessed
          WordLength--;
        }
      }
      //if the user didnt guess a correct letter 
      if (!found) {
        count--;
      }
      //display results to user
      display();


    } else {
      //the user selected the same letter twice
      alert("you must select a different letter");
    }
  } else {
    //if user selects something other than a letter
    alert("you must select a letter!");
  }
  //once the user guesses the correct word they win
  if (WordLength === 0) {
    document.getElementById("result").innerHTML = "YOU WON!  the movie was: " + RandomMovie;
    wins++;
    newGame();
  }
  //if user runs out of guesses they lose
  if (count === 0) {
    document.getElementById("result").innerHTML = "YOU LOSE!   the movie was: " + RandomMovie;
    losses++;
    newGame();
  }
};
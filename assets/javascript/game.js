var ListWords = ["titanic"];

var RandomWord = ListWords[Math.floor(Math.random() * ListWords.length)];

var win, loss = 0;
var count = 10;
var AnswerArray = [];
var guessedLetters = [];

$(document).ready(function () {
  console.log("hello");
  display();
});

function display() {
  for (var i = 0; i < RandomWord.length; i++) {
    AnswerArray[i] = "_";
  }

  document.getElementById("answer").innerHTML = AnswerArray.join(" ");
}

document.onkeyup = function (event) {

  if (count > 0) {
    // Determines which key was pressed.
    var userGuess = event.key;


    guessedLetters.push(userGuess);
    document.getElementById("guessed").innerHTML = guessedLetters.join(",");

    for (var i = 0; i < RandomWord.length; i++) {
      if (RandomWord[i] === userGuess) {
        AnswerArray[i] = userGuess;
      }
    }
    count--;
    document.getElementById("guessLeft").innerHTML = count;
    document.getElementById("answer").innerHTML = AnswerArray.join(" ");

  } else {
    loss++;
    document.getElementById("losses").innerHTML = loss;

  }


}



// global variables to use
var listLetters = [];
var AnswerArray = [];
var guessedLetters = [];
var RandomWord, count, WordLength;
var wins = 0, losses = 0;
var found = false;




function Movie(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
}


var movie1 = new Movie("Fargo","Coen Brothers","1996");
var movie2 = new Movie("Titanic","James Cameron","1997");
var movie3 = new Movie("GoodFellas","Martin Scorcesse","1990");

$(document).ready(function(){
    newGame();
    
});

function newGame(){

RandomWord = movie1.title;
count= 10;
}
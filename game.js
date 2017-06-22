//Else place letter in "letters already guessed"
// Number of guesses remaining
//if the word is guessed display an image then reset.
//if you run out of guesses reset.


//I give the computer options of words
var series = ["homeland", "friends", "vikings", "blindspot"];


//the computer chooses the word
var randomSeries = series[Math.floor(Math.random() * series.length)];


//displays the dashes that represent the letters

var randomDashes = [];

//if the letter is not in the word, add it to guessedLetters

document.onkeyup = function(event) {
  var userGuess = event.key;
  //randomCharacters is an array, created below
  var randomCharacters = randomSeries.split("");

  if (randomCharacters.indexOf(userGuess) === -1) {
		document.getElementById("guessedLetters").innerHTML += userGuess;
	}
//if the letter is in the word, replace dash with letter.
	else {
    document.getElementById("dashes").innerHTML += randomCharacters;
  }
	};

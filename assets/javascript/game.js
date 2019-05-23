var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lGuessed = [];
var cGuess = [];
var wins = 0;
var losses = 0;
var gLeft = 9;

window.onload = function() {
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	cGuess.push(compGuess);
	console.log(cGuess[0]);
}


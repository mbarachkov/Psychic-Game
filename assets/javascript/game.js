var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lGuessed = [];
var cGuess = [];
var wins = 0;
var losses = 0;
var gLeft = 9;
window.onload = function () {
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	cGuess.push(compGuess);
	console.log(cGuess[0]);
}
function resetButton() {
	wins = 0;
	losses = 0;
	gLeft = 9;
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	cGuess.push(compGuess);
}
document.onkeyup = function(event) {
	var pGuess = event.key;
	lGuessed.push(pGuess);
	console.log(cGuess[0]);
	if ((pGuess === cGuess[0]) && (gLeft > 0)) {
		wins++;
		lGuessed.length = 0;
		cGuess.length = 0;
		alert("Good Job!");
		gLeft = 9;
		var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		cGuess.push(compGuess);
		console.log(cGuess[0]);
	}
	else if ((pGuess !== cGuess[0]) && (gLeft > 0)) {
		gLeft = gLeft - 1;
	}
	else {
		losses++;
		gLeft = 9;
		lGuessed.length = 0;
		cGuess.length = 0;
		var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		cGuess.push(compGuess);
		console.log(cGuess[0]);
	}

	document.querySelector("#wins").textContent = wins;
	document.querySelector("#losses").textContent = losses;
	document.querySelector("#guessesleft").textContent = gLeft;
	document.querySelector("#gSoFar").textContent = lGuessed;
	
}
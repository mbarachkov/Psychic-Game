var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lGuessed = [];
var cGuess = [];
var wins = 0;
var losses = 0;
var gLeft = 9;
//the computer uses the randomizer and the .push function to isolate a target letter to be chosen
window.onload = function () {
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	cGuess.push(compGuess);
	console.log(cGuess[0]);
}
//the input is tracked by the onkeyup function and the .push isolates the letter that was input
document.onkeyup = function(event) {
	var pGuess = event.key;
	lGuessed.push(pGuess);
	console.log(cGuess[0]);
	//these are the conditions to a win and to reset all the values back to normal for the next round.
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
	//this argument will keep track of how many guesses the player has left
	else if ((pGuess !== cGuess[0]) && (gLeft > 0)) {
		gLeft = gLeft - 1;
	}
	//if all the other conditions are not met you will gain a loss and reset the values back for a new round
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
	document.querySelector("#guessesleft").textContent = lGuessed;
	document.querySelector("#gSoFar").textContent = pGuess;
	
}
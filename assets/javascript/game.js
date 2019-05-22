var playerLives = 9;

var abcArray = "";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	
while (abcArray.length < 6) {
	abcArray += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(abcArray);	


//input a letter and keep track of it on "letters guessed so far" if it is ≠ computer letter

//if players letter is === to computer letter
	//wins + 1

//if players letter ≠ computer letter 
	//guesses left -1

//if guesses left === 0 
	//losses + 1

//when +1 loss happens start process over
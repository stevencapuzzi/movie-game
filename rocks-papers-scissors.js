//Require readline-sync
let readlineSync = require('readline-sync');

//Define a function called getUserChoice that takes one parameter called values.
//We will pass the valid choices array to this function.
function getUserChoice(values) {
	//Query the user for their choice
	userChoice = readlineSync.question('Choose between rock, paper, scissors: ');
	//Lowercase the user choice for validation
	userChoice = userChoice.toLowerCase();
	
	//While the user choice is not included in the values array continue querying the user for a valid
	//choice
	while(!values.includes(userChoice)) {
		console.log(`${userChoice} is not a valid answer you imbecile`)
		userChoice = readlineSync.question('Choose between rock, paper, scissors: ');
	}
	//return the user choice
	console.log(userChoice);
	return userChoice;
}

//Define a function called getComputerChoice that takes as an argument an array of valid choices
function getComputerChoice(values) {
	//Get a random index that will represent the position of an element inside the choices array
	let index = Math.floor(Math.random() * 3);
	let computerChoice = values[index];
	//return computer's choice
	return computerChoice;
}

function game() {
	//Define global values
	let choices = ['rock', 'paper', 'scissors'];
	let score = {user: 0, computer: 0};
	let userChoice;
	let computerChoice;
	let continuePlaying = true;
	
	//Continue executing this code while continuePlaying is true
	while(continuePlaying === true) {

		//Use getUserChoice and getComputerChoice to get the user and computer choices.
		userChoice = getUserChoice(choices);
		computerChoice = getComputerChoice(choices);

		//Log choices
		console.log(userChoice, computerChoice);

		//if statement that determines winner and updates score based on who won.
		if(userChoice === computerChoice) {
			console.log("DRAW!");
		} else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper' ) {
			console.log("USER WON!!! FUCK YEAH!!!");
			score.user++;
		} else {
			console.log("Computer won, you suck");
			score.computer++;
		}
		
		//console log the match score
		console.log(`User has ${score.user} points, computer has ${score.computer} points`);
		
		//Ask the user if they want to continue playing
		continuePlaying = readlineSync.question('Do you want to play again? (y/n)');
		
		//if continue playing is equals to y then we re execute this function, 
		//otherwise the function stops executing
		if(continuePlaying.toLowerCase() !== 'y') {
			continuePlaying = false;
		} else {
			continuePlaying = true;
		}
	}
	console.log("Thanks for playing!");	
}


//Run the game.
game();
// The objective of this game is to defeat the Russian Naval and Ground forces protecting the city of Port Arthur in Manchuria
// The game occurs in four stages, each of these stages is a bottelneck.
// If the player does not achieve the minimum score within the allotted rolls, the game starts again





//Master Function

function runGame() {
	alert("Welcome to the Siege of Port Arthur, You are in command of the Japanese Forces attempting to dislodge the Russians from the City of Port Arthur. A lethal enemy naval taskforce patrols the peninsula, they outgun and outnumber you significantly. All you can rest your hopes on is decisive action- let's hope the weather cooperates!")
	let currentScore 

}
runGame();



alert("Let's see how good the weather is!")
function diceRoller(sides, amount){
	let totalScore = 0;
for (let i = 1; i <= amount; i++){
	let roll = (Math.floor(Math.random() * (sides)) + 1);
	totalScore += roll; 
}
return totalScore
}

// This function determines the weather multiplier.
// This multiplier will be multiplied by the players rolls in the first two stages, the naval engagements.
function weatherRoll(roll){
	let rollMultiplier;
	if (roll == 1) {
		rollMultiplier = .5;
		alert("The weather is shit, you'd best turn back! All roll scores will be cut in half!")
	}

	if (roll == 2) {
		rollMultiplier = .8;
		alert("The weather is pretty crappy, this will be difficult! All rolls will be reduced by 20%!")
	}
	if (roll == 3) {
		rollMultiplier = 1.0;
		alert("The weather is decent for operations! Expect no interference!")
	}
	if (roll == 4) {
		rollMultiplier = 1.2;
		alert("The weather is perfect, this will help you greatly! All rolls will be increased by 20%!")
	}
	return rollMultiplier;
}
let weather = weatherRoll(diceRoller(4,1));

console.log("Weather Multiplier: " + weather)


// 







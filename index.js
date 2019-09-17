// The objective of this game is to defeat the Russian Naval and Ground forces protecting the city of Port Arthur in Manchuria
// The game occurs in four stages, each of these stages is a bottelneck.
// If the player does not achieve the minimum score within the allotted rolls, the game starts again





//Master Function

function runGame() {
	alert("Welcome to the Siege of Port Arthur, You are in command of the Japanese Forces attempting to dislodge the Russians from the City of Port Arthur. A lethal enemy naval taskforce patrols the peninsula, they outgun and outnumber you significantly. All you can rest your hopes on is decisive action- let's hope the weather cooperates!")
	alert("Let's see how good the weather is!")
	let weather = weatherRoll(diceRoller(4,1))
	console.log("Weather Multiplier: " + weather)
	// First, the player will recieve this series of alerts
	alert("The Russian fleet is moving into battle formations ahead of your landing group");
	alert("Your fleet is smaller, and cannot hope to match the firepower of the Russian battleships");
	alert("Your only hope is to attack now, before the Russians can maneuver their ships into position");
	console.log("Naval Alert Recieved"); 
	// Now the function 
	let navalRollOnevar = navalRollOne((diceRoller(6,2) * weather));
	console.log("First Naval Roll: " + navalRollOnevar);
}
runGame();




function diceRoller(sides, amount){
	let totalScore = 0;
for (let i = 1; i <= amount; i++){
	let roll = (Math.floor(Math.random() * (sides)) + 1);
	totalScore += roll; 
}
return totalScore
}

// This function determines the weather multiplier.
// This multiplier will be multiplied by the player's rolls in the first two stages aka the naval engagements.


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





// 1st Naval engagement
// This function will determine the first naval engagement
// The player will be given two six-sided Dice and needs to attain a minimum score of 4 or he is defeated




// here is the roll function, calling the weatherRoll multiplier

function navalRollOne (roll){
	console.log("First naval Result: " + roll);
if (roll >= 6){
	alert("Your fleet was victorious, the Russian fleet is crippled but not destroyed!")
	return true;
	
} 
if (roll < 6){
	alert("Your fleet was destroyed, you have lost the battle!")
	return false;
}
}








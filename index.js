// The objective of this game is to defeat the Russian Naval and Ground forces protecting the city of Port Arthur in Manchuria
// The game occurs in four stages, each of these stages is a bottelneck.
// If the player does not achieve the minimum score within the allotted rolls, the game starts again





//Master Function

function runGame() {
	alert("Welcome to the Siege of Port Arthur, You are in command of the Japanese Forces attempting to dislodge the Russians from the City of Port Arthur. A lethal enemy naval taskforce patrols the peninsula, they outgun and outnumber you significantly. All you can rest your hopes on is decisive action- let's hope the weather cooperates!")
	// This will be the Weather Multiplier roll, this will assign a value multiplied by the two upcoming naval rolls
	alert("Let's see how good the weather is!")
	let weather = weatherRoll(diceRoller(4,1))
	console.log("Weather Multiplier: " + weather)
	// First, the player will recieve this series of alerts, this begins naval roll 1/2
	alert("The Russian fleet is moving into battle formations ahead of your landing group");
	alert("Your fleet is smaller, and cannot hope to match the firepower of the Russian battleships");
	alert("Your only hope is to attack now, before the Russians can maneuver their ships into position");
	console.log("Naval Alert One Recieved"); 
	// Now to call the function 
	let navalRollOneVar = navalRollOne((diceRoller(6,2) * weather));
	if (!navalRollOneVar){
		runGame();
		return;
	}
	console.log("First Naval Roll: " + navalRollOneVar);

	// Second Naval Roll 1/2
	alert("The remainder of the Russian fleet is retreating towards Port Arthur to lick its wounds, but they can still put up a fight, you must attack before they regroup!")
	
	let navalRollTwoVar = navalRollTwo((diceRoller(8,1) * weather));
	if (!navalRollTwoVar){
		runGame();
		return;
	}
	console.log("Second Naval Roll: " + navalRollTwoVar);

	alert("Your transports are preparing to begin their landing. The Russians- not expecting you to win at sea; may have partied a bit too hard last night")

	// How Drunk is the Russian Army? multiplier
	let drunk = drunkRoll(diceRoller(5,1));
	console.log("Drunk Multipler: " + drunk);
	// Landing Roll
	let landingRollVar = landingRoll((diceRoller(12,1) * drunk), "first");
	if (!landingRollVar){
			landingRollVar = landingRoll((diceRoller(12,1) * drunk), "second");
		if (!landingRollVar){
			runGame();
			return;
		}
	}

	alert("Your troops have established a stable beachhead and have moved into position to assault the city of Port Arthur, Home Stretch!")
	let landRollVar = landRoll((diceRoller(20,1) * drunk));
	if (!landRollVar){
		runGame();
		return;
	}


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
	console.log("First Naval Result: " + roll);
if (roll >= 6){
	alert("Your fleet was victorious, the Russian fleet is crippled but not destroyed!")
	return true;
	
} 
	else {
	alert("Your fleet was destroyed, you have lost the battle! You will be returned to the beginning");
	return false;
}
}


function navalRollTwo (roll){
	console.log("Second Naval Result: " + roll);
	if (roll >= 4){
		alert("You have destroyed the Russian Pacific Fleet, you may now begin landing your troops!");
		return true;
	}
	else {
		alert("The remaining Russian ships have crippled your fleet, you have lost the battle! You will be returned to the beginning");
		return false;
		
	}
}
// This function determines how hindered the Russian Army is by their Achilles' Heel, grain alcohol.
// This multiplier will be applied to the upcoming landings and main battle for the City
function drunkRoll (roll){
	let rollMultiplierTwo;
	if (roll == 1) {
		rollMultiplierTwo = 1.0;
		alert("The Russian Army is sober, you might be in trouble!")
	}

	if (roll == 2) {
		rollMultiplierTwo = 1.2;
		alert("The Russian Army is hungover, your rolls will be amplified by 20%!")
	}
	if (roll == 3) {
		rollMultiplierTwo = 1.3;
		alert("The Russian Army got into the local rice wine stores, your rolls will be amplified by 30%!")
	}
	if (roll == 4) {
		rollMultiplierTwo = 1.4;
		alert("The Russian Army had some vodka delivered, they're in pretty bad shape, your rolls will be amplified by 40%!")
	}
	if (roll == 5) {
		rollMultiplierTwo = 1.5;
		alert("Charlie Sheen stopped by, The Russian Army has overdosed on Tiger Blood, your rolls will be amplified by 50%!")
	}

	return rollMultiplierTwo;
}
	// this function defines the "landing" stage of the battle
	function landingRoll (roll, attempt){
	console.log("landing Roll: " + roll);
	if (roll >= 8){
		alert("Your troops have landed successfully and are establishing a foothold!");
		return true;
	}
	else {
		let alertMes = "The Russians have repulsed your " + attempt + " landing.";
		if (attempt === "first"){
			alertMes += " You've got one more chance!"
		}

		if (attempt === "second"){
			alertMes += "   You have failed and will be returned to the beginning"
		}
		alert(alertMes);
		return false;
	}

	// else if add rollOne and rollTwo
}	
	// this is the last stage of the game, the "land battle"
	function landRoll (roll, attempt){
		console.log("Land Battle Roll: " + roll);
		if (roll >= 12){
			alert("Your troops have successfully captured Port Arthur! Sweet victory bitch!")
			return true;
		}
		else {
			let alertMes = "The Russians have repulsed your " + attempt + " assault.";
			if (attempt === "first"){
				alertMes += " You've got one more chance!"
			}

			if (attempt === "second"){
				alertMes += "You have failed and will be returned to the beginning"
			}
			alert(alertMes);
			return false; 
			// alert("The Russian Army has endured your assault, you wasted everybody's time! You will now be returned to the beginning")
		}
	}




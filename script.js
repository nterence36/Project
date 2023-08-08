function createDice(number) {
	const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};

	const dice = document.createElement("div");

	dice.classList.add("dice");

	for (const dotPosition of dotPositionMatrix[number]) {
		const dot = document.createElement("div");

		dot.classList.add("dice-dot");
		dot.style.setProperty("--top", dotPosition[0] + "%");
		dot.style.setProperty("--left", dotPosition[1] + "%");
		dice.appendChild(dot);
	}

	return dice;
}
let numOfDice = prompt("Enter the number of dice you want to roll", 0)



function randomizeDice(diceContainer, numOfDice) {
	diceContainer.innerHTML = "";
    let userInput = prompt('What is your guest sum of '+numOfDice+ ' dice you want to roll', 0)
    if (userInput != parseInt(userInput)){
        document.getElementById("result").innerHTML = "Enter an integer greaternthan 0"
        
    }
    let userPrediction = parseInt(userInput)
    let total = 0;
   
	for (let i = 0; i < numOfDice; i++) {
        
		const random = Math.floor((Math.random() * 6) + 1);
        total += random
       
		const dice = createDice(random);

		diceContainer.appendChild(dice);
	}
        if (sumGust === total){
            document.getElementById("result").innerHTML = "Wooooooooo You won";
        }else {
            document.getElementById("result").innerHTML = "Wooooooooo You Loss";
        }

   console.log(total)
   console.log(userPrediction)
  
}

const diceContainer = document.querySelector(".dice-container");
const rollDiceBtn = document.querySelector(".roll-dice");
randomizeDice(diceContainer, numOfDice);

rollDiceBtn.addEventListener("onClick", () => {
	const interval = setInterval(() => {
		randomizeDice(diceContainer, numOfDice);
	}, 50);

	setTimeout(() => clearInterval(interval), 1);
});
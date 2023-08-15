const resultEl = document.getElementById("result");

let userInputEl = document.getElementById("userInput")
let userPredict = document.getElementById("userInput2")
const userPrediction = userPredict.value
//const lossImage = document.createElement(img)


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



const diceContainer = document.querySelector(".dice-container");
const rollDiceBtn = document.querySelector(".roll-dice");

rollDiceBtn.addEventListener("click", () => {
	
	const Value1 = userInputEl.value;
	const Value2 = parseInt(userPredict.value);
		if((Value1 === 0) || (Value2 === 0)){
			alert("You entered a 0 please enter a number above 0")
		}
		
		diceContainer.innerHTML = "";
	   
		let total = 0;
	   
		for (let i = 0; i < Value1; i++) {
			
			const random = Math.floor((Math.random() * 6) + 1);
			total += random
		   
			const dice = createDice(random);
	
			diceContainer.appendChild(dice);
		}
	 if(total < Value2 || total > Value2){
		resultEl.textContent = "OUCH! you loss. You entered "+Value2+ " and the result was "+total;
		
	 }else if (total === Value2){
		resultEl.textContent = "Wooooooooo You won";
	 }else {
		resultEl.textContent = "Enter a number above 0"
	 }
	document.getElementById('userInput').value = '';
	document.getElementById('userInput2').value = '';
});
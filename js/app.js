//This is a function within a function to avoid starting the function when you open the website and start it when you click the button instead

function log() {
   
        function getComputerChoice(x) {
        //get random index value
        const randomIndex = Math.floor(Math.random() * 3);
        //get random item
        const item = x[randomIndex];

        return item;

            
        }

        const array = ["Rock", "Paper", "Scissors"];
        const computerChoice = getComputerChoice(array);
        console.log(computerChoice);

        const playerChoice = prompt("Enter your selection: Rock, Paper or Scissors:");

        if (playerChoice === "Rock" && computerChoice === "Rock") {
            alert("You're even!");
        } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
            alert("PlayerWins!");
        } else if (playerChoice === "Rock" && computerChoice === "Paper") {
            alert("ComputerWins!");
        } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
            alert("ComputerWins!");
        } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
            alert("You're even!");
        } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
            alert("PlayerWins!");
        } else if (playerChoice === "Paper" && computerChoice === "Rock") {
            alert("PlayerWins!");
        } else if (playerChoice === "Paper" && computerChoice === "Paper") {
            alert("You're even!");
        } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
            alert("ComputerWins!");
        } else {
            alert("Not recognized. Make sure you enter 'Rock', 'Paper' or 'Scissors'. Try again!");
        }

}

// The score system. How to implement:
// I need to create an array to store the score
// The score needs to increase in value so maybe an array is not the answer?
// Maybe the score should be stored in a function that adds +1 everytime a player wins
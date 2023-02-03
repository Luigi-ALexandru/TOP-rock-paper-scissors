let playerScore = 0;
let computerScore = 0;  
let numberOfRounds = 0;
       
function playRound(){
    //computer input
        function getComputerChoice() {
            const array = ["Rock", "Paper", "Scissors"];
            const randomIndex = array[Math.floor(Math.random() * 3)];
            const item = randomIndex;
            return item;            
            }
    let computerChoice = getComputerChoice();
    let HumanWinner;
    let ComputerWinner;
    //player input
    const playerChoice = prompt("Enter your selection: Rock, Paper or Scissors:");

    if (playerChoice === "Rock" && computerChoice === "Rock") {
        alert("You're even for now!");
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
            HumanWinner = true;
        alert("PlayerWins this round!");
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
            ComputerWinner = true;
        alert("ComputerWins this round!");
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
            ComputerWinner = true;
        alert("ComputerWins this round!");
    } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        alert("You're even for now!");
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
            HumanWinner = true;
        alert("PlayerWins this round!");
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
            HumanWinner = true;
        alert("PlayerWins this round!");
    } else if (playerChoice === "Paper" && computerChoice === "Paper") {
        alert("You're even for now!");
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
            ComputerWinner = true;
        alert("ComputerWins this round!");
    } else {
        alert("Input not recognized. Make sure you enter 'Rock', 'Paper' or 'Scissors'. Try again!");
    }
        //  update the scores
        if(HumanWinner === true) {
            playerScore = playerScore + 1;
            document.getElementById("sH").innerHTML = playerScore;
        } else if (ComputerWinner === true) {
            computerScore = computerScore + 1;
            document.getElementById("sC").innerHTML = computerScore;
        }

        if(playerScore === 4) {
            alert("You've won the game!");
        } else if (computerScore === 4) {
            alert("Computer won the game!");
        } else if(numberOfRounds === 4 && playerScore !== 4 && computerScore !== 4) {
            alert("Nobody wins the game...");
        }
    
      }
      
function game() {
    for (i = 0; i <= 4; i++) {
        playRound();
            numberOfRounds = numberOfRounds + 1;
        }
    }

document.getElementById("myBtn").addEventListener("click", game);

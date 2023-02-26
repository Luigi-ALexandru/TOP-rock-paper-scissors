function getComputerChoice() {
    array = ["rock", "paper", "scissors"];
    let randomNum = array[Math.floor(Math.random() * array.length)];
    return randomNum;
};

let computerSelection = "";
let playerSelection = "";
let HumanScore = 0;
let ComputerScore = 0; 
const maxScore = 3;

const btnOne = document.querySelector('.BtnOne');
btnOne.addEventListener('click', () => {
    if(HumanScore === 3 || ComputerScore === 3) {
        invalid();
    } else {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    round(playerSelection, computerSelection);
    checkEnd();
    }
  });

const btnTwo = document.querySelector('.BtnTwo');
btnTwo.addEventListener('click', () => {
    if(HumanScore === 3 || ComputerScore === 3) {
        invalid();
    } else {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    round(playerSelection, computerSelection);
    checkEnd();
    }
  });

const btnThree = document.querySelector('.BtnThree');
btnThree.addEventListener('click', () => {
    if(HumanScore === 3 || ComputerScore === 3) {
        invalid();
    } else {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    round(playerSelection, computerSelection);
    checkEnd();
    }
  });

const btnFour = document.querySelector('.BtnFour');
btnFour.addEventListener('click', () => {
    end();
});

function round(playerSelection, computerSelection) {

    if(playerSelection === "rock" && computerSelection === "scissors") {
        HumanScore = HumanScore + 1;
        document.getElementById("sH").textContent = HumanScore;
    } else if(playerSelection === "rock" && computerSelection === "rock") {
        return;
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        ComputerScore = ComputerScore + 1;
        document.getElementById("sC").textContent = ComputerScore;
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        ComputerScore = ComputerScore + 1;
        document.getElementById("sC").textContent = ComputerScore;
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        HumanScore = HumanScore + 1;
        document.getElementById("sH").textContent = HumanScore;
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        return;
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return;
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        ComputerScore = ComputerScore + 1;
        document.getElementById("sC").textContent = ComputerScore;
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        HumanScore = HumanScore + 1;
        document.getElementById("sH").textContent = HumanScore;
    };
};

function end() {
    HumanScore = 0;
    document.getElementById("sH").textContent = HumanScore;
    ComputerScore = 0;
    document.getElementById("sC").textContent = ComputerScore;
}

function checkEnd() {
    if(HumanScore === maxScore) {
        alert("HUMAN WINS!");
    } else if(ComputerScore === maxScore) {
        alert("COMPUTER WINS!");
    }
}

function invalid() {
    alert("Oops! it seems the game has ended...you might want to press the RESET button to play another game!");
}
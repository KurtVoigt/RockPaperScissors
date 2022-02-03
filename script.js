const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const resetButton = document.getElementById("Reset");

let playerScore = 0;
let compScore = 0;


function round(playerChoice) {
    let rps = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3)
    let compChoiceContainer = document.getElementById("ComputerPokemon");
    let commentator = document.querySelector(".Commentator");
    document.getElementById("ComputerPokemon").innerHTML = "<img src = ./images/" + rps[index] + ".png alt='' class='pokemon'/>";

    //player win 
    if ((rps[index] === "rock" && playerChoice === "paper") || (rps[index] === "scissors" && playerChoice === "rock") || (rps[index] === "paper" && playerChoice === "scissors")) {
        commentator.innerHTML = "You won playing " + playerChoice + " against the Computer's " + rps[index];
        playerScore++;
        document.querySelector("#you").innerHTML = `You: ${playerScore}`;
    }
    //comp win
    else if ((playerChoice === "rock" && rps[index] === "paper") || (playerChoice === "scissors" && rps[index] === "rock") || (playerChoice === "paper" && rps[index] === "scissors")) {
        commentator.innerHTML = "The Computer won playing " + rps[index] + " against your " + playerChoice;
        compScore++;
        document.querySelector("#computer").innerHTML = `Computer: ${compScore}`;
    }
    else {//tie
        commentator.innerHTML = "This round was a tie with both playing " + playerChoice;

    }

    if (playerScore === 5 || compScore === 5) {
        let winner = "";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        resetButton.disabled = false;
        if (playerScore === 5) {
            winner = "You have ";
        }
        else {
            winner = "The Computer has ";
        }
        commentator.innerHTML = winner + "won the game! Press reset to play again"
    }

}


rock.onclick = function () {
    document.getElementById("PlayerPokemon").innerHTML = '<img src="./images/rock.png" alt=" " class="pokemon"/>';
    round("rock");
};

paper.onclick = function () {
    document.getElementById("PlayerPokemon").innerHTML = '<img src="./images/paper.png" alt=" "class="pokemon"/>';
    round("paper");
};

scissors.onclick = function () {
    document.getElementById("PlayerPokemon").innerHTML = '<img src="./images/scissors.png" alt=" "class="pokemon"/>';
    round("scissors");
};

resetButton.onclick = function () {
    playerScore = 0;
    compScore = 0;
    document.querySelector(".Commentator").innerHTML = "";
    document.querySelector("#you").innerHTML = 'You: 0';
    document.querySelector("#computer").innerHTML = 'Computer: 0';
    document.getElementById("PlayerPokemon").innerHTML = "";
    document.getElementById("ComputerPokemon").innerHTML = "";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    resetButton.disabled = true;
};
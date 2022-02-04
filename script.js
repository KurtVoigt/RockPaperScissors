const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const resetButton = document.getElementById("Reset");

let playerScore = 0;
let compScore = 0;


function round(playerChoice) {

    let rps = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3)
    let commentator = document.querySelector(".Commentator");
    let playerPokemon = document.getElementById("PlayerPokemon");
    let computerPokemon = document.getElementById("ComputerPokemon");
    computerPokemon.innerHTML = "<img src = ./images/" + rps[index] + ".png alt='' class='pokemon'/>";

    //player win 
    if ((rps[index] === "rock" && playerChoice === "paper") || (rps[index] === "scissors" && playerChoice === "rock") || (rps[index] === "paper" && playerChoice === "scissors")) {
        commentator.innerHTML = "You won playing " + playerChoice + " against the Computer's " + rps[index];
        playerScore++;
        document.querySelector("#you").innerHTML = `You: ${playerScore}`;
        playerPokemon.classList.add("winnerLeft");
        computerPokemon.classList.add("loserRight");
    }
    //comp win
    else if ((playerChoice === "rock" && rps[index] === "paper") || (playerChoice === "scissors" && rps[index] === "rock") || (playerChoice === "paper" && rps[index] === "scissors")) {
        commentator.innerHTML = "The Computer won playing " + rps[index] + " against your " + playerChoice;
        compScore++;
        document.querySelector("#computer").innerHTML = `Computer: ${compScore}`;
        computerPokemon.classList.add("winnerRight");
        playerPokemon.classList.add("loserLeft");
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

//removes and reinserts animated elements so that the animation can run multiple times
function resetElements() {
    let playerPokemon = document.getElementById("PlayerPokemon");
    let computerPokemon = document.getElementById("ComputerPokemon");
    computerPokemon.removeAttribute("class");
    playerPokemon.removeAttribute("class");
    let restartAnimationP= playerPokemon.cloneNode(false);
    let restartAnimationC= computerPokemon.cloneNode(false); 
    playerPokemon.parentNode.replaceChild(restartAnimationP, playerPokemon);
    computerPokemon.parentNode.replaceChild(restartAnimationC, computerPokemon);
}


rock.onclick = function () {
    resetElements();
    document.getElementById("PlayerPokemon").innerHTML = '<img src="./images/rock.png" alt=" " class="pokemon"/>';
    round("rock");
};

paper.onclick = function () {
    resetElements();
    document.getElementById("PlayerPokemon").innerHTML = '<img src="./images/paper.png" alt=" "class="pokemon"/>';
    round("paper");
};

scissors.onclick = function () {
    resetElements();
    document.getElementById("PlayerPokemon").innerHTML = '<img src="./images/scissors.png" alt=" "class="pokemon"/>';
    round("scissors");
};

resetButton.onclick = function () {
    playerScore = 0;
    compScore = 0;
    resetElements();
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
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const rock2 = document.querySelector("#rock2");
    const scissors2 = document.querySelector("#scissors2");
    const paper2 = document.querySelector("#paper2");

    rock2.style.backgroundColor = "";
    rock2.style.border = "";
    paper2.style.backgroundColor = "";
    paper2.style.border = "";
    scissors2.style.backgroundColor = "";
    scissors2.style.border = "";

    if (computerChoice === "rock") {
        rock2.style.backgroundColor = "pink";
        rock2.style.border = "2px solid blue";
    } else if (computerChoice === "paper") {
        paper2.style.backgroundColor = "pink";
        paper2.style.border = "2px solid blue";
    } else {
        scissors2.style.backgroundColor = "pink";
        scissors2.style.border = "2px solid blue";
    }

    let result = "";
    if (userChoice === computerChoice) {
        result = "It is a draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}`;
        userScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}`;
        computerScore++;
    }

    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Your score: ${userScore} | Computer score: ${computerScore}`;
}

function colorChange(e) {
    const btn = document.querySelectorAll("#rock, #paper, #scissors");
    btn.forEach(button => {
        button.style.backgroundColor = '';
        button.style.border = '';
    });
    e.target.style.backgroundColor = "pink";
    e.target.style.border = "3px solid blue";
}

const value = document.querySelectorAll("#rock, #paper, #scissors");
value.forEach(button => {
    button.addEventListener("click", function (e) {
        colorChange(e);
        const userChoice = e.target.id;
        playGame(userChoice);
    });
});

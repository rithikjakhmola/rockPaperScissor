let userScore = 0 ; 
let computerScore = 0 ; 
function playGame (userChoice){
    const choices =["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result ="";
    if (userChoice === computerChoice){
        result="It is a draw";
    }
    else if (
        (userChoice==="rock"&& computerChoice ==="scissors")||
        (userChoice==="scissors"&& computerChoice ==="paper")||
        (userChoice==="paper"&& computerChoice ==="rock")
    ){
        result = `You win! ${userChoice} beats ${computerChoice}`;
        userScore++;
    }
    else{
        result= `You lose ${computerChoice} beats ${userChoice}`
        computerScore++;
    }
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent=`Your score:${userScore}| Computer score: ${computerScore}`;
}
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
function colorChange(e){
    document.querySelectorAll("#rock, #paper,#scissors").forEach(btn=>{
        btn.style.background = "";
    })
    e.target.style['background-color'] = "pink";
}
const rock = document.querySelector("#rock");
rock.addEventListener("click", function(e){
    playGame("rock");
    colorChange(e);
} );

const paper = document.querySelector("#paper"); 
paper.addEventListener("click",function (e){
    playGame("paper");
    colorChange(e);
});
const scissors = document.querySelector("#scissors"); 
scissors.addEventListener("click",function (e){
    playGame("scissors");
    colorChange(e);
});
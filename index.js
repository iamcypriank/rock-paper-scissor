const result =  ["rock","paper","scissor"]
//score
let computerScore=0
let playerScore= 0

//elements
let resultEl = document.querySelector("#result")
let confettiEl = document.querySelector("#confetti")
let soundEl = document.querySelector("#winning-sound")

function getComputerChoice(){

    return result[Math.floor(Math.random()*3)] 

}


function getHumanChoice(button){
    let playerChoice = button.value
    let computerChoice = getComputerChoice()
    document.querySelector("#p-choice").innerText = "Player Choice : " +playerChoice
    document.querySelector("#c-choice").innerText = "Computer Choice : " +computerChoice
    scoreingSystem(playerChoice,computerChoice)
    
    
}

function scoreingSystem(p,c){

    //scoring System

     if (p === c) {
        resultEl.innerText = "It's a tie!"
    } else if (p === "rock" && c === "scissor") {
        playerScore++
        resultEl.innerText = "Player wins! Rock crushes Scissor"
        confettiEl.style.display = "block";
        soundEl.play()
        setTimeout(()=>{
            confettiEl.style.display = "none";
        },4000)
    } else if (p === "rock" && c === "paper") {
        computerScore++
        resultEl.innerText = "Computer wins! Paper covers Rock"
    } else if (p === "paper" && c === "rock") {
        playerScore++
        resultEl.innerText = "Player wins! Paper covers Rock"
        confettiEl.style.display = "block";
        soundEl.play()
        setTimeout(()=>{
            confettiEl.style.display = "none";
        },4000)
    } else if (p === "paper" && c === "scissor") {
        computerScore++
        resultEl.innerText = "Computer wins! Scissor cuts Paper"
    } else if (p === "scissor" && c === "paper") {
        playerScore++
        resultEl.innerText = "Player wins! Scissor cuts Paper"
        confettiEl.style.display = "block";
        soundEl.play()
        
        setTimeout(()=>{
            confettiEl.style.display = "none";
        },4000)
    } else if (p === "scissor" && c === "rock") {
        computerScore++
        resultEl.innerText = "Computer wins! Rock crushes Scissor"
    } 

        document.querySelector("#p-score").innerText = "Player Score : " + playerScore
        document.querySelector("#c-score").innerText = "Computer Score : " + computerScore
}

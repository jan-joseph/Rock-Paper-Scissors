// Computer Random Sign Generator Function
let computerPlay = () => {
    let x = Math.floor(Math.random() * 3);
    return (x === 0)? "rock" : (x==1)? "paper": "scissors";

}

// The deliberation function which finds whether the Player won or Not 
let playRound = (playerSelection ,computerSelection) => {
    // console.log(`${typeof(playerSelection)} - ${typeof(computerSelection)}`)
    // playerSelection = playerSelection.toLowerCase();
    if ( playerSelection === computerSelection){
        return 0;
    } else if ((playerSelection === 'rock' && computerSelection[0] === 's') || 
                (playerSelection === 'scissors' && computerSelection[0] === 'p') || 
                (playerSelection === 'paper' && computerSelection[0] === 'r')){
        return 1;
    } else {
        return -1;
    }

}
//btnEventListener - Deliberates the win or loss of the Game 
function btnEventListener(e) {
    
    let playerSelection = this.getAttribute('id');
    let computerSelection = computerPlay();
    let score;
    console.log(playerSelection);
    console.log(computerSelection);

    score = playRound(playerSelection, computerSelection);
    if (score > 0){
        playerScore ++;
    } else if (score < 0){
        computerScore++;
    }
    if  (playerScore === 5){
        scoreTag.textContent = `You won, Dave.`;
        scoreTag.style.cssText = 'color:green;';
    } else if (computerScore === 5) {
        scoreTag.textContent = `You lost, Dave.`;
        scoreTag.style.cssText = 'color:red;';
    } else {
        scoreTag.textContent = `${playerScore} - ${computerScore}`
        return;
    }
    const playAgain = document.createElement('a')
    playAgain.textContent = "Play Again?"
    playAgain.style.cssText = "color:black; cursor:pointer; font-size:2rem;"
    playAgain.addEventListener('mouseover', () => playAgain.style.textDecoration = "underline")
    playAgain.addEventListener('mouseleave', () => playAgain.style.textDecoration = "none")
    playAgain.addEventListener('click', () => game())
    scoreTag.appendChild(playAgain);

    playerScore = 0,computerScore = 0;
    buttons.forEach(button => button.removeEventListener('click', btnEventListener));
}
// Game Initiation Start Function
let game = () => {
    scoreTag.style.cssText = 'color:black;';
    scoreTag.textContent = `${playerScore} - ${computerScore}`
    buttons.forEach(button => button.addEventListener('click', btnEventListener));

    console.log(`${playerScore} - ${computerScore}`)
}


let playerScore = 0;
let computerScore = 0;
const scoreTag = document.querySelector('#score')
const buttons = document.querySelectorAll(".icon")

game();

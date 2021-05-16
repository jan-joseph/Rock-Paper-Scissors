// Computer Random Sign Generator Function
let computerPlay = () => {
    let x = Math.floor(Math.random() * 3);
    return (x === 0)? "rock" : (x==1)? "paper": "scissors";

}

// The deliberation fucntion which finds whether the Player won or Not 
let playRound = (playerSelection ,computerSelection) => {
    // console.log(`${typeof(playerSelection)} - ${typeof(computerSelection)}`)
    playerSelection = playerSelection.toLowerCase();
    if ( playerSelection[0] == computerSelection[0]){
        return 0;
    } else if ((playerSelection[0] === 'r' && computerSelection[0] === 's') || 
                (playerSelection[0] === 's' && computerSelection[0] === 'p') || 
                (playerSelection[0] === 'p' && computerSelection[0] === 'r')){
        return 1;
    } else {
        return -1;
    }

}

// Game function which finds the First to Five and output the Win log to Console
let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let score;


    while((playerScore < 5) && (computerScore < 5)){
        console.log(`${playerScore} - ${computerScore}`)

        let computerSelection = computerPlay();
        let playerSelection = prompt("Enter the sign","here");
        console.log(playerSelection);
        console.log(computerSelection);
        score = playRound(playerSelection, computerSelection);

        if (score > 0){
            playerScore ++;
        } else if (score < 0){
            computerScore++;
        }
    }
    console.log(`${playerScore} - ${computerScore}`)
    return (playerScore === 5)? "Player Wins" : "Computer Wins";
}

console.log(game());

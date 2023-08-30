function getComputerChoice(computerChoice) {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        computerChoice = 'rock';
        break;

        case 1:
        computerChoice = 'paper';
        break;

        default:
        computerChoice = 'scissors';
        break;
    }
    return computerChoice;
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log(playerChoice = prompt('Rock, paper, or scissors?').toLowerCase());
    
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            playerChoice === 'scissors' && computerChoice === 'paper') {

            return (`You win, ${playerChoice} beats ${computerChoice}.`);
        }
        else if (playerChoice === computerChoice) {
            return ('Tie!');
        }
        else {
            return (`You lose, ${computerChoice} beats ${playerChoice}.`);
        }
    }
    else {
        return (`Sorry ${playerChoice} is not a valid choice.`)
    }
}
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

            winCount += 1;
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

function winCount(winCount) {
    winCount = 0;
    return winCount;
}

function game(rounds) {
    winCount();
    for (let i = 0; i <= 4; i++) {
        if (winCount === 3) {
            rounds = 0;
            winCount = 0;
            return ('Congratulations, you win!');
        }
        else if (rounds === 5) {
            rounds = 0;
            winCount = 0;
            return ('Game over.');
        }
        else {
            playRound();
            rounds += 1;
        }
    }
}
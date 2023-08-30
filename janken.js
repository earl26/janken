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
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
            
            return true;
        }
        else if (playerChoice === computerChoice) {
            return ('Tie!');
        }
        else {
            return false;
        }
    }
    else {
        return (`Sorry ${playerChoice} is not a valid choice.`)
    }
}

function game(rounds, winCount, loseCount) {
    loseCount = 0;
    winCount = 0;
    rounds = 0;
    for (i = 0; i <= 4; i++) {
        const win = playRound();
        if (winCount < 3 || loseCount < 3 || rounds <= 4) {
            if (win === true) {
                winCount += 1;
                rounds += 1;
                console.log(`You win, ${playRound.playerChoice} beats ${playRound.computerChoice}.`)
            }
            else if (win === false) {
                loseCount += 1;
                rounds += 1;
                console.log(`You lose, ${playRound.computerChoice} beats ${playRound.playerChoice}.`)
            }
            else {
                console.log(win);
            }
        }
        else if (winCount === 3 || loseCount < 3 || rounds <= 4) {
            return ('Congratulations, you win the best of 5!')
        }
        else if (winCount < 3 || loseCount === 3 || rounds <= 4) {
            return ('Sorry, you lose the best of 5.')
        }
    }
}
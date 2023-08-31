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
            
            console.log(`You win, ${playerChoice} beats ${computerChoice}.`)
            return (win = true);
        }
        else if (playerChoice === computerChoice) {
            console.log('Tie!');
            return (win = null);
        }
        else {
            console.log(`You lose, ${computerChoice} beats ${playerChoice}.`)
            return (win = false);
        }
    }
    else {
        console.log(`Sorry ${playerChoice} is not a valid choice.`)
        return (win = null);
    }
}

function rounds() {
    playRound();
    if (win === true) {
        return (i++);
    }
    else if (win === false) {
        return (j++);
    }
}

function game() {
    for (i = 0, j = 0; i < 3, j < 3;) {
        rounds();
        if (i === 3) {
            console.log('Congratulations, you win the best of 5!');
            break;
        }
        else if (j === 3) {
            console.log('Game over, you lose the best of 5.');
            break;
        }
    }
}

game();
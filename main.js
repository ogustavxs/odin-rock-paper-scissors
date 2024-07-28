const optionsMenu = document.querySelector(".options")
const optionsRobotRock = document.querySelector('.robot-rock')
const optionsRobotPaper = document.querySelector('.robot-paper')
const optionsRobotScissors = document.querySelector('.robot-scissors')
const playerPoints = document.querySelector('#player-points')
const robotPoints = document.querySelector('#robot-points')
const resultText = document.querySelector(".result")

// Define as escolhas padrões possiveis para a máquina e a pontuação inicial dela e do usuario
const choices = ["R", "P", "S"] 
let humanScore = 0
let computerScore = 0

// Uma arrow function pra retornar uma escolha aleatória do computador
const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
}

const displayRobotChoice = (robotchoice) => {
    optionsRobotRock.style.display = "none"
    optionsRobotPaper.style.display = 'none'
    optionsRobotScissors.style.display = 'none'
    switch(robotchoice) {
        case 'R':
            optionsRobotRock.style.display = "block"
            break
        case 'P':
            optionsRobotPaper.style.display = 'block'
            break
        case "S":
            optionsRobotScissors.style.display = 'block'
            break
    }
}

function playgame() {
    if (humanScore >= 10) {
        resultText.style.color = 'red'
        resultText.textContent = `You won: ${humanScore} x ${computerScore}`
        computerScore = 0
        humanScore = 0
        playerPoints.textContent = humanScore
        robotPoints.textContent = computerScore
    } else if (computerScore >= 10) {
        resultText.style.color = 'red'
        resultText.textContent = `You lost: ${humanScore} x ${computerScore}`
        computerScore = 0
        humanScore = 0
        playerPoints.textContent = humanScore
        robotPoints.textContent = computerScore
    }
}

const playRound = (choice, computerChoice) => {
    displayRobotChoice(computerChoice)
    if (choice === computerChoice) {
        resultText.textContent = 'You two tied'
    } else if (choice === "R" && computerChoice === "P") {
        resultText.textContent = 'Paper rolls stone! You lost'
        computerScore++
        robotPoints.textContent = computerScore
    } else if (choice === "P" && computerChoice === "R") {
        resultText.textContent = 'Paper rolls stone! You win'
        humanScore++
        playerPoints.textContent = humanScore
    } else if (choice === "R" && computerChoice === "S") {
        resultText.textContent = 'Rock destroys scissors! You win'
        humanScore++
        playerPoints.textContent = humanScore
    } else if (choice === "S" && computerChoice === "R") {
        resultText.textContent = 'Rock destroys scissors! You lost'
        computerScore++
        robotPoints.textContent = computerScore
    } else if (choice === "P" && computerChoice === "S") {
        resultText.textContent = "Scissors cut paper! You lost"
        computerScore++
        robotPoints.textContent = computerScore
    } else if (choice === "S" && computerChoice === "P") {
        resultText.textContent = "Scissors cut paper! You win"
        humanScore++
        playerPoints.textContent = humanScore
    }
    playgame()
}

optionsMenu.addEventListener('click', (e) => {
    const target = e.target
    resultText.style.color = 'black'
    switch(target.className) {
        case "rock":
            playRound('R', getComputerChoice())
            break;
        case "paper":
            playRound('P', getComputerChoice())
            break;
        case "scissors":
            playRound("S", getComputerChoice())
            break;
    }
})
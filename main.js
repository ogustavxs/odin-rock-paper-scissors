// Define as escolhas padrões possiveis para a máquina e a pontuação inicial dela e do usuario
const choices = ["R", "P", "S"] 
let humanScore = 0
let computerScore = 0

// Uma arrow function pra retornar uma escolha aleatória do computador
const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
}


// Uma arrow function pra receber e verificar a escolha do player
const getHumanChoice = () => {
    let humanChoice = prompt('Rock(R), Paper(P) or Scissors(S)')

    // Caso a escolha for incorreta ele entra em um loop
    while (humanChoice !== "R" && humanChoice !== "P" && humanChoice !== "S") {
        humanChoice = prompt('Rock(R), Paper(P) or Scissors(S)')
    }
    return humanChoice
}


// Uma arrow function para comparar as respostas do computador e usuário e devolver uma mensagem na tela, adicionando +1 ponto ao vencedor da rodada
const playRound = (choice, computerChoice) => {
    if (choice === computerChoice) {
        alert('You two tied')
    } else if (choice == "R" && computerChoice == "P") {
        alert('Paper rolls stone! You lost')
        computerScore++
    } else if (choice == "P" && computerChoice == "R") {
        alert('Paper rolls stone! You win')
        humanScore++
    } else if (choice == "R" && computerChoice == "S") {
        alert('Rock destroys scissors! You win')
        humanScore++
    } else if (choice == "S" && computerChoice == "R") {
        alert('Rock destroys scissors! You lost')
        computerScore++
    } else if (choice == "P" && computerChoice == "S") {
        alert("Scissors cut paper! You lost")
        computerScore++
    } else if (choice == "S" && computerChoice == "P") {
        alert("Scissors cut paper! You win")
        humanScore++
    }
}

// A função que ativa o jogo com 5 partidas, e devolve um resultado geral
function playgame() {
    // Deixa o jogador em um loop de 5 partidas
    for (let a = 0; a < 5; a++) {
        let choiceHuman = getHumanChoice()
        let choiceComputer = getComputerChoice()
        playRound(choiceHuman, choiceComputer)
    }
    if (humanScore == computerScore) {
        alert(`You two tied: ${humanScore} x ${computerScore}`)
    } else if (humanScore < computerScore) {
        alert(`You lost: ${humanScore} x ${computerScore}`)
    } else if (humanScore > computerScore) {
        alert(`You won: ${humanScore} x ${computerScore}`)
    }
}

// Começa o jogo
alert('Welcome to the Rock, Paper, Scissors game, let start!')
playgame()
const choices = ["R", "P", "S"] 
const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
}

function getHumanChoice() {
    let humanChoice = prompt('Rock(R), Paper(P) or Scissors(S)?')
    console.log(humanChoice, typeof humanChoice)
    if (humanChoice != "R" && humanChoice != "P" && humanChoice != "S") {
        while(humanChoice != "R" && humanChoice != "P" && humanChoice != "S") {
            humanChoice = prompt('Rock(R), Paper(P) or Scissors(S)?')
        }
    } else {
        return humanChoice
    }
}

console.log(getHumanChoice())
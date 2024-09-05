const computerWeapon = "rock"
let winner = ""

//1. Welcome to the game
alert("Welcome to the game!")

//2. What's your name?
const name = prompt(`What's your name?`)
console.log("user name is:", name)

alert(`Nice to meet you ${name.toUpperCase()} let's play!`)

//3. Pick a weapon (with loop to ensure valid input)
let userWeapon = ""
while (userWeapon !== "rock" && userWeapon !== "paper" && userWeapon !== "scissors") {
  userWeapon = prompt(`Pick a weapon: rock, paper, or scissors`).toLowerCase()
  if (userWeapon !== "rock" && userWeapon !== "paper" && userWeapon !== "scissors") {
    alert("Invalid choice! Please pick rock, paper, or scissors.")
  }
}

console.log("user choice:", userWeapon)

//4. Check who is the winner
// here we want to compare userWeapon against computerWeapon
if (computerWeapon === userWeapon) {
  winner = null //tie
} else if (userWeapon === "rock") {
  if (computerWeapon === "paper") {
    winner = "computer" //computer wins with paper against rock
  } else {
    winner = "user" //user wins with rock against scissors
  }
} else if (userWeapon === "scissors") {
  if (computerWeapon === "rock") {
    winner = "computer" //rock beats scissors
  } else {
    winner = "user" //user's scissors beat computer's paper
  }
} else if (userWeapon === "paper") {
  if (computerWeapon === "scissors") {
    winner = "computer" //scissors beat paper
  } else {
    winner = "user" //paper beats rock
  }
}

console.log("Winner:", winner)

//5. Reveal the result to the user
if (winner === null) {
  alert(`It's a tie, no one won! You both picked ${computerWeapon}.`)
} else if (winner === "computer") {
  alert(`Sorry, the computer won with ${computerWeapon} against your ${userWeapon}`)
} else if (winner === "user") {
  alert(`Congratz, you won with ${userWeapon} against the computer's ${computerWeapon}!`)
  //user wins
} else {
  alert("Please pick a valid weapon! Refresh to start over")
  //Something wen't wrong
}
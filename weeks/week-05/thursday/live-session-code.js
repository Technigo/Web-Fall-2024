/** LET'S BUILD ROCK PAPER SCISSORS **/

const computerWeapon = "scissors"
let winner = ""
let userName = ""

//DOM selectors
const messageBox = document.getElementById("message")

//document.getElementsByClassName(".heading")
//Get all elements that has a class name 👆

//4. Reveal the winner
const revealWinner = (userWeapon) => {
  let message = ""
  if (winner === null) {
    message = `It's a tie, no one won! You both picked ${computerWeapon}.`
  } else if (winner === "computer") {
    message = `Sorry, the computer won with ${computerWeapon} against your ${userWeapon}`
  } else { //user as winner is the only thing left
    message = `Congratz, you won with ${userWeapon} against the computer's ${computerWeapon}!`
    //user wins
  }
  // messageBox.innerHTML = ""
  messageBox.innerHTML += `<h2>${message}</h2>`
}

//3. Compare weapons
const compareWeapons = (userWeapon) => {
  console.log(`The computer weapon is ${computerWeapon} and the user weapon is ${userWeapon}`)

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
  } else { //paper is the only thing left
    if (computerWeapon === "scissors") {
      winner = "computer" //scissors beat paper
    } else {
      winner = "user" //paper beats rock
    }
  }

  console.log("Winner: ", winner)
  revealWinner(userWeapon)
}

//2. Ask for weapon
const askUserForWeapon = () => {
  messageBox.innerHTML += `
    <p>Hi ${userName}</p>
    <p>What weapon do you want to pick?</p>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
  `

  const rockButton = document.getElementById("rock")
  const paperButton = document.getElementById("paper")
  const scissorsButton = document.getElementById("scissors")

  rockButton.addEventListener("click", () => {
    compareWeapons("rock")
  })

  paperButton.addEventListener("click", () => {
    compareWeapons("paper")
  })

  scissorsButton.addEventListener("click", () => {
    compareWeapons("scissors")
  })
}

//1. Welcome to the game
const greetUser = () => {
  messageBox.innerHTML = `
    <p>Welcome to the game!</p>
    <p>What's your name??</p>
    <input id="userNameInput" />
    <button id="sendButton">Send</button>
  `

  const sendButton = document.getElementById("sendButton")
  const nameInput = document.getElementById("userNameInput")

  sendButton.addEventListener("click", () => {
    userName = nameInput.value
    setTimeout(askUserForWeapon, 1000)
  })
}

setTimeout(greetUser, 1000)

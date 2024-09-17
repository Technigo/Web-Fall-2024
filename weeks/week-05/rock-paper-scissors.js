/** LET'S BUILD ROCK PAPER SCISSORS **/


const computerWeapon = "scissors"
let winner = ""

// "shortcuts"/variables to the DOM elements we will modify
const heading = document.getElementById('heading')
const weapons = document.querySelector('.weapons')
const rock = document.getElementById('rockWrapper')


const handleClick = () => {
  console.log('click lcik')
}

// element.addEventListener('event to listen to', function to call)
rock.addEventListener('click', handleClick)

//1. Welcome and Whats your name?
// const name = prompt("Welcome, what's your name?")
console.log("user name is:", name)

heading.innerText =
  `Hello ${name}. 
  Welcome to the game of Rock, Paper, Scissors!`

// alert(`Nice to meet you ${name.toUpperCase()} let's play!`)
weapons.style.background = 'red';
/*
//3. Pick a weapon (with loop to ensure valid input)
let userWeapon = ""
while (userWeapon !== "rock" && userWeapon !== "paper" && userWeapon !== "scissors") {
  userWeapon = prompt("Pick a weapon: rock, paper or scissors")
  if (userWeapon !== "rock" && userWeapon !== "paper" && userWeapon !== "scissors") {
    alert("Invalid choice, please pick rock, paper or scissors")
  }
}

userWeapon = userWeapon.toLowerCase()
console.log("user choice", userWeapon)

// Bonus: Make sure that the user picks a correct weapon, compare that and prompt the user again if needed.
if (userWeapon !== "rock" && userWeapon !== "paper" && userWeapon !== "scissors") {
  alert("Please write a valid weapon. Pick from paper, rock, scissors. Refresh to restart!")
} else {
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
  } else {
    alert("Something is wrong, please refresh")
  }

  console.log("Winner: ", winner)

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
}
*/
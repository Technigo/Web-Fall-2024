/*Randomizer*/

// Generate a random number between 0 and 2
const randomNum = Math.floor(Math.random() * 3)
console.log(randomNum)

// Let's break it down

// Math.random() generates a number between 0 and 1.
console.log(Math.random())

// Math.random() * 3 gives a range between 0 and just under 3.
console.log(Math.random() * 3)

// Math.floor() rounds down to whole number.
console.log(Math.floor(2.271872819))

// Assign the computer's weapon based on the random number
let computerWeapon
if (randomNum === 0) {
  computerWeapon = 'rock'
} else if (randomNum === 1) {
  computerWeapon = 'paper'
} else {
  computerWeapon = 'scissors'
}

console.log('Computer choice:', computerWeapon)

console.log('hello world')

const username = 'poppy' //string
const age = 38 //number
const isHungry = false //boolean

console.log(`hello ` + username + ' how are you today?')

console.log(`hello ${username} how are you today?`)

console.log(typeof username)
console.log(typeof age)
console.log(typeof isHungry)


let fruit = 'apple'

const veggie = 'carrot'

console.log(fruit)
console.log(veggie)

fruit = 'banana'
console.log(fruit)

// veggie = 'tomato'  <-- This gives an error!



// Create a variable with a string value
// const fruit = ‘banana’

// Find a method to reverse the string -> ’ananab’
const reversedFruit = fruit.split("").reverse().join("");
// turn it into an array ['b', 'a', 'n', 'a', 'n', 'a']
// reverse the array ['a', 'n', 'a', 'n', 'a', 'b']
// turn it into a string again 'ananab'


// Find a method to find out how long the string is -> 6
const lengthOfFruit = fruit.length
console.log(`This word is ${lengthOfFruit} characters long`)

// Find a method to change the string to lower case -> ‘banana’
const lowerFruit = fruit.toLowerCase()
console.log(lowerFruit)

// Find a method to change the string to upper case -> ‘banana’
const upperFruit = fruit.toUpperCase()
console.log(upperFruit)

// Find a method to get the first letter of the string -> ‘b’
const firstLetterFruit = fruit[0]
console.log('first letter is:', firstLetterFruit)

// Find a method to find out if the string contains of a specific letter, for example 
//       ‘a’ -> true 
//       ‘c’ -> false
const includesA = fruit.includes('a')
console.log('does it include a?', includesA)
const includesC = fruit.includes('c')
console.log('does it include c?', includesC)


/** LET'S BUILD ROCK PAPER SCISSORS **/

// const name = ''
// const userWeapon = ''
const computerWeapon = 'rock'
const winner = ''

//1. Welcome to the game
alert('Welcome to the game!')


//2. Whats your name?
const name = prompt(`What's your name?`)
console.log('user name is:', name)

alert(`Nice to meet you ${name.toUpperCase()} let's play!`)


//3. Pick a weapon
const userWeapon = prompt(`Let's pick a weapon`)
console.log('user choice', userWeapon)

//4. Check who is the winner
// here we want to compare userWeapon against computerWeapon


//5. Reveal the result to the user

// Bonus: Make sure that the user picks a correct weapon, compare that and prompt the user again if needed.
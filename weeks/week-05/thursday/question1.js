//Start code
if (foodChoice === '1') {
  const pizzaType = prompt('Select a Pizza type! \ Enter a number:\ 1 - Margherita 2 - Pepperoni 3 - Hawaiian')

  if (pizzaType === '1') {
    alert('You have chosen Margherita!')
    selectedFoodType = 'Margherita'
  } else if (pizzaType === '2') {
    alert('You have chosen Pepperoni!')
    selectedFoodType = Pepperoni
  }
  else if (pizzaType === '3') {
    alert('You have chosen Hawaiian!')
    selectedFoodType = 'Hawaiian'
  }
  else {
    alert('Invalid choice. Please select a number between 1 and 3.')
  }
}

//A little more DRY
if (foodChoice === '1') {
  const pizzaType = prompt('Select a Pizza type! \ Enter a number:\ 1 - Margherita 2 - Pepperoni 3 - Hawaiian')

  if (pizzaType === '1' || pizzaType === '2' || pizzaType === '3') {
    if (pizzaType === '1') {
      selectedFoodType = 'Margherita'
    } else if (pizzaType === '2') {
      selectedFoodType = 'Pepperoni'
    } else {
      selectedFoodType = 'Hawaiian'
    }
    alert(`You've chosen ${selectedFoodType}`)
  } else {
    alert('Invalid choice. Please select a number between 1 and 3.')
  }
}

//Even more DRY with array
if (foodChoice === '1') {
  const pizzaTypes = ['Margherita', 'Pepperoni', 'Hawaiian']
  const pizzaType = parseInt(prompt('Select a Pizza type! \ Enter a number:\ 1 - Margherita 2 - Pepperoni 3 - Hawaiian'))

  //Check if it's a number between 1 and 3 (length of the array)
  if (pizzaType >= 1 && pizzaType <= pizzaTypes.length) {
    selectedFoodType = pizzaTypes[pizzaType - 1] //Minus 1 because array's indexes start at 0
    alert(`You've chosen ${selectedFoodType}`)
  } else {
    alert('Invalid choice. Please select a number between 1 and 3.')
  }
}
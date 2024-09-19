const DOGS = [
  {
    name: 'Alfons',
    img: 'assets/dog1.jpg',
    fur: 'brown',
    puppy: false,
  },
  {
    name: 'Bingo',
    img: 'assets/dog2.jpg',
    fur: 'brown',
    puppy: false,
  },
  {
    name: 'Cecilia',
    img: 'assets/dog3.jpg',
    fur: 'mixed',
    puppy: true,
  },
  {
    name: 'Doggo',
    img: 'assets/dog4.jpg',
    fur: 'black',
    puppy: true,
  },
  {
    name: 'Eddie',
    img: 'assets/dog5.jpg',
    fur: 'grey',
    puppy: true,
  },
  {
    name: 'Flora',
    img: 'assets/dog6.jpg',
    fur: 'mixed',
    puppy: true,
  },
  {
    name: 'Gullan',
    img: 'assets/dog7.jpg',
    fur: 'black',
    puppy: false,
  }
]

const favouriteDogs = []

const container = document.getElementById('container')
const favourites = document.getElementById('favourites')
const filterDropdown = document.getElementById('filterDropdown')

const getDogs = (dogsArray) => {
  container.innerHTML = ''
  dogsArray.forEach(dog => {
    container.innerHTML += `
      <div class="card">
        <p>${dog.name}</p>
        <img src=${dog.img} alt=${dog.name} />
        <p>${dog.puppy ? 'puppy' : ''}</p>
        <button id="faveBtn" onclick="toggleFavourite('${dog.name}')">
          ${favouriteDogs.includes(dog.name) ? 'remove from' : 'add to'} favourites
        </button>
      </div>`
  })
}

const filterDogs = () => {
  // 1. get the value from the select
  const value = filterDropdown.value
  console.log('the user selected:', value)

  if (value === 'all') {
    // get all the dogs
    getDogs(DOGS)
  } else {
    // filter the dogs
    const filteredList = DOGS.filter(dog => dog.fur === value)
    console.log('filtered list:', filteredList)
    getDogs(filteredList)
  }
}

const toggleFavourite = (faveDog) => {
  //1. check if the dog is already in the fave list
  const dogIndex = favouriteDogs.indexOf(faveDog)
  console.log('index is?', dogIndex)

  // index -1 indicates that the dog is not in the array.
  if (dogIndex === -1) {
    // we want to add to the faves list.
    favouriteDogs.push(faveDog)

  } else {
    // we want to remove from the list
    // use dogIndex to find the position of the dog
    // use splice method to remove   splice(start, deleteCount)
    favouriteDogs.splice(dogIndex, 1)

  }

  console.table(favouriteDogs)
  getFavouriteDogs()
}

const getFavouriteDogs = () => {
  favourites.innerHTML = ''
  favouriteDogs.forEach(dog => {
    favourites.innerHTML += `
      <p>${dog}</p>
    `
  })
}

filterDropdown.addEventListener('change', filterDogs)

getDogs(DOGS)
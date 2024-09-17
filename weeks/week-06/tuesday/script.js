const DOGS = [
  {
    name: 'Alfons',
    img: 'assets/dog1.jpg',
    fur: 'brown',
    puppy: false
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


const container = document.getElementById('container')

const getDogs = (dogArray) => {
  dogArray.forEach(dog => {
    container.innerHTML += `
      <div class="card">
        <p>${dog.name}</p>
        <img src=${dog.img} alt=${dog.name} />
        <p>${dog.puppy ? 'puppy' : ''}</p>
      </div>`
  })
}

//console.log(DOGS)
//console.table(DOGS)


getDogs(DOGS)

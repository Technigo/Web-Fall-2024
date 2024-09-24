// console.log("🌻 Script connected")
// https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=1b5c3473-b930-4d32-a959-4b6be1c72f42
// base url + word + api_key

// True constants
const API_KEY = "1b5c3473-b930-4d32-a959-4b6be1c72f42"
const BASE_URL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json"

// let because it might change if we add a user input or prompt
let word = "happy"

//Concatenated string where all parts are put together
const URL = `${BASE_URL}/${word}?key=${API_KEY}`

console.log(URL)

//DOM selectors
const wordTitle = document.getElementById("word")
const type = document.getElementById("wordType")
const explanation = document.getElementById("explanation")
const synonymsList = document.getElementById("synonyms")

// Word is available in global scope, so this innerText change can be done here
// but could also be moved to updateHTML function to group it with the rest to
// get cleaner code 👀
wordTitle.innerText = word

const updateHTML = (data) => {
  const wordType = data[0].fl
  const shortdef = data[0].shortdef[0]
  const synonyms = data[0].meta.syns[0]

  type.innerText = wordType
  explanation.innerText = shortdef

  // For each synonym, we're creating a new list item
  synonyms.forEach(synonym => {
    synonymsList.innerHTML += `<li>${synonym}</li>`
  })

  // Explanation of forEach method:
  // myArray.forEach(eachElementInTheArray => {
  //   console.log(eachElementInTheArray)
  // })
}

// fetch using .then approach
// This approach sets off a chain of events. First, it fetches data.
// When the data arrives, it processes it(converts to JSON), and then
// it does something with that data (pass it along to updateHTML function).

const fetchData = () => {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      // Invoke updateHTML function and pass along data
      updateHTML(data)
      // Crazily deeply nested synonyms list 👇😅
      // console.log(data[0].def[0].sseq[0][0][1].syn_list[0])
    })
}

// fetchData()

// fetch using async/await approach
// This version does things in a more step-by-step manner. It waits(await)
// for each step to complete before moving on to the next. We await the fetch,
// we await the formatting to JSON before we do something with the data
// (pass it along to updateHTML function)
const fetchDataAsync = async () => {
  const response = await fetch(URL)
  const data = await response.json()

  // Invoke updateHTML function and pass along data
  updateHTML(data)
}

fetchDataAsync()

const API_KEY = "1b5c3473-b930-4d32-a959-4b6be1c72f42"
const BASE_URL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json"

let word = "conundrum"
const URL = `${BASE_URL}/${word}?key=${API_KEY}`

export const fetchWord = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  return data
}

//Example of that you can have multiple fetch functions in one file

// export const fetchAnotherWord = () => {

// }
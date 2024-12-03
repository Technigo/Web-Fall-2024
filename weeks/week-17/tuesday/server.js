import cors from "cors"
import express from "express"

import boardgames from "./data/boardgames.json"

const port = process.env.PORT || 9000
const app = express()

app.use(cors())
app.use(express.json())

console.log("Hello from the server file")

app.get("/", (req, res) => {
  //documentation
  //Express List Endpoints
  res.send("Hello Technigo!")
})

app.get("/test", (req, res) => {
  res.send("Hello from test!")
  console.log("Hello from test")
})

app.get("/boardgames", (req, res) => {
  const category = req.query.category
  console.log(category)

  const filteredBoardgames = boardgames.filter(game => game.category.toLowerCase() === category)
  
  res.json(filteredBoardgames)
})

app.get("/boardgames/:id", (req, res) => {
  const id = req.params.id

  const boardgame = boardgames.find(game => game.id === +id)
  if (boardgame) {
    res.status(200).json(boardgame)
  } else {
    res.status(404).send("No game found with that ID")
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

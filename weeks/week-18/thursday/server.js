import cors from "cors"
import express from "express"
import mongoose from "mongoose"

import data from "./data/boardgames.json"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/boardgames-thursday-session"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise



const Boardgame = mongoose.model("Boardgame", {
  name: String,
  id: Number,
  category: String,
  minPlayers: Number,
  maxPlayers: Number,
  averagePlaytime: Number,
  description: String
})

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Middleware to check database status
app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    res.send('all good in the hood')
    next();
  } else {
    res.status(503).json({ error: "Service unavailable" });
  }
});

if (process.env.RESET_DB) {
  const seedDatabase = async () => {
    await Boardgame.deleteMany({})
    data.forEach(boardgame => {
      new Boardgame(boardgame).save()
    })
  }
  seedDatabase()
}

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!")
})

// Get all boardgames 
app.get("/boardgames", async (req, res) => {
  const boardgames = await Boardgame.find()
  res.json(boardgames)
})

// Get one boardgame based on id
app.get("/boardgames/:id", async (req, res) => {
  const { id } = req.params
  const boardgame = await Boardgame.findById(id).exec()
  
  if (boardgame) {
    res.json(boardgame)
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

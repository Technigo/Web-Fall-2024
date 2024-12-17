import cors from "cors"
import express from "express"
import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/tuesday-events-live-session"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

const port = process.env.PORT || 2080
const app = express()

app.use(cors())
app.use(express.json())

const { Schema, model } = mongoose

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 4
  },
  date: {
    type: Date,
    required: true
  },
  isVirtual: {
    type: Boolean,
    default: false
  },
  typeOfEvent: {
    type: String,
    enum: ["tech", "music", "other"],
    default: "other"
  }
})

const Event = model("Event", eventSchema)

app.get("/", (req, res) => {
  res.send("Hello Technigo!")
})

app.get("/events", async (req, res) => {
  const events = await Event.find()
  res.json(events)
})

console.log(new Date)

app.post("/events", async (req, res) => {
  const { name, date, isVirtual, typeOfEvent } = req.body

  try {
    const event = await new Event({ name, date, isVirtual, typeOfEvent }).save()

    res.status(201).json({
      success: true,
      response: event,
      message: "Event is created"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Event couldn't be created"
    })
  }
})

app.patch("/events/:id", async (req, res) => {
  const { id } = req.params
  const { newName } = req.body

  try {
    const event = await Event.findByIdAndUpdate(id, { name: newName }, { new: true, runValidators: true })

    res.status(200).json({
      success: true,
      response: event,
      message: `Event name updated to ${newName}`
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Event name could not be updated"
    })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

import cors from "cors"
import express from "express"
import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/tuesday-reservations-technigo"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

const { Schema, model } = mongoose

const reservationSchema = new Schema({
  guestName: {
    type: String,
    required: true,
    minlength: 4
  },
  guestPhone: {
    type: String,
    minlength: 10,
    required: true
  },
  partySize: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  date: {
    type: Date,
    required: true
  },
  isConfirmed: {
    type: Boolean,
    default: false
  }
})

const Reservation = model("Reservation", reservationSchema)

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!")
})

app.get("/reservations", async (req, res) => {
  const reservations = await Reservation.find()
  res.json(reservations)
})

console.log(new Date)

app.post("/reservations", async (req, res) => {
  const { guestName, guestPhone, partySize, date } = req.body

  try {
    const reservation = await new Reservation({ guestName, guestPhone, partySize, date }).save()

    res.status(201).json({
      success: true,
      response: reservation,
      message: "Reservation was created, we'll get back to you to confirm"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Reservation couldn't be created"
    })
  }
})

app.patch("/reservations/:id", async (req, res) => {
  const { id } = req.params

  const { isConfirmed } = req.body

  try {
    const reservation = await Reservation.findByIdAndUpdate(id, { isConfirmed }, { new: true, runValidators: true })
    res.status(200).json({
      success: true,
      response: reservation,
      message: `${reservation.isConfirmed ? "Confirmed" : "Not confirmed"}`
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Couldn't change reservation confirmation status"
    })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

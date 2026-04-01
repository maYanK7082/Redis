const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

// user router

const userRouter = require("./routes/user.routes")
const channelRouter = require("./routes/channel.route");
const videoRouter =require("./routes/video.routes")

const port = process.env.PORT || 4000

const app = express();
// parsing

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("DB is connected")
}).catch((err) => console.log("err", err.message))

// endpoints

// user
app.use("/api", userRouter)

// channel
app.use("/api/channel", channelRouter)

app.get("/", (req, res) => {
    return res.status(200).json({message : "Docker is working fine"})
})

// video
app.use("/api/video", videoRouter)

app.listen(4000, () => {
    console.log("server is running on port 4000")
})

//.  http://localhost:4000/api/create-user



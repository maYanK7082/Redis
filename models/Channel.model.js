const mongoose = require("mongoose");

// channel schema
const channelSchema = new mongoose.Schema({
    ownerId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    },

    channelName : {
        type : String,
    },

    about : {
        type : String,
    },
}, {
    timestamps : true
})

//channel model

const Channel = mongoose.model("Channel", channelSchema)
module.exports = Channel
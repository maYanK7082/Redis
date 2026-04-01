const mongoose = require("mongoose");
// video schema 
const videoSchema = new mongoose.Schema({
    title : {
        type : String
    },

    description : {
        type : String
    },
 
    channelId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Channel"
    }
}, {
    timestamps : true
})

// video model

const Video = mongoose.model("Video", videoSchema)
module.exports = Video
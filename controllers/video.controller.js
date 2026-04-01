const Video = require("../models/Video.model");
const VideoStats = require("../models/VideoStats");

// controller to insert video and video stats

const publishVideo = async(req, res) => {
    try{
      const {title, description, channelId, category, tags} = req.body;

      //create video

      const video = new Video({
        title, description, channelId
      })

      await video.save();

      // create stats

      const stats = new VideoStats({
        category, tags, video_id : video._id
      })

      await stats.save()

      return res.status(201).json({message : "video and video stats inserted successfully", 
        video, stats
      })
    }catch(err){
        console.log("err", err)
    }
}

// exporting the controller

module.exports = {publishVideo}

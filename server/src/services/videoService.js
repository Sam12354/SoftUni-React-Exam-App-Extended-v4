import Video from "../models/Video.js"
import fs from 'fs'

export const createVideo = async (userId, videoData, title) => {

    const existingVideo = await Video.findOne({ user: userId, video: videoData, title: title })

    if (existingVideo) {
        throw new Error("Duplicated videos");
    }

    return Video.create({ user: userId, video: videoData, title: title })

}

export const getVideos = async () => {
    return Video.find({});
    // get all
}

export const deleteVideo = async (itemId) => {
    const video = await Video.findByIdAndDelete(itemId);

    if (video) {
        fs.unlink(video.video, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }   
     
    return video;
}

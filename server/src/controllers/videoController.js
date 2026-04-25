import { createVideo, deleteVideo, getVideos } from "../services/videoService.js"
import { Router } from "express";
import multer from "multer"
import fs from 'fs'

const upload = multer({ dest: 'uploads/' })

const videoController = Router();

videoController.get('/', async (req, res) => {
    
    const userId = req.user._id; 

    try {
        const videos = await getVideos(userId)
        res.json(videos)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

videoController.post('/', upload.single('video'), async (req, res) => {
    
    const userId = req.user._id; 
    
    const title = req.body.title
    

    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const videoData = req.file.path;
    
    try {
        const createdVideo = await createVideo(userId, videoData, title)
        
        res.json(createdVideo)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

})

videoController.delete('/personalCatalog/:videoId', async (req, res) => {
    const videoId = req.params.videoId; 

    try {
        const video = await deleteVideo(videoId)
        res.json(video)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

})

export default videoController
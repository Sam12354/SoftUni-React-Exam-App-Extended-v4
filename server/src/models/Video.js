import { Schema, model, Types } from 'mongoose'

const videoSchema = new Schema ({

    video: {
        type: String,
        required: true
    },

    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },

    title: {
        type: String,
        minLength: [5, 'Title must be at least 5 characters long']
    },

})

const Video = model('Video', videoSchema)

export default Video
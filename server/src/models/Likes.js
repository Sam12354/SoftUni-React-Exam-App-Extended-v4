import { Schema, model, Types } from 'mongoose'

const likesSchema = new Schema({

    user: {
        type: Types.ObjectId,
        ref: 'User',
    },

    item: {
        type: Types.ObjectId,
        ref: 'Item',
    },

})

const Like = model('Like', likesSchema)

export default Like
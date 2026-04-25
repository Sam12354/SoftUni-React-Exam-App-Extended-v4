import Like from "../models/Likes.js"


export const likeItem = async (userId, itemId) => {
    console.log(userId);
    
    const hasLiked = await Like.findOne({ user: userId, item: itemId})
    console.log("hasLiked:", hasLiked);
    if(hasLiked){
        throw new Error('User has already liked this video')
    }

    return Like.create({user: userId, item: itemId})

}

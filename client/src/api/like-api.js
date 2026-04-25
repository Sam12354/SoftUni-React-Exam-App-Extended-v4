import requester from "./requester.js";

const BASE_URL = "http://localhost:7777";

export const likeItem = async (itemId) => {

    const likeData = requester.post(`${BASE_URL}/like/${itemId}`) 

    return likeData
}
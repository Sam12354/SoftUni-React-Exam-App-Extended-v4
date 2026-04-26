import requester from "./requester.js";

const BASE_URL = "https://softuni-react-exam-app-extended-v4.onrender.com";

export const likeItem = async (itemId) => {

    const likeData = requester.post(`${BASE_URL}/like/${itemId}`) 

    return likeData
}
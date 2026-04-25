import requester from "./requester.js";

const BASE_URL = "http://localhost:7777/comment";

export interface Comment {
    itemId: string;
    text: string;
}

export const getComments = async (itemId: string) => {
    return requester.get(`${BASE_URL}/item/${itemId}`);
};

export const createComment = async (itemId: string, text: string) => {
    const payLoad: Comment = { itemId, text }
    return requester.post(`${BASE_URL}/item/${itemId}/create`, payLoad);
    // return requester.post(`${BASE_URL}/item/${itemId}/create`, { text }, payLoad);
    // ne mi trqbva da pra6tam i text za6toto v peyload si go ima text ve4e
};
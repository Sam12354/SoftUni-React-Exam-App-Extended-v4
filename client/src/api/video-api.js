import requester from "./requester.js";

const BASE_URL = "http://localhost:7777";

export const getAllVideos = async () => {
    const result = await requester.get(`${BASE_URL}/video`);
    return result
}

export const createVideo = async (formData) => {
    const response = await fetch('http://localhost:7777/video', {
        method: 'POST',
        body: formData,   // FormData sets the correct multipart/form-data headers
        credentials: 'include'
    });

    if (!response.ok) {
        const error = await response.json();
        throw error;
    }

    return response.json();
};

export const removeVideo = async (videoId) => {
    
    return await requester.delete(`${BASE_URL}/video/personalCatalog/${videoId}`)

}
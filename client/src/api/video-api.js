import requester from "./requester.js";

const BASE_URL = "https://softuni-react-exam-app-extended-v4.onrender.com";

export const getAllVideos = async () => {
    const result = await requester.get(`${BASE_URL}/video`);
    return result
}

export const createVideo = async (formData) => {
    const response = await fetch('https://softuni-react-exam-app-extended-v4.onrender.com/video', {
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
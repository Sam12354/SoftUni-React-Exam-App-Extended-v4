import requester from "./requester.js";

const BASE_URL = "https://softuni-react-exam-app-extended-v4.onrender.com/review";

export interface Review {
	itemId: string;
	stars: number;
}

export const getReviews = async (itemId: string) => {
	return requester.get(`${BASE_URL}/item/${itemId}`);
};

export const getAverageRating = async (itemId: string) => {

	return requester.get(`${BASE_URL}/item/${itemId}/average`);
};

// for a GET request you don’t send a payload in the body, so the interface isn’t needed—only query parameters or the URL matter.

export const createReview = async (itemId: string, stars: number) => {
	const payLoad: Review = { itemId, stars }
	return requester.post(`${BASE_URL}/item/${itemId}/create`, payLoad);
};

export const getUserReview = async (itemId: string) => {
	return requester.get(`${BASE_URL}/item/${itemId}/user`);
};
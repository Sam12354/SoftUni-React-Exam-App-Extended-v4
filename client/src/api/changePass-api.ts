import requester from './requester.js';
const BASE_URL = 'https://softuni-react-exam-app-extended-v4.onrender.com';

export interface Password {
    oldPassword: string;
    newPassword: string;
}

export async function changePassword(oldPassword: string, newPassword: string) {
    const payload: Password = { oldPassword, newPassword };
    return requester.put(`${BASE_URL}/changePassword`, payload);
}
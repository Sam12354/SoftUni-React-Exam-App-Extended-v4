import requester from './requester.js';
const BASE_URL = 'http://localhost:7777';

export interface Password {
    oldPassword: string;
    newPassword: string;
}

export async function changePassword(oldPassword: string, newPassword: string) {
    const payload: Password = { oldPassword, newPassword };
    return requester.put(`${BASE_URL}/changePassword`, payload);
}
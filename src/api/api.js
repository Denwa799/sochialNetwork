import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ab78199f-9a9b-4f99-9c0a-21018325c29e'
    }

});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow: (id) => {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow: (id) => {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
}
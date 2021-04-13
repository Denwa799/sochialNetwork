import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b4a3641d-0496-4bed-ba0a-c5228dd5b256'
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
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status})
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
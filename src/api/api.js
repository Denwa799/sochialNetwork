import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd80d9c66-418f-4d5d-bfa6-c778931413d4'
    }

});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

export const followUnfollowAPI = {
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
    setUsers: (userId) => {
        return instance.get(userId)
            .then(response => {
                return response.data;
            });
    }
}
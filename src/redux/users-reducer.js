const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://sun9-44.userapi.com/impg/8hVlJ11E9S1A1y0jI8QIPZGMII5zBcQc6jmsRg/1mOWIsaxHcU.jpg?size=1620x2160&quality=96&proxy=1&sign=eaecb4fe19e3261cd716c329938d300d&type=album',
            followed: true,
            fullName: 'Nikita',
            status: 'Denwa',
            location: {city: 'Sochi', country: 'Russia'},
        },
        {
            id: 2,
            photoUrl: 'https://segaretro.org/images/b/b1/BLEACH_3rd_Ichigo_Artwork_30.06.09.JPG',
            followed: false,
            fullName: 'Ichigo',
            status: 'Bankai',
            location: {city: 'Karakura', country: 'Japan'},
        },
        {
            id: 3,
            photoUrl: 'https://i.pinimg.com/736x/91/c2/ec/91c2eca7be22bd97b337db48f88680eb.jpg',
            followed: true,
            fullName: 'Madara',
            status: 'Rinnegan',
            location: {city: 'Konoha', country: 'Fire'},
        },
        {
            id: 4,
            photoUrl: 'https://sun9-70.userapi.com/impg/PwcI47TTLuiaMmGt9_4MlvMQ7-9MwCvxq2C92Q/IatbXhqLKUw.jpg?size=1400x1800&quality=96&proxy=1&sign=55d5901f59f65ce2e3c5b9695ceaa0fd&type=album',
            followed: true,
            fullName: 'Aizen',
            status: 'Kami',
            location: {city: 'Gotei13', country: 'Soul society'},
        },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;
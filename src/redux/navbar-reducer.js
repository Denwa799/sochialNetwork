let initialState = {
    friends: [
        {
            id: 1,
            name: 'Aizen',
            img: 'https://sun9-70.userapi.com/impg/PwcI47TTLuiaMmGt9_4MlvMQ7-9MwCvxq2C92Q/IatbXhqLKUw.jpg?size=1400x1800&quality=96&proxy=1&sign=55d5901f59f65ce2e3c5b9695ceaa0fd&type=album'
        },
        {id: 2, name: 'Madara', img: 'https://i.pinimg.com/736x/91/c2/ec/91c2eca7be22bd97b337db48f88680eb.jpg'},
        {
            id: 3,
            name: 'Denwa',
            img: 'https://sun9-26.userapi.com/impg/BC7X7pAMA9P0TNqNz1gkLNC-fQxPpjZKjTgKrA/i2bqm2aFJC0.jpg?size=1080x1080&quality=96&proxy=1&sign=990fa05d11a2f5121fef053c17dd6d21&type=album'
        },
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;
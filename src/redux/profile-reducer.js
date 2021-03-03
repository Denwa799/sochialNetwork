const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likeCount: '5'},
        {id: 2, message: 'Hello', likeCount: '10'},
        {id: 3, message: 'How are you', likeCount: '11'},
        {id: 4, message: 'I\'m fine', likeCount: '100'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            debugger;
            let newPost = {
                id: '5',
                message: state.newPostText,
                likeCount: '0'
            };
            debugger;
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST, newText: text});

export default profileReducer;
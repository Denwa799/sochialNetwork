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
        case ADD_POST: {
            let newPost = {
                id: '5',
                message: state.newPostText,
                likeCount: '0'
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_POST: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextPostActionCreator = (text) => ({type: UPDATE_POST, newText: text});

export default profileReducer;
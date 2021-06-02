import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hello', likeCount: '5'},
        {id: 2, message: 'Hello', likeCount: '10'},
        {id: 3, message: 'How are you', likeCount: '11'},
        {id: 4, message: 'I\'m fine', likeCount: '100'}
    ],
    profile: null,
    status: ""
};

test('length of post should be incremented', () => {
    let action = addPostActionCreator("Denwa");
    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(5);
});

test('new post message should be corrected', () => {
    let action = addPostActionCreator("Denwa");
    let newState = profileReducer(state,action);

    expect(newState.posts[4].message).toBe("Denwa");
});

test('new post likeCount == 0', () => {
    let action = addPostActionCreator("Denwa");
    let newState = profileReducer(state,action);

    expect(newState.posts[4].likeCount).toBe("0");
});

test(`after deleting shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(4);
});

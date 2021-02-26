import React from "react";
import {addPostActionCreator, updateNewPostTextPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextPostActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profileReducer.posts}
                 newPostText={state.profileReducer.newPostText}/>
    );
}


export default MyPostsContainer;
import React from "react";
import {addPostActionCreator, updateNewPostTextPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextPostActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={state.profileReducer.posts}
                         newPostText={state.profileReducer.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
}


export default MyPostsContainer;
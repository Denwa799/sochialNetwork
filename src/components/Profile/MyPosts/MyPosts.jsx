import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hello', likeCount: '5'},
        {id: 2, message: 'Hello', likeCount: '10'},
        {id: 3, message: 'How are you', likeCount: '11'},
        {id: 4, message: 'I\'m fine', likeCount: '100'}
    ]

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
                <Post message={postData[2].message} likeCount={postData[2].likeCount}/>
                <Post message={postData[3].message} likeCount={postData[3].likeCount}/>
            </div>
        </div>
    );
}


export default MyPosts;
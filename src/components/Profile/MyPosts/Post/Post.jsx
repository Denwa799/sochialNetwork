import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://pbs.twimg.com/profile_images/531172336162979840/8_9Rg01-.jpeg" alt=""/>
            {props.message}
            <div>
                <span>like: </span>{props.likeCount}
            </div>
        </div>
    );
}


export default Post;
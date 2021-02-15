import React from "react";
import classes from './../Navbar.module.css';

const FriendItem = (props) => {

    return (
        <div className={classes.friend}>
            <img src={props.img}/>
            <span>{props.name}</span>
        </div>
    );
}

export default FriendItem;
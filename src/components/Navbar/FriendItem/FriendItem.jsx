import React from "react";
import styles from './../Navbar.module.css';

const FriendItem = (props) => {

    return (
        <div className={styles.friend}>
            <img src={props.img} alt="Friend"/>
            <span>{props.name}</span>
        </div>
    );
}

export default FriendItem;
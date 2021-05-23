import React from 'react';
import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img className={styles.ava} src={props.img} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
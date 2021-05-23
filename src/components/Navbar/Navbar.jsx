import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const Navbar = (props) => {

    let friendsElements = props.friends.map(friend => <FriendItem name={friend.name}
                                                                  key={friend.id}
                                                                  id={friend.id}
                                                                  img={friend.img}/>);

    return (
        <nav className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
            <div className={styles.friends}>
                Friends
                <div className={styles.friendItem}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
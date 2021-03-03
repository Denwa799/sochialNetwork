import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const Navbar = (props) => {

    let friendsElements = props.friends.map(friend => <FriendItem name={friend.name}
                                                                  key={friend.id}
                                                                  id={friend.id}
                                                                  img={friend.img}/>);

    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.friends}>
                Friends
                <div className={classes.friendItem}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
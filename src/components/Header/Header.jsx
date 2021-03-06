import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img
                src="https://yt3.ggpht.com/a/AATXAJxEoDP1y1JtTjvuBlDWyIKK4mEj1Y-6ySjpHolkgQ=s900-c-k-c0xffffffff-no-rj-mo"
                alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
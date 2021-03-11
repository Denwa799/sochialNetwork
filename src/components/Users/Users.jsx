import React from 'react';
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
    if (props.users.length === 0) {

        /*const request = axios.create({
           headers: {'API-KEY': 'dfa41e99-4e71-41f0-8e25-fee54153e12d'}
        });*/

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items);
        });
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}
                             alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;
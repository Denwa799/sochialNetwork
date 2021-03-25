import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {followUnfollowAPI, usersAPI} from "../../api/api";

const Users = (props) => {

    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 10;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}
                             alt=""/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            followUnfollowAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                });

                        }}>Unfollow</button>
                        : <button onClick={() => {
                            followUnfollowAPI.follow(u.id).then(data => {
                                if (data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                            });

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
}

export default Users;